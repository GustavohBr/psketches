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
