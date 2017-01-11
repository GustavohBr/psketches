class Block{
    float x, y, r, g, b;
    int j;
    
    Block(float tempx, float tempy){
        x = tempx;
        y = tempy;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    
    void show(){
        fill(r, g, b);
        rectMode(CORNER);
        rect(x, y, 60, 20);
    }
}
