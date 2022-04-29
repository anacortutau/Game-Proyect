# Title

CLEAN CAR

## Description

Clean car is a game in which the player has to move the car horizontally and dodge the poop that the birds are throwing from above.
The game ends when one of the poops falls on the car.

## MVP (DOM - CANVAS)

- The game has a car that moves horizontally
- Poops drop randomly from the top
- The game ends when a poop touches the car

## Data Structure

# main.js

- buildSplashScreen () {}
- buildGameScreen (){} 
- buildGameOverScreen (){} 


# game.js
- Game () {}
- points () {}
- gameOverCollision() {}
- addNewPoops() {}
- gameLoop() {}

# car.js
- Bird () {
    this.x
    this.y
    this.w
    this.h
    this.img
    this.img.src
    this.speed
    this.birdDirectionX
}

- drawBird () {}
- moveBird () {}
- birdOneCollision () {}

# car.js 
- Car (){
    this.x
    this.y
    this.w
    this.h
    this.img
    this.img.src
    this.speed
    this.carDirectionX

}
-  drawCar () {}
-  carMoveLeft () {}
-  carMoveRight () {}
-  carOneCollision () {}

# poop.js
- Poop () {
    this.x
    this.y
    this.w
    this.h
    this.img
    this.img.src
    this.speed
}

- drawPoop () {}
- movePoop () {}

# live.js
- Live () {
    this.x
    this.y
    this.w
    this.h
    this.img
    this.img.src

}

- drawLives () {}


## States y States Transitions

- splashScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- car - draw
- car - move
- game - addNewPoops
- poop- draw
- poop - move
- live - draw
- game - checkCollision
- game - GameOver
- game - addEventListener


## Links

### Git
[Link Repo](https://github.com/anacortutau/Game-Proyect)
[Link Deploy](https://anacortutau.github.io/Game-Proyect/)

### Slides
[Link Slides.com](https://docs.google.com/presentation/d/1OAd6ck_dy79Xy49XF7eOIC4PGk1GGjIEWQNxSD1DzpQ/edit#slide=id.g126490f0191_1_33)


