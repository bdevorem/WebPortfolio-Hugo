+++
date = "2017-07-06T23:24:00-04:00"
draft = false
title = "Blah"
tags = [ "Projects" ]
categories = [ "For Fun" ]
visible = false
series = [ "AI Game" ]
+++

<!--more-->
{{< editor >}};;;;A demo for driving a little car robot
;;define the IDs of the six wheels
(def lf (part# 3) ;the left front wheel is the third part of the robot
     rf (part# 4) ;the right front wheel is the fourth
     lm (part# 5) ;the left middle is the fifth
     rm (part# 6) ;right middle
     lb (part# 7) ;left back
     rb (part# 8) ;right back
)
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
  (log "test")
)))
{{< /editor >}}

{{< game >}}
