let isDay = false
let isNight = false

let squirrel
let bird

function preload(){
squirrel = loadImage('squirrel.webp')
bird = loadImage('bird.webp')
}

function setup() {
  createCanvas(700, 500);
  imageMode(CENTER)
}

function draw() {
  background(160, 204, 242)

  if(isDay){
      dayTime();
  }

  if(isNight){
    nightTime();
  }
  
  strokeWeight(0)

  fill(47, 181, 83)
  rect(0, 300, 700)
  
  fill(18, 128, 219)
  ellipse(200, 400, 300, 100)

  fill(140, 98, 18)
  rect(515, 280, 80, 200)

  fill(56, 39, 3)
  triangle(130, 300, 260, 20, 400, 300)

  flyingBird();

  fill(14, 105, 34)
  ellipse(480, 260, 70, 70)
  ellipse(500, 300, 70, 70)
  ellipse(480, 210, 70, 70)
  ellipse(515, 185, 70, 70)
  ellipse(560, 175, 70, 70)
  ellipse(595, 185, 70, 70)
  ellipse(625, 220, 70, 70)
  ellipse(590, 295, 70, 70)
  ellipse(630, 270, 70, 70)
  ellipse(540, 300, 70, 70)
  ellipse(555, 240, 100, 100)
  
  fill(0, 0, 0)
  ellipse(555, 390, 60, 70)

  fill(77, 53, 4)
  triangle(20, 300, 130, 140, 250, 300)
  
  fill(255, 255, 255)
  triangle(130, 140, 110, 170, 152, 170)
  triangle(260, 20, 278, 55, 244, 55)

  if(mouseIsPressed == true){
    image(squirrel, 430, 440)
      squirrel.resize(80, 0)
    }else{
      image(squirrel, 555, 390)
        squirrel.resize(50, 0)
    }

}

function keyPressed(){
  if(key == 'd'){
    isDay = true
    isNight = false
  }

  if(key == 'n'){
    isDay = false
    isNight = true
  }
}

function flyingBird(){
  if(mouseY < 300){
    image(bird, mouseX, mouseY)
    bird.resize(100, 0)
  }else{

  }
}

function dayTime(){
  background(160, 204, 242)
  fill(247, 235, 69)
  ellipse(700, 0, 200, 200)
}

function nightTime(){
    background(64, 93, 156)
    fill(224, 224, 224)
    ellipse(700, 0, 200, 200)
    fill(181, 181, 181)
    ellipse(690, 20, 25, 25)
    ellipse(650, 40, 20, 20)
    ellipse(680, 65, 25, 25)
    ellipse(635, 7, 30, 30)
}

}