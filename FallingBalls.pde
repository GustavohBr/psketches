Ball b;
ArrayList<Ball> balls;
boolean add = false;

void setup(){
    
    balls = new ArrayList<Ball>();
    size(640,360);
}

void draw(){
    
    background(255);  
    b = new Ball (mouseX, mouseY);
    if (add){
        
        balls.add(b);
        add = false;
    }
    for (int i =0; i < balls.size(); i++){
        
        balls.get(i).display();
        balls.get(i).fall();
        if (balls.get(i).loc.y > height-20){
            balls.get(i).acc.y = 0;
            balls.get(i).vel.y = 0;
        }
        
    }
    if (balls.size() > 5){
        
        balls.remove(0);
    }
    
}

void mousePressed(){
    
    if (mousePressed){
        add = true;
    }
    
}


class Ball{
    
    PVector loc, vel, acc;
    
    Ball(float x_, float y_){
        
        x = x_;
        y = y_;
        loc = new PVector(x, y);
        vel = new PVector(0, 0);
        acc = new PVector(0, 0.05);
        
    }
    
    void display(){
        
        fill (100);
        ellipseMode (CENTER);
        ellipse (loc.x, loc.y, 40, 40);
        
    }
    
    void fall(){
        
        vel.add(acc);
        loc.add(vel);
    }    
}
