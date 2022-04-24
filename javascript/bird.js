class Bird {

    constructor(xParam, yParam){
        //Propiedades 

        this.x = xParam;
        this.y = yParam;
        this.w = 80;
        this.h = 80;
        this.img = new Image();
        this.img.src="./images/bird.png";
        this.speed = 4;
        
    }

    drawBird = () =>{
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    }

    // moveBird = () =>{
    //     this.x = this.x - this.speed;

    // }

    


    


   
}