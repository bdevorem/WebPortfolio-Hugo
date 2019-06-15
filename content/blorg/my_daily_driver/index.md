+++
date = "2019-06-14T06:20:30-04:00"
draft = false
title = "My new daily driver"
heading = "Blog"
tags = [ "Ads" ]
categories = [ "Ads" ]
series = [ "Goofing off" ]
+++

As I mentioned in my [post about my mental health](https://johnwesthoff.com/blorg/thinkpads/),
I am using an X230 as my personal daily driver. I have yet to go completely crazy and swap
the keyboard for an X220 keyboard (which I'm actually not sure I'd want to do - I like both
keyboards and can't say for certain which I like more), nor have I upgraded the display to either
an IPS 12" or 13" panel (which I am more keen on doing when I have the money). I will describe
my experience with two "upgrades" below, however.


## eGPU  


For the eGPU, I am using my brother's old GTX 960, a 
[GDC Beast 8.0](https://www.ebay.com/itm/EXP-GDC-Laptop-External-PCI-E-Graphics-Card-for-Beast-Expresscard-w-Cable-AC773/222503476987),
 a small [Dell PSU](https://www.ebay.com/itm/Dell-DA-2-USFF-Power-supply-Optiplex-745-755-760-D220P-01-MK394-AC-ADAPTER/272715003388)
, and the 
[375.63 NVIDIA drivers for Windows 10](https://www.nvidia.com/download/driverResults.aspx/109860/en-us). 
The eGPU connects over the [ExpressCard](https://en.wikipedia.org/wiki/ExpressCard) slot. I also
had to update the BIOS before the laptop did anything besides boot loop to a black screen while
the eGPU adapter was connected.

I tried Overwatch, which performed quite well, averaging about 50fps with a mix of settings
(it looked pretty good, actually). I didn't try Overwatch with the iGPU. I also played Apex Legends.
At first it didn't use the eGPU automagically, and I'm sorry to my teammates who had to live with
my 4fps, even with everything set as low as possible. After changing some settings to have it
use the eGPU, it ran anywhere from 20fps while dropping to 40-70fps while actually playing, which
is more than playable. 

This was all using the internal monitor, too.
I've heard that performance is improved quite a bit by using an external monitor with the eGPU.
I did try to test that claim, but I actually didn't notice much of a change 
- I'll have to look more into why that might be. I might try swapping my 1080 in and seeing if
there is a bigger performance delta between using the internal display and an external monitor.
However, I'm wondering if this conventional wisdom is misfounded - PCIe lanes are dual-simplex,
and I'm imagine the traffic from the GPU back to the CPU is significantly less than the
other way around, so it seems plausible that with an ExpressCard eGPU set up there is little
if any difference between using an internal or external monitor. I will update with new
information as I figure it out.


## mSATA

In addition to the 120GB SSD that I initially put into the laptop, I also bought
[this 256GB mSATA SSD](https://www.amazon.com/gp/product/B07GZFGD2B/).
I transferred my arch linux install over to the mSATA SSD and swapped the 120GB SSD that had 
arch on it with one with a Windows installation. 

Now, for day to day use, the SSD is fine. However, during the transfer, it did drop to below
HDD levels of sequential write performance. This is sad only because it does come with the premium
price that mSATA demands. So, my regret is not just forgoing an mSATA drive all together and
choosing to simply buy a larger standard SSD (which would also give better sequential performance
due to running at SATA 3 speeds rather than SATA 2). I chose to get the mSATA drive primarily
to get "free" storage, in the sense that it doesn't consume the much more common standard drive
bay. 
