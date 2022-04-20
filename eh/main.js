alert("Injecting Hacks);
      var h = prompt("Blooket or Quizizz hacks", "Quizizz");
if (h === "Quizizz") {
  var x = document.createElement("script");
        x.src = "https://cdn.jsdelivr.net/gh/gbaranski/quizizz-cheat@master/dist/bundle.js";);
        document.head.appendChild(x);
}
  $(document).ready(function() {
    if (window.location.href.indexOf("join") > -1) {
      alert("Can not inject due to its on join");
    }else {
    alert("Injecing");
    }
  });

