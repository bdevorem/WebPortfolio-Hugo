+++
date = "2017-06-27T23:24:00-04:00"
draft = false
title = "AI Game Language Update"
tags = [ "Projects" ]
categories = [ "For Fun" ]
series = [ "AI Game" ]
+++

Test.

{{< editor >}}
;;;; An example to show that closures might work now
(def _cons                                     ;define our own cons function
  (fun '(_car _cdr)                            ;it takes in the first and rest
    (fun '(which) (if which _car _cdr)         ;and makes a closure
)))

;; convert a fake list to a string
(def go2String
  (fun '(l)                                    ;take in a list
    (if (= (l #f) nil)                         ;if we are at the end, stop
      (l #t)                                   ;and return our last element
      (+ "" (l #t) "  " (go2String (l #f)))    ;otherwise recurse
)))

(def myList (_cons 0 (_cons 1 (_cons 2 nil)))) ;make a list using _cons


(go2String myList)                             ;stringify
{{< /editor >}}

