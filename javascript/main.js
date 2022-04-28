
//GLOBAL VARIABLES
//ELEMENTOS DE DOM boton y titulo para que desaparezca
console.log("probando")
const startBtn = document.querySelector("#start-btn");
const startSreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")
const restartBtn = document.querySelector("#restart-btn")
const scoreTitle = document.querySelector(".score")
const scoreDom = document.querySelector(".score  span")
const logoTitle = document.querySelector(".cleanCar")
const gameOverTitle = document.querySelector(".gameover")

const audio = new Audio("./audio/audio.mp3")


let game;



// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("iniciando juego")
  startSreen.style.display = "none";
  canvas.style.display = "block";
  scoreTitle.style.display = "block"
  logoTitle.style.display = "block"
  gameOverScreen.style.display = "none"
  scoreDom.innerText = 0
  audio.play()
  audio.loop = true
  audio.volume = 0.40



  game = new Game()// esta solo va a existir en el scope startGame
  game.gameLoop()

}

const carMove = (event) => {
  if (event.code === "ArrowLeft") {
    game.car.carMoveLeft()
  } else if (event.code === "ArrowRight") {
    game.car.carMoveRight()
  }

}


// * ADD EVENT LISTENERS



startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", startGame)

window.addEventListener("keydown", carMove)









