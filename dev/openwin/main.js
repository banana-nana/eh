(function () {    
    var iframe = document.createElement('iframe');   
    var site = prompt("What Website?", "https://google.com")
    alert("Scroll Down to see websute")  
    iframe.src=site;     
    iframe.width = window.innerWidth; 
    iframe.height = window.innerHeight;     
    document.body.appendChild(iframe);
})()
