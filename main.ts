radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 17) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(17)
})
radio.setGroup(101)
radio.setTransmitPower(7)
