const player = document.getElementById("player");
const canv = document.getElementById("canvas")
const gravity = -10;
const movespeed = 100;
const forwardWalkSpeed = movespeed;
const backwardWalkSpeed = movespeed;
const leftWalkSpeed = movespeed;
const rightWalkSpeed = movespeed;
let playerXposition = 250;
let playerYposition = 0;



const movement = (key) => {
console.log(playerXposition);
console.log(playerYposition);
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