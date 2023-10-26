let noiseTime = 0;
let noiseTam = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill ();
}

function draw() {
  
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  let tam = map(noise(noiseTam), 0, 1, 50, 5);

  noiseTime += 0.006;
  noiseTam += 0.1;

  fill(0, 0, 200);
  stroke(0, 255, 255);
  strokeWeight(2);
  circle(posX, posY, tam);

  let posYReflejo = windowHeight - posY; 
fill(255, 0, 0);
  stroke(255, 99, 71);
   strokeWeight(2);
  square(posX, posYReflejo, tam);

  let posYCirculo3 = map(noise(noiseTime + 200), 0, 1, 0, windowHeight);
  fill(255, 0, 255); 
  stroke(255, 182, 193); 
   strokeWeight(2);
  circle(posX, posYCirculo3, tam);

  let posYCuarto = map(noise(noiseTime), 0, 1, 0, windowHeight);
 fill(0, 128, 0); 
  stroke(0, 255, 0); 
   strokeWeight(2);
  square(posX, posYCuarto, tam);

  
}