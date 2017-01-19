var e, a, b, t, p1, xt, yt;

function setup() {
    createCanvas(400, 400);
    stroke(0);
}

function draw() {
    background(150);
    translate(145, 160);
    squares();
    curves();
}

function squares(){
    strokeWeight(2);
    fill(255);

    // First square
    // S: 10px
    beginShape();
    vertex(0, 0);
    vertex(10, 0);
    vertex(10, 10);
    vertex(0, 10);
    endShape(CLOSE);

    // Second square
    // S: 10px
    beginShape();
    vertex(0, 10);
    vertex(10, 10);
    vertex(10, 20);
    vertex(0, 20);
    endShape(CLOSE);

    // Third square
    // S: 20px
    beginShape();
    vertex(10, 20);
    vertex(30, 20);
    vertex(30, 0);
    vertex(10, 0);
    endShape(CLOSE);

    // Fourth square
    // S: 30px
    beginShape();
    vertex(30, 0);
    vertex(30, -30);
    vertex(0, -30);
    vertex(0, 0);
    endShape(CLOSE);

    // Fifth square:
    // S: 50px
    beginShape();
    vertex(0, -30);
    vertex(-50, -30);
    vertex(-50, 20);
    vertex(0, 20);
    endShape(CLOSE);

    // Sixth square:
    // S: 80px
    beginShape();
    vertex(-50, 20);
    vertex(-50, 100);
    vertex(30, 100);
    vertex(30, 20);
    endShape(CLOSE);

    // Last square:
    // S: 130px
    beginShape();
    vertex(30, 100);
    vertex(160, 100);
    vertex(160, -30);
    vertex(30, -30);
    endShape(CLOSE);
}

function curves(){
  noFill();
  strokeWeight(2);
  arc(10, 10, 18, 18, PI, -PI/2);
  arc(10, 10, 18, 18, -3*PI/2, -PI/2);
  arc(10, 0, 38, 38, 0, PI/2);
  arc(0, 0, 58, 58, -PI/2, 0);
  arc(0, 20, 98, 98, PI, -PI/2);
  arc(30, 20, 158, 158, -3*PI/2, -PI);
  arc(30, -30, 258, 258, 0, PI/2);
}
