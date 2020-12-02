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

function showElement(element){
    element.style.display = 'inline';
}

function hideElement(element){
    element.style.display = 'none';
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
            timerText.innerText = timePassed.toFixed(3);
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
    timerText.innerText = gameLength.toFixed(3);
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