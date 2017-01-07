+++
date = "2016-04-25T16:35:53-04:00"
draft = false
title = "NetworkX Test"
#FeaturedImage = "output_2_0.png"
tags = [ "Jupyter" ]
categories = [ "Jupyter" ]
series = [ "Jupyter" ]
+++
Once again, I was playing around with [Jupyter](http://jupyter.org/). This time I was more interested in seeing how it handled 
[NetworkX](https://networkx.github.io/). It seemed to work fairly well, though
the kernel died using above 500 connected nodes.
<!--more-->
Networks
========

Create a Erdős–Rényi random graph
------


```python
import networkx as nx
g = nx.erdos_renyi_graph(20,0.10)
```

Plot the graph
-----


```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
# disable some extras we don't want
ax.grid(False)
ax.xaxis.set_visible(False)
ax.yaxis.set_visible(False)
# draw the graph
nx.draw_networkx(g,ax=ax)
```


![png](../output_2_0.png)

