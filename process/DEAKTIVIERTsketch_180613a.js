var spiess;
var fleisch;
var zwiebel;


function preload(){
  spiess = loadModel('process/assets/spiess.obj'); // wenn nicht unten scale dann hier, true
  fleisch = loadImage("process/assets/fleisch_textur.png");
  zwiebel = loadImage("process/assets/zwiebel_textur.png");
 }

function setup() {
   createCanvas(640, 480, WEBGL);
  }

function draw() {
  background(0);
  //ambientLight(255);
  
  
  translate (0, 0, 0);
  push();
  rotateY(frameCount * 0.05);
  texture(fleisch);
  model(spiess);
  pop();
   
  
  push();
  translate(0,-115,0);
  texture(zwiebel);
  rotateY(frameCount * 0.07);
  sphere(20);
  pop();
  
  translate(0,-10,0);
  //push();
  fill(192, 192, 192);
  cylinder(3,310);
  //pop();
  
  stroke(255, 50);
  translate(50, 50, 0);
  rotateX(mouseY * 0.05);
  rotateY(mouseX * 0.05);
  
 
}
