function setup(){
    createCanvas(400,400);
}

function draw(){
    background(160);
    translate(145, 160);
    squares();
    curves();
}

function squares(){
    rect(0, 0, 10, 10);
    rect(0, 10, 10, 10);
    rect(10, 0, 20, 20);
    rect(0, -30, 30, 30);
    rect(-50, -30, 50, 50);
    rect(-50, 20, 80, 80);
    rect(30, -30, 130, 130);
}

function curves(){
  noFill();
  strokeWeight(1);
  arc(10, 10, 18, 18, PI, 3*PI/2);
  arc(10, 10, 19, 19, PI, PI/2);
  arc(10, 0, 39, 39, 0, PI/2);
  arc(0, 0, 58.5, 58.5, 0, -PI/2);
  arc(0, 20, 98, 98, PI, 3*PI/2);
  arc(30, 20, 158, 159, PI, PI/2);
  arc(30, -30, 259, 259, 0, PI/2);
}
