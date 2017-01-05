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
