// INIALIZING PIPE OBJECT
function Rod(){
  
  var spacing =random(150,height/4); // LENGTH OF THE SPACE BETWEEN TWO PIPES
  var center = random(spacing, height-spacing); // CENTER OF THE GAP
  this.top = center-spacing/2; // END OF THE TOP PIPE
  this.bottom = height-(center+spacing/2); // END OF THE BOTTOM PIPE
  this.x = width; // X POSOTION OF THE PIPE
  this.w = 20; // WIDTH OF THE PIPE
  this.speed=2; // MOVEMENT SPEED OF THE PIPE
  this.highlight = false; 
 
  //IT HELPS TO FIND THE HITING OF THE BALL IN PIPE
  this.hits = function(bird){
     if(bird.y < this.top || bird.y > height-this.bottom){
       if(bird.x > this.x && bird.x < this.x+this.w){
         this.highlight=true;
         return true;
       }
    }
    this.highlight = false;
    return false;
  }
  // THIS HELPS TO COUNT THE SCORE
  // IF THE BALL IS BETWEEN THE TOP AND BOTTOM PIPES IT RETURNS TRUE ELSE FALSE
  this.score = function(bird){
    if(bird.y > this.top && bird.y < height-this.bottom){
         if(bird.x > this.x && bird.x < this.x+this.w){
           return true;
         }
      }
      return false;
  }
  // THIS FUNCTION SHOWS THE PIPE IN THE SCREEN
  this.show = function(){
    fill(0,99,178);
    if (this.highlight){
      fill(255,0,0);  
    }
    // FOLLOEING BUILD THE TOP AND BOTTOM PIPES
    image(pimg,this.x,0,this.w,this.top);
    image(pimg,this.x,height-this.bottom, this.w,this.bottom);

  };
  // UPDATES THE PIPE SO THAT IT CAN CREATE NEW 
  this.update = function(){
    this.x -= this.speed;
  };
  
 
  // INDICATES WHETHER THE PIPE CROSSED THE BIRD OR NOT
  this.offscreen=function() {  
    if (this.x< -this.w){
      return true;
    }
      else{
        return false;
      }
  };
}