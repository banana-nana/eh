// Get Username and password for login
var user = prompt("Username?");
var pass = prompt("Password?");

if (user === "corp") {
    if (pass === "banana") {
        alert("Welcome back, " + user);
        var x = document.createElement("script");
        x.src = "https://cdn.jsdelivr.net/gh/banana-nana/eh@master/eh/main.js";
        x.onload = alert("Loaded Banana-corp - Main Tesing!");
        document.head.appendChild(x);
    }
}

