+++
date = "2016-07-28T23:24:00-04:00"
draft = false
title = "Legacy - Why Names Are Important and You Should Always RTFM"
tags = [ "Work", "RPG II", "IBM", "Legacy" ]
categories = [ "For Work" ]
series = [ "Summer Job" ]
+++
My summer job always ends up being a grab bag of
different assignments, ranging from IT tasks such
as installing a new network switch or deracking
an old server to more developer tasks such as
writing a document management program. Most recently,
however, I was tasked with updating some of their legacy
programs that run on their [IBM AS400](https://en.wikipedia.org/wiki/IBM_System_i).  


The more impactful change I was instructed to make
was to reverse the sort order on a list of jobs for
a given company - since 1991 they were listed in
ascending order, meaning users had to scroll to get
to the newest jobs. I copied their old source file to a
new one, and made the necessary changes.
Unfortunately, this is where my trouble began.  


I successfully compiled the program with my changes, and I
created a new procedure for running it. I ran this new procedure,
and immediately got an error about how it was unable to open
the file "WK", which was a [workstation file](http://publib.boulder.ibm.com/iseries/v5r2/ic2924/books/c092507426.htm).
At first I assumed that one of my changes was to blame, but
I needed more data to confirm - so I copied the original source
again and compiled it without change (other than the program name, of couse).
Well, wouldn't you know it, it gave the same error! Was the original code
faulty? That seemed unlikely.  
	
{{< figure src="../maybeimthefool.png" 
	   caption="I'm certain this system is out to get me."
>}}

The next day I had off, and my dad, who is more familiar with the IBM system
but far less familiar with programming, continued my work. To test whether
it was the original source to blame or something we did wrong in compiling it,
he compiled another less critical program, and it ran without complaint.  
This seemed to confirm that the original source was incorrect, but I was not satisfied.
I was sure there was something we missed, and luckily the room the old IBM was in
was full of reference manuals.  

After I read the RPG II reference manuel for a bit,
I stumpled upon a section detailing the optional line continuation arguments
for specifying a workstation file.  
One of the arguments, FMTS, specified a screen format file. This line was
not present in the original source, and in this case it defaults to
the program name with "FM" appended to the end. This was why we were getting
an error about being unable to open a file! We had assumed we hadn't changed
anything, but since we changed the name of the program, it was trying to open
a format file that didn't exist! Adding that argument and pointing it to the
right file fixed out issues - the source was fine, we just couldn't copy
it and compile it. The name of the program mattered, and we only figured
that out by reading a manuel that's several years older than I am.
