import { LovelaceCardConfig } from "custom-card-helpers";
import { SystemElementDef, ElementDef } from "./type.js";

export interface SystemFlowCardConfig extends LovelaceCardConfig {
  elements: Array<ElementDef>;
  system?: SystemElementDef;
  speed: number;
  fadeIdylElements?: boolean;
}
