class Car {

    constructor(){
        //Propiedades del coche
        this.x = 320;
        this.y = 300;
        this.w = 100;
        this.h = 100;
        this.img = new Image()
        this.img.src="./images/car.png"
        this.speed = 20;
        this.carDirectionX = 1
    
        
   
    }

    drawCar = () =>{
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    }

    carMoveLeft =() =>{
        this.x = this.x - this.speed;
    }

    carMoveRight = () =>{
        this.x = this.x + this.speed ;
    }

    carOneCollision = () =>{
        if(this.x > canvas.width - this.w){
             this.x  = this.x - this.speed
        } else if(this.x < 0){
            this.x = this.carDirectionX
        }
    }


    


            
        

    }



  

   


