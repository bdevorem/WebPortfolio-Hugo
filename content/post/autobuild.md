+++
date = "2016-12-20T17:58:30-05:00"
draft = false
title = "Automatic Site Rebuilding with PHP and GitHub"
tags = [ "Projects", "PHP", "Web" ]
categories = [ "For Fun" ]
series = [ "For Fun" ]
+++

The content of this website is on GitHub
[here](https://github.com/JohnathonNow/WebPortfolio-Hugo).
A nifty feature about GitHub are its
[Webhooks](https://developer.github.com/webhooks/).

I wanted to be able to add content here without having to SSH into
my server, `cd`-ing into the www directory, `git pull`ing, and `make`ing,
as those steps are tedious. So, I set up a GitHub webhook to POST to a PHP
page on the server. The basic form of this PHP page is just:  
{{< highlight php >}}
<?php
    passthru("MYSCRIPT.sh");
?>
{{< /highlight >}}  
Where `MYSCRIPT.sh` is just a script that pulls and makes the site.  
Now, GitHub also allows you to set a secret, which allows you to
secure the page against malicious actors. For this application, I
find that a bit overkill (I figure the worst they can do is DOS me).
Instead, I opted for rate limiting, as it is simpler to implement.

Now, whenever I push to my repo, my server will automatically pull and
recompile the site, which is pretty neat.
