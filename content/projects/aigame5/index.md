+++
date = "2017-07-29T23:24:00-04:00"
draft = false
title = "Wheel in the Sky"
tags = [ "Projects" ]
categories = [ "For Fun" ]
series = [ "AI Game" ]
+++
Despite the delay, I am still working on my AI/robot game thing.
A while ago I added what I said would be my next steps, but never
posted about it. So I'm doing that now.

<!--more-->
I feel that Finite State Machines (FSMs) are a useful concept
for automations such as robots. So, I added language-level support for them.
I added a state function of the form `(state variable default state1 state1action...)`. `variable` is the variable in which the state information is stored.
`default` is what action to take then the state is invalid or undefined.
Following the `default` argument are pairs of state names and state actions.
All state actions, including the `default` action must return which
state to go to next. This can be paired with `(do ...)` calls to do multiple
things within the state, and `(if ...)` calls allow you to branch to
different states conditionally.

At its core, the FSM support I added is basically a C style switch
where every case assigns to the variable being switched on, including
the default case. So, I figured I should also add a regular switch statement,
`(switch value default case1 case1action)` where `value` is the value to
switch on, `default` is the action to do if no case matches the value,
and following those are pairs of values and actions, where the actions
are performed only if the case before them matches the value being switched on.
Some trickery lets you use `switch` as an `(if ...)` else chain, as the
language does not support else.
```
(switch #t (ELSE CODE)
  (CONDITION1) (WHAT TO DO IF CONDITION1)
  (CONDITION2) (WHAT TO DO IF CONDTIION2 BUT NOT CONDITION1)
  (CONDITION3) (WHAT TO DO IF CONDITION3 BUT NOT THE PRIOR ONES)...
)
```

In the prior code, by switching on `#t` (the true literal), we
execute the action corresponding to the first true case, just like
an if ... else if ... else if ... else if ... chain in C.


I also added a few featurs for the robot part of things. I finally
made the wheels turn corresponding to their speeds. I also added support
for basic telemetry and debugging, as that is very useful.
`(log message)` will append `message` to a text block beneath the game
view. This text block only shows messages logged during the last game
frame, so it is not like a long console log.
Finally, I started playing around with adding a gyroscope sensor, which
reports change in rotation. Below I show off the new gyroscope and logging.

{{< editor >}};;;;A demo for driving a little car robot
;;define the IDs of the six wheels
(def lf (part# 3) ;the left front wheel is the third part of the robot
     rf (part# 4) ;the right front wheel is the fourth
     lm (part# 5) ;the left middle is the fifth
     rm (part# 6) ;right middle
     lb (part# 7) ;left back
     rb (part# 8) ;right back
)
(def gs (part# 9)) ;define gyroscope
;;define two helper functions for controlling the robot like a tank
;;each take a speed in the range [-1, 1]
(def left  (fun '(speed) (do (lf speed) (lm speed) (lb speed)))
     right (fun '(speed) (do (rf speed) (rm speed) (rb speed))))

;;define the function that gets called every iteration of the game loop
;;it must be called run - it must take no arguments,
;;and it can alter global state
(def run (fun '() (do
  ;be a finite state machine and store the state in the variable STATE
  (state STATE "START_STRAIGHT" ;default state is "START_STRAIGHT"
   ;when state is start straight go forward and set the timer to 50, goto straight
   "START_STRAIGHT"  (do (left -0.6) (right 0.6) (def time 50) "STRAIGHT")
   ;when the state is straight, subtract 1 from time, if it is below 0 go to start turn
   "STRAIGHT"        (do (def time (- time 1)) (if (> 0 time) "START_TURN" "STRAIGHT"))
   ;when state is start turn, set wheels to turn and set the timer to 50, go to turn
   "START_TURN"      (do (left 0.6) (right 0.6) (def time 12) "TURN")
   ;when state is turn, subtract 1 from time, if it is below 0 go to start straight
   "TURN"            (do (def time (- time 1)) (if (> 0 time) "START_STRAIGHT" "TURN"))
  )
  (log (+ "Gyro: " (gs)))
)))
{{< /editor >}}

{{< game >}}
