function start(){
  var userAgent = navigator.userAgent.toLowerCase();
  if(userAgent.match('iphone'))
    handy();
  else if(userAgent.match('ipad'))
    handy();
  else if(userAgent.match('android'))		
    handy();
  else if(userAgent.match('windows phone'))		
    handy();
  else
    pc();
}

function handy() {
  document.getElementById('bild1').innerHTML = "<img width=160% src=https://github.com/stojan2/fotos/blob/main/decision1.png?raw=true alt=bild>";
  document.getElementById('bild2').innerHTML = "<img width=160% src=https://github.com/stojan2/fotos/blob/main/bild1.jpg?raw=true alt=bild ></img>";
  document.getElementById('download').innerHTML = "Download<br> -20MB";
}

function pc(){
  
}
