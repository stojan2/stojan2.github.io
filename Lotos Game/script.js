window.onload = function () {
    document.getElementById('preloaderBackground').style.display = 'none';
    document.getElementById('preloaderText').style.display = 'none';
    document.getElementById('preloader').style.display = 'none';

    if (document.getElementById('Sot_RU')!==null) 
        document.getElementById('Sot_RU').innerHTML = 
        `<h1>Контакты:</h1>
            <center>
                <a href="https://discord.com/invite/NHJBmkSaSa" target="_blank">
                    <h1 style="color: blueviolet;">Lotos Game</h1>
                </a>
            </center>
        <br>`


    if(document.getElementById('Sot_ENG')!==null)
        document.getElementById('Sot_ENG').innerHTML = 
        `<h1>Contacts:</h1>
            <center>
                <a href="https://discord.com/invite/NHJBmkSaSa" target="_blank">
                    <h1 style="color: blueviolet;">Lotos Game</h1>
                </a>
            </center>
        <br>`
}
