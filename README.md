# javascript-api
Javascript modern api example code


## Network API

## Description
Is used to query device network state, can be useful to make decision based on slow networks

## Code
```navigator.onLine``` (True | False) state of the network

```navigator.connection``` (information about the network)

### Events
```window.online``` (when network is available)

```window.offline``` (fires when network goes offline)

## Notes
- We can check network information like **download speed** or **type of network** etc.
- Not all browser support it now, so use **feature detection**

## References

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)