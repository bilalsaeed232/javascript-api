# javascript-api
Javascript modern api example code

# Beacon API

## Code
```navigator.sendBeacone(url, data)```

## Description
When you want to send data to server where response is not required e.g sending analytics data, the browser will send data to server when in idle state hence not affecting the performance of the app.

## Notes
- only data which is not related to application should be send using beacone api
- should always have a check of ```navigator.beaconApi``` to make sure its ready to be send or browser support
- Increase the performance of the web app.
- Any data can be sent i.e strings, blog, images, arrays etc.
- Useful especially ajax cannot send when page is unloaded

## Tools used
- [PutsReq](https://putsreq.com/9d530Ux9yuSogTkFv1PR/inspect)

## References
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API)
- [W3C](https://www.w3.org/TR/beacon/)