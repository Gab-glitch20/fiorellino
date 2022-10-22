let width = 600;
let height = 300;
let diameter = 50;
let deltaX = 5;
let deltaY = 5;
let x = 0 + diameter;
let y = 0 + diameter;

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
	createCanvas(width, height);
}

function draw() {
	background("green");
	x = x + deltaX
	y = y + deltaY

	drawFlower(x, y, diameter);
	if (x + diameter >= width) {
		deltaX = -deltaX;
	}

	if (x - diameter <= 0) {
		deltaX = -deltaX;
	}

	if (y + diameter >= height) {
		deltaY = -deltaY;
	}

	if (y - diameter <= 0) {
		deltaY = -deltaY;
	}
}
