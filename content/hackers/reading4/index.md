+++
date = "2017-02-24T23:24:00-05:00"
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
my thought process is more like [this](lcatt.jpg). In Java, I my thoughts
tend towards "Gotta make a Singleton Factory of Factories, with a dozen
Abstract Classes and a few String Builders."
But like, actually, languages do affect how you approach problems, and
problems certainly affect what language you choose to solve them in.
For instance, if I want to process text in UNIX, I would obviously use
C++, and if I wanted to write a tripple-A video game, I would use AWK.

I disagree with the wording PG uses to describe the power of languages.
It seems that he equates "more powerful" to "higher-level", which I feel
is a mistake - we already have a term for "higher-level", it's "higher-level."
It also seems that adding on abstractions does not make a language more
usable or "more powerful" in all cases.
PG suggests abstracting strings away to lists.
Why? A huge portion of data is text, strings. I believe strings to be a
_useful_ abstraction. Now, I do believe languages vary in _power_, but I
do not believe higher abstraction is the sole source of power. I believe
the ultimate determiner of a language's power is its usability. And I mean
usability in several forms - the programs a language creates should run
efficiently, a language should be easy to write it, it should have easy
to use tooling, it should be easy to reuse and share code, etc.
Abstraction certainly helps with reusing code and making code easy to write
(in general), but it often hurts runtime efficiency.

I'mma just copy-paste the next question, as I find it hard to write an intro
to:

 > Discuss your experiences with alternative languages such as Lisp, Scheme,
 > Erlang, Haskell or any non-mainstream language. What drew you to these 
 > languages? Did you find them to be useful? Do you still use them? 
 > Explain why or why not.

So, I actually [did a project in a lisp a while ago](https://johnwesthoff.com/projects/firstaudacityplugin/).
If you clicked that link, realize I had never really done much functional
programming before, and I went about that problem with a very imperative
mindset. If you didn't click the link, the lisp I used was Nyquist, and it
is for audio stuff, like writing plugins for Audacity. I was forced to use
it against my will by a friend, and I somewhat hated it - I _needed_ side
effects (Audacity runs your plugin on each track sequentially, so to
read data from one track into another _required_ me to not be purely
functional!) Anyway, I do think a lisp is a good language for processing
audio and signals in general - audio and signals are really just lists of
values, and so using a language built around list processing just makes
sense. So yes, non-mainstream languages can be useful. 
Do I still use them? I might use nyquist in the future, I am working on
research relating to music... Other non-mainstream languages?
Well, Shaq makes a really compelling argument for Go, but that's bascially
mainstream. Clojure looked interesting, but like, why would I want to
run anything other than Java in the JVM? Scheme was fun, but then we
were forced to do Android when I really wanted to do x86. I think designing
some hardware around a lisp would be fun, too. 
OOH! Does Verilog count as non-mainstream? Because I hate it. Not because
the language is bad, but because the tooling sucks.

In 100 years, languages might very well look very similar to what we have now.
PG talks about how much things changed in the last 50 years [now 60], but
I think he's misguided. Languages changed a lot from the 60's to 70's: we went
from garbage like IBM RPG and FORTRAN, which were field based languages
where you had to have different token types in specific locations
within a line to C, which is much more natural and forgiving. 
From C onward, things haven't changed much. We have C++, which is just
now beginning to move away from "C with Objects", Java, which is just
"C++ but verbose with a seatbelt",
Python, which is just "Java but interpretted and less verbose", Python3, which
is just "Python2 but worse", C#, which is just "Java if Sun was Microsoft",
and a bunch of other things that never really differ from the rest.
Well, languages do often differ from the others, it's just that, those that
do dare to be different tend to not get adopted. And I think there is a
good reason for that - C has a perfectly sensible syntax, and so much
is written in it, we're basically in a giant legacy system made up
of the whole of all programming. And I'm fine with that, C is great.
If I were only allowed to use any two languages for the rest of my life,
I would probably choose C and Python.

But how _could_ they change? Well, parrellization [probably spelt that
wrong, not fixing it] has always been just around the corner (PG even mentions
that), but it might be true now more than ever
 - GPUs are killing it in many applications,
especially Neural Network research (which has also been just
around the corner since the 1950s). It is possible that we create a language
(and hardware to go along with it) that makes parellsasdization easy.
Maybe Clojure, if Charles has his way.
But wait. CUDA is most often used in C, C++, and FORTRAN. 
Well, what about security? Maybe we move away from C there. We go to Rust.
So, we get "Safe C++". Sure is different from what we have now.

Everything wrong I see with C seems to be solved with Python.
String processing, code reuse and packages, all better in Python.
Hey, maybe that is the answer. There won't be a rapid change in languages,
but maybe they'll change over time to become unrecognizable.
Unfortunately, I just don't see it changing too much - human language
itself is pretty stable - it does change over time but it rarely changes
radically. I believe the future will bring languages syntactically
similar to Python, perhaps with more features. AI might takeoff, in which
case we might see something like "problem description languages" appear,
but that seems awfully optimistic for me.

---
I'm so glad I found out how to do horizontal breaky things.
They improve my post layout like 10 fold.

Anyway, you're probably asking yourself "Why? Why would John Effrey, the lug
mascot, write a long, boring, incoherent blog about programming languages?"
Ultimately, my answer is a simple one - I am dating someone who wants to
go into PL research.
OOH! I know the future of programming languages now. I'm sure it has something
to do with the work of [Breezy](http://bashfulbytes.com/).
