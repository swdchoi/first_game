const player = document.getElementById("player");
const canv = document.getElementById("canvas");
const ending = document.getElementById("end");
const canvSize = document.getElementById("canvsize");
const canvSizeBtn = document.getElementById("canvsizebtn");

const movespeed = 100;
let moveCount = 0;
let playerXposition = 0;
let playerYposition = 0;
let canvasHeightWidth = 800;
const movementRestrictions = canvasHeightWidth-300;

ending.style.bottom = `${movementRestrictions}px`;
ending.style.left = `${movementRestrictions}px`;

const pxToNum = (px) => {
    return parseInt(px.replace(/[px]/g, ""))
}

const playerWon = () => {
    if(player.style.bottom == end.style.bottom && player.style.left == end.style.left)
        {
            alert("YOU WIN!");
        }
}

const playerLost = () => {
const enemyMan = document.querySelectorAll(".enemy");
const enemyFollow = document.querySelectorAll(".enemyfollow");

enemyMan.forEach((enemy) => {
    let leftpos = enemy.style.left
    let bottompos = enemy.style.bottom
    if(player.style.bottom == bottompos && player.style.left == leftpos)
    {
        //alert("GAME END!")
    }
})

enemyFollow.forEach((enemy) => {
    let leftpos = enemy.style.left
    let bottompos = enemy.style.bottom
    console.log(bottompos)
    if(player.style.bottom == bottompos && player.style.left == leftpos)
    {
        //alert("GAME END!")
    }
})

}

const canvasMaker = () => {
    canv.style.bottom = `${canvasHeightWidth}px`;
    canv.style.left = `${canvasHeightWidth}px`;
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
    em.className = "enemy";
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
    em.className = "enemyfollow";
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
    const enemyMan = document.querySelectorAll(".enemy");
    enemyMan.forEach((enemy) => {
        let leftpos = pxToNum(enemy.style.left)
        let bottompos = pxToNum(enemy.style.bottom)

        if (bottompos <= 550 && leftpos >= 0 && leftpos <= 500 && bottompos >= 0){
            const outof41 = Math.random()*40
            if(outof41 <= 10) {
                bottompos -= movespeed;
            } else if (outof41 > 10 && outof41 <= 20) {
                bottompos += movespeed;
            } else if (outof41 > 20 && outof41 <= 30) {
                leftpos += movespeed
            } else if (outof41 > 30 && outof41 <= 40) {
                leftpos -= movespeed;
            }
        } else if (bottompos > 550) {
            bottompos -= movespeed;
        } else if (bottompos < 0){
            bottompos += movespeed;
        } else if (leftpos < 0){
            leftpos += movespeed;
        } else if (leftpos > 500) {
            leftpos -= movespeed;
        }
    
        enemy.style.bottom = `${bottompos}px`;
        enemy.style.left = `${leftpos}px`;
    })

}

const thisenemyMovement2 = () => {
    const enemyFollow = document.querySelectorAll(".enemyfollow");
    
    enemyFollow.forEach((enemy) => {
       
        let leftpos = pxToNum(enemy.style.left)
        let bottompos = pxToNum(enemy.style.bottom)
        
        if (bottompos <= movementRestrictions && leftpos >= 0 && leftpos <= movementRestrictions && bottompos >= 0){
            if(playerYposition < bottompos) {
                bottompos -= movespeed;
            } else if (playerYposition > bottompos) {
                bottompos += movespeed;
            } else if (playerXposition > leftpos) {
                leftpos += movespeed;
            } else if (playerXposition < leftpos) {
                leftpos -= movespeed;
            }
        } else if (bottompos > movementRestrictions) {
            bottompos -= movespeed;
        } else if (bottompos < 0){
            bottompos += movespeed;
        } else if (leftpos < 0){
            leftpos += movespeed;
        } else if (leftpos > movementRestrictions) {
            leftpos -= movespeed;
        }
        enemy.style.bottom = `${bottompos}px`;
        enemy.style.left = `${leftpos}px`;
    })
     }
//OLD PLAYER STUFF! UPDATE TO OBJECT IN THE FUTURE!

const movement = (key) => {
if (playerXposition <= movementRestrictions && playerYposition >= 0 && playerYposition <= movementRestrictions && playerXposition >= 0){
    if(key === "w"){
        playerYposition += movespeed;
    } else if(key === "s") {
        playerYposition -= movespeed;
    } else if(key === "a") {
        playerXposition -= movespeed;
    } else if(key === "d") {
        playerXposition += movespeed;
    }
} else if (playerXposition > movementRestrictions) {
    playerXposition -= movespeed;
} else if (playerXposition < 0){
    playerXposition += movespeed;
} else if (playerYposition < 0){
    playerYposition += movespeed;
} else if (playerYposition > movementRestrictions) {
    playerYposition -= movespeed;
}

player.style.bottom = `${playerYposition}px`;
player.style.left = `${playerXposition}px`;
}

document.addEventListener("keypress", (e) => {
    movement(e.key);
    thisenemyMovement();
    if(moveCount%2 == 0){
    thisenemyMovement2 ();
    }
    playerLost();
    playerWon();
    moveCount += 1;
    console.log(playerXposition)
    console.log(playerYposition)
})

document.addEventListener("DOMContentLoaded", () => 
{   

    gridMaker();
    enemyMaker(enemy);
    enemyMaker(enemy);
    enemyMaker2(enemy);
    moveCount = 0;
})

canvSizeBtn.addEventListener("click", () => {
    canvasHeightWidth = (canvSize.value + 3)*100;
    
})


    

    /*const enemyMan = document.getElementById("enemy");

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
*/


/*const enemyMaker2 = (obj) =>{
    const em = document.createElement("div");
    em.id = "enemy1";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.backgroundColor = "green";
    em.style.position = "absolute";
    em.style.bottom = obj.positionY;
    em.style.left = obj.positionX;
    canv.appendChild(em);
}*/