radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        radio.sendNumber(20)
    } else {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(25)
radio.setTransmitPower(7)
radio.sendNumber(90)
radio.setGroup(147)
radio.setTransmitPower(1)
