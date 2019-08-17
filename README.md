# javascript-api
Javascript modern api example code

# IntersectionObserver API

## Code
```new IntersectionObserver(callbackFunc, options)```

## Description
Is used to identify if an element is visible to the user, also how much is it visible.

## Notes
- Should not be used for scrolling animation as there are better alternatives
- ```threshold``` should be specified as array of floats, which specifies percentages of visibility
- Callback function will be called on each ```threshold``` specified

## References
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [W3C](https://www.w3.org/TR/intersection-observer/)