input.onButtonPressed(Button.A, function () {
    radio.sendString("Are you awake?")
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendString("You're the best!")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("Good night!")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Yes!")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("I love you!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Are you okay?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("How are you?")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Good")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("No.")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("It's Saturday!")
})
input.onGesture(Gesture.ThreeG, function () {
    radio.sendString("Meh")
})
radio.setGroup(562)
