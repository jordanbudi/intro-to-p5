function setup(){
    createCanvas(600,400);
    background(100,100,100);
}

function draw(){
    line(35, 80, 400, 200);
    
    stroke(255,255,255);
    fill(255,0,0);
    rect(290,100,250,250);
    
    stroke(0,0,0);
    strokeWeight(4);
    fill(0,0,255);
    ellipse(50,250,80,80);
    

}

// draw me 2 ellipses
// draw me 2 rectangles
// draw em 4 lines (1 wiht a positive slop, 1 with a neg slope,)
// 1 with a slope of 0, and 1 with a slope of undefined.