var form;
var bg;
var continueButton;

function preload(){
  bg=loadImage("bg.png");
  continueButton=loadImage("continueButton.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  
}

function draw() {
  background(bg);  
    
    form.display();
}