+++
date = "2019-11-03T23:24:00-04:00"
draft = false
title = "Keep your Python data inside your scripts"
tags = [ "Projects" ]
categories = [ "For Fun" ]
series = [ "" ]
+++
I've been working late nights for an upcoming conference deadline, and over the past two nights
between the hours of 1am and 3am I have completed what is probably the worst python library idea
of all time.

<!--more-->

While writing scripts to evaluate my current research project, I wanted some
way to persist a small amount of data within a shell script. The solution
I ended up using was to write the variable to a file to store it, and
set the variable equal to the result of `cat`ing the file to load it.
So, something like this for loads:
```sh
myVariable=$(cat db)
```
and something like this for stores:
```sh
echo $myVariable > db
```

This got me thinking, this is a thing I do want to do occasionally, and it's
sad that it's something I have to put thought into doing. So I wanted some
way to write scripts where the variables are durable.

Now, of course, we all know that [bash sucks](https://bashfulbytes.com/posts/bash_sux.html),
so it shouldn't be done with a bash script. My original plan was to write a new scripting
language, but I was eager to have something done, and a big task like that would hurt my
actually important work. So, I settled on using Python, since I knew I could use properties
to do things when a variable was set to something.

Another important feature I wanted was for the persisted data to be stored in the script itself.
The reason for this was that I don't like files cluttering places, and if the script
ever moved (either directories, or even to other servers) I wanted the data to be there with it.
My original idea to achieve this was to replace lines assigning an intial value to a variable
with a line assigning it the most recent value. For example, consider the following snippet:

```python
a = Value(0)
a.value += 1
```

Here, `a = Value(0)` sets the initial value for the `a` variable to be `0`. Then, `a.value += 1` 
increments it by one. In doing so, my library would write to the script itself, overwriting
the `a = Value(0)` line to become `a = Value(1)`. 

There were two problems to this approach. First off, whatever I wrote there would have to be
the same length as a string, so if I had to write `a = Value(10)` when it used to say
`a = Value(9)`, I'd have a bad time as I'd eat up the newline that follows. The other problem
is that apparently writing to the middle of files makes operating systems sad. So I needed
to do what I wanted by only writing to the end.

The solution I went with, then, was to store the most recent value of variables in comments
at the end of the script. Essentially, I store (key, value) pairs at the end of the script,
and load them into a dictionary when the script imports my library, which I named **PyCaboose**.
More specifically, I take this (key, value) pair, and I 
[pickle](https://docs.python.org/3/library/pickle.html)
it, and then encode the
resulting pickle in [base64](https://en.wikipedia.org/wiki/Base64).
Now, by default, the key is the line number the Value
object was created on (though users can specify a different key through the constructor).

Now, I still can't write to the middle of files, so when you write to an object in PyCaboose,
it deletes the line storing the old value from the script, including everything after it.
It then writes all of the other values that it had to delete before writing the new value.

I think the library is best demonstrated with an example:
```python
#!/usr/bin/env python
from pycaboose import Value

myInt = Value(0)
print(myInt.value)
myInt.value += 1
myStr = Value("hello")
print(myStr.value)
myStr.value += "!"
```

The first time you run it, it will print out
```
0
hello
```
<br>
However, it will also write to the script itself. Importing **PyCaboose** at all will cause this
comment to be added - `# pycaboose #`.  
Additionally, the line `myInt.value += 1` will cause `# gANLBEsBhnEALg==` to be written,
and `myStr.value += "!"` will cause `# gANLB1gGAAAAaGVsbG8hcQCGcQEu` to be appended to
the end of the file.  

Thus, after the first run, the script will now read:

```python
#!/usr/bin/env python
from pycaboose import Value

myInt = Value(0)
print(myInt.value)
myInt.value += 1
myStr = Value("hello")
print(myStr.value)
myStr.value += "!"
# pycaboose #
# gANLBEsBhnEALg==
# gANLB1gGAAAAaGVsbG8hcQCGcQEu
```
<br>
Now, if you run this script again, when **PyCaboose** is imported, it will see the comments
at the end and set the values within its internal database accordingly. Then, instead of
using the value provided in the constructor of the Value object, it will use these more
recent values. So the result of the second run is this:
```
1
hello!
```
<br>
Additionally, when we hit the `myInt.value += 1` line, **PyCaboose**
will know that there are values stored after `myInt` at the bottom of the script, so
it will delete everything in the file after and including `# gANLBEsBhnEALg==`, which
was the comment that defined the value for `myInt`,  before
re-writing the deleted text, `# gANLB1gGAAAAaGVsbG8hcQCGcQEu`, and the new value, 
`# gANLBEsChnEALg==`, to the end of the script. Then, when it his the `myStr.value += "!"` line,
it will have to do the same as now its value is no longer the last one stored in the script.

So, after all is said and done, the script will read:
```python
#!/usr/bin/env python
from pycaboose import Value

myInt = Value(0)
print(myInt.value)
myInt.value += 1
myStr = Value("hello")
print(myStr.value)
myStr.value += "!"
# pycaboose #
# gANLBEsChnEALg==
# gANLB1gHAAAAaGVsbG8hIXEAhnEBLg==
```
<br>
You can check out the code of the project
[on GitHub](https://github.com/JohnathonNow/pycaboose)
and use it with your own scripts as it is also [on PyPi](https://pypi.org/project/pycaboose/1.0.1/)
although I will provide no guarentee or warranty that it will not lose your data or mangle
your scripts. It shouldn't / probably won't, but if you do use it, don't use it to store
important data, and keep a backup of your script (or check it into git).
