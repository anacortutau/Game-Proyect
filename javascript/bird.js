class Bird {

    constructor(xParam, yParam) {
        //Propiedades 

        this.x = xParam;
        this.y = yParam;
        this.w = 80;
        this.h = 80;
        this.img = new Image();
        this.img.src = "./images/bird.png";
        this.speed = 4;
        this.birdDirectionX = 1


    }

    drawBird = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveBird = () => {
        this.x = this.x + (this.speed * this.birdDirectionX);

    }



    birdOneCollision = () => {
        if (this.x > canvas.width - this.w) {
            this.birdDirectionX = -1
        } else if (this.x < 0) {
            this.birdDirectionX = 1
        }
    }








}