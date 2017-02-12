## Currently

Super-simple app with a power button that toggles power to an LED strip over the kitchen counters by making requests to a nodejs server running on a Raspberry Pi, where the requests toggle GPIO output to an NPN transistor which drives a mosfet, which in turn drives the LED strip's 12v power supply.

## Planned Additions

* Adding a PIR motion sensor to the circuit (and accounting for it in the server-side code) to turn the lights on for a hardcoded duration for when the dogs (or humans, I suppose :) ) wander into the kitchen
  * Displaying time remaining to the user
* Integrating WebSockets with a slider to dim/brighten the LEDs via pulse width modulation from the Pi
