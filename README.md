# javascript-api
Javascript modern api example code

## Notification API

## Description
API allows the developer to leverage platforms builtin notification mechanism for notifications for exampe (Windows, MacOS, and Phones etc)


## Code
```window.Notification```

```Notification.requestPermission()```  (promise object runs after user allow or deny)

```Notification.permission``` (status string, i.e (*denied*, *granter*, *default*))

```new Notification(text)```


## Notes
- First we need to ```requestPermission``` in order to be able to use notification api
- **Notification API** works with **Javascript Promises**
- look and feel is totally based on the OS you are running on
- You can customise the look and feel ie adding icons etc.



## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/notification)
- 