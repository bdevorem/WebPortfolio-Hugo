+++
date = "2016-12-20T17:58:30-05:00"
draft = false
title = "A Recurrent Neural Network for Wolfrat Bot"
tags = [ "Projects", "Tensorflow", "Web", "RNN", "Neural Networks", "Chatbot" ]
categories = [ "For Fun" ]
series = [ "For Fun" ]
+++

For fun, I decided Wolfrat Bot needed a bit more, err, personality.
So, I set off to make him one. After training an RNN for a few hours
on my desktop's GPU, I had interesting results but ultimately failed
at achieving quite what I wanted.

Anyway, I encountered some huge hurdles
I found out AFTER training for ~8 hours that the way I was encoding
the characters for the network input (and thus, the way I was
decoding the network output) behaved non-deterministically
between Python 3.5 runtimes!
I was constructing a set out of the input dataset, and making a dictionary
out of it. In Python 2.7, it behaved the same way every time. Now, I don't
expect sets to store the elements in any order (that's kinda the point),
but I had at least expected the order to be consistent, though I guess
that was awfully presumptious of me.

To demonstrate, running
`python3 -c 'print(set("test"))'`
more than once yields different results
for me. On the other hand, running
`python2 -c 'print(set("test"))'`
more than once always yields the same results.

The results were about what I expected from the character RNN model that
I used - it generates messages, but it doesn't generate replies.
The following exchange demonstrates what I mean:
```
Me: How are you?  
RNN: Yes.
Me: What are you up to?
RNN: u suit the lack of empires
Me: Do you hate me?
RNN: we could do is that the guy who dont see a student
Me: Who am I?
RNN: we still don't know if they wanted to other people equivale won't tell us a strategy free episodes of distributed stuff in the CVRL and i3status integes, desktop gram
Me: That didn't even make any sense.
RNN: it's confusing it
Me: me too
RNN: https://twitter.com/NDLibraries/status/721324222115053512166284272434243135-281642214/01130-0082826177215_n.jpg
```
OK, that last one is the interesting - up until 'status' that link
is perfectly valid. Regardless, it doesn't seem to care what was said
previously - it just says whatever it feels like.
It is clear that a different approach might be necessary for achieving
good results - a character level RNN might be insufficient for generating
relevant conversation.
