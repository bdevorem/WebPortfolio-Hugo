+++
date = "2017-03-24T23:24:00-05:00"
draft = false
title = "I like this ESR guy a lot more than PG"
heading = "Hackers"
visible = false
+++

It's such a nice day out, so I'mma write this blog post outside. And to save
on time so I can sleep for the weekend, I'mma read and write at the same time.

---

Hmm, ITS can't be that great if it created EMACS.
Oh! Ken Thompson and Dennis Ritchie! The C programming language!
It's funny that we're still in that mode of thought that most higher-level
languages can't be used to write an operating system. It's especially funny
that it was once like that for C. Anyway, this view of the history of
hackerdom is a bit more traditional than what we saw in Levy's book thing.
Darn. Breezy made me go inside. I enjoy the comparison between C and LISP.
Hey, wait, he's mentioning Levy, that's cheating, now my comparison has
a reference loop. I find this more readable than Levy's Hackers, but
maybe because I see the relevance more, since I'm writing this on Linux
while reading about Linux.

Obviously ESR's hackers are similar to Levy's - he even talked a bit about
RMS! And PG isn't worth discussing. This question was bad, and you should feel
bad.

OK, onto the good parts.

 > Who would have thought even five years ago (1991)

Well, that seems a little dated.

Hmm, this is going exactly where I thought it was going when I read the title.
Anyway, the Cathedral model is when you have some elites very precisely
work on a project in isolation. Like how when Breezy and I do our hackers
projects, we dress up in robes and burn incense over our laptops to have
the best code. This is in contrast to the Bazaar model, where different people
try to contribute different things until some guy named Linux Tarballs curses
at you for using the wrong style of comments. I do like the second one a bit
more. Even though Microsoft is trying to embrace the Linux community, they're
still largely a Cathedral - I can't see how they're improving Excel, for
instance. Though they are embracing the Bazaar model more and more, which is
nice, but they still lack the most crucial component - collaboration - I can't
_help_ Microsoft improve excel, for instance. But I can do that with 
lots of Open Source software. The day I built vim from source there was a bug -
it wouldn't compile because someone forgot a header, and two years later
I finally got around to checking if someone ever noticed. 
([They did](https://github.com/vim/vim/issues/571).)

> Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone.

[Oh](https://en.wikipedia.org/wiki/Heartbleed)
[really](https://en.wikipedia.org/wiki/Dirty_COW)[?](http://hmarco.org/bugs/CVE-2015-8370-Grub2-authentication-bypass.html) (That's three links, btw.)
I mean, sure, in general you find most bugs pretty quickly - it's really
only edge-cases that lead to unfound exploits (or malice, if you find it and
don't report it). Most users run default-ish configurations, and while ESR
is right that more users = more ways to stress it, it's a pretty tight
distribution with most users not touching anything. The lack of developers
probably doesn't contribute much - I think more people are concerned with
adding new features than they are with hunting for undiscovered bugs.

> Smart data structures and dumb code works a lot better than the other way around.

I mean, I [have some experience with dumb data structures and dumb code](https://johnwesthoff.com/projects/vrremake/). I used to Vector Bill super hard
when I only knew Java, and would ArrayList all the things. I mention in that
post that knowing more about graphs would have helped, but I really should
have mentioned data structures. I wonder if this law ever _really_ fails.
I've got nothing, so I'll move on.

<br>

> Perhaps in the end the open-source culture will triumph not because cooperation is morally right or software ``hoarding'' is morally wrong (assuming you believe the latter, which neither Linus nor I do), but simply because the closed-source world cannot win an evolutionary arms race with open-source communities that can put orders of magnitude more skilled time into a problem.

Hmmm. In some sense, I find this too idealistic. Microsoft, Google, Apple,
IBM, Facebook, and anyone else who is primarily closed-source could probably
throw money at developers and buy out these communities with "orders of magnitude more skilled time."
Of course, lots of these companies are beginning to support Open Source, but
it's still rare for that to be really meaningful. For instance, I think 
[Go](https://en.wikipedia.org/wiki/Go_(programming_language)) has more in
common with how [Autodesk](https://en.wikipedia.org/wiki/Autodesk) gives free
software to students to lock them into only using their stuff than it does
with the ideals of that one guy, err, Root Mean Square. Will Open Source
eventually win out? Hopefully, but if it does I do think that ESR is right that
it will be by the sheer manpower, not by the ideology. RMS can't even
convince us to stop calling it Linux, so he's not gonna win anytime soon.
