class Poop {

    constructor(xParam, srcParam) {
        //Propiedades de poop

        this.x = xParam;
        this.y = 0;
        this.w = 50;
        this.h = 50;
        this.img = new Image()
        this.img.src = srcParam
        this.speed = 4;

    }

    drawPoop = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    movePoop = () => {
        this.y = this.y + this.speed

    }


}