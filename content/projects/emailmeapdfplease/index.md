+++
date = "2019-11-11T23:24:00-04:00"
draft = false
title = "Emailing myself in order to convert papers to email to my e-reader"
tags = [ "Projects", "Bash" ]
categories = [ "Does this even display anywhere?" ]
series = [ "Automation" ]
+++
I find reading two column papers to be bothersome on most devices. What can we do to fix that?

<!--more-->

Well, for starters, I stumbled upon [k2pdfopt](https://www.willus.com/k2pdfopt/). Basically, it
does exactly what I need in order to have my Kindle or my phone display papers in a more friendly
way - it reformats the papers so they are a single column and are split into different pages.
It works pretty well, and I will be using it in the future.

So that's the end of the post, right? Well, I am exceptionally lazy, and now I need to worry
about getting the PDFs to my Kindle. Fortunately, Amazon provides you with an email address
that you can send files to in order to easily put files on your device. So now I can just run
k2pdfopt and email the resulting files to my kindle email address.

But I said I'm **exceptionally** lazy, so even this is too much of a hassle. Roughly half of
all PDFs I read are emailed to me. This makes the above kindle email feature extra useful,
as I can just forward the email to my kindle email address and it will be downloaded automagically.
So, I figured I should set something up where I can forward an email somewhere where it'll be
processed through k2pdfopt and then forwarded to my kindle email address.

My solution was to set something up on my VPS (so I don't have to pay for anything extra.
This might be a good application for serverless, but why bother. I could also use an email
service like sendgrid, but again, why bother.). The kindle email address has a whitelist system,
so I added an email from my domain to the whitelist. I then told [postfix](http://www.postfix.org/)
to route emails to a certain user (I won't say which) to a script. This script, listed below,
processes the incoming email, gets the attached PDFs, and sends the new ones to my kindle.

```bash
#!/bin/bash
RCP1='MY KINDLE EMAIL ADDRESS'
dir=$(mktemp -d)
cd $dir
munpack #get the attachments from the email
for f in *; do #iterate over those attachments
    #the echo is to confirm the default choices
    echo | /home/john/bin/pdf2kindle/k2pdfopt "$f"
    #k2pdfopt renames the file, so this gets the new name
    f2=$(basename "$f" | sed 's/\./_k2opt./')
    #send the new file to my kindle via email
    mpack "$f2" $RCP -s "Here's a file!"
done
cd .. #cd somewhere nice so we can delete the directory
rm -rf $dir #this will always scare me
```

So now all that's left is to write a forwarding rule in gmail to automatically send PDFs along
this pipeline, because nobody would ever abuse that to mess with me.
