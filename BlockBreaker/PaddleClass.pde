class Paddle{
    float x, y;
    
    Paddle(){
        x = width/2;
        y = height-15;
    }
    
    void show(){
        fill(255);
        rectMode(CENTER);
        rect(x, y, 60, 20);
    }
    
    void update(){
        x = mouseX;
    }
}
