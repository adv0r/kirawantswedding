var url = window.location.href;
var captured = /n=([^&]+)/.exec(url)[1]; 
var result = captured ? captured : 'n';
document.getElementById("nomespan").innerHTML = result;