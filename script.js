const player = document.getElementById("player");
const canv = document.getElementById("canvas");
const ending = document.getElementById("end");

const movespeed = 100;

let playerXposition = 0;
let playerYposition = 0;
let enbot = 500;
let enleft = 500;
let enbot1 = 500;
let enleft1 = 500;
let enfolbot = 500;
let enfolleft = 500;

ending.style.bottom = "500px";
ending.style.left = "500px";

const playerWon = () => {

    if(player.style.bottom == end.style.bottom && player.style.left == end.style.left)
        {
            alert("YOU WIN!");
        }
}

const playerLost = () => {
const enemyMan = document.getElementById("enemy");
const enemyMan1 = document.getElementById("enemy1");
    if(player.style.bottom == enemyMan.style.bottom && player.style.left == enemyMan.style.left)
    {
        alert("GAME END!")
    } else if (player.style.bottom == enemyMan1.style.bottom && player.style.left == enemyMan1.style.left) {
        alert("endgame")
    }
}
 
const gridMaker = () => {
   
    for(let i = 0; i <= 35; i++){
        let grid = document.createElement("div");
        grid.style.height = "100px";
        grid.style.width = "100px";
        grid.style.backgroundColor = "transparent";
        grid.style.zIndex = "1";
        grid.style.border = "solid";
        canv.appendChild(grid);
        }
}

const enemyMaker = (obj) =>{
    const em = document.createElement("div");
    em.id = "enemy";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.backgroundColor = obj.color;
    em.style.position = "absolute";
    em.style.bottom = obj.positionY;
    em.style.left = obj.positionX;
    canv.appendChild(em);
}

const enemyMaker2 = (obj) =>{
    const em = document.createElement("div");
    em.id = "enemy1";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.backgroundColor = "green";
    em.style.position = "absolute";
    em.style.bottom = obj.positionY;
    em.style.left = obj.positionX;
    canv.appendChild(em);
}

const enemyMaker3 = (obj) =>{
    const em = document.createElement("div");
    em.id = "enemyfollow";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.backgroundColor = "purple";
    em.style.position = "absolute";
    em.style.bottom = obj.positionY;
    em.style.left = obj.positionX;
    canv.appendChild(em);
}

const enemy = {
    height: "100px",
    width: "100px",
    color: "green",
    positionY: "500px",
    positionX: "500px",
}

const thisenemyMovement = () => {
    const enemyMan1 = document.getElementById("enemy1");

    if (enbot1 <= 550 && enleft1 >= 0 && enleft1 <= 500 && enbot1 >= 0){
        const outof41 = Math.random()*40
        if(outof41 <= 10) {
            enbot1 -= movespeed;
        } else if (outof41 > 10 && outof41 <= 20) {
            enbot1 += movespeed;
        } else if (outof41 > 20 && outof41 <= 30) {
            enleft1 += movespeed
        } else if (outof41 > 30 && outof41 <= 40) {
            enleft1 -= movespeed;
        }
    } else if (enbot1 > 550) {
        enbot1 -= movespeed;
    } else if (enbot1 < 0){
        enbot1 += movespeed;
    } else if (enleft1 < 0){
        enleft1 += movespeed;
    } else if (enleft1 > 500) {
        enleft1 -= movespeed;
    }

    enemyMan1.style.bottom = `${enbot1}px`;
    enemyMan1.style.left = `${enleft1}px`;

    const enemyMan = document.getElementById("enemy");

    if (enbot <= 550 && enleft >= 0 && enleft <= 500 && enbot >= 0){
        const outof4 = Math.random()*40
        if(outof4 <= 10) {
            enbot -= movespeed;
        } else if (outof4 > 10 && outof4 <= 20) {
            enbot += movespeed;
        } else if (outof4 > 20 && outof4 <= 30) {
            enleft += movespeed
        } else if (outof4 > 30 && outof4 <= 40) {
            enleft -= movespeed;
        }
    } else if (enbot > 550) {
        enbot -= movespeed;
    } else if (enbot < 0){
        enbot += movespeed;
    } else if (enleft < 0){
        enleft += movespeed;
    } else if (enleft > 500) {
        enleft -= movespeed;
    }

    enemyMan.style.bottom = `${enbot}px`;
    enemyMan.style.left = `${enleft}px`;

}

const thisenemyMovement2 = () => {
    const enemyFollow = document.getElementById("enemyfollow");
    console.log(playerYposition)
    console.log(enfolbot)
    if (enfolbot <= 550 && enfolleft >= 0 && enfolleft <= 500 && enfolbot >= 0){
        if(playerXposition <= enfolbot) {
            //enfolbot -= movespeed;
        } else if (playerXposition >= enfolbot) {
            enfolbot += movespeed;
        } else if (playerYposition >= enfolleft) {
            enfolleft += movespeed;
        } else if (playerYposition <= enfolleft) {
            enfolleft -= movespeed;
        }
    } else if (enfolbot > 550) {
        enfolbot -= movespeed;
    } else if (enfolbot < 0){
        enfolbot += movespeed;
    } else if (enfolleft < 0){
        enfolleft += movespeed;
    } else if (enfolleft > 500) {
        enfolleft -= movespeed;
    }

    enemyFollow.style.bottom = `${enfolbot}px`;
    enemyFollow.style.left = `${enfolleft}px`; }
//OLD PLAYER STUFF! UPDATE TO OBJECT IN THE FUTURE!

const movement = (key) => {
if (playerXposition <= 550 && playerYposition >= 0 && playerYposition <= 500 && playerXposition >= 0){
    if(key === "w"){
        playerYposition += movespeed;
    } else if(key === "s") {
        playerYposition -= movespeed;
    } else if(key === "a") {
        playerXposition -= movespeed;
    } else if(key === "d") {
        playerXposition += movespeed;
    }
} else if (playerXposition > 550) {
    playerXposition -= movespeed;
} else if (playerXposition < 0){
    playerXposition += movespeed;
} else if (playerYposition < 0){
    playerYposition += movespeed;
} else if (playerYposition > 500) {
    playerYposition -= movespeed;
}

player.style.bottom = `${playerYposition}px`;
player.style.left = `${playerXposition}px`;
//console.log(playerXposition);
}

document.addEventListener("keypress", (e) => {
    movement(e.key);
    thisenemyMovement();
    thisenemyMovement2();
    playerLost();
    playerWon();
})

document.addEventListener("DOMContentLoaded", () => 
{   gridMaker();
    enemyMaker(enemy);
    enemyMaker2(enemy);
    enemyMaker3(enemy);
})

