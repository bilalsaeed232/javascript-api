# javascript-api
Javascript modern api example code

# LocalForage (third-party api)
[localforage.github.io/localForage](https://localforage.github.io/localForage/)

## Description
Third party api provided by ```Modzilla``` to make working with complex ```IndexedDB``` easier, just like ```localstorage```.


## Notes
- Uses ```IndexedDB``` under the hood
- ```localstorage``` like syntax but asynchronous.
- Can create multiple instances of ```localforage``` for separate datastore
- Can store more than just text
- Functions used in this api returns ```promises```
- Multiple instances of ```localforage``` can be used (which creats multiple databases)

## References
- [MDN - IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Hacks Mozilla](https://hacks.mozilla.org/2014/02/localforage-offline-storage-improved/)