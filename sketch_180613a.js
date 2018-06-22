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


  //Der Döner
  push();
  scale(1.0,-1.0,1.0); // Damit er richtig herum auftaucht.
  translate (0, -1, 0);
  rotateY(frameCount * 0.03);
  texture(fleisch);
  model(spiess);
  pop();

  //Die Zwiebel
  push();
  translate(0,-115,0);
  texture(zwiebel);
  rotateY(frameCount * 0.05);
  sphere(20);
  pop();
  //Die Stange
  push();
  translate(0,-10,0);
  fill(192, 192, 192);
  cylinder(3,310);
  stroke(255, 50);
  pop();

  push();
    translate(0 ,145, 0);
    //rotateY(PI / 2);
    plane(150,5,150);
    fill(192, 192, 192);

  pop();
  //translate(50, 50, 0);
  //rotateX(mouseY * 0.05);
  //rotateY(mouseX * 0.05);


}
