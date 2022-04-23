# System Flow Card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=flat-square)](https://github.com/hacs/integration)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/flyrmyr/system-flow-card?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/flyrmyr/system-flow-card/CI?style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/flyrmyr/system-flow-card/total?style=flat-square)

This card for [Home Assistant](https://home-assistant.io/) Dashboards is designed to provide system distribution in an identical style to the Official Energy Distribution card included by Home Assistant.

<img width="454" alt="Screenshot 2023-02-17 at 1 46 52 AM" src="https://user-images.githubusercontent.com/14035884/219596902-40d68252-fa60-49ef-a354-f14d8a89b1a3.png">

## Install

### HACS (recommended)

This card is available in [HACS](https://hacs.xyz/) (Home Assistant Community Store).
<small>_HACS is a third party community store and is not included in Home Assistant out of the box._</small>

### Manual install

1. Download and copy `system-flow-card.js` from the [latest release](https://github.com/flyrmyr/system-flow-card/releases/latest) into your `config/www` directory.

2. Add the resource reference as decribed below.

### Add resource reference

If you configure Dashboards via YAML, add a reference to `system-flow-card.js` inside your `configuration.yaml`:

```yaml
resources:
  - url: /local/system-flow-card.js
    type: module
```

Else, if you prefer the graphical editor, use the menu to add the resource:

1. Make sure, advanced mode is enabled in your user profile (click on your user name to get there)
2. Navigate to Settings -> Dashboards
3. Click three dot icon
4. Select Resources
5. Hit (+ ADD RESOURCE) icon
6. Enter URL `/local/system-flow-card.js` and select type "JavaScript Module".
   (Use `/hacsfiles/system-flow-card/system-flow-card.js` and select "JavaScript Module" for HACS install if HACS didn't do it already)

## Using the card

I recommend looking at the [Example usage section](#example-usage) to understand the basics to configure this card.
(also) pay attention to the **required** options mentioned below.

### Options

#### Card options

| Name              | Type     |    Default    | Description |
| ----------------- | -------- | :-----------: | ------------|
| type              | `string` | **required**  | `custom:system-flow-card`.
| title             | `string` |               | Shows a title at the top of the card.
| system            | `object` |               | Define parameters of the central `System` element, see [system object](#system-object) for additional system element options.
| elements          | `object` | **required**  | One or more sensor entities, see [element object](#element-object) for additional entity options.
| speed             | `string` | 5             | Define the average time (s) for dots to travel.         
| fadeIdylElements  | `string` |               | Fade elements that are not currently producing or consuming.

#### System object
The system is essentially an [element object](#element-object). The `value` is calculated from the difference in providers and consumers in the system (a positive value shows net unaccounted for production). This element has a central position.

| Name           | Type        |    Default    | Description |
| -------------- | ----------- | :-----------: | ----------- |
| unit           | `string`    | entity unit   | Display unit for the element value
| icon           | `string`    |               | Display icon for the element
| color          | `string`    |               | Hex color for the element box
| extra          | `object`    |               | Extra sensor values to display within the element box. See [element extra object](#element-extra-object) for additional extra options.

#### Element object

| Name           | Type        |    Default    | Description |
| -------------- | ----------- | :-----------: | ----------- |
| value          | `string` / `object` | **required** | Entity ID of a sensor providing a state value, (positive values for element consumption) (unless the `inverted` option is set to true) **or** a split value object. See [element value object](#element-value-object) for split value options.
| unit           | `string`    | `entity.unit` | Display unit for the element value
| position       | `string`    | **required**  | Placement of entity box. Must be either `top` `left` `bottom` or `right`
| icon           | `string`    |               | Display icon for the element
| color          | `string`    |               | Hex color for the element box
| fill           | `string`    |               | Entity ID of a sensor providing a state of 0 - 100 (%) fill of the element box
| invert         | `boolean`   | false         | Invert element value for the system flow calculation
| exclude        | `boolean`   | false         | Exclude element value from the system flow calculation
| extra          | `object`    |               | Extra sensor values to display within the element box. See [element extra object](#element-extra-object) for additional extra options.

#### Element value object

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| fromSystem     | `string` | Entity ID of a sensor providing a state value for consumption
| toSystem       | `string` | Entity ID of a sensor providing a state value for production

#### Element extra object

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| main           | `string` | Entity ID of a sensor providing a state value to display. The sensors `entity.unit` will be displayed.
| left           | `string` | Entity ID of a sensor providing a state value to display. The sensors `entity.unit` will be displayed.
| right          | `string` | Entity ID of a sensor providing a state value to display. The sensors `entity.unit` will be displayed.

### Example usage

#### My Latest Example

For those testing, here is my current config:

```yaml
type: custom:system-flow-card
speed: 3
fadeIdylElements: true
system:
  unit: W
  icon: mdi:rv-truck
  extra: sensor.indoor_govee_temperature
  color: '#0089b6'
elements:
  - value: sensor.victron_multiplus_activein_l1_power_238
    icon: mdi:power-socket-au
    position: left
    color: '#B62D00'
    extra:
      main: sensor.victron_multiplus_state_238
      left: sensor.victron_multiplus_activein_l1_voltage_238
      right: sensor.victron_multiplus_activein_l1_current_238
  - value: sensor.victron_alternator_power
    icon: mdi:engine
    position: left
    color: '#f67828'
    extra:
      left: sensor.victron_alternator_battery_voltage
      right: sensor.victron_alternator_battery_current
  - value: sensor.victron_battery_power
    invert: true
    icon: mdi:car-battery
    extra:
      main: sensor.victron_system_battery_soc
      left: sensor.victron_system_battery_voltage
      right: sensor.victron_system_battery_current
    fill: sensor.victron_system_battery_soc
    position: bottom
    color: '#3FF628'
  - value: sensor.victron_solar_pv_power
    icon: mdi:solar-power-variant
    extra:
      main: sensor.victron_solar_yield_today
      left: sensor.victron_solar_pv_voltage
      right: sensor.victron_solar_pv_current
    position: top
    color: '#F6DF28'
    fill: sensor.solar_effectiveness_today
  - value: sensor.victron_ac_consumption
    icon: mdi:power-plug
    position: right
    color: '#B62D00'
    invert: true
    extra:
      main: sensor.victron_multiplus_state_238
      left: sensor.victron_multiplus_out_l1_voltage_238
      right: sensor.victron_multiplus_out_l1_current_238
  - value: sensor.victron_dc_system_power
    invert: true
    icon: mdi:lightning-bolt-circle
    position: right
    color: '#0089b6'
```


## Credits

- [HA Energy Distribution Card](https://www.home-assistant.io//dashboards/energy/#energy-distribution)
- [@angular/cdk](https://github.com/angular/components/tree/main/src/cdk)
- [Jack Moore](https://www.jacklmoore.com/notes/rounding-in-javascript/)
- [ulic75](https://github.com/ulic75/power-flow-card)
