const blueScore = document.querySelector("#blueScore");
const redScore = document.querySelector("#redScore");
const addBlueScore = document.querySelector("#addBlueScore");
const addRedScore = document.querySelector("#addRedScore");
const section = document.querySelector("section");
const reset = document.querySelector("#reset");
const select = document.querySelector("select");
section.style.textAlign = "center";
let endGameScore = 5;

addBlueScore.addEventListener("click", function (e) {
    if ((parseInt(blueScore.innerText)  !== endGameScore)) {
        blueScore.innerText = parseInt(blueScore.innerText) + 1;
    } else {
        blueScore.style.color = "green";
        redScore.style.color = "red";
    }
    
    
})



addRedScore.addEventListener("click", function (e) {
    if ((parseInt(redScore.innerText)  !== endGameScore)) {
        redScore.innerText = parseInt(redScore.innerText) + 1;
    } else {
        blueScore.style.color = "red";
        redScore.style.color = "green";
    }
    
    
})

reset.addEventListener("click", function (e) {
    blueScore.innerText = 0;
    redScore.innerText = 0;
})
