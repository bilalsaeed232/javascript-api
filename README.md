# javascript-api
Javascript modern api example code

## DeviceMemoryAPI

## Description
Query the device for Memory

## Notes
- Doesn't tell you exactly how much RAM available for security purposes (to avoid device fingerprinting)
- It rather gives you round up memory information ```[0.25, 0.5, 1, 2, 4, 8]``` (that's how much **RAM**)


## References
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory)
- [W3C](https://www.w3.org/TR/device-memory/)