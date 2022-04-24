class Game {

    constructor(){
      this.bg = new Image();
      this.bg.src="./images/road.png"
      this.car = new Car() 
      this.poopArr = [new Poop(0,"./images/poop.png")]
      // this.poop = new Poop(10,0)
      // this.poop1 = new Poop(110,0)
      // this.poop2 = new Poop(210,0)
      // this.poop3 = new Poop(310,0)
      // this.poop4 = new Poop(410,0)
      // this.poop5 = new Poop(510,0)
      this.bird = new Bird(10,0)
      this.bird1 = new Bird(110,0)
      this.bird2 = new Bird(210,0)
      this.bird3 = new Bird(310,0)
      this.bird4 = new Bird(410,0)
      this.bird5 = new Bird(510,0)


  
    
    }


    addNewPoops = () =>{
      if(this.poopArr[this.poopArr.length -1].y >400){

        let randomPositionChange = Math.random() * 500
        let newPoop = new Poop(randomPositionChange, "./images/poop.png")
        this.poopArr.push(newPoop)
      }

    }

    // addNewBirds = () =>{
    //   if(this.birdArr[this.birdArr.length -1].x < 400){
    //     let newBird = new Bird()
    //     this.bird.push(newBird)
  

    //   }
    // }


    //Todos los metodos que regulan nuestro juego

    gameLoop = () => {
        console.log("juego andando")

        //1. Borrar el canvas

        ctx.clearRect(0,0,canvas.width, canvas.height)



        //2. acciones o movimientos de los elementos.
        this.car.carMoveLeft()
        // this.poop.movePoop()
        // this.poop1.movePoop()
        // this.poop2.movePoop()
        // this.poop3.movePoop()
        // this.poop4.movePoop()
        // this.poop5.movePoop()

        this.addNewPoops()
        this.poopArr.forEach((eachPoop)=>{
        eachPoop.movePoop()
      })
      // this.addNewBirds()
      // this.birdArr.forEach((eachBird)=>{
      //   eachBird.moveBird()
      // })
      

        //3. dibujar los elementos.

        ctx.drawImage(this.bg, 0,0, canvas.width, canvas.height)
        this.car.drawCar()
      
        this.addNewPoops()
        this.poopArr.forEach((eachPoop) =>{
          eachPoop.drawPoop()
        })

        // this.poop.drawPoop();
        // this.poop1.drawPoop();
        // this.poop2.drawPoop();
        // this.poop3.drawPoop();
        // this.poop4.drawPoop();
        // this.poop5.drawPoop();

        this.bird.drawBird();
        this.bird1.drawBird();
        this.bird2.drawBird();
        this.bird3.drawBird();
        this.bird4.drawBird();
        this.bird5.drawBird();


        // this.addNewBirds()
        // this.birdArr.forEach((eachBird)=>{
        //   eachBird.drawBird()
        // })
  
        
        
       

        

        // 4. control y recursion
        requestAnimationFrame(this.gameLoop)

    }

    }

    


    


