+++
date = "2017-06-11T23:24:00-04:00"
draft = false
title = "AI Game Components"
tags = [ "Projects" ]
categories = [ "For Fun" ]
series = [ "AI Game" ]
+++

# Parts

 - **Structure** - a 1x1 piece with mass that does not add functionality
 - **Wheel** - a 1x1 piece with mass that exerts a force in one of two
directions and is user-controllable. `(x)` gives the current power of the
wheel, while `(x y)` sets the power of x to y, where y is in `[-1,1]`, where
`1` is full power in the forward direction and `-1` is full power in the
reverse direction, with `0` being exert no force.
 - **Accelerometer** - a 1x1 piece with no mass that reports on the
force experienced by the robot at the location it is present on. It is
run by `(x)`, and returns something of the form `'(x y)` where x is the
horizontal acceleration experienced, and y is the vertical acceleration - this
will be `'(0 0)` when the robot is not accelerating.
 - **Gyroscope** - a 1x1 piece with no mass that reports on the torque
experienced by the robot at the point of the piece. It returns a single number.
 - **IR TOF** - a 1x1 piece with no mass that sends a beam out forward. The
beam travels 2 blocks, and if it colides with nothing the sensor reads -1.
Otherwise it will read in the range `[0,2]`, being the number of blocks as
a float to the point the beam collides with something. It is run as `(x)`.
 - **LIDAR** - a 1x1 piece with no mass that sends a beam forward. The beam
reads 0 until it travels at least 1 block, where it will then read 1. The
beam will travel up to 90 blocks. It is similar to the **IR TOF** in other
regards.
 - **SERVO** - a 1x1 piece that rotates. It is runnable in two ways. `(x)` 
returns its current rotation in degrees. `(x y)` sets its angle to y degrees.
The retun value of `(x)` and the value of y in `(x y)` are in the range 
`[0, 360]`, and values outside this range will be changed to fit this range
by adding or subtracting 360 until they are within the range.
 
You can try out the language below:

{{< editor >}}

Type your code and hit `Run` to see the result.
