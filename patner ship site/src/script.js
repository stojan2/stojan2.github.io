
setInterval(changeLoaderText, 400);
var preloaderLoading='.';
function changeLoaderText(){
    let preloader = document.getElementById('preloaderText');
    document.getElementById('preloaderText').innerHTML = "загрузка"+preloaderLoading;
    preloaderLoading+='.';
    if(preloaderLoading==='.....')preloaderLoading='.';
}

window.onload = function () {
    document.getElementById('preloaderBackground').style.display = 'none';
    document.getElementById('preloaderText').style.display = 'none';
    document.getElementById('preloader').style.display = 'none';
}   
