function Ball(){
  this.x=50; // X-POSTION OF THE BIRD
  this.y=height/2; // Y-POSITION OF THE BIRD
  this.gravity=0.3; //DOWNWARDS PULL
  this.velocity=0; //MOVEMENT OF THE BIRD
  this.lift= -12; // UPWARD PULL
  
  // THIS FUNCTION SHOWS THE BALL IN THE SCREEN
  this.show = function(){
    fill(0,99,178);
    image(bimg,this.x,this.y,32,32);
  };
  
  // UPWARD MOVEMENT
  this.up = function(){
    this.velocity += this.lift;
     this.velocity += 0.9; // TO NULLIFY SOME ERROR
  };
  
  // THIS FUNCTION UPDATES THE Y-POSITION OF THE BIRD
  this.update= function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    // IT STICKS IF THE BIRD MOVES ABOVE AND BELLOW THE FRAME
    if (this.y> height){
      this.y = height-10;
      velocity = 0;
    }
    
    if (this.y< 0){
      this.y = 0 ;
      velocity = 0;
    }
  };
}