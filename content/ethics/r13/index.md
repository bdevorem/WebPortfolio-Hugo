+++
date = "2018-04-22T17:36:00-04:00"
draft = false
visible = false
title = "Reading 13"
description = "waht does this do"
tags = [ "Ethics" ]
categories = [ "Ethics" ]
series = [ "Ethics" ]
+++

Copyright is the legal right given as protection to a creator. The wipo article says that
the right holder is given certain rights by copyright law, namely the exclusive right to use
a work (or let others use the work). They can prevent reproduction of a work, public performance
of a work, and translation and adaptation of a work. Copyrights are limited in time, and thanks
to Disney it is now complicated to say how long they last.

Copyrights help the creator develop and market a work, and help allow them to be paid. They also help
foster creativity, as being a content creator can be a valid way of earning money because no one else
can just copy your work and sell it for cheaper. They also prevent just outright stealing of works,
for credit or something, I guess. I'm not sure I buy the WIPO article there. Morally stealing is wrong,
so don't do that, I guess.

Quick rant - RMS says "Since the obvious meaning for “open source” is not the 
meaning that its advocates intend, the result is that most people misunderstand the term." - 
but if most people use it differently, they're not the ones who are wrong. OSI is wrong.
So is the free software movement. Don't pick words that already have meanings you disagree with. 

I think all software should be (free as in freedom) software, so an open source or free license should
always be used over a proprietary license. I'm sick of games I play dying forever so that I can't play
them ever again because the server is proprietary and no open source and on top of that it's not even
legal to reverse engineer it and when people do reverse engineer them they get sued. Additionally, if
I have a piece of software that performs some function close to what I want, I want to be able to
make it do that function. Windows doesn't do workspaces right, I should be able to fix that.

Open Source Software is better in the sense that it tends to be closer to free software, which is the ideal.
Software should be treated more like a machine than a piece of IP. I can (to an extent) fix a radio.
I can't fix a buggy piece of software. I guess my reason for thinking that is that is that software isn't
like music. Me making a change to a piece of music doesn't make sense - the piece of music has value only so
much as it is the creative expression of its creator. Software _can_ be like that, it just usually isn't.
For the most part, software is a tool to complete a task. Please don't start licensing tools. If I want
to use your hammer to drive a screw into a piece of wood, who are you to stop me? 

I get that the Open Source development model is a little... bad. The coglib article is right to complain
about Hacktober fest. Look at these bad PRs I got! [1](https://github.com/JohnathonNow/wolfratbot/pull/2)
[2](https://github.com/JohnathonNow/wolfratbot/pull/5) [3](https://github.com/JohnathonNow/wolfratbot/pull/17).
(There was also a PR to master about a bug, but said thing was already fixeed in the dev branch, but whatever.)
Most of my hacktoberfest PRs were changes to the lug blog. The point being that people are lazy and bad, or if
they weren't, Linus wouldn't rant about how much everyone sucks. Maybe that's why RMS wants to distance
the free software movement from open source. But anyways, that's just the price you pay as a maintainer.
Just set up rules that say "if you do a bad PR, I will fine you $200" and be done.

It honestly seems idiotic to fault open source software for HeartBleed and ShellShock. This was a failure
of the open source model to identify a bug, not a failure that created the bug. If everyone rolled their
own SSL, things would be much worse - more bugs would go unidentified. I say that because security is hard,
and that Troy Hunt guy seems to find people messing it up all the time, I would not trust most companies
to do their own SSL. And then, there would be fewer eyes on it. Sure, the original quality could be better,
but that doesn't seem to be a result of open source - you can have Google Engineers run an open source project,
too.  Plus, closed software has similar bugs quite often, too. Remember [Flash](https://en.wikipedia.org/wiki/Adobe_Flash#Security)? Meltdown and Spectre having been making shockwaves, and they're far worse than software bugs.
Basically, if you do the thing, and you do it right, and you don't curseword it up, it works. It just works.
HeartBleed and ShellShock?

The distinction between free software and open source is meaningful, I suppose. RMS is right in saying
that free software is actually about <s>ethics in gaming journalism</s> morality and open source is about 
development. Open Source says we can make better software. Free Software says software should have respect
for its users.

A lot of people hate that the GPL prevents proprietary software makers from using your license, but I really
like that about it. For a free software movement, it makes the most sense. If you want to use my
freedom-respecting code, your software has to be freedom-respecting too. So, locally, I would say the BSD
license is more free to those using the license, but overall the GPL is more free as it increases the
overall freedom of end users.

I completely disagreed with the outcomes of the first court case. I would definitely say you should not
be allowed to copyright APIs, and that Google was not at all within fair use of the Java APIs. By copyrighting
APIs, you can create a walled garden. No one else is allowed to use the windows system call API. So now
no one else can create their own, compatible implementation. To me, the only interesting part of a work
is the actual code, not the interface. I can't really think of an anology here, but maybe because
Software seems so unlike other copyrightable works. Anyways, I completely agree with the second court
ruling, and the arstechnica article quote from the Federal Circuit
"The fact that Android is free of charge does not make Google’s use of the Java API packages noncommercial," 
just seems true. It being free does not mean it's not commerce. I get the OS for free in exchange for my
personal data. They make profit because of my use of the operating system. Totally, 100% commercial. That said,
I wanted the first case the other way around because now everyone is going to sue everyone else and the world
will descend into chaos.

