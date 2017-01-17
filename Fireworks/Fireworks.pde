ArrayList<Firework> fw;
void setup(){
    size(640, 360);
    fw = new ArrayList<Firework>();
}

void draw(){
    background(0);
    float prob = random(1);
    if (prob < 0.03){ //There's 3% chance of adding a new firework to the screen
        fw.add(new Firework());
    }
    for (int i = 0; i < fw.size(); i++){
        fw.get(i).show();
        fw.get(i).update();
        pop(i);
    }
}

//Removes the firework from the arraylist when it's out of the screen
void pop(int i){
    int index = i;
    if (fw.get(index).vel.y >= 0){
        fw.remove(index);
    }
}
