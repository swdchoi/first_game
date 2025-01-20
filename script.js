const player = document.getElementById("player");
const canv = document.getElementById("canvas");
const ending = document.getElementById("end");
const levelone = document.getElementById("levelone");
const leveltwo = document.getElementById("leveltwo");
const levelthree = document.getElementById("levelthree");
const levelfour = document.getElementById("levelfour");
const levelfive = document.getElementById("levelfive");

const movespeed = 100;
let moveCount = 0;
let playerXposition = 0;
let playerYposition = 0;
let canvasHeightWidth = 800;
let movementRestrictions = canvasHeightWidth-300;
let level = 1;

const playerPos = (x, y) => {
    playerXposition = x;
    playerYposition = y;
    player.style.backgroundImage = 'url("images/you/3.png")';
    player.style.backgroundSize = "100% 100%";
    player.style.bottom = `${playerYposition}px`;
    player.style.left = `${playerXposition}px`; 
}

const createEnd = () =>{
    ending.style.bottom = `${movementRestrictions}px`;
    ending.style.left = `${movementRestrictions}px`;
}

const pxToNum = (px) => {
    return parseInt(px.replace(/[px]/g, ""))
}

//WIN

const playerWon = () => {
    if(player.style.bottom == end.style.bottom && player.style.left == end.style.left)
        {
            alert("YOU WIN!");
            if(level == 5) {
                alert("you won all!")
            } else{
            level += 1
            levelCreate(level)
            }
        }
}

//LOSE

const playerLost = () => {
const enemyMan = document.querySelectorAll(".enemy");
const enemyFollow = document.querySelectorAll(".enemyfollow");
const enemyY = document.querySelectorAll(".enemyY");
const enemyX = document.querySelectorAll(".enemyX");

enemyMan.forEach((enemy) => {
    let leftpos = enemy.style.left
    let bottompos = enemy.style.bottom
    if(player.style.bottom == bottompos && player.style.left == leftpos)
    {
        alert("not good")
        levelCreate(level)
    }
})

enemyFollow.forEach((enemy) => {
    let leftpos = enemy.style.left
    let bottompos = enemy.style.bottom
    console.log(bottompos)
    if(player.style.bottom == bottompos && player.style.left == leftpos)
    {
        alert("not good")
       levelCreate(level)
    }
})

enemyY.forEach((enemy) => {
    let leftpos = enemy.style.left
    let bottompos = enemy.style.bottom
    console.log(bottompos)
    if(player.style.bottom == bottompos && player.style.left == leftpos)
    {
        alert("not good")
       levelCreate(level)
    }
})

enemyX.forEach((enemy) => {
    let leftpos = enemy.style.left
    let bottompos = enemy.style.bottom
    console.log(bottompos)
    if(player.style.bottom == bottompos && player.style.left == leftpos)
    {
        alert("not good")
       levelCreate(level)
    }
})

}

const canvasMaker = () => {
    canv.style.width = `${canvasHeightWidth}px`;
    canv.style.height = `${canvasHeightWidth}px`;
}

const clearGrid = () => {
    const grid = document.querySelectorAll(".grid");
    const wall = document.querySelectorAll(".wall")
    grid.forEach((grid) => {
        grid.remove();
    });

    wall.forEach((wal) => {
        wal.remove();
    });

}

const clearMonst = () => {
    const enemy1 = document.querySelectorAll(".enemy");
    const enemy2 = document.querySelectorAll(".enemyfollow");
    const emeny3 = document.querySelectorAll(".enemyY");
    const emeny4 = document.querySelectorAll(".enemyX");

    enemy1.forEach((enemy) => {
        enemy.remove();
    });

    enemy2.forEach((enemy) => {
        enemy.remove();
    });

    emeny3.forEach((enemy) => {
        enemy.remove();
    })

    emeny4.forEach((enemy) => {
        enemy.remove();
    })
}

