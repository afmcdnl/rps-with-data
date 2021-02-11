/**
 * Shake
 * 
 * Pick a random number
 * 
 * If number is 0 -> Tail
 * 
 * if number is 1 Heads
 */
input.onPinPressed(TouchPin.P0, function () {
    Total = Paper + (Rock + Scissors)
    basic.showNumber(Rock / Total)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("R")
    basic.showNumber(Rock)
})
input.onPinPressed(TouchPin.P2, function () {
    Total = Paper + (Rock + Scissors)
    basic.showNumber(Scissors / Total)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("S")
    basic.showNumber(Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("P")
    basic.showNumber(Paper)
})
input.onPinPressed(TouchPin.P1, function () {
    Total = Paper + (Rock + Scissors)
    basic.showNumber(Paper / Total)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 25000; index++) {
        item = randint(0, 2)
        if (item == 0) {
            Rock += 1
        } else if (item == 1) {
            Paper += 1
        } else {
            Scissors += 1
        }
    }
    basic.showIcon(IconNames.Yes)
})
let item = 0
let Total = 0
let Rock = 0
let Paper = 0
let Scissors = 0
Scissors = 0
Paper = 0
Rock = 0
