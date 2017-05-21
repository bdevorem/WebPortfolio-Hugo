+++
date = "2017-05-20T23:03:30-04:00"
draft = false
title = "Spring 2017 Semester-in-Review"
tags = [ "Projects" ]
categories = [ "School" ]
series = [ "Summary" ]
+++

Another semester is over, one that happened to be my first semester
where I was allowed to take only Computer Science courses. So, I took
**Paradigms**, **Operating System Principles**, **CSE Service Projects**,
**Hackers of the Bazaar**, and **Mobile Computing**, and I did undergraduate
research. The projects in **Operating System Principles** were
all fairly straightforward, but [the last one involved writing a 
file system of sorts](http://www3.nd.edu/~dthain/courses/cse30341/spring2017/project6/)
which was cool, but there was no room to do what I wanted, so I will
only discuss the other courses.

Final Projects for my Classes
==

Paradigms
--

This class wasn't the best, and the final project was just OK. We wrote
a networked platformer, and we called it [networked platformer](https://github.com/a3qz/networked_platformer).
We were told we would get an F if we wrote Windows 95 Solitaire, so we made
a Solitaire themed platformer. We were also forced to use TCP, which was
kind of annoying. There isn't really anything special about this project, so
I'll move on.

CSE Service Projects
--

For our service project, my group both wrote a recipe reader app as well as
made a video about internet safety for [Logan Industries](http://www.logancenter.org/adults/logan-industries/).
The recipe reader app was neat in that we had it do text to speech, and it was
the first iOS app thing I've ever been involved with.

Mobile Computing
--

My final project for mobile computing was something I wanted to exist for
a while - a mobile app that allows you to track [Elo ratings](https://en.wikipedia.org/wiki/Elo_rating_system)
for a wide variety of competitive activities - I called it [Elo for everything](https://github.com/JohnathonNow/eloforeveryone)
but then I messed up the GitHub repo name.
Anyway, I wrote it using [Phonegap](https://en.wikipedia.org/wiki/Apache_Cordova) for the front-end and [Nodejs](https://en.wikipedia.org/wiki/Node.js) and
[MongoDB](https://en.wikipedia.org/wiki/MongoDB) for the backend.

Undergraduate Research
--

My research involved creating an arduino-controlled drumming machine. Its
source is available [here](https://github.com/nd-cse-design/arduino-music).
The requirements changed a number of times based off the will of the musician
it was created for, but I suppose that's something I might have to learn to
deal with.

Hackers in the Bazaar
--

My favorite project this semester is pretty typical of me. It was a 
kind of compiler suite we called [GGNoRe](http://bashfulbytes.com/ggnore/).
It was meant entirely as a joke for a joke of a class, and it is not
meant to have any practical value. Basically, it is a set of python scripts for
"helping" write C code - it currently has a script for forcing functions
to be below a set length by kicking out excess lines to a new function, as well
as a script that repeatedly runs gcc until the code compiles, searching
[DuckDuckGo](https://duckduckgo.com/) for [Stack Overflow](http://stackoverflow.com/)
posts about whatever errors GCC throws, then replacing lines with
errors with a random code snippet from one of the Stack Overflow results.
That second one is my favorite thing ever and it always leads to hilarious
results. After presenting it my professor begged me to not give it to the
Sophomore class.


Going Forward
==

I have a few projects in the works right now. Based off of my Paradigms project
I want to make a pygame platformer tutorial for my younger brother, as he is
a big fan of making games and is currently learning Python. I am also
trying to make a remake of the Jackbox Party game [Tee K.O](http://jackboxgames.com/tag/tee-k-o/)
in JavaScript, Node.js, and MongoDB. I might just add in AngularJS and get
really [MEAN](http://mean.io/). In the past I've done some 
[LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) stuff, but
learning some more modern stacks could do me some good.
Both of these projects are being hosted in a repo I have set up for this blog,
which can be found [here](https://github.com/JohnathonNow/johnwesthoff-blogwork).

I also have what I feel is a very good idea in the works - a tool meant to teach
principles of robotics, AI, and programming in the browser. It would
allow users to connect components together (think LEGO or Besieged),
including sensors and actuators, and write some LISP to control the
"robot" autonomously. I have a lot planned out, and it's decently ambitious;
I'll probably make a post soon at least outlining what I hope to do.
