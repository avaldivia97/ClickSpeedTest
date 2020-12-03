let score;
let gameLength = 5;
let clicksPerSecond;
let startTime;
let gameOver = true;
let timerText = document.getElementById("timer");
let scoreText = document.getElementById("score");
let clicksPerSecondText = document.getElementById("CPS");
let startButton = document.getElementById("startButton");
let clickArea = document.getElementById("clickArea");
let oneSecond = document.getElementById("1s");
let fiveSeconds = document.getElementById("5s");
let tenSeconds = document.getElementById("10s");
let thirtySeconds = document.getElementById("30s");
let sixtySeconds = document.getElementById("60s");
changeStatsText(gameLength);



function showElement(element){
    element.style.display = 'inline';
}

function hideElement(element){
    element.style.display = 'none';
}

function changeGameLength(){
    if (oneSecond.checked){
        gameLength = 1;
        changeStatsText(gameLength);
    }
    if (fiveSeconds.checked){
        gameLength = 5;
        changeStatsText(gameLength);
    }
    if (tenSeconds.checked){
        gameLength = 10;
        changeStatsText(gameLength);
    }
    if (thirtySeconds.checked){
        gameLength = 30;
        changeStatsText(gameLength);
    }
    if (sixtySeconds.checked){
        gameLength = 60;
        changeStatsText(gameLength);
    }
}

function changeStatsText(time){
    timerText.innerText = time;
    scoreText.innerText = 0;
    clicksPerSecondText = 0;
}

function startGame(){
    hideElement(startButton);
    score = 0;
    clicksPerSecond = 0;
    gameOver = false;
    startTime = new Date().getTime();
    let timer = setInterval(() => {
        let timePassed = (new Date().getTime() - startTime) / 1000;
        if(timePassed < gameLength){
            timerText.innerText = (gameLength - timePassed).toFixed(3);
            clicksPerSecondText.textContent = (score/timePassed).toFixed(2);
        }
        else{
            gameOver = true;
            clearInterval(timer);
            endGame();
        }
    }, 1)
}

function endGame(){
    timerText.innerText = 0;
    score.textContent = score;
    clicksPerSecond = (score/gameLength).toFixed(2);
    clicksPerSecondText.textContent = clicksPerSecond;
    showElement(startButton);
    setTimeout(()=>{alert(`You clicked ${score} times in ${gameLength} seconds. With an average of ${clicksPerSecond} clicks per second. Play again to keep improving!`)}, 100)
}

clickArea.addEventListener("click", ()=>{
    if (gameOver === false)
    {
        score+=1;
        scoreText.textContent = score;
    }
})