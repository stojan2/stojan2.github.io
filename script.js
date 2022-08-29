function check(){
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
    document.getElementById('pc').innerHTML = "";
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