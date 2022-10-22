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

  let originX = 0;
  let diameter = 120;
  let Xa = width / 2
  let Ya = height / 2
  background("rgb(0,255,0)");

  drawFlower(Xa, Ya, diameter)
  drawFlower(originX, Ya, diameter)
  drawFlower(width, Ya, diameter)

}
