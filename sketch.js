/*Edits from original code:
1. Neck height if mouse pressed = 0
2. line 49: third value changed to 1
3. line 49: second value changed to neckY + 16
4: changed neckY to y-bodyHeight+neckHeight-radius
5:line 51: changed second value to neckY-115
6:line 53 changed second value to neckY-99
*/
var x=60;
var y=440;
var radius = 45;
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.1;

function setup(){
 createCanvas(360,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw(){
  background("white");
  var targetX=mouseX;
  x=x+(targetX-x)* easing;
  
  if(mouseIsPressed){
    neckHeight = 0;
    BodyHeight= 50;
  }
  else{
    neckHeight = 70;
    bodyHeight = 160;
  }
  var neckY=y-bodyHeight+neckHeight-radius;
  
  
  stroke(100);
  line(x+12,y-bodyHeight,x+12,neckY);
  
  line(x+12,neckY,x-18,neckY-43);
  line(x+12,neckY,x+42,neckY-99);
  line(x+12,neckY,x+78,neckY+15);
  
  noStroke();
  fill("blacK");
  ellipse(x,y-33,33,23);
  fill("black");
  rect(x-45,y-bodyHeight,90,bodyHeight-33);
  
  fill("black");
  ellipse(x+12,neckY-115,radius,radius);
  fill("white");
  ellipse(x+24,neckY-99,1,14);

  ellipse(x+24,neckY-6,3,3);
  
}