let sparkles = [];
let lifespanIncrease = 20; // Toename in levensduur van elk vonkje
let logoImg;
let noiseScale = 0.02; // Schaal van de Perlin noise

function setup() {
  createCanvas(250, 112); // Maak een canvas
}

function draw() {
  clear(); // Maak het canvas leeg

  fill(255, 0); // Stel de vulkleur in op wit met een alpha van 0 (transparant)

  for (let i = 0; i < sparkles.length; i++) {
    sparkles[i].update(); // Update elk vonkje in de array
    sparkles[i].display(); // Toon elk vonkje op het canvas
  }
}

function mousePressed() {
  for (let i = 0; i < 290; i++) {
    sparkles.push(new Sparkle(lifespanIncrease)); // Voeg 290 nieuwe vonkjes toe aan de array
  }
}

class Sparkle {
  constructor(lifespanIncrease = 0) {
    this.x = random(width); // Horizontale positie van het vonkje
    this.y = random(-50, -10); // Verticale positie van het vonkje
    this.size = random(2, 8); // Grootte van het vonkje
    this.speed = random(1, 4); // Snelheid van het vonkje
    this.lifespan = random(100, 300) + lifespanIncrease; // Levensduur van het vonkje
    this.noiseOffset = random(1000); // Offset voor de Perlin noise
  }

  update() {
    this.y += this.speed; // Beweeg het vonkje naar beneden
    this.lifespan--; // Verminder de levensduur van het vonkje
  }

  display() {
    noStroke(); // Geen rand om het vonkje
    let c = color(
      random(200, 255), // Roodwaarde van de kleur
      random(100, 200), // Groenwaarde van de kleur
      random(50, 100), // Blauwwaarde van de kleur
      this.lifespan // Alpha van de kleur, afhankelijk van de levensduur van het vonkje
    );
    fill(c); // Vul het vonkje met de gegenereerde kleur
    ellipse(this.x, this.y, this.size, this.size + noise(this.noiseOffset) * 5); // Teken een ellipsvormig vonkje op het canvas met ruis die de grootte van het vonkje beïnvloedt
    this.noiseOffset += noiseScale; // Verhoog de offset voor de Perlin noise
  }
}
