var canva;
var gameState, contestantCount, database, quiz, question,contestant
gameState=0
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Quiz();
  console.log("h")
  game.getState();
  game.start();
}


function draw(){
  background("blue");

           
}
