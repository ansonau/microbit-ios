input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    ContinuousServo.spin_one_way(AnalogPin.P1)
    ContinuousServo.spin_other_way(AnalogPin.P4)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    ContinuousServo.turn_off_motor(DigitalPin.P4)
    ContinuousServo.turn_off_motor(DigitalPin.P1)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
	
})
