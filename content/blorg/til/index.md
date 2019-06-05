+++
date = "2019-04-16T02:03:30-04:00"
draft = false
title = "TIL Collection"
heading = "Blog"
tags = [ "TIL" ]
categories = [ "TIL" ]
series = [ "Learning" ]
+++

I created this page to post random things that I learned that I figure I should share.
The things I learn about that I post here can be any range of things, but I will try to keep it technical and avoid posting things
like "TIL that the Washington Redskins are not from the state Washington." 

The posted TILs will also not necessarily be things
that aren't widely known - they will only be things that I did not know before the date I added them. There should also be no expectation
that these are posted daily, weekly, monthly, or even yearly. In return for not expecting that, I will not expect anyone to read this. Deal?

I tend to update a fair number of my posts after posting them, but usually only in the first few days they are up - ideally I wouldn't
touch them at all. This post will be different - by design it will be updated occasionally. When that happens, it will be pushed
to the front page again. I will also treat it like a stack and put the newest TILs at the top.

Anyway, here I go!

## 2019-05-17
### TIL about modifying history entries in JavaScript
In the prior version of my recent [post on LEDs](/projects/leddrawing/), I did some nonsense to make it possible to share
code for the LEDs within my site. Namely, I set up a pastebin service that the **Share** button `POST`s to, where it then
gets back an ID for loading the pastebin. It then reloads the page with `?pb=PASTEBIN_ID_FROM_THE_POST` tacked onto the URL.

This page reload is gross, and I don't like it, but had no intention on doing more with it because I felt it was good enough.  
That changed when I watched a somewhat unrelated [video on this uXSS attack](https://www.youtube.com/watch?v=0uejy9aCNbI)
which introduced me to the `history.replaceState` function. Anyways, now the **Share** button on my LED post uses that instead
of reloading, which is way nicer.

## 2019-05-16
### TIL to do :!python in vim
I had known for a while about filtering text and the like by using `!command` in [vim](https://emacs.dev), but it had never occured to me that
that could be used to write little snippets of code to run in either bash or python. This realization came about because I needed
to add 100 fields to a struct to test something. 

I know better than to type that by hand, but my first thought was pretty dumb.  
I didn't care what the fields were named so long as it was unique, so I started by typing:
```rust
x0: u32,
```
which I copied and pasted, and incremented once with `CTRL+a`.
I then copied that and pasted, and incremented with `10 CTRL+a`, which I then copied and pasted
and incremented with `100 CTRL+a` and so on.

My next thought was to write a python script that just spat out 100 field declarations, run it, and then copy the output.
While I don't want to live in my editor (I'm not an emacs user, after all), I don't want to
switch out of it for things I feel should be part of the editor, so I wanted a more direct way to do this.

So I thought, "what if I ran `:!python` and then typed my script?"  
But this is gross - I'm basically typing into a python shell that I cannot
see the output of. 

The final realization, then, was that I could type my script out in the program I was editing, select the lines of the script,
and then run `:!python`.  
So instead of pasting and incrementing over and over like a madman, I could simply type
```python
for i in range(0, 100):
    print("x{}: u32,".format(i))
```
select it, and bang python I got my 100 fields.
