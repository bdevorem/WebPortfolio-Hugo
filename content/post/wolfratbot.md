+++
date = "2016-04-05T01:18:53-04:00"
draft = false
title = "Wolfrat Chatbot"

+++

My friends and I primarily communicate through a [GroupMe]
(https://groupme.com) chat that we named **Wolfrat**.  

To liven the place up, I thought I would add a chatbot.  

So, I quickly threw together (over a day or so) WolfratBot, which uses the
GroupMe bot API. The API HTTP POSTS a given callback URL, which is set to
a [WSGI](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface)
script that decides on the appropriate reply.  
The program is very modular, and new functionality can be added without
disrupting any other modules. 

The source is available on my [github](https://github.com/JohnathonNow/wolfratbot).

