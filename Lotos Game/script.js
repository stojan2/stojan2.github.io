window.onload = function () {
    document.getElementById('preloaderBackground').style.display = 'none';
    document.getElementById('preloaderText').style.display = 'none';
    document.getElementById('preloader').style.display = 'none';

    var pathname=window.location.pathname;

    if (pathname.substring(pathname.length-9,pathname.length-5)!=="_eng"){
        document.getElementById('Sot').innerHTML = 
        `<h1>Контакты:</h1>
            <center>
                <a href="https://discord.com/invite/NHJBmkSaSa" target="_blank">
                    <h1 style="color: blueviolet;">Lotos Game</h1>
                </a>
            </center>
        <br>`
        document.getElementById("Language").innerHTML = `
        <center><div class="Languages">
            <h1 class="Language_Text">Язык:</h1>
            <a href="${pathname}"><img class="Language_Icon" src="src/ru.png" alt="Russian Language"></a>
            <a href="${pathname.substring(0,pathname.length-5)}_eng.html"><img class="Language_Icon" src="src/engl.png" alt="English Language"></a>
        </div></center>`
    }
    else{
        document.getElementById('Sot').innerHTML = 
        `<h1>Contacts:</h1>
            <center>
                <a href="https://discord.com/invite/NHJBmkSaSa" target="_blank">
                    <h1 style="color: blueviolet;">Lotos Game</h1>
                </a>
            </center>
        <br>`
        document.getElementById("Language").innerHTML = `
        <center><div class="Languages">
            <h1 class="Language_Text">Language:</h1>
            <a href="${pathname.substring(0,pathname.length-9)}.html"><img class="Language_Icon" src="src/ru.png" alt="Russian Language"></a>
            <a href="${pathname}"><img class="Language_Icon" src="src/engl.png" alt="English Language"></a>
        </div></center>`
    }
}