const gridMaker = (num) => {
let num2 = num*num
    for(let i = 0; i <= num2-1; i++){
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.style.height = "100px";
        grid.style.width = "100px";
        grid.style.backgroundColor = "transparent";
        grid.style.zIndex = "1";
        grid.style.border = "solid";
        canv.appendChild(grid);
        }
}

//ENEMYMAKER

const enemyMaker = (obj, posX, posY) =>{
    const em = document.createElement("div");
    em.className = "enemy";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.position = "absolute";
    em.style.bottom = `${posY * 100}px`;
    em.style.left = `${posX * 100}px`;
    em.style.backgroundImage = 'url("images/other/1.png")';
    em.style.backgroundSize = "100% 100%";
    canv.appendChild(em);
}


const enemyMaker2 = (obj, posX, posY) =>{
    const em = document.createElement("div");
    em.className = "enemyfollow";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.position = "absolute";
    em.style.bottom = `${posY * 100}px`;
    em.style.left = `${posX * 100}px`;
    em.style.backgroundImage = 'url("images/other/2.png")';
    em.style.backgroundSize = "100% 100%";
    canv.appendChild(em);
}

const enemyMaker3 = (obj, posX, posY) =>{
    const em = document.createElement("div");
    em.className = "enemyY";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.backgroundColor = "pink";
    em.style.position = "absolute";
    em.style.bottom = `${posY * 100}px`;
    em.style.left = `${posX * 100}px`;
    em.style.backgroundImage = 'url("images/other/3.png")';
    em.style.backgroundSize = "100% 100%";
    canv.appendChild(em);
}

const enemyMaker4 = (obj, posX, posY) =>{
    const em = document.createElement("div");
    em.className = "enemyX";
    em.style.height = obj.height;
    em.style.width = obj.width;
    em.style.backgroundColor = "orange";
    em.style.position = "absolute";
    em.style.bottom = `${posY * 100}px`;
    em.style.left = `${posX * 100}px`;
    em.style.backgroundImage = 'url("images/other/5.png")';
    em.style.backgroundSize = "100% 100%";
    canv.appendChild(em);
}

const enemy = {
    height: "100px",
    width: "100px",
    color: "green",
    positionY: `${canvasHeightWidth-300}px`,
    positionX: `${canvasHeightWidth-300}px`,
    
}

//WALLMAKER

const wallmaker = (x, y) => {
    const wall = document.createElement("div");
    wall.className = "wall";
    wall.style.height = "100px";
    wall.style.width = "100px";
    wall.style.backgroundColor = "black";
    wall.style.position = "absolute";
    wall.style.bottom = `${y * 100}px`;
    wall.style.left = `${x * 100}px`;
    wall.style.zIndex = "-1";
    wall.style.backgroundImage = 'url("images/other/6.png")';
    wall.style.backgroundSize = "100% 100%";
    canv.appendChild(wall);
}

//ENEMYMOVEMENT

