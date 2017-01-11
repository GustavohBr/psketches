Paddle p;
Ball b;
ArrayList<Block> blocks;

void setup(){
    
    size(600, 300);
    p = new Paddle();
    b = new Ball();
    blocks = new ArrayList<Block>();
    for (int j = 0; j < 3; j++){
        for (int i = 0; i < 10; i++){
            blocks.add(new Block(60*i, 20*j));
        }
    }
}

void draw(){
    background (0);
    p.show();
    p.update();
    b.show();
    b.update();
    b.edges();
    for (int i = 0; i < blocks.size(); i++){
        blocks.get(i).show();        
    }
    for (int i = 0; i < blocks.size(); i++){
        if (b.loc.x > blocks.get(i).x && b.loc.x < blocks.get(i).x + 60){
            if (b.loc.y-10 < blocks.get(i).y + 20){
                blocks.remove(i);
                b.vel.y *= -1;
            }
        } 
    }    
}
