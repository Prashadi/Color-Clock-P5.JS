function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    translate(200,200);
    let hr = hour();
    let mn = minute();
    let sc = second();
    strokeWeight(4);
    stroke(255);
    fill(0);
    circle(0,0,300);
    let sc_color = map(sc,0,60,100,255);
    fill(0,0,sc_color);
    let sc_map = map(sc,0,60,200,300);
    circle(0,0,sc_map);
    let mn_color = map(mn,0,60,100,255);
    fill(0,mn_color,0);
    let mn_map = map(mn,0,60,100,200);
    circle(0,0,mn_map);
    let hr_color = map(hr,0,24,100,255);
    fill(hr_color,0,0);
    let hr_map = map(hr,0,24,0,100);
    circle(0,0,hr_map);
}