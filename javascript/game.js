class Game {

  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/road.png"
    this.car = new Car()
    this.poopArr = [new Poop(0, "./images/poop.png")]
    this.livesArr = [new Live(480, "./images/car.png"), new Live(520, "./images/car.png"), new Live(560, "./images/car.png")]
    this.isGameOn = true;
    this.bird = new Bird(20, 0)
    this.bird1 = new Bird(550, 0)
    this.bird2 = new Bird(300, 0)
    this.score = 0;

  }

  points = () => {
    this.poopArr.forEach((eachPoop) => {
      if (eachPoop.y === 504) {
        this.score += 10;


      }
    })
  }

  gameOverCollision = () => {
    this.poopArr.forEach((eachPoop, i) => {
      if (this.car.x < eachPoop.x + eachPoop.w &&
        this.car.x + this.car.w > eachPoop.x &&
        this.car.y < eachPoop.y + eachPoop.h &&
        this.car.h + this.car.y > eachPoop.y) {
        this.poopArr.splice(i, 1)
        this.livesArr.pop()
        if (this.livesArr.length === 0) {
          this.isGameOn = false;
          canvas.style.display = "none";
          gameOverTitle.style.display = "block"
          gameOverScreen.style.display = "flex";
          audio.pause()
        }
      }
    })
  }

  addNewPoops = () => {
    if (this.poopArr[this.poopArr.length - 1].y > 400) {
      let randomPositionChange = Math.random() * 500
      let newPoop = new Poop(randomPositionChange, "./images/poop.png")
      this.poopArr.push(newPoop)
    }
    this.poopArr.forEach((eachPoop) => {
      if (this.score > 100) {
        eachPoop.speed = 8
      }

    })

  }

  //Todos los metodos que regulan nuestro juego
  gameLoop = () => {
    //1. Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //2. acciones o movimientos de los elementos.
    this.car.carMoveLeft()
    this.car.carMoveRight()
    this.car.carOneCollision()
    this.bird.moveBird()
    this.bird1.moveBird()
    this.bird2.moveBird()
    this.bird.birdOneCollision()
    this.bird1.birdOneCollision()
    this.bird2.birdOneCollision()
    this.addNewPoops()
    this.poopArr.forEach((eachPoop) => {
      eachPoop.movePoop()
    })
    this.gameOverCollision()
    //this.score()
    scoreDom.innerText = Math.floor(this.score);
    //this.difficultyLevel()
    this.points()
    //3. dibujar los elementos.
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
    this.car.drawCar()
    this.bird.drawBird()
    this.bird1.drawBird()
    this.bird2.drawBird()
    this.addNewPoops()
    this.poopArr.forEach((eachPoop) => {
      eachPoop.drawPoop()
    })
    this.livesArr.forEach((eachLive) => {
      eachLive.drawLives()
    })
    // 4. control y recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop)
    }

  }
}







