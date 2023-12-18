input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    ContinuousServo.spin_one_way(AnalogPin.P1)
    ContinuousServo.spin_other_way(AnalogPin.P4)
    basic.pause(2000)
})
basic.forever(function () {
	
})
