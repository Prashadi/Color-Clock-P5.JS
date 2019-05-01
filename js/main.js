function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    translate(200,200);
    let hr = hour();
    let mn = minute();
    let sc = second();
    strokeWeight(2);
    stroke(0);
    fill(0);
    circle(0,0,300);
    let sc_color = map(sc,0,60,0,255);
    fill(0,0,sc_color);
    let sc_map = map(sc,0,60,250,300);
    circle(0,0,sc_map);
}