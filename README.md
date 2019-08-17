# javascript-api
Javascript modern api example code


# CacheAPI

## Code
```window.caches.open('my-cache')```

## Description
It provides easy ways to store results of HTTP request in order for web apps to work offline.

## Notes
- Initially was used with service workers
- Ideally there should be a check if server content is changed before removing local cache
- Can use ```IndexedDB``` to keep track of when a specific ```url``` was added to the cache in order to clear it
- Or can also use **push notifications** to notify client apps from server about new content availablility
- ```cacheapi``` uses promises


## References
 - [MDN Resource 1](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
 - [MDN Resource 2](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)