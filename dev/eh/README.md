# dev/eh

the **eh** bookmarklet code

## Code
```js
javascript:(function() {  var x = document.createElement("script");   x.src = "https://cdn.jsdelivr.net/gh/gbaranski/eh@master/dev/eh/login.js"; x.onload = alert("Loaded Banana-corp - Main Tesing!");    document.head.appendChild(x);})()
``` 