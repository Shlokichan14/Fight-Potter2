var database, playerCount, gameState;
var form, player, game;

function preload() {
  harryImg = loadImage("harry img");
  dumbledoreImg = loadImage("dumbledore img");
  voldemortImg = loadImage("voldemort img");
  malfoy = loadImage("malfoy img");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.start();
}

function draw() {
  background("black");  

}
