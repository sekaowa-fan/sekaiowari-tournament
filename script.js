const battles = [
    ["Monsoon Night","向日葵"],
    ["RAIN","ROBO"],
    ["Dragon Night","スターライトパレード"],
    ["illusion","眠り姫"]
];

let current = 0;

showBattle();

function showBattle(){

    if(current >= battles.length){

        document.querySelector(".card").innerHTML="<h2>Round1終了！</h2>";

        document.getElementById("btn1").style.display="none";
        document.getElementById("btn2").style.display="none";

        return;
    }

    document.getElementById("song1").textContent=battles[current][0];
    document.getElementById("song2").textContent=battles[current][1];

    document.getElementById("btn1").textContent=battles[current][0];
    document.getElementById("btn2").textContent=battles[current][1];

    document.getElementById("progress").textContent=
    `第${current+1}試合 / ${battles.length}試合`;
}

document.getElementById("btn1").onclick=()=>{
    current++;
    showBattle();
}

document.getElementById("btn2").onclick=()=>{
    current++;
    showBattle();
}
