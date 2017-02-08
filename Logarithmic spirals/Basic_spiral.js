var e, a, b, t, p1, xt, yt, sliderA, sliderB;

function setup() {
    createCanvas(400, 400);
    strokeWeight(2);
    stroke(0);
    e = exp(1.0); // Euler's number 'e'
    a = 1;     //Change these values to modify 
    b = 0.2;  //the shape of the spiral
    t = 0;
    sliderA = createSlider(0, 100, 100);
	  sliderA.position(50, 415);
    sliderA.style('width', '100px');
		sliderB = createSlider(0, 100, 100);
	  sliderB.position(200, 415);
    sliderB.style('width', '100px');
}

function draw() {
		a = sliderA.value();
		b = map(sliderB.value(), 0, 100, 0, 1);
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
