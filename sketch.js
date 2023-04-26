function setup() {
  createCanvas(windowWidth*.75, windowWidth*.75, WEBGL);
  background(0, 0, 0);
  frameRate(4);
  angleMode(DEGREES);
  v0 = createVector(1, 1, 1);
  
  c = 0;
  num = 0;
  sketchDone = false;
  x = 0;
  y = 0;  
  a = 0;
  drawX = 0;
  drawY = 0;

 // input = select("#number");
  submitButton = select("#draw");
  submitButton.mousePressed(drawBlocks);
}

function draw(){
  noStroke();
  drawQuilt(num);
}

function drawBlocks() {
//  const name = input.value();
//  num = int(name);
  num = 40;
  sketchDone = true;
}

function drawQuilt(input) {
  if (c < input) { 
      push();
        drawBlock(x, y, a, -250, -250);
      pop();
      push();
        drawBlock(x, y, a, 0, -250);
      pop();
      push();
        drawBlock(x, y, a, 250, -250);
      pop();
      push();
        drawBlock(x, y, a, -250, 0);
      pop();
     push();
       drawBlock(x, y, a, 0, 0);
     pop();
      push();
        drawBlock(x, y, a, 250, 0);
      pop();
      push();
        drawBlock(x, y, a, -250, 250);
      pop();
      push();
        drawBlock(x, y, a, 0, 250);
      pop();
      push();
        drawBlock(x, y, a, 250, 250);
      pop();
    a = a - 45;
    c = c + 1;
  }
    drawX = drawX + 10;
    drawY = drawY + 10;
    
  if (c === input && sketchDone) {
    doneButton = createButton("Again");
    doneButton.mousePressed(refreshPage);
    noLoop();
  }
}
  
function drawBlock(x,y,a, shiftx, shifty) {
    translate(shiftx, shifty);
  if (a > -360) {
      drawTriangle(x, y, x, y+50, x+50, y+50, a, random(0, 255), random(0, 255), random(0, 255));
  }
  
  if (a <= -360 && a > -720) {
      drawTriangle(x+50, y+50, x, y+50, x+50, y+100, a, random(0, 255), random(0, 255), random(0, 255));
  }
  
  if (a <= -720 && a > -1080) {
      drawTriangle(x, y+50, x+50, y+100, x, y+100, a, random(0, 255), random(0, 255), random(0, 255));
  }
  
  if (a <= -1080 && a > -1440) {
      drawTriangle(x+100, y+100, x+50, y+100, x+50, y+50, a, random(0, 255), random(0, 255), random(0, 255));
  }
  
  if (a <= -1440) {
      drawDiamond(x-150, y-125, x-125, y-150, x-100, y-125, x-125, y-100, 360, random(0, 255), random(0, 255), random(0, 255));
    drawDiamond(x+150, y+125, x+125, y+150, x+100, y+125, x+125, y+100, 360, random(0, 255), random(0, 255), random(0, 255));
  }
}
  
function drawTriangle(x1, y1, x2, y2, x3, y3, deg, rcolor, gcolor, bcolor) {
  fill(rcolor, gcolor, bcolor);
  rotateZ(deg / v0.z);
  triangle(x1, y1, x2, y2, x3, y3);
   // noLoop();
}

function drawDiamond(x1, y1, x2, y2, x3, y3, x4, y4, deg, rcolor, gcolor, bcolor) {
  fill(rcolor, gcolor, bcolor);
  rotateZ(deg / v0.z);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
   // noLoop(); 
}

function refreshPage() {
  window.location.reload();
}
