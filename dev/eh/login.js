// Get Username and password for login
var user = prompt("Username?");
var pass = prompt("Password?");

if (user === "corp") {
    if (pass === "banana") {
        alert("Welcome back, " + user);
        var x = document.createElement("script");
        x.src = "https://raw.githubusercontent.com/banana-nana/eh/main/eh/main.js";
        document.head.appendChild(x);
    }else {
    alert("Wrong.")
    console.log("User got the password wrong or is non vaild")
    }
}else {
    alert("Wrong.")
    console.log("User got the username wrong or is non vaild")
}

 
