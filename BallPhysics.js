// JavaScript source code
class Ball{
	constructor(height, width, x, y, speed, dir){
		this.height = height;
		this.width = width;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.dir = dir;
	}
	draw(){
	  let ball = ellipse(this.x, this.y, this.width, this.height);
	}
	move(){
		if(this.dir == "left" && this.isOverBorder(this.x) === false){
			this.x -= this.speed;
		}
		if(this.dir == "right" && this.isOverBorder(this.x) === false){
			this.x += this.speed;
		}
		if(this.dir == "up" && this.isOverBorder(this.y) === false){
			this.y += this.speed;
		}
		if(this.dir == "down" && this.isOverBorder(this.y) === false){
			this.y -= this.speed;
		}
		
	}
	isOverBorder(axis){
	  if(axis === this.x && this.x + this.width/2 >= 500 || this.x + this.width/2 <= 0){
	    return true;
	  }else if(axis === this.y && this.y + this.length/2 >= 500 || this.y + this.length/2 <= 0){
	    return true;
	  }
	  else{
	    false;
	  }
	}
	update(){
		this.draw();
		this.move();
		console.log(this.isOverBorder())
	}
}

let ball = new Ball(20, 20, 250, 250, 1, "right");

var draw = function(){
	background(0, 0, 255);
  ball.update();
  
};


draw();