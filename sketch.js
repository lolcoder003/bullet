var bullet1, bullet2, bullet3, bullet4;
var wall1, wall2, wall3, wall4;
var speed1, speed2, speed3, speed4, weight;
var b1, b2, b3, b4
var damage1, damage2, damage3, damage4;
var thickness1, thickness2, thickness3, thickness4;

function setup() {
  createCanvas(1600, 750);
  thickness1 = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);
  thickness4 = random(22,83);
  speed1 = random(500, 700);
  speed2 = random(500, 700);
  speed3 = random(500, 700);
  speed4 = random(500, 700);

  weight = random(400, 1500);

  bullet1 = createSprite(140, 50, 50, 50);
  bullet1.velocityX = 0;
  bullet1.shapeColor = "red";

  bullet2 = createSprite(140, 155, 50, 50);
  bullet2.velocityX = 0;
  bullet2.shapeColor = "yellow";

  bullet3 = createSprite(140, 280, 50, 50);
  bullet3.velocityX = 0;
  bullet3.shapeColor = "pink";

  bullet4 = createSprite(140, 385, 50, 50);
  bullet4.velocityX = 0;
  bullet4.shapeColor = "green";

  b1 = createSprite(20, 50, 100, 50);
  b1.shapeColor = "violet";
  b2 = createSprite(20, 150, 100, 50);
  b2.shapeColor = "yellow";
  b3 = createSprite(20, 260, 100, 50);
  b3.shapeColor = "green";
  b4 = createSprite(20, 385, 100, 50);
  b4.shapeColor = "cyan" ;
  
  wall1 = createSprite(1500, 40, thickness1, 70);
  wall1.shapeColor = "brown";

  wall2 = createSprite(1500, 155, thickness2, 70);
  wall2.shapeColor = "brown";

  wall3 = createSprite(1500, 280, thickness3, 70);
  wall3.shapeColor = "brown";

  wall4 = createSprite(1500, 385, thickness4, 70);
  wall4.shapeColor = "brown";


  damage1 = 0.5 * weight * speed1 * speed1 / (thickness1 * thickness1 * thickness1);
  damage2 = 0.5 * weight * speed2 * speed2 / (thickness2 * thickness2 * thickness2);
  damage3 = 0.5 * weight * speed3 * speed3 / (thickness3 * thickness3 * thickness3);
  damage4 = 0.5 * weight * speed4 * speed4 / (thickness4 * thickness4 * thickness4);
}

function draw() {
  background(0);
  drawSprites();



 fill(0);
 noStroke();
 textSize(32);
 text("wall1",2,60);
 text("wall2 ",2,160); 
 text("wall3 ",2,270); 
 text("wall4",2,395);

  fill(255);
  stroke("blue");
  strokeWeight(5);
  textSize(40);
  text("wall", 100, 500);
  text("thickness", 500, 500);
  text("Speed", 925, 500);
  text("Damage", 1250, 500);

  noStroke();
  fill(255);
  rect(0, 87, 1470, 5);
  rect(0, 198, 1470, 5);
  rect(0, 330, 1470, 5);
  rect(0, 450, 1600, 5);
  rect(0, 550, 1600, 5);
  rect(0, 600, 1600, 5);
  rect(0, 650, 1600, 5);
  rect(0, 700, 1600, 5)

  for (var x = 400; x < 1300; x = x + 400) {
    fill("white");
    rect(x, 450, 5, 500);
    rect(50, 450, 5, 500);
  }

  if (keyDown("1")) {
    bullet1.velocityX = 900;
  }

  if (keyDown("2")) {
    bullet2.velocityX = speed2;
  }

  if (keyDown("3")) {
    bullet3.velocityX = speed3;
  }

  if (keyDown("4")) {
    bullet4.velocityX = speed4;
  }

  if ( bullet1.isTouching(wall1) ) {

    bullet1.velocityX = 0;
    
    fill("white");
    text("bullet1", 130, 585);
    text(Math.round(thickness1), 530, 585);
    text(Math.round(speed1), 930, 585);
    text(Math.round(damage1), 1350, 585)
    }
  

  if (bullet2.isTouching(wall2)) {

    bullet2.velocityX = 0;

    fill("white");
    text("bullet2", 130, 635);
    text(Math.round(thickness2), 530, 635);
    text(Math.round(speed2), 930, 635);
    text(Math.round(damage2), 1350, 635)

  }

  if (bullet3.isTouching(wall3)) {

    bullet3.velocityX = 0;

    fill("white");
    text("bullet3", 130, 685);
    text(Math.round(thickness3), 530, 685);
    text(Math.round(speed3), 930, 685);
    text(Math.round(damage3), 1350, 685)

  }

  if (bullet4.isTouching(wall4)) {

    bullet4.velocityX = 0;

    fill("white");
    text("bullet4", 130, 735);
    text(Math.round(thickness4), 530, 735);
    text(Math.round(speed4), 930, 735);
    text(Math.round(damage4), 1350, 735);

  }

}
