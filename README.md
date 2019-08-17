# javascript-api
Javascript modern api example code

# StorageManagerAPI
This api uses **Javascript Promises**

## Code
```navigator.storage.estimate()```

```navigator.storage.persisted()```

```navigator.storage.persist()```

```navigator.storage.estimate()```

## Description
StorageManagerAPI gives web app a way to discover how much storage is being used and how much is available, also a way to request browser to give priority to our offline data while doing the cleanup process.

## Notes
- useful for optimizing our app performance on devices where network bandwidth is critical
- can make useful decisions i.e; whether to use local cache or not based on device available storage
- can estimate how much we can store

## References
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager)
