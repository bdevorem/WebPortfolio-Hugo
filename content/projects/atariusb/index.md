+++
date = "2017-02-02T23:24:00-04:00"
draft = false
title = "Reliving the Arari 2600"
tags = [ "Video Games", "Atari 2600", "Atari", "School" ]
categories = [ "For Fun" ]
series = [ "School" ]
+++
I am currently taking a course titled "Hackers in the Bazaar", which is,
by all accounts, a joke course that exists solely because the department
wouldn't let some professor teach the course he wanted to. Anyway,
we spent class today playing classic video games brought in by students.
I brought in a [SNES](https://en.wikipedia.org/wiki/SNES) and
a copy of [Mortal Kombat](https://en.wikipedia.org/wiki/Mortal_Kombat_(1992_video_game)).

Additionally, I spent about an hour and a half yesterday creating something
a bit special for the occasion. My dad keeps his old Atari 2600 up in my closet,
along with a chest full of games. We no longer have the hardware to hook the
Atari up to a television set, but the controllers still work fine. To help
preserve the experience of playing old Atari games, I threw together an
adapter that allows me to connect the Atari controllers as a USB gamepad.

{{< figure src="imgs/adaptr.jpg" 
	   caption="Because I could."
>}}

I bought two DE-9 connectors a while back for this. The pinout for the
Atari controllers is available online, but since the controllers are
not "smart" - they are just switches with no ICs or anythig - it is
easy to confirm the pinout with a multimeter. The connections necessary
for the classic joystick were made, and 10 10k ohm resistors were used
to pull down the inputs. A [Digispark Pro](http://digistump.com/getpro) was
used to enumerate the USB joystick. 

Here is the code for the Digispark - it
is very simple:
```
#include "DigiJoystick.h"

char BUTS[] = { 6, 5, 2, 1, 0, 7, 8, 9, 10, 11 };
void setup() {
  for (int i = 0; i < 10; i++) {
    pinMode(BUTS[i], INPUT);
  }
}

void loop() {
  DigiJoystick.delay(50);
  int p = 0;
  for (int i = 0; i < 10; i++) {
    p |= digitalRead(BUTS[i])<<i;
  }
  DigiJoystick.setButtons((char)(p&0xFF), (p>>8)&0xFF);
}
```

The project was definitely successful - I played a few rounds of 
[one of my all time favorites](https://en.wikipedia.org/wiki/Warlords_(1980_video_game))
with [Breezy](http://bashfulbytes.com/pages/about.html). 
We played eight rounds and ended up tying 4-4 before watching our classmates
fail at [trying to run a lemonade stand](https://en.wikipedia.org/wiki/Lemonade_Stand). 
The joysticks themselves hurt my hands just as much as I remember, so that's
nice.
In the future, I might have to add the front panel switches of the Atari 2600 to
really capture the feel of the old system.

{{< figure src="imgs/joycon.jpg" 
	   caption="I find myself wondering if these things are worth preserving."
>}}
