radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(2)
})
radio.setGroup(159753852456)
basic.forever(function () {
	
})
