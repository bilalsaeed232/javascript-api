# javascript-api
Javascript modern api example code


## CSS Paint API

### Description
The idea is to work with **CSS** using javascript (*Houdini Project*)
It uses ```paintWorklet``` and ```canvas``` to work on drawing elements.


### Code

##### Javascript
- ```paintWorklet```
- ```CSS.paintWorklet.addModule('yourscript.js'')```
- ```static get inputProperties()``` (returns array of properties to be used in css)
- ```paint(ctx,size,props)``` (ctx = canvasContext, props comes from ```inputProperties()```)
- ```registerPaint('propname', ClassName)``` (propname is to be used by css)

##### CSS
- ```background-image: paint(yourscript)```




### Notes
- make sure to feature detect ```paintWorklet``` in ```CSS``` object
- not fully supported yet (*only in chrome*)
- check for ```registerPaint``` method in your class
- declare ```paint``` method inside your script

### References
[Houdini](https://ishoudinireadyyet.com/)

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet)
