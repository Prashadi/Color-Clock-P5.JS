function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES)
}

function draw() {
    background(255);
    translate(200,200);
    rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();
    fill(0);
    circle(0,0,300);
    let sc_color = map(sc,0,60,100,255);
    fill(0,0,sc_color);
    let sc_map = map(sc,0,60,250,300);
    let sc_map2 = map(sc,0,60,0,360);
    arc(0,0,sc_map,sc_map,0,sc_map2);
    fill(0);
    circle(0,0,250);
    let mn_color = map(mn,0,60,100,255);
    fill(0,mn_color,0);
    let mn_map = map(mn,0,60,200,250);
    let mn_map2 = map(mn,0,60,0,360);
    arc(0,0,mn_map,mn_map,0,mn_map2);
    fill(0);
    circle(0,0,200);
    let hr_color = map(hr,0,24,100,255);
    fill(hr_color,0,0);
    let hr_map = map(hr%12,0,12,150,200);
    let hr_map2 = map(hr%12,0,12,0,360);
    arc(0,0,hr_map,hr_map,0,hr_map2);
    fill(0);
    circle(0,0,150);
}