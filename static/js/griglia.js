let d = 30;
let w = 600;
let h = 300;
let x = d ;
let y = d ;

function drawFlower(x, y, d) {
	let raggio = d / 2;
	let border = 4;
	stroke("rgb(0,0,0)");
	strokeWeight(border);
	fill("rgb(255, 153, 51)");
	circle(x - raggio, y - raggio, d);
	circle(x + raggio, y - raggio, d);
	circle(x - raggio, y + raggio, d);
	circle(x + raggio, y + raggio, d);
	fill("rgb(255, 51, 0)");
	circle(x, y, d);
}

function setup() {
	createCanvas(w, h);
	background("green");
	frameRate(5);
}

function draw() {
	drawFlower(x, y, d);
	x = x + d*2;
	if (x >= w) {
		x = d ;
		y = y + d*2;
	}
}