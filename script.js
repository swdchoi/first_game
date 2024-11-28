const player = document.getElementById("player");
const canv = document.getElementById("canvas")
const gravity = -10;
const movespeed = 100;
const forwardWalkSpeed = movespeed;
const backwardWalkSpeed = movespeed;
const leftWalkSpeed = movespeed;
const rightWalkSpeed = movespeed;
let playerXposition = 200;
let playerYposition = 0;

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
}

document.addEventListener("keypress", (e) => {
    movement(e.key);
    player.style.bottom = `${playerYposition}px`;
    player.style.left = `${playerXposition}px`;
})

document.addEventListener("DOMContentLoaded", () => 
{   gridMaker();
    enemyMaker(enemy);
    // dot thisenemyMovement();
})