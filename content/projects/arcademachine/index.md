+++
date = "2016-08-07T01:52:00-04:00"
draft = false
title = "An Arcade Machine (Mostly) From Scratch"
tags = [ "Arcade", "Stellaris" ]
categories = [ "For Fun" ]
series = [ "Arcade Machine" ]
+++

This project is one that has been in development for a few years now, and it probably
won't be finished for a few more. It is one that has grown in scope considerably, and
is really the result of several smaller projects. Currently, the end goal is to have
a fully working arcade machine of my very own - running a game I wrote on hardware I built.

The project began at the end of grade school when I decided to try making my own fighting game.
I got far enough, and ended with a simple game with three characters. I revisited the game
at the end of high school when I decided to make it about my highschool robotics team,
[The Fighting RoboVikings](http://www.robovikings.com). I got a few of the team members to design
characters, and I started adding them to the game. (It quickly became an arms race to make
the most unfair character, but that didn't bother me.)

It is here that I decided that it would be really cool to turn the game into an arcade machine,
so I got to work planning out the machine.

I started by making the control panel. I ordered some
[arcade supplies](http://www.ebay.com/itm/HAPP-Arcade-Control-Panel-Kit-your-choice-of-HAPP-14-Push-Buttons-2-Joystick-/251343306708?hash=item3a853a7fd4), as well as a [TI Stellaris Launchpad](https://store.ti.com/Tiva-C-LaunchPad.aspx)
(Links to the successor, the Tiva-C launchpad, as the Stellaris is now defunct.) I modified the example
USB keyboard code, and I used Microsoft Word (of all programs...) to make the button layout.

{{< figure src="buttonlayout.png" 
	   caption="Why'd I use Microsoft Word for this? Why only five buttons? These are my only regrets."
>}}

With the buttons and joysticks laid out, I got to work cutting and drilling a piece of, um, well,
I don't know exactly what kind of plastic it is, but the office had lots of sheets lying around that
they said I could use, and, well, anything free is automatically the best value. Once I was done,
I installed the arcade components.  

{{< figure src="panel1.png" 
	   caption="I bought all the spade connectors my local Radio Shack had for this..."
>}}

{{< figure src="panel2.png" 
	   caption="Wiring came next. I know I disappointed at least three people with this rat's nest, but I was excited."
>}}

{{< figure src="tryingitout.png" 
	   caption="I was eager to test it. The first game played? X-Men, because who can say no to the Master of Magnet?"
>}}

Once everything worked, I took an old Compaq CRT monitor and my control panel and took some measurements. Using those,
I drew up some parts in [CREO Parametric](http://www.ptc.com/cad/creo/parametric). 

{{< figure src="crtsize.png" 
	   caption="I just wish the CRT was a bit bigger..."
>}}

{{< figure src="crtdepth.png" 
	   caption="Err, maybe not."
>}}

{{< figure src="panelsize.png" 
	   caption="I don't know why I had to measure this either."
>}}

I printed out drawings for each part and bought some 2x4s from Home Depot. My neighbor had a yard sale and sold me
a chop saw for $10 (what perfect timing!), and I cut out all the pieces, and a few friends and I spent a warm summer
night screwing them together. I took an old, broken, Windows XP Dell laptop, locked it down, uninstalled almost everything, and set it up to auto login and auto start my game. Oh, and when I say I uninstalled almost everything,
I meant the hardware, too. It has no screen half and no DVD reader, as those aren't things arcade machines need.

{{< figure src="lappy.png" 
	   caption="I think it fell down the stairs once, so the screen was already mostly broken off."
>}}

Last week, I added supports for the CRT and set everything up. I ordered some speakers from Amazon, and it has
been running in my room ever since. My friends and I played a few rounds and remembered our high school days, and
then laughed at some absurd glitches that I now have to leave in.

{{< figure src="lastweek.png" 
	   caption="The machine as of last week."
>}}

The source for the unfinished game is available [in my Dropbox](https://www.dropbox.com/s/yrcn0o2q5vyxc9o/fighting.gm81?dl=0).

The source for the Stellaris Launchpad which handles the arcade buttons and joysticks
is available [in my OneDrive](https://1drv.ms/f/s!AvygQw6LWI-Xg9IkRCoJd-C3BA9e1A).

The CREO Parametric files for the machine frame are also available [in my OneDrive](https://1drv.ms/f/s!AvygQw6LWI-XgvdcD70bq_TbV7BHyQ).
