class Firework{
    PVector loc, vel, acc;
    float r, g, b;
    
    Firework(){
        r = random(255);
        g = random(255);
        b = random(255);
        loc = new PVector(random(width), height);
        vel = new PVector(0, random(-6, -8));
        acc = new PVector(0, 0.1);
    }
    
    void show(){
        strokeWeight(5);
        stroke(r, g, b);
        point(loc.x, loc.y);
    }
    
    void update(){
        loc.add(vel);
        vel.add(acc);
    }
}
