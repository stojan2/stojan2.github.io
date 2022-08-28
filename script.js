function start(){
    var userAgent = navigator.userAgent.toLowerCase();
    if(userAgent.match('iphone'))
      noHave();
    else if(userAgent.match('ipad'))
      noHave();
    else if(userAgent.match('android'))		
      android();
    else if(userAgent.match('windows phone'))		
        noHave();
    else
      pc();
}


function android() {
    document.getElementById('pc').innerHTML = "<img width=100% src=https://github.com/stojan2/fotos/blob/main/decision1.png?raw=true alt=bild>";
    document.getElementById('pc').innerHTML = "<img width=100% src=https://github.com/stojan2/fotos/blob/main/decision3.png?raw=true alt=bild ></img>";
    document.getElementById('noHave').innerHTML = "";
}

function pc(){
    document.getElementById('android').innerHTML = "";
    document.getElementById('noHave').innerHTML = "";
}
function noHave(){
    document.getElementById('android').innerHTML = "";
    document.getElementById('pc').innerHTML = "";
}