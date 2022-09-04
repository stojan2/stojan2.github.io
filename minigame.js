const canvas = document.getElementById("game");
const gameDraw = canvas.getContext("2d");

const hintegrundBild=new Image();
hintegrundBild.src="bilder/hintergrundgaming.jpg";

const dino=new Image();
dino.src="bilder/dino.png";

const bird=new Image();
bird.src="bilder/bird.png";

const bomb=new Image();
bomb.src="bilder/bomb.png";

const heart=new Image();
heart.src="bilder/heart.png";

//const menuMusik=new media

var x,y,gx,gy;

var xg,yg;

let gameUpdate = setInterval(update,10);
let spawningBomb = setInterval(spawnBomb,1000);
let speedingBomb = setInterval(speedingBombUp, 100);
let spawningHeart = setInterval(spawnHeart, 9900);

function speedingBombUp(){
    bombSpeed+=0.01;
    timeSpeed+=0.001;
}

var bombSpeed;

var hp;

var lx,ly;
var lol;

var spawnTime;

var birdAn;

var bombsx=[],bombsy=[],bombss=[],bombsgx,bombsgy;

var heartx=[],hearty=[],heartgx,heartgy;

var playingB;

var timeSpeed=0.5;

function start(){
    hp=3;
    yg=0;
    gx=100;
    gy=100;
    x=canvas.width/2-gx/2;
    y=canvas.height/2-gy/2;
    bombsgx=100;
    bombsgy=100;
    heartgx=100;
    heartgy=100;
    bombsx=null;
    bombsy=null;
    bombss=null;
    heartx=null;
    hearty=null;
    heartx=[];
    hearty=[];
    bombsx=[];
    bombsy=[];
    bombss=[];
    playingB=1;
    bombSpeed=1;
    birdAn=false;
    timeSpeed=0.5;
}

document.addEventListener("keydown", direction);
document.addEventListener("keyup",test)

function direction(event){
    lol=true;
    if(event.keyCode == 65)
        lx=-1;
	else if(event.keyCode == 68)
        lx=1;
	else if(event.keyCode == 39 )
        lx=1;
	else if(event.keyCode == 40 )
        lx=1;
    if(birdAn){
        if(event.keyCode == 32 || event.keyCode == 87)ly=-1;
        else if(event.keyCode == 83)ly=1;
    }
    else if(event.keyCode == 32 || event.keyCode == 87)
        jump();
    console.log(event.keyCode);
}

function jump(){
    yg=-7;
}


function test(event){
    if(event.keyCode == 65)
        lx=0;
	else if(event.keyCode == 68)
        lx=0;
    else if(event.keyCode == 13)
        start();
    if(birdAn){
        if(event.keyCode == 32 || event.keyCode == 87)ly=0;
        else if(event.keyCode == 83)ly=0;
    }
}

function update() {
    document.getElementById("myAudio").play();
    gameDraw.drawImage(hintegrundBild,0,0,1980,1080);

    if(playingB==1)playing();
    else death();
}

function death(){
    gameDraw.font = "10vh Arial";
    gameDraw.fillStyle = "red";
    gameDraw.textAlign = "center";
    gameDraw.fillText("you death press Enter to restart", canvas.width/2, canvas.height/2);
    gameDraw.fillText("and you score"+youscore, canvas.width/2, canvas.height/2+100);
}


function playing(){
    if(hp<=0)playingB=0;

    if(lx==-1)x-=10*timeSpeed;
    if(lx==1)x+=10*timeSpeed;

    if(birdAn){
        if(ly==-1)y-=10*timeSpeed;
        if(ly==1)y+=10*timeSpeed;
    }
    else {
        yg=yg+1/10*timeSpeed;
        y=y+yg*timeSpeed;
    }

    if(y+gy>1080){
        yg=0;
        y=1080-gy;
    }
    if(y<0&&birdAn){
        y=0;
        yg=0;
    }
    else if(y<0){
        birdAn=true;
        y=canvas.height/2-gy/2;
        x=y=canvas.width/2-gy/2;
    }
    if(x<0){
        x=0;
    }
    if(x+gx>1980){
        x=1980-gx;
    }
    if(bombsx==null);
    else bombsUpdate();
    if(heartx==null);
    else heartUpdate();

	if(birdAn)gameDraw.drawImage(bird,x,y,gx,gy);
    else gameDraw.drawImage(dino,x,y,gx,gy);

    gameDraw.font = "5vh Arial";
    gameDraw.fillStyle = "red";
    gameDraw.fillText(hp+" Live", 100, 40);
    gameDraw.fillText(parseInt(bombSpeed*100)-100+" score", 200, 100);
    youscore=parseInt(bombSpeed*100)-100;
}

function spawnBomb(){
    if(bombSpeed<11){
        for(i=0; i<bombSpeed/2; i++){
            bombss[bombss.length]=0;
            bombsx[bombsx.length]=Math.random() * (1980-bombsgx);
            bombsy[bombsy.length]=-bombsgy;
            console.log("spawn");
        }
    }
    else if(bombSpeed<21){
        for(i=0; i<6; i++){
            bombss[bombss.length]=0;
            bombsx[bombsx.length]=Math.random() * (1980-bombsgx);
            bombsy[bombsy.length]=-bombsgy;
            console.log("spawn");
        }
        for(i=0; i<(bombSpeed-10)/2; i++){
            bombss[bombss.length]=1;
            bombsy[bombsy.length]=Math.random() * (1080-bombsgy);
            bombsx[bombsx.length]=-bombsgx;
            console.log("spawn");
        }
    }
    else {
        bombSpeed=22;
        for(i=0; i<7; i++){
            bombss[bombss.length]=0;
            bombsx[bombsx.length]=Math.random() * (1980-bombsgx);
            bombsy[bombsy.length]=-bombsgy;
            console.log("spawn");
        }
        for(i=0; i<10/2; i++){
            bombss[bombss.length]=1;
            bombsy[bombsy.length]=Math.random() * (1080-bombsgy);
            bombsx[bombsx.length]=-bombsgx;
            console.log("spawn");
        }
    }
}
function spawnHeart(){
    for(i=0; i<bombSpeed; i++){
        heartx[heartx.length]=Math.random() * (1980-heartgx);
        hearty[hearty.length]=-heartgy;
        console.log("heart");
    }
}

var youscore;

function heartUpdate(){
    for(i=0; i<heartx.length; i++){
        hearty[i]+=bombSpeed;
        gameDraw.drawImage(heart,heartx[i],hearty[i],heartgx,heartgy);
        if(heartx[i]+heartgx-10>x&&heartx[i]+10<x+gx){
            if(hearty[i]+heartgy-10>y&&hearty[i]+10<y+gy){
                if(birdAn)hp+=1;
                else hp+=2;
                heartx[i]=-1000;
                console.log("get Damage");
            }   
        }
    }
}

function bombsUpdate(){
    for(i=0; i<bombsx.length; i++){
        if(bombss[i]==0)bombsy[i]+=bombSpeed;
        else bombsx[i]+=bombSpeed;
        gameDraw.drawImage(bomb,bombsx[i],bombsy[i],bombsgx,bombsgy);
        if(bombsx[i]+bombsgx-10>x&&bombsx[i]+10<x+gx){
            if(bombsy[i]+bombsgy-10>y&&bombsy[i]+10<y+gy){
                hp-=1;
                bombsx[i]=-1000;
                console.log("get Damage");
            }   
        }
    }
}