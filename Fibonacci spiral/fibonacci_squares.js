var e, a, b, t, p1, xt, yt;

function setup() {
    createCanvas(400, 400);
    strokeWeight(2);
    stroke(0);
    phi = (1+sqrt(5))/2;
}

function draw() {
    background(150);
    translate(145, 160);
    squares()
}

function squares(){
    beginShape();     // -----------
    vertex(0, 0);     // -----------
    vertex(10, 0);    // First square  
    vertex(10, 10);   // S: 10px
    vertex(0, 10);    // -----------
    endShape(CLOSE);  // -----------
    
    beginShape();     // -----------
    vertex(0, 10);    // -----------
    vertex(10, 10);   // Second square
    vertex(10, 20);   // S: 10px
    vertex(0, 20);    // -----------
    endShape(CLOSE);  // -----------
    
    beginShape();     // ----------- 
    vertex(10, 20);   // -----------
    vertex(30, 20);   // Third square
    vertex(30, 0);    // S: 20px
    vertex(10, 0);    // -----------
    endShape(CLOSE);  // -----------
    
    beginShape();     // -----------
    vertex(30, 0);    // -----------
    vertex(30, -30);  // Fourth square 
    vertex(0, -30);   // S: 30px
    vertex(0, 0);     // -----------
    endShape(CLOSE);  // -----------
      
    beginShape();     // -----------
    vertex(0, -30);   // -----------
    vertex(-50, -30); // Fifth square:
    vertex(-50, 20);  // S: 50px
    vertex(0, 20);    // -----------
    endShape(CLOSE);  // -----------
    
    beginShape();     // -----------
    vertex(-50, 20);  // -----------
    vertex(-50, 100); // Sixth square:
    vertex(30, 100);  // S: 80px
    vertex(30, 20);   // -----------
    endShape(CLOSE);  // -----------
    
    beginShape();     // -----------
    vertex(30, 100);  // -----------
    vertex(160, 100); // Last square:
    vertex(160, -30); // S: 130px
    vertex(30, -30);  // -----------
    endShape(CLOSE);  // -----------
}
