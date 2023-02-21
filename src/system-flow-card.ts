/* eslint-disable no-nested-ternary */
import { HomeAssistant, stateIcon } from "custom-card-helpers";
import { HassEntity } from 'home-assistant-js-websocket';
import { css, html, LitElement, svg, TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { SystemFlowCardConfig } from "./system-flow-card-config.js";
import {
  coerceNumber,
  round,
} from "./utils.js";
import { logError } from "./logging.js";
import { CalculatedElementDef } from "./type.js";

@customElement("system-flow-card")
export class SystemFlowCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: SystemFlowCardConfig;

  @query("#battery-grid-flow") batteryGridFlow?: SVGSVGElement;
  @query("#battery-home-flow") batteryToHomeFlow?: SVGSVGElement;
  @query("#grid-home-flow") gridToHomeFlow?: SVGSVGElement;
  @query("#solar-battery-flow") solarToBatteryFlow?: SVGSVGElement;
  @query("#solar-grid-flow") solarToGridFlow?: SVGSVGElement;
  @query("#solar-home-flow") solarToHomeFlow?: SVGSVGElement;

  setConfig(config: SystemFlowCardConfig): void {
    if (
      !config.elements ||
      (!config.elements.length)
    ) {
      throw new Error(
        "At least one entity must be defined"
      );
    }
    ['top', 'bottom'].forEach(position => {
      if (
        config.elements
          .filter(element => element.position === position)
          .length > 2
      ) {
        throw new Error(
          `Maximum 2 elements allowed in ${position} row.`
        );
      }
    })
    this._config = config;
  }

  public getCardSize(): Promise<number> | number {
    return 3;
  }

  private getEntity = (entityId: string | undefined | null):  HassEntity | undefined => {
    const entity = entityId ? this.hass.states[entityId] : undefined;
    if (!entity || !entity.state) {
      logError(
        `entity "${entityId ?? "Unknown"}" is not available or misconfigured`
      );
      return undefined;
    }

    return entity;
  }

  private getElementEntityId  = (element: CalculatedElementDef): string | undefined =>
    element.value
      ? typeof element.value === 'string'
        ? element.value
        : element.value.toSystem || element.value.fromSystem || undefined
      : undefined;

  private getElementEntity = (element: CalculatedElementDef): HassEntity | undefined =>
    this.getEntity(this.getElementEntityId(element))

  private getElementIconId = (element: CalculatedElementDef): string => {
    if(element.icon) {
      return element.icon
    }

    const entity = this.getElementEntity(element);

    if (!entity)
      return 'mdi:eye';

    return entity ? stateIcon(entity) : 'mdi:eye';
  }

  private getElementColor = (element: CalculatedElementDef): string => {
    if(!element.color) {
      return 'var(--primary-text-color)';
    }
    return element.color;
  }

  private getElementUnit = (element: CalculatedElementDef): string | undefined =>
    element.unit || this.getEntityUnit(this.getElementEntity(element))

  private getEntityUnit = (ent: HassEntity | string | undefined) => {
    const entity = typeof ent === 'string' ? this.getEntity(ent) : ent;

    if(!entity)
      return undefined

    return entity.attributes.unit_of_measurement
  }

  private displayValue = (value, abs: boolean = false, unit: string | null = null, places: number | boolean = false): number | string | undefined => {
    let newValue: string | number = value;
    if(abs) {
      newValue = Math.abs(coerceNumber(newValue))
    }
    if(typeof newValue === 'number' && typeof places === 'number') {
      newValue = round(newValue, places)
    }
    if(unit) {
      newValue = `${newValue} ${unit}`;
    }
    return newValue;
  }    

  private getEntityValue = (ent: HassEntity | string | undefined, abs: boolean = false, showUnit: boolean = false, places: number | boolean = false): number | string | undefined => {
    const entity = typeof ent === 'string' ? this.getEntity(ent) : ent;
    if(!entity)
      return undefined

    const value = entity?.state;
    const unit = showUnit ? this.getEntityUnit(entity) : null;

    return this.displayValue(value, abs, unit, places)
  }

  private elementArrows = (value: number, position: string, fill: string | null = null) => {
    if (!value) {
      return null;
    }
    
    let direction: string;
    switch (true) {
      case (
        position === 'top' && value > 0 ||
        position === 'bottom' && value < 0 
      ) : direction = 'down'; break;
      case (
        position === 'top' && value < 0 ||
        position === 'bottom' && value > 0 
      ) : direction = 'up'; break;
      case (
        position === 'left' && value > 0 ||
        position === 'right' && value < 0 
      ) : direction = 'right'; break;
      case (
        position === 'left' && value < 0 ||
        position === 'right' && value > 0 
      ) : direction = 'left'; break;
      default:
        direction = ''
    }

    return html`
      <ha-icon style="fill: ${fill}" class="small" icon="mdi:arrow-${direction}"></ha-icon>
    `
  }

  // class="battery-${element.calculations.systemTotal > 0 ? 'out' : 'in'}"
  private elementValueArrows = (element: CalculatedElementDef) => html`
    <div style="height: 12px;">
      ${element.calculations.systemTotal
        ? html`
          ${!['left', 'middle'].includes(element.position) ? this.elementArrows(element.calculations.systemTotal, element.position, this.getElementColor(element)) : null}
          ${this.displayValue(element.calculations.systemTotal, element.position !== 'middle', this.getElementUnit(element), 0)}
          ${element.position === 'left' ? this.elementArrows(element.calculations.systemTotal, element.position, this.getElementColor(element)) : null}
        ` : null
      }
    </div>
  `

  private elementToHtml = (element: CalculatedElementDef, preventFade: boolean = false) => html`
    <div class="circle-container container-${element.position}" style="
      opacity: ${!element.calculations.systemTotal && !preventFade && this._config?.fadeIdylElements ? .25 : 1};
    ">
      <div class="circle" style="border-color: ${this.getElementColor(element)}">
        ${element.fill ? (
          html`<div style="
            height: ${coerceNumber(this.getEntityValue(element.fill, true, false))}%; 
            position: absolute; width: 100%; bottom: 0px;
            background-color: ${this.getElementColor(element)};
            opacity: .25;
          "></div>`
        ) : null}
        ${element.position === 'bottom'
          ? this.elementValueArrows(element)
          : html`<div style="height: 12px;">${element.extra?.main ? this.getEntityValue(element.extra?.main, false, true) : ' '}</div>`
        }
        <div style="width: 100%; display: flex">
          <span class="side-extra">${element.extra?.left ? this.getEntityValue(element.extra?.left, false, true) : ' '}</span>
          <ha-icon style="width: 24px; fill: ${this.getElementColor(element)}" icon="${this.getElementIconId(element)}"></ha-icon>
          <span class="side-extra">${element.extra?.right ? this.getEntityValue(element.extra?.right, false, true) : ' '}</span>
        </div>
        ${element.position === 'bottom'
          ? html`<div style="height: 12px;">${element.extra?.main ? this.getEntityValue(element.extra?.main, false, true) : ' '}</div>`
          : this.elementValueArrows(element)
        }
      </div>
    </div>
  `

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const { elements: configElements } = this._config;
    
    let systemPower = 0;
    const elements = configElements.map((element) : CalculatedElementDef => {
      let toSystem = 0;
      let fromSystem: number | null = null;
      let systemTotal = 0;

      const multiplier = element.invert ? -1 : 1;

      toSystem = typeof element.value === "string"
        ? coerceNumber(this.getEntityValue(element.value)) * multiplier
        : coerceNumber(this.getEntityValue(element.value.toSystem))

      if (typeof element.value !== "string" && element.value.fromSystem) {
        fromSystem = coerceNumber(this.getEntityValue(element.value.fromSystem));
      }
      systemTotal = toSystem - (fromSystem ?? 0)
      
      if(!element.exclude) {
        systemPower -= systemTotal;
      }
      
      const extra = typeof element.extra === "string" ? {
        main: element.extra,
      } : element.extra

      return {
        ...element,
        extra,
        calculations: {
          toSystem,
          fromSystem,
          systemTotal
        }
      }
    });
    
    const extra = typeof this._config.system?.extra === "string" ? {
      main: this._config.system?.extra,
    } : this._config.system?.extra

    elements.push({
      value: 'system',
      ...(this._config.system?.unit ? {
        unit: this._config.system.unit
      } : null),
      icon: this._config.system?.icon || 'mdi:house',
      ...(this._config.system?.extra ? {
        extra: this._config.system.extra
      } : null),
      ...(this._config.system?.color ? {
        color: this._config.system.color
      } : null),
      position: 'middle',
      extra,
      calculations: {
        toSystem: systemPower > 0 ? systemPower : 0,
        fromSystem: systemPower < 0 ? systemPower : 0,
        systemTotal: systemPower
      },
    })

    const elementPositions = {
      left: elements.filter(element => element.position === 'left'),
      top: elements.filter(element => element.position === 'top'),
      right: elements.filter(element => element.position === 'right'),
      bottom: elements.filter(element => element.position === 'bottom'),
      middle: elements.filter(element => element.position === 'middle')
    };

    const posDimensionMap = {
      "left": "position: absolute; left: 0; top: 10px; width: calc(50% - 42px); height: calc(100% - 20px);",
      "top": "position: absolute; left: 10px; top: 0; width: calc(100% - 20px); height: calc(50% - 42px);",
      "right": "position: absolute; left: calc(50% + 42px); top: 10px; width: calc(50% - 42px); height: calc(100% - 20px);",
      "bottom": "position: absolute; left: 10px; top: calc(50% + 42px); width: calc(100% - 20px); height: calc(50% - 42px);",
    }

    const linePosMap = {
      'from': {
        'left':   (pc, ipc)  => `M 100 ${ipc},  C 50 ${ipc},   50 ${pc},   0 ${pc}`,
        'top':    (pc, ipc)  => `M ${ipc} 100,  C ${ipc} 50,   ${pc} 50,   ${pc} 0`,
        'right':  (pc, ipc)  => `M 0 ${ipc},    C 50 ${ipc},   50 ${pc},   100 ${pc}`,
        'bottom': (pc, ipc)  => `M ${ipc} 0,    C ${ipc} 50,   ${pc} 50,   ${pc} 100`,
      }, 'to': {
        'left':   (pc, ipc)  => `M 0 ${pc},     C 50 ${pc},   50 ${ipc}    100 ${ipc}`,
        'top':    (pc, ipc)  => `M ${pc} 0,     C ${pc} 50,   ${ipc} 50    ${ipc} 100`,
        'right':  (pc, ipc)  => `M 100 ${pc},   C 50 ${pc},   50 ${ipc}    0 ${ipc}`,
        'bottom': (pc, ipc)  => `M ${pc} 100,   C ${pc} 50,   ${ipc} 50    ${ipc} 0`,
      }
    };
    const avgSystemTotal = elements
      .filter(element => element.calculations.systemTotal !== 0)
      .reduce((prev, element) => prev + Math.abs(element.calculations.systemTotal), 0)
      / elements.length;
    const lineCalcs = Object.fromEntries(['left', 'top', 'right', 'bottom'].map(position => {
      const theseElements = elementPositions[position];
      const height = 1 / (theseElements.length) * 100;
      return [position, theseElements.map((element, index) => {
        const pc = ((index + 1) * height) - .5 * height;
        const ipc = 50 + -10 * (1 - pc / 50)
        return {
          element,
          path: {
            from: linePosMap.from[position](pc, ipc),
            to: linePosMap.to[position](pc, ipc)
          },
          dur: (this._config?.speed ?? 5) * 1 / (Math.abs(element.calculations.systemTotal) / avgSystemTotal)
        }
      })];
    }));

    const objectMap = (obj, fn) =>
      Object.keys(obj).map(key =>
        fn(key, obj[key])
      )

    return html`
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div class="row" style="height:100%;">
          
            <div class="col">
              <div class="spacer container-left"></div>
              ${elementPositions.left.map(element => this.elementToHtml(element))}
              <div class="spacer container-left"></div>
            </div>

            <div class="col">
              <div class="row">
                ${elementPositions.top.length
                  ? elementPositions.top.map(element => this.elementToHtml(element))
                  : html`<div class="spacer container-top"></div>`
                }
              </div>

              <div class="row">
                ${elementPositions.middle.map(element => this.elementToHtml(element, true))}
              </div>

              <div class="row">
                ${elementPositions.bottom.length
                  ? elementPositions.bottom.map(element => this.elementToHtml(element))
                  : html`<div class="spacer container-bottom"></div>`
                }
              </div>
            </div>

            <div class="col">
              <div class="spacer container-right"></div>
              ${elementPositions.right.map(element => this.elementToHtml(element))}
              <div class="spacer container-right"></div>
            </div>

            <div class="lines">
              ${objectMap(lineCalcs, (pos, posLineCalcs) => html`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="${posDimensionMap[pos]}"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  vector-effect="non-scaling-stroke"
                >
                  ${posLineCalcs.map(posLineCalc => svg`
                    <path
                      d="${posLineCalc.path.from}"
                      stroke="${this.getElementColor(posLineCalc.element)}"
                      style="opacity: ${!posLineCalc.element.calculations.systemTotal && this._config?.fadeIdylElements ? .25 : 1};"
                    ></path>
                    ${this.displayValue(posLineCalc.element.calculations.systemTotal) && svg`
                      <circle
                        r="1"
                        vector-effect="non-scaling-stroke"
                        style="
                          stroke-width: 4;
                          stroke: ${this.getElementColor(posLineCalc.element)};
                          fill: ${this.getElementColor(posLineCalc.element)};
                        "
                      >
                        <animateMotion
                          dur="${posLineCalc.dur}"
                          rotate="auto"
                          repeatCount="indefinite"
                          calcMode="linear"
                          path="${posLineCalc.element.calculations.systemTotal > 0 ? posLineCalc.path.to : posLineCalc.path.from}"
                        />
                      </circle>
                    `}
                  `)}
                </svg>
              `)}
            </div>
          </div>
        </div>
      </ha-card>
    `;}

  static styles = css`
    :host {
      --mdc-icon-size: 24px;
    }
    ha-card {
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
    .card-content {
      position: relative;
      flex-grow: 1;
      padding: 16px !important;
    }
    .lines {
      position: absolute;
      width: calc(100% - 200px);
      height: calc(100% - 200px);
      left: 100px;
      top: 100px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    .col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container-top,
    .container-bottom {
      padding: 0 10px;
    }
    .container-left,
    .container-right {
      padding: 10px 0;
    }
    .spacer {
      width: 80px;
      height: 80px;
    }
    .circle {
      width: 80px;
      height: 80px;
      border-radius: 25%;
      border: 2px solid;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;
      font-size: 14px;
      line-height: 14px;
      position: relative;
      text-decoration: none;
      color: var(--primary-text-color);
    }
    ha-svg-icon {
      padding-bottom: 2px;
      fill: inherit !important;
    }
    ha-icon.small {
      --mdc-icon-size: 12px;
    }
    .side-extra {
      width: calc((100% - 24px) / 2);
      margin: auto;
      overflow: hidden;
      font-size: 10px;
    }
    .label {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
    line,
    path {
      stroke-width: 1;
      fill: none;
    }
    .circle svg {
      position: absolute;
      fill: none;
      stroke-width: 4px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  `;
}

const windowWithCards = window as unknown as Window & {
  customCards: unknown[];
};
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
  type: "system-flow-card",
  name: "System Flow Card",
  description:
    "A system distribution card inspired by the official Energy Distribution card for Home Assistant",
});

declare global {
  interface HTMLElementTagNameMap {
    "system-flow-card": SystemFlowCard;
  }
}
