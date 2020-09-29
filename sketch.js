function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  background("black");

}

function draw() {




  // put drawing code here
  push();
  translate(width/2, height/2);
  noFill();
  strokeWeight(0.5)
  stroke("#C2EFB3");
  line(200, 0,cos(frameCount*3)*100,sin(frameCount*3)*100);
  line(-200, 0,cos(frameCount*3)*100,sin(frameCount*3)*100);

  line(0, 200,cos(frameCount*3)*100,sin(frameCount*3)*100);
    line(0, -200,cos(frameCount*3)*100,sin(frameCount*3)*100);
pop();

push();
translate(width/2, height/2);
translate(-200,0)
noFill();
strokeWeight(0.5)
stroke("#97ABB1");
line(200, 0,cos(-frameCount*3)*100,sin(-frameCount*3)*100);
line(-200, 0,cos(-frameCount*3)*100,sin(-frameCount*3)*100);

line(0, 200,cos(frameCount*3)*100,sin(frameCount*3)*100);
  line(0, -200,cos(frameCount*3)*100,sin(frameCount*3)*100);
pop();

push();
translate(width/2, height/2);
translate(200,0)
noFill();
strokeWeight(0.5)
stroke("#97ABB1");
line(200, 0,cos(-frameCount*3)*100,sin(-frameCount*3)*100);
line(-200, 0,cos(-frameCount*3)*100,sin(-frameCount*3)*100);

line(0, 200,cos(frameCount*3)*100,sin(frameCount*3)*100);
  line(0, -200,cos(frameCount*3)*100,sin(frameCount*3)*100);
pop();

push();
translate(width/2, height/2);
translate(0,200)
noFill();
strokeWeight(0.5)
stroke("#97ABB1");
line(200, 0,cos(frameCount*3)*100,sin(-frameCount*3)*100);
line(-200, 0,cos(-frameCount*3)*100,sin(frameCount*3)*100);

line(0, 200,cos(-frameCount*3)*100,sin(frameCount*3)*100);
  line(0, -200,cos(frameCount*3)*100,sin(-frameCount*3)*100);
pop();

push();
translate(width/2, height/2);
translate(0,-200)
noFill();
strokeWeight(0.5)
stroke("#97ABB1");
line(200, 0,cos(frameCount*3)*100,sin(-frameCount*3)*100);
line(-200, 0,cos(frameCount*3)*100,sin(-frameCount*3)*100);

line(0, 200,cos(-frameCount*3)*100,sin(-frameCount*3)*100);
  line(0, -200,cos(frameCount*3)*100,sin(frameCount*3)*100);
pop();

push();


  // Stops the draw function if a certain condition avaluates true
  if (frameCount == 240) {
    noLoop();
  }




}
