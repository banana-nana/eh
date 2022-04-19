# eh
some javascript code for a up and coming bookmarklet

```js
javascript:(function() {  var x = document.createElement("script");   x.src = "https://cdn.jsdelivr.net/gh/banana-nana/eh@master/eh/login.js"; x.onload = alert("Loaded Banana-corp - Main Tesing!");    document.head.appendChild(x);})()
```