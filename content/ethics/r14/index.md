+++
date = "2018-04-30T00:31:00-04:00"
draft = false
visible = false
title = "Reading 14: Jeffrey is done school forever"
description = "waht does this do"
tags = [ "Ethics" ]
categories = [ "Ethics" ]
series = [ "Ethics" ]
+++

I would not call coding the new literacy, but I strongly believe that learning to code is important, and that everyone should at least be taught some form of programming. Education is decades behind where it should
be - while learning to reason and be creative are important, so is being able to function in the modern world. I'm willing to bet that most high school graduates don't know how lightbulbs work, how any part of a computer
works, how the internet works, or anything like that. Most people don't have a clue how to fix anything with their cars, nor do I think they even know how they work. I suppose most people get along just fine not knowing these
things, but that isn't why I feel education relating to STEM is lacking. People don't even know how to begin looking up things these days. We have access to a huge network of information that tells us quite a lot about
our world. In my experience, it becomes much easier to use the internet for learning about something after I've been taught a little about it. I'm sure I would be much more likely to not be scammed by a mechanic if I could say
"no, I know that's not the issue" or "I can order the part myself for cheaper, hold on."

But computers reached a whole other level. Everyone uses them. My mom is always on her iPad, her iPhone, or her laptop. But she is still amazed how quickly I can pull up information, when all I am doing is googling it. I think
we need to overhaul the education system to be more useful in the modern world.
My dad works as an accountant at a precast concrete plant. When he decided to switch the company's 401k provider or whatever, they were so excited to say "now your employees just have to sign on to change things",
and my dad was like, "well, most of them can't..."

Anyways, on to the actual question, coding is important. Speaking of my dad, he spends most of his time in Excel. When I started high school and learned Java for the robotics team, he read the textbook a bit, too.
He also started reading a book on Excel macros. He writes the occasional VBA script, but mostly works in Excel formulas. My point is, he uses some knowledge about programming all the time for his non-programming
job. (He also apparently patched their business logic program for Y2K himself, making it support dates up to 2012, and said "we won't need it that long." I added features to that program in 2016. They're still using the
same program, but plan on switching to a modern program.) When using the modern business logic program, the program crashed when they tried opening certain invoices, and my dad noticed the windows error message truncated the
file path to 80 characters, and he was able to inform the company, who was then able to ignore the bug and never fix it after two years.

Last month that my former employer emailed me a Unix for Engineers homework assignment.
They changed the office scanner, and they wanted to port all the contacts over. They found a conversion tool,
but it left the names and email addresses encoded in base64, and they didn't know what that was, so they
asked me to fix it. After a few minutes of work I had a nice little shell script that did what they needed.

Obviously these are extreme examples, where they could know a little more programming to do it themselves, but
I also think learning some kind of programming, like Python, Scratch, Game Maker, or some other fourth thing,
can help people with their day to day computer usage.

CS Literacy would have helped them a few times. In Excel numbers follow the IEEE 754 floating point standard, and
I believe they are double precision. Anyways, they were storing some serial numbers in a spreadsheet, and
my boss called me in because it kept rounding the serial number to a different number, silently. Well, the number
wasn't possible to represent correctly in the floating point encoding scheme. So he had to make the serial
numbers all strings. Having heard that floating point is a thing, and that numbers often take up a fixed size
in computer programs would have helped them understand the problem. If you don't know those things, when
googling around why your computer is betraying you, you'll have a hard time finding relevant information because
all of the information you find is new to you, you don't know how to filter what is helpful from what is
unhelpful.

The Why We Should Teach Programming post lists a few reasons for CS4All, like understanding our world and
understanding processes. I really like the "to have a new way to learn science and mathematics" bit, because
data is awesome, and you can show it really well with computers. Not to mention, you can run simulations.
I didn't believe in the Monty Hall problem until I ran a simulation. I didn't believe a riddle I was given
was solveable until I ran a simulation. 

But some people, like the New York Post, don't agree. They think they won't have enough teachers, which is true
and sad. It's kind of a chicken and egg problem, isn't it? If everyone (and therefore every teacher) was
taught CS, then anyone could teach CS. It goes into people who know CS probably do other things. While that
is totally true, I did FIRST robotics throughout high school. Isn't that shocking? I only mentioned it like
6 times so far. Anyway, my mentor in high school was just the father of the team's captain. He worked for
some British company or something and did programming. But he also helped the robotics team out three days
a week, and taught me Java (the monster!), and by my senior year of high school he started teaching a 
robotics class at the high school two days a week. Then, the year after I graduated, he started teaching
AP Computer Science at the school three days a week, while keeping the same job. I know that is a fairly
rare occurance, but there are plenty of great FIRST mentors like that. It wouldn't shock me if companies
started offering bonuses to employees to teach a semester of STEM courses at local high schools. Granted the
two classes he taught were ~20 kids, so it won't scale well since teaching is hard and a full time job itself,
but I do think the talent pool exists if companies wanted to invest into the school systems.

The NYP article also seems to think CS education is software development education. That's a meme that I'm
not a fan of. Being taught the current hip framework is a stupid idea. By the time you're through college
it'll change. Learning to learn these frameworks is far more valuable. But even before that, we don't need
to be teaching how to learn front end frameworks, at the high school level we could do great to just teach
core concepts to enable learning. Last week a business major was in my room and I said I have to plug
something into the computer, and he was confused when I reached under my desk instead of for the monitor,
saying "I'm used to people calling the screen 'the computer'." - we need very basic widespread tech literacy
first, then we can build up to problem solving with computers and the like.

Computer Science can be part of the math and science curriculum. I remember learning a bunch of useless
stuff in science class, like "Don't go near rivers during hurricanes. Do not grab driftwood and float down the
river. Don't do it." I also learned some useless things in math class, such as the quadratic formula. We
can probably replace that with "here's how to write a computer program to do it for you." So I would say
make it a requrement. 

I would want classes on everything STEM, but that's not going to happen. For just CS, I would say that we should
start with computational thinking. Start with something like scratch or that one google doodle about
programming, learn what an algorithm is. Learn some clever analogs for computers. Slowly build to
something like python with some nice, easy to do cool things, frameworks. Cover how computers do anything.

I definitely believe everyone can learn to code, and that everyone should know a little.
Programming languages are very strict subsets of natural language, so I doubt syntax will be an issue
if you start young. Besides, math is just syntax, and so is chemistry, and everyone is forced to learn
those. It then becomes an issue of organizing your thoughts and expressing them. We're taught that
all the time in writing classes, it's just for a computer you have to be entirely literal and specific.
Everyone is capable of giving instructions to another person. Now you just need to give instructions
that no one can misread. 

As to why everyone should, I covered that a lot already. Basically, our world is run by code these days.
My sisters freak out anytime there is a targeted ad on facebook. We have a big tech literacy problem,
and I think learning fundamentals will help with that, as well as make it easier for people to
opperate in the modern world, as programmers keep giving stupid error messages that are just stack
traces. (Seriously I got a stack trace playing a video game two weeks ago...)
