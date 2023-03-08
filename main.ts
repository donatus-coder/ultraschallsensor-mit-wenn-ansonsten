basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 5) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.setLedColor(0x00ff00)
    } else {
        music.playTone(175, music.beat(BeatFraction.Whole))
        basic.setLedColor(0xff0000)
    }
})
