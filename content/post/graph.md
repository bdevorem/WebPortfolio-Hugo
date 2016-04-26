
Networks
========

Create a Erdős–Rényi random graph.
-------


```python
import networkx as nx
g = nx.erdos_renyi_graph(20,0.10)
```

Plot the graph
------


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


![png](output_2_0.png)

