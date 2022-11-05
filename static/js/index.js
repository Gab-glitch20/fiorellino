let width = 600;
let height = 300;
let x;
let y;
let diameter;
let deltaX;
let deltaY;

function drawFlower(x, y, d) {
	let raggio = d / 2;
	let border = 2;
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
	deltaX = -2;
	deltaY = 5;
	
	diameter = random(25, 60);
	x = random(0+diameter, width-diameter);
	y = random(0+diameter, height-diameter);
}

function draw() {
	background("green");
	drawFlower(x, y, diameter);
	x = x + deltaX;
	y = y + deltaY;

	if (x + diameter > width || x - diameter < 0) {
		deltaX = -1 * deltaX;
	}

	if (y + diameter > height || y - diameter < 0) {
		deltaY = -1 * deltaY;
	}
}
