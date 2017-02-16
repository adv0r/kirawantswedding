var url = window.location.href;
var captured = /n=([^&]+)/.exec(url)[1]; 
var result = captured ? captured : 'n';
result = str.replace('%20',' ');
document.getElementById("nomespan").innerHTML = result;