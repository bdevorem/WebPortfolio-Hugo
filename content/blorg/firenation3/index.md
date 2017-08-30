+++
date = "2017-08-29T06:04:14-04:00"
draft = false
title = "Progress on a GameCube adapter for ozai"
heading = "Blog"
categories = [ "For Fun" ]
series = [ "The Fire Nation" ]
+++

I'm totally doing that GameCube controller adapter in my 5.25" drive bay thing. I'm pretty close to done
with the 3D model, and I am currently looking into 3D printing it. I also got some [COTS](https://en.wikipedia.org/wiki/Commercial_off-the-shelf)
parts to help me. I fully expect to be done this soon, like, this week soon.

<!--more-->

First off, I had planned on snipping the USB cables off the prebuilt GameCube adapter and soldering on a USB motherboard header connector.
I'd have to order that 9 pin connector, and while soldering it wouldn't be hard at all, it is a little permanent, and if I ever decide to
use the adapter with another computer without a spare USB header or 5.25" drive bay I'd have to either get an adapter or solder the USB
connectors back on. Since I'd have to spend money anyway since I'm not near a store that would sell me the header connector, I just
bought [this](https://www.amazon.com/gp/product/B015F6QXKO/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1) off Amazon.
It does all the work for me, so this project is pretty lame from a technical skill standpoint - I'm mostly reusing existing products.

The one technical bit was designing the drive bay that this will be part of. I used calipers to measure out the GameCube adapter I have,
and I used CREO Parametric to make a little drive bay. It looked nicer before I realized that since I'd probably get it 3D printed it has
to be 3D printable, and that if I get it 3D printed more material = more cost. It still looks good, and if I can get it in black
it should match my computer really well. Anyway, I will be posting the design files to my blogwork repo, and below you can find the current
STL model:

<script src="https://embed.github.com/view/3d/johnathonnow/WebPortfolio-Hugo/master/content/blorg/firenation3/gca.stl"></script>
