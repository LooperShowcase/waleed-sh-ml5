class Player
{

    constructor()
    {
        this.size=50;
        this.x=50;
        this.y=height - this.size;
        this.velocityY=0;
    this.gravity = 1;
    }
    
    show(){
    
        fill(252, 163, 17);
        image(pgImg,this.x, this.y, this.size, this.size);
    }
    jump(){
        if (this.y == height - this.size){
        this.velocityY = -17;
      }
    }
    move(){
        this.y += this.velocityY;
        this.velocityY += this.gravity; 
        this.y = constrain(this.y, 0, height - this.size); 
    }
collided(currentObs){
let isColliding = collideRectRect(this.x, this.y, this.size, this.size, currentObs.x,currentObs.y,currentObs.size, currentObs.size);
return isColliding; 

}

}