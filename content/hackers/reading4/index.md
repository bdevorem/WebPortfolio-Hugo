+++
date = "2017-02-16T23:24:00-05:00"
draft = false
title = "PG Makes Jeffrey Angry, Part 2"
heading = "Hackers"
visible = false
+++

I measure the success of my blog posts by the number of quotes
posted into slack times the number of times <b>pbui</b> says `d-word it jeffrey`.

---

I actually stopped reading the second reading halfway through to type this
paragraph. In Python, which is the first language that comes to mind
that has strings really built in (unlike C/C++ where they are char arrays, 
excluding the C++ std::string, but that doesn't count, it's not
comparable to a list), they fit the language very well - let the programmer
do what they would in other similar languages in fewer lines of code. 
PG even suggests making strings lists, and implies that you would only
suggest to the compiler that they should be contiguous in memory.
Memory is already a snail compared to the processor, why on earth would
he suggest doing something that not only reduces memory performance, but
also leads to much poorer caching?

Also, he suggests that cycles will be increasingly wasted, but processors
already attempt to optimize code on-the-fly (as Moore's Law died, we
need smaller things like that in order to continue to see performance
improvements - as we run against the limits of nature, I think we will
begin to see fewer wasted cycles as processor companies seek to increase speed
any way they can), so it seems unlikely that we would let them truly be
wasted in 80some years.
I'm sure I've linked this before, but PG really needs to watch
[this](https://www.youtube.com/watch?v=JEpsKnWZrJ8).
K, I'm going to go finish the reading.

---

OK, the second half of the readings wasn't much better, but anyway, I
guess I'll start answering the questions.

How do programming languages affect how I tackle a problem? What is this,
Diggums? Anyway, they do affect things quite a bit. For instance, if I am
doing anything in C, my thought process is "shoot shoot shoot, how do I do this
without segfaulting everywhere", whereas if I am doing anything in Python,
my thought process is more like [this](lcatt.jpg).
