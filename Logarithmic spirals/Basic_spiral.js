var e, a, b, t, p1, xt, yt;

function setup() {
    createCanvas(400, 400);
    strokeWeight(2);
    stroke(0);
    e = exp(1.0); // Euler's number 'e'
    a = 3;     //Change these values to modify 
    b = 0.24;  //the shape of the spiral
    t = 0;

}

function draw() {
    background(255);
    translate(width / 2, height / 2);
    noFill();
    beginShape();
    for (t = 0; t < 20; t+=0.1){
        p1 = a * pow(e, b * t);
        xt = p1 * cos(t);
        yt = p1 * sin(t);
        vertex(xt, yt);
    }
    endShape();
}
