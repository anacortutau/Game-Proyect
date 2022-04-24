
//GLOBAL VARIABLES
//ELEMENTOS DE DOM boton y titulo para que desaparezca
console.log("probando")
const startBtn = document.querySelector("#start-btn");
const startSreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")
const mySong = document.querySelector("#mySong")


let game;





// * STATE MANAGEMENT FUNCTIONS

const startGame = () =>{
  console.log("iniciando juego")
  startSreen.style.display = "none";
  canvas.style.display = "block";
 

  game = new Game()// esta solo va a existir en el scope startGame
  game.gameLoop()

}

// const startSong = () =>{
//   startSreen.style.display = "none";
//   canvas.style.display = "block";
 

// }

const keyPress = (event) =>{
  if(event.code === "Space"){
    game.car.carMoveRight()
  }
}






  // * ADD EVENT LISTENERS

  startBtn.addEventListener("click",startGame)
  //mySong.addEventListener("load",startSong)

  window.addEventListener("keydown", keyPress)


 
 

  
  
 