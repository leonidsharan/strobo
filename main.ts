input.onButtonPressed(Button.A, function () {
    period += -10000
    if (period < 10000) {
        period = 10000
    }
})
input.onButtonPressed(Button.B, function () {
    period += 10000
    if (period > 100000) {
        period = 100000
    }
})
let period = 0
period = 30000
basic.forever(function () {
    pins.analogSetPeriod(AnalogPin.P0, period)
    // big light disperses the flash
    pins.analogWritePin(AnalogPin.P0, 256)
})
basic.forever(function () {
    basic.showNumber(Math.round(1000000 / period))
    basic.pause(500)
})
