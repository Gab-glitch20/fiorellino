let width = 600;
let height = 300;

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
	let diameter = 30;
	let nCelle = diameter*2;
	let x = 0;
	let y = 0;
	let righe = height / nCelle;
	let colonne = width / nCelle;

	

	for (let j = 0; j < righe; j++) {
		for (let i = 0; i < colonne; i++) {
			drawFlower(x + diameter, y + diameter, diameter);
			x = x + diameter * 2;
		}
		x = 0;
		y = y + diameter * 2;
	}
}
