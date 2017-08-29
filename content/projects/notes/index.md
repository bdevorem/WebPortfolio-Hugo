+++
date = "2017-08-29T23:24:00-04:00"
draft = false
title = "Markup for note taking"
tags = [ "Projects" ]
categories = [ "For Fun" ]
series = [ "School" ]
+++
I'm a week into my senior year, and I've gotten sick of using OneNote for note taking.
As a linux user, I'm pretty much limited to the web interface or WINE, and
I'd really prefer neither.
I've also had plenty of issues with notes not syncing / getting lost in the cloud, which is more than enough of a reason to switch to something else.

<!--more-->

Last semester I tried taking notes in markdown, then translating them into
HTML using 
[hugo](https://gohugo.io/)
or [grip](https://github.com/joeyespo/grip).

I had one issue with markdown though, and that's how it handles whitespace.
The way it ignores leading whitespace and is slow to add newlines is great
when I am writing blog posts, but when I take notes I use spacing
to group information. My notes are full of things like:

```
Regular Expressions
	They are cool
	There is this thing called the Kleene Star
		L("it*") = {i, it, itt, ...}
		r** = r*
	Epsilon is a valid regular expression
		2 * 2 = 4 * 1
```

which renders like this in markdown:

Regular Expressions
	They are cool
	There is this thing called the Kleene Star
		L("it*") = {i, it, itt, ...}
		r** = r*
	Epsilon is a valid regular expression
		2 * 2 = 4 * 1

which is no good. I could just use plain text, but when I'm reading my
notes, I'd like for things like \epsilon to render as an epsilon.
So, ultimately I decided to throw together my own little markup language
and a python script to convert it to HTML. It was done in under an hour,
and is pretty lazy (to make whitespace nice it just sticks a `<pre>` at
the start...), but it does what I need it to.

This input:

```
Test Header
==========
Part 1
------
This text is normal
	And white space is safe from distress
	*and you can make text bold*
	_or underline it_
	And you can `toggle *bold* for when you need it`
	You can also escape stars\*
	But a lone backslash doesn't need escaping \
	Nor does a double backslash \\
	And you can use a few math symbols
	r = `"a*"`
		\epsilon \isin L(r)
		"a" \isin L(r)
		\pi is a number
```

will produce this output:

<pre><h1>Test Header
</h1><h2>Part 1
</h2>This text is normal
	And white space is safe from distress
	<b>and you can make text bold</b>
	<u>or underline it</u>
	And you can toggle *bold* for when you need it
	You can also escape stars*
	But a lone backslash doesn't need escaping \
	Nor does a double backslash \\
	And you can use a few math symbols
	r = "a*"
		ε ϵ L(r)
		"a" ϵ L(r)
		π is a number
</pre>

which is good enough for me. The source is available
[in my blogwork repo](https://github.com/JohnathonNow/johnwesthoff-blogwork).
