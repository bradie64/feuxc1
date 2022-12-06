function feuR_segment_set () {
    segment = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
    segment.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    segment.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    segment.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
}
function countdown () {
    basic.showNumber(t)
    basic.pause(580)
    t += 1
    if (t == 5) {
        radio.sendString("F0")
    }
    if (t == 0) {
        state += 0
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        feuV_segment_set()
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("F0")
})
function feuO_segment_set () {
	
}
function init_neopix_set_segment () {
    segment = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
    segment.setBrightness(62)
    segment.showColor(neopixel.colors(NeoPixelColors.White))
}
radio.onReceivedString(function (receivedString) {
    let receivedstring = ""
    if (receivedstring == "f0") {
        feuO_segment_set()
        feuR_segment_set()
        basic.pause(1000)
    } else {
        if (receivedstring == "Sy") {
            t = 8
            state = 1
        }
    }
})
function feuV_segment_set () {
	
}
let t = 0
let segment: neopixel.Strip = null
let state = 0
radio.setGroup(10)
init_neopix_set_segment()
state = 1
feuR_segment_set()
basic.showLeds(`
    # # # # #
    # . # . #
    # # . # #
    . # # # .
    . # # # .
    `)
basic.forever(function () {
    if (state == 1) {
        countdown()
    } else {
    	
    }
})