const thisenemyMovement = () => {
    const enemyMan = document.querySelectorAll(".enemy");
    const wall = document.querySelectorAll(".wall");
    let wallpositions = []
    wall.forEach ((wal) => {
         wallpositions.push([pxToNum(wal.style.left), pxToNum(wal.style.bottom)])
    })

    enemyMan.forEach((enemy) => {
        let leftpos = pxToNum(enemy.style.left)
        let bottompos = pxToNum(enemy.style.bottom)
        let stopen = false;
        const enposarr = [leftpos, bottompos]
        if (wallpositions.some((sub) => sub.every((val, index) => val === enposarr[index])) == true) {
           stopen = true;
        }

        if (bottompos <= 550 && leftpos >= 0 && leftpos <= 500 && bottompos >= 0 && stopen == false){
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
    const wall = document.querySelectorAll(".wall");
    let wallpositions = []
    wall.forEach ((wal) => {
         wallpositions.push([pxToNum(wal.style.left), pxToNum(wal.style.bottom)])
    })

    enemyFollow.forEach((enemy) => {
        let stopen = false;
        let leftpos = pxToNum(enemy.style.left)
        let bottompos = pxToNum(enemy.style.bottom)
        const enposarr = [leftpos, bottompos]
        if (wallpositions.some((sub) => sub.every((val, index) => val === enposarr[index])) == true) {
           stopen = true;
        }
        
        if (bottompos <= movementRestrictions && leftpos >= 0 && leftpos <= movementRestrictions && bottompos >= 0 && stopen == false){
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

    const thisenemyMovement3 = () => {
    const enemyFollow = document.querySelectorAll(".enemyY");
    const wall = document.querySelectorAll(".wall");
    wallpositions = []
    wall.forEach ((wal) => {
         wallpositions.push([pxToNum(wal.style.left), pxToNum(wal.style.bottom)])
    })

    enemyFollow.forEach((enemy) => {
        let stopen = false;
        let leftpos = pxToNum(enemy.style.left)
        let bottompos = pxToNum(enemy.style.bottom)
        const enposarr = [leftpos, bottompos]
        if (wallpositions.some((sub) => sub.every((val, index) => val === enposarr[index])) == true) {
            stopen = true;
        }

        if (bottompos <= movementRestrictions && leftpos >= 0 && leftpos <= movementRestrictions && bottompos >= 0 && stopen == false){
            if(playerYposition < bottompos) {
                bottompos -= movespeed;
            } else if (playerYposition > bottompos) {
                bottompos += movespeed;
            } 
        } else if (bottompos > movementRestrictions) {
            bottompos -= movespeed;
        } else if (bottompos < 0){
            bottompos += movespeed;
        } 
        enemy.style.bottom = `${bottompos}px`;
        enemy.style.left = `${leftpos}px`;
    })
        }

    const thisenemyMovement4 = () => {
        const enemyFollow = document.querySelectorAll(".enemyX");
        const wall = document.querySelectorAll(".wall");
        wallpositions = []
        wall.forEach ((wal) => {
                wallpositions.push([pxToNum(wal.style.left), pxToNum(wal.style.bottom)])
        })

    
        enemyFollow.forEach((enemy) => {
            let leftpos = pxToNum(enemy.style.left)
            let bottompos = pxToNum(enemy.style.bottom)
            const enposarr = [leftpos, bottompos]
            let stopen = false;

            if(playerYposition < bottompos) {
                enemy.style.backgroundImage = 'url("images/other/5.png")';
                enemy.style.backgroundSize = "100% 100%";
            } else if (playerYposition > bottompos) {
                enemy.style.backgroundImage = 'url("images/other/4.png")';
                enemy.style.backgroundSize = "100% 100%";
            }

            if (wallpositions.some((sub) => sub.every((val, index) => val === enposarr[index])) == true) {
                stopen = true;
            }

            if (bottompos <= movementRestrictions && leftpos >= 0 && leftpos <= movementRestrictions && bottompos >= 0 && stopen == false){
                if (playerXposition > leftpos) {
                    leftpos += movespeed;
                } else if (playerXposition < leftpos) {
                    leftpos -= movespeed;
                }
            } else if (leftpos < 0){
                leftpos += movespeed;
            } else if (leftpos > movementRestrictions) {
                leftpos -= movespeed;
            }
            enemy.style.bottom = `${bottompos}px`;
            enemy.style.left = `${leftpos}px`;
        })
            }
//PLAYER MOVEMENT

const movement = (key) => {
    const wall = document.querySelectorAll(".wall");
    let wallpositions = []

    wall.forEach ((wal) => {
         wallpositions.push([pxToNum(wal.style.left), pxToNum(wal.style.bottom)])
    })   
    const playerposarr = [playerXposition, playerYposition]
    if (wallpositions.some((sub) => sub[0] == playerposarr[0] && sub[1] == playerposarr[1]) == true) {
        alert("you suck")
        levelCreate(level)
     }

if (playerXposition <= movementRestrictions && playerYposition >= 0 && playerYposition <= movementRestrictions && playerXposition >= 0){
    if(key === "w"){
        playerYposition += movespeed;
        player.style.backgroundImage = 'url("images/you/3.png")';
        player.style.backgroundSize = "100% 100%";
    } else if(key === "s") {
        playerYposition -= movespeed;
        player.style.backgroundImage = 'url("images/you/4.png")';
        player.style.backgroundSize = "100% 100%";
    } else if(key === "a") {
        playerXposition -= movespeed;
        player.style.backgroundImage = 'url("images/you/2.png")';
        player.style.backgroundSize = "100% 100%";
    } else if(key === "d") {
        playerXposition += movespeed;
        player.style.backgroundImage = 'url("images/you/1.png")';
        player.style.backgroundSize = "100% 100%";
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

//LEVELDESIGN
const levelCreate = (level) => {
    if(level==1){
    clearGrid();
    clearMonst();
    const cansizenum = 2
    canvasHeightWidth = (cansizenum + 3)*100;
    movementRestrictions = canvasHeightWidth-300;
    playerPos(0, 0);
    canvasMaker();
    gridMaker(cansizenum + 1);
    createEnd();
    moveCount = 0;
    } 

    else if (level == 2){
    clearGrid();
    clearMonst();
    const cansizenum = 5
    canvasHeightWidth = (cansizenum + 3)*100;
    movementRestrictions = canvasHeightWidth-300;
    playerPos(0, 0);
    canvasMaker();
    enemyMaker(enemy, 3, 3);
    gridMaker(cansizenum + 1);
    createEnd();
    }

    else if (level == 3) {
        clearGrid();
        clearMonst();
        const cansizenum = 5
        canvasHeightWidth = (cansizenum + 3)*100;
        movementRestrictions = canvasHeightWidth-300;
        playerPos(0, 0);
        canvasMaker();
        enemyMaker(enemy, 3, 3);
        enemyMaker2(enemy, 4, 4);
        gridMaker(cansizenum + 1);
        createEnd();
    }

    else if (level == 4) {
        clearGrid();
        clearMonst();
        const cansizenum = 5
        canvasHeightWidth = (cansizenum + 3)*100;
        movementRestrictions = canvasHeightWidth-300;
        playerPos(0, 0);
        canvasMaker();
        enemyMaker2(enemy, 2, 4);
        enemyMaker(enemy, 2, 5);
        enemyMaker3(enemy, 3,1);
        wallmaker(3, 4)
        gridMaker(cansizenum + 1);
        createEnd();
    }

    else if (level == 5){
        clearGrid();
        clearMonst();
        const cansizenum = 6
        canvasHeightWidth = (cansizenum + 3)*100;
        movementRestrictions = canvasHeightWidth-300;
        playerPos(0, 0);
        canvasMaker();
        enemyMaker3(enemy, 6,1);
        enemyMaker3(enemy, 5,1);
        enemyMaker3(enemy, 0,2);
        enemyMaker4(enemy, 0,1);
        enemyMaker4(enemy, 3,5);
        wallmaker(3, 1)
        wallmaker(6, 2)
        wallmaker(5, 3)
        wallmaker(4, 3)
        wallmaker(0, 3)
        wallmaker(0, 5)
        gridMaker(cansizenum + 1);
        createEnd();
    }
}


//KEYPRESS
document.addEventListener("keypress", (e) => {
    if(e.key == "w" || e.key == "a" ||e.key == "s" || e.key == "d" ){

    movement(e.key);
    thisenemyMovement();
    thisenemyMovement3();
    thisenemyMovement4();
    if(moveCount%2 == 0){
    thisenemyMovement2();
    }
    playerWon();
    playerLost();
    moveCount += 1;
}
})

//EVENTLISTENER

document.addEventListener("DOMContentLoaded", () => 
{  levelCreate(level);
})

levelone.addEventListener("click", () => {
    level = 1
    levelCreate(level);
})

leveltwo.addEventListener("click", () => {
    level = 2
    levelCreate(level);
})

levelthree.addEventListener("click", () => {
    level = 3
    levelCreate(level);
})

levelfour.addEventListener("click", () => {
    level = 4
    levelCreate(level);
})

levelfive.addEventListener("click", () => {
    level = 5
    levelCreate(level);
})

