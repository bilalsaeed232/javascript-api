# javascript-api
Javascript modern api example code


## Fullscreen API

### Description
Allow your app to incorporate fullscreen support from browser, full screen can be achieved on whole document or any ```HTML Element```


### Code

#### Javascript
- ```elem.requestFullscreen()```
    - ```elem.webkitRequestFullscreen()```
    - ```elem.mozRequestFullScreen()```
    - ```elem.msRequestFullscreen()```

- ```document.exitFullscreen()```
    - ```elem.webkitExitFullscreen()```
    - ```elem.mozCancelFullScreen()```
    - ```elem.msExitFullscreen()```

##### Events
- ```fullscreenchange```
    - ```mozfullscreenchange```
    - ```webkitfullscreenchange```
    - ```msfullscreenchange```

#### CSS
- ```:fullscreen button``` (targets the button when document is in fullscreen mode)
    - ```:-webkit-full-screen button```
    - ```:-moz-full-screen button```
    - ```:-ms-fullscreen button```
    - ```:full-screen button``` (older version of api)




### Notes
- Currently limited support by browsers
- mostly **prefixes** are used


### References
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

[Can I Use?](https://caniuse.com/#feat=fullscreen)