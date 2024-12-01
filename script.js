const player = document.getElementById("player");
const canv = document.getElementById("canvas")

const movespeed = 100;
const forwardWalkSpeed = movespeed;
const backwardWalkSpeed = movespeed;
const leftWalkSpeed = movespeed;
const rightWalkSpeed = movespeed;
let playerXposition = 200;
let playerYposition = 0;
let enbot = 500;
let enleft = 500;



const playerLost = () => {
const enemyMan = document.getElementById("enemy")
    if(player.style.bottom == enemyMan.style.bottom && player.style.left == enemyMan.style.left)
    {
        alert("GAME END!")
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

const enemy = {
    height: "100px",
    width: "100px",
    color: "green",
    positionY: "500px",
    positionX: "500px",
}

const thisenemyMovement = () => {
    const enemyMan = document.getElementById("enemy");


    if (enbot <= 550 && enleft >= 0 && enleft <= 500 && enbot >= 0){
        const outof4 = Math.random()*40
        if(outof4 <= 10) {
            enbot -= leftWalkSpeed;
        } else if (outof4 > 10 && outof4 <= 20) {
            enbot += rightWalkSpeed;
        } else if (outof4 > 20 && outof4 <= 30) {
            enleft += forwardWalkSpeed
        } else if (outof4 > 30 && outof4 <= 40) {
            enleft -= backwardWalkSpeed;
        }
    } else if (enbot > 550) {
        enbot -= leftWalkSpeed;
    } else if (enbot < 0){
        enbot += rightWalkSpeed;
    } else if (enleft < 0){
        enleft += forwardWalkSpeed;
    } else if (enleft > 500) {
        enleft -= backwardWalkSpeed;
    }

    console.log(enleft);
    console.log(enbot);

    enemyMan.style.bottom = `${enbot}px`;
    enemyMan.style.left = `${enleft}px`;
}


//OLD PLAYER STUFF! UPDATE TO OBJECT IN THE FUTURE!

const movement = (key) => {
if (playerXposition <= 550 && playerYposition >= 0 && playerYposition <= 500 && playerXposition >= 0){
    if(key === "w"){
        playerYposition += forwardWalkSpeed;
    } else if(key === "s") {
        playerYposition -= backwardWalkSpeed;
    } else if(key === "a") {
        playerXposition -= leftWalkSpeed;
    } else if(key === "d") {
        playerXposition += rightWalkSpeed;
    }
} else if (playerXposition > 550) {
    playerXposition -= leftWalkSpeed;
} else if (playerXposition < 0){
    playerXposition += rightWalkSpeed;
} else if (playerYposition < 0){
    playerYposition += forwardWalkSpeed;
} else if (playerYposition > 500) {
    playerYposition -= backwardWalkSpeed;
}

player.style.bottom = `${playerYposition}px`;
player.style.left = `${playerXposition}px`;
}

document.addEventListener("keypress", (e) => {
    movement(e.key);
    thisenemyMovement();
    playerLost();
})

document.addEventListener("DOMContentLoaded", () => 
{   gridMaker();
    enemyMaker(enemy);
})

