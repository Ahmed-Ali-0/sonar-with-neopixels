// Created by: Ahmed Ali
// Created date : Oct2, 2020
// 
// This program use sonar and neoplixels
let distance_to_sonar = sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
)
basic.showNumber(distance_to_sonar)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance_to_sonar = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance_to_sonar > 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance_to_sonar <= 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        if (true) {
        	
        } else if (false) {
        	
        } else {
        	
        }
    } else if (false) {
    	
    }
    strip.show()
    basic.showNumber(distance_to_sonar)
    basic.pause(200)
})
