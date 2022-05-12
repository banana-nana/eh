# dev/openwin

**Open Window** add the javascript code to bookmarklet and type in the website and Scroll Down to see website

## Code
```js
javascript:(function() {   var x = document.createElement("script");   x.src = "https://cdn.jsdelivr.net/gh/sillyangel/eh@master/dev/openwin/main.js"; x.onload = alert("loaded - Main Tesing!");    document.head.appendChild(x);})()
```