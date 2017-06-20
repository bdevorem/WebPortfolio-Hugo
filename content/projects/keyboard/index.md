+++
date = "2017-01-30T23:24:00-04:00"
draft = false
title = "How to Drive Your Roommate Crazy"
tags = [ "Keyboard", "IBM", "Legacy" ]
categories = [ "For Fun" ]
series = [ "IBM" ]
+++
For the past five months, I've had an old [IBM Model M](https://en.wikipedia.org/wiki/Model_M_keyboard)
sitting on my desk. Specifically, a 1390572, a 122-key monstrosity. Ever
since [spending the summer typing on one of these old keyboards](https://johnwesthoff.com/projects/rpgii/)
I have wanted to get this keyboard working, because it is very loud and very fun
to type on. 

I found a converter for about $40 online, but that doesn't seem worth it
at all. It has this weird DIN-5 connector, where the pins sweep 240 degrees;
I've never seen any connector quite like it. It looks a bit like a 
PS/2 connector, but with a pin missing, and it's a lot bigger.
Anyway, I found a mating connector and soldered some wires to it.
Then, I found the pinout for this "Terminal DIN-5" connection online.
It has 5v power, ground, data, and clock, which isn't suprising at all.

I hooked up an MSP430 launchpad to it, giving the keyboard 5v power directly.
Since the inputs to the MSP430 aren't 5v tolerant, and I only planned
on reading from the keyboard, I just threw two voltage dividers on
for the data and clock before hooking them up to two inputs on the launchpad.
I wrote some quick code to poll the clock line and whenever it went high I had
the launchpad send the value of the data line over serial. 

Well, both lines ended up being high by default, so I swapped my code to
send the status on falling edges instead of rising edges. I pressed a key,
but nothing happened. I was a little disappointed, but then I had the idea
to try bringing the clock line low for a bit. When I pressed a key, my
serial connection was flooded with 11 bits.

I pressed A. I was met with `10000111000`.
I pressed it again, and the same number repeated.
I looked up a list of PS/2 scancodes. The scancode for A is 
`00011100`.
Hey, that lines up with the middle of the number.
Pressing a bunch of other keys, they all begin with `1` and end with `0`.
The second bit seems to be a parity bit, as it is set to make the scancode 
have an odd number of ones in the dozen or so cases I checked.

Wait a minute. This is just PS/2! The bit order is flipped, but that's
just the way I was printing out the data. I wrote a quick bit of code
for typing the corresponding character for each keypress, and then
ordered a PS/2 to USB converter from Amazon, as I feel leaving a $10
dev board in the project when a $5 converter would do the job isn't worth it.

So, I wired up the PS/2 converter to the keyboard, plug it into my laptop, and
...
nothing...
What gives? I tried diagnosing the issue. I checked the wiring, everything
looked right. A friend suggested that maybe the Model M was drawing too much
power, so I hooked it up to the power from the board I used to read its
signal initially. Still Nothing. Maybe, I thought, the converter doesn't
do anything if there is no load. So I put a resistor across the power pins
from the converter. Still nothing! 

Maybe the host is expecting some sort of response from the keyboard that it
isn't providing.
So, I hooked up an Adafruit Trinket in parallel to the PS/2 to USB converter
to read the signals on the line.
I also hooked up a multimeter to the CLK line. I noticed something - 
the keyboard only pulls CLK up to 2.5 volts. I quickly tested the keyboard
at a lower voltage - it ran perfectly fine at 3.3 volts. Is there a chance
it doesn't produce a voltage high enough for the converter to recognize as
logical high? I checked the logic level on the converter - its CLK line
is held at 5 volts. So, I ordered a level shifter and decided to try
it out. Unfortunately, I could not get it to work and then the semester ended,
so I'll have to try again in the fall.

To be continued... (hopefully)
