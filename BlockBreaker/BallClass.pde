class Ball{
    float s;
    PVector loc, vel;
    
    Ball(){
        loc = new PVector (width/2, height/2);
        vel = new PVector (3, 3);
        s = 20;
    }
    
    void show(){
        fill (255);
        ellipseMode(CENTER);
        ellipse(loc.x, loc.y, s, s);
    }
    
    void update(){
        loc.add(vel);        
    }
    
    void edges(){
        if (loc.x+10 > width || loc.x-10 < 0){
            vel.x *= -1;
        }
        if (loc.y-10 < 0){
            vel.y *= -1;            
        }
        if (loc.x > p.x - 30 && loc.x < p.x + 30){
            if (loc.y+10 > p.y-10){
                vel.y *= -1;                
            }
        } else if (loc.y-10 > height){
            loc.x = width/2;
            loc.y = height/2;
        }
    }
}
