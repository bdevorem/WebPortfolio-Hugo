+++
date = "2016-12-17T23:03:30-04:00"
draft = false
title = "Data Structures Final Project - SnowGPS"
tags = [ "Projects", "Javascript", "Web", "Leaflet", "Python", "C++" ]
categories = [ "School" ]
series = [ "Data Structures" ]
+++

For our final project for our Data Structures course, my group decided to
make a GPS app that finds the path with the minimum time spent outdoors.  

We wrote a python program to allow us to map our campus as an undirected graph,
with vertices at the intersection of every outdoor path, and at every door of every building.  
To decide paths, it uses
[Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra's_algorithm).
To achieve our goal of deciding paths with the least time outdoors, we assign
weights of 0 to all edges that connect nodes within buildings, and for each
other edge the weight is the linear distance between the nodes.

The work was divided into four main parts: the dijkstra's algorithm program,
the web api, the web client, and scripts for mapping points and testing.  
The client is hosted [here](https://johnbot.me/client), and while it should
work on a computer, it is really meant for mobile use. (Also note it really,
really won't work if you're not on Notre Dame's campus.)

The client makes a request to the api, which runs the dijkstra's program, which
outputs the best path back to the api, 
which sends the results back to the client.
The map is displayed using [leaflet](http://leafletjs.com),
which is also used for drawing the path, the chosen destination, and the user's
location.

The source is in our [GitHub Repo](https://github.com/dontworrybhappy/SnowGPS).

We also recorded a promotional video for the project:  
{{< youtube 0cWluu1NP4g >}}
