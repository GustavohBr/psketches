var e, a, b, t, p1, xt, yt;

function setup() {
    createCanvas(400, 400);
    background(255);
    strokeWeight(2);
    stroke(0);
    e = exp(1.0);
    a = 5;
    b = 0.34;
    t = 0;

}

function draw() {
    translate(width / 2, height / 2);
    p1 = a * pow(e, b * t);
    xt = p1 * cos(t);
    yt = p1 * sin(t);
    point(xt, yt);
    t += 0.1;

}
