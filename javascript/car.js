class Car {

    constructor(){
        //Propiedades del coche
        this.x = 320;
        this.y = 300;
        this.w = 100;
        this.h = 100;
        this.img = new Image()
        this.img.src="./images/car.png"
        this.speed = 2
        this.moveRight = 100
    }

    drawCar = () =>{
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    }

    carMoveLeft = (event) =>{
            this.x = this.x - this.speed
      
        }
    carMoveRight = () =>{
        this.x = this.x + this.moveRight

    }
            
        

    }



  

   


