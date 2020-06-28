// INITIALIZING VARIABLES
var ball; 
var rod=[];
let score=0;
let bg;
let pimgup;
let pimgd;
let bimg;
var x1 = 0;
var x2;
var scrollSpeed = 1;
let MENU =0;

// LOADING IMAGES
 function preload(){
   bg = loadImage("movingimg.jpg");
   pimg = loadImage("pipe.jpg");
   bimg = loadImage("ball.png");   
   song = loadSound("14 - Ours' Theme.mp3");
   song1 = loadSound("game sound.mp3");
 }


//CREATES SCREEN AND OBJECTS
function setup() {
  createCanvas(550,580);
  ball = new Ball();
  x2 = width;
  song.loop();
  if (MENU == 0) {
    song1.play();
  }
}


//IT SHOWS THE RESULT ON THE SCREEN
function draw() {
  
  background(0);
  fill(0, 255, 0);
  text("FLOATING BALL",100,256);
  rect(180, 300, 200, 75);
  textSize(50)
  fill(255);
  text('START', 200, 356);
  
  if (MENU == 1) {
    song1.stop();
    background(0);
    gameRunning();
    
  }
  
}


// CREATING A UPWARD PUSH ON BIRD BY USING SPACEBAR KEY
function keyPressed(){
  if (key == ' '){
    ball.up(); 
  }
}   


function Image_moving(){
  image(bg, x1, 0, width, height);
  image(bg, x2, 0, width, height);
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
}


function gameRunning(){
  Image_moving();
  for (var i=rod.length-1; i>=0 ; i--){
    rod[i].show();
    rod[i].update();
    // IF BIRD HITS THE PIPE IT PRINTS GAME OVER AND REMOVES THE OBJECTS
    if (rod[i].hits (ball)){
      song.stop();
      fill(255,0,0);
      textSize(width/7);
      text("GAME OVER",50,300);
      fill(0,250,0);
      textSize(width/9);
      text("SCORE  " + (round(score/9)),110,400);
      ball.remove();
      
    }
    // CALCULATING SCORE
    if (rod[i].score(ball)){
    score ++;  
    }
    // DELETING THE PIPE WHICH LEFT THE FRAME
    if (rod[i].offscreen()){
      rod.splice(i, 1);
    } 
  }
  // FOR EVERY 100 FRAME ONE NEW PIPE IS CREATED
  if (frameCount % 100 ==0){
    rod.push(new Rod());
    }
  
  
  
  ball.show();
  ball.update();
  // DISPLAYING SCORE
  fill(255);
  textSize(width/15);
  text("score = "+ (round(score/9)),10,30);
   
  }

function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 380 && mouseX > 180) {
      if (mouseY < 375 && mouseY > 300) {
        song.play();
        MENU = 1
      }
    }
  }
}
