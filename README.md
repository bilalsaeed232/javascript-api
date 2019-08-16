# javascript-api
Javascript modern api example code

## Code
Two main functions mainly used:

```requestAnimationFrame(animFunction)```

```cancelAnimationFrame(animReference)```

## Description
Every time the brower repaints the page it will call this ```animFunction``` for us


## Notes
- Better than ```setInterval``` (performance wise)
- animaion is done 60 frames/sec
- Prefered way for javascript animation


## References
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [W3C](https://www.w3.org/TR/animation-timing/)
- [CSS Tricks](https://css-tricks.com/using-requestanimationframe/)