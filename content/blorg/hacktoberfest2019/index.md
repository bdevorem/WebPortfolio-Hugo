+++
date = "2019-10-10T00:31:30-04:00"
draft = false
title = "Great Starter HacktoberFest Issues"
heading = "Blog"
tags = [ "GitHub", "Digital Ocean" ]
categories = [ "For fun" ]
series = [ "For fun" ]
+++

Getting started with Open Source contributions can be a daunting task, but there are many projects
that are just waiting for contributors to help out with, regardless of skill level.

<!--more-->

## Hag  

[Hag](https://github.com/a3qz/hag) is a game a few friends and I started working on for a class
project. I actually enjoy playing the game despite its simplicity, so I add to it somewhat
frequently. This year a small number of people have made contributions, which are greatly
appreciated.

Because it is written in C, and even follows an ancient standard of C, and because it is meant
to run on linux, it might not seem the most accessible. However, there are actually some issues
that can be done without ever compiling the game, without even understanding a line of C!

The README file kind of sucks. We would love someone to fix up some typos, or better yet, give the
game a better backstory. [This issue](https://github.com/a3qz/hag/issues/71) covers that. You
can work on this without ever cloning the repository, and without knowing anything about C.

Speaking of story, [this issue](https://github.com/a3qz/hag/issues/72) would be a good fit for
anyone who can write better than awfully. Basically, every time you go down a ladder it prints out
the corresponding line from a file. At the moment, these lines are bland and the game would feel
much more polished if these were updated.

## RoboViking LEDs  

I have a repo set up for the LED controllers I have given FRC Team 2607. You can find it
[here](https://github.com/JohnathonNow/RoboViking_LEDs). If anyone is familiar with Arduino and
would like to contribute new LED patterns, feel free to make a pull request.
That is, if you want a pattern for St. Patrick's Day, feel free to code up an Irish flag scrolling
by, and make a pull request. I even have a
[blog post](https://johnwesthoff.com/projects/leddrawing/) meant to aid in developing LED patterns.

Also welcome are any functions related to making it easier to make other patterns. For example,
at the moment there are no functions to perform tasks like setting every color on the strip to
one single color. Functions like this would make designing more patterns easier and would be
appreciated.  

## Random Old Java Apps  

I have a two old Java projects I would like to be able to run again. I have absolutely no idea
what the state of these two projects is, but would appreciate someone porting them to a more modern
Java IDE from the current NetBeans. If anyone wants to take a stab at it, there is
[one here](https://github.com/JohnathonNow/VH-Remake) and 
[another here](https://github.com/JohnathonNow/Bending).

The latter even has a useless files directory. I'd be happy with a PR just removing those
files...


## Random Blog Work  

Another issue requiring no programming work is 
[this one](https://github.com/JohnathonNow/johnwesthoff-blogwork/issues/2).
To summarize, I have a drawing game where players have to draw a given word. The list of words
at the moment was stolen from another game, which is bad. Basically, I just need somebody to
find me a list of words such that the entire list is copyright free and each individual word is
something that can be drawn appropriately.

I also have a note taking program I call notre. The list of keywords it recognizes is pretty small,
so it shouldn't be hard for someone to add more. 
The issue is [here](https://github.com/JohnathonNow/johnwesthoff-blogwork/issues/3).

## Markdown-PP  

This one requires some actual programming, but a project I have found easy to contribute to in the
past is [this one](https://github.com/jreese/markdown-pp). There are a number of self contained
issues that are easy to work with - some of which already have proposed solutions just waiting
to be turned into pull requests.

## Others  

If there are any other projects you know about, feel free to write a pull request for my blog itself
and add them here! This blog post is
[at this url](https://github.com/JohnathonNow/WebPortfolio-Hugo/blob/master/content/blorg/hacktoberfest2019/index.md).
