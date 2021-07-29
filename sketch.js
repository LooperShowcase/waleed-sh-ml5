let player;
let pImg;
let oImg;
let bgImg;
let obstcles = [];
let wordClassifier;

function preload(){
bgImg = loadImage("background.png")
pgImg = loadImage("player.png")
oImg = loadImage("obstcle.png")
let options = {
  probabilityThresholdL :0.85,
  };
  wordClassifier=ml5.soundClassifier("SpeechCommands18w",options)

}



function setup() {
  createCanvas(400, 400);
  player = new Player();
  wordClassifier.classify(hearWord)
}


function hearWord(error, results){
  console.log(results[0].label)
if (results[0].label == "up"){
  player.jump();
}


}


function keyPressed(){
if(key ==  " "){
player.jump();
  console.log("up");
 }
}



function draw() 
{
    background(bgImg);
    player.show();
    player.move();

    if(random(3) < 0.01){
      obstcles.push(new Obstcle());
    }

    for(let obs of obstcles)
    {
    obs.show();
    obs.move();
    if(player.collided(obs) == true){
      console.log("game-over")
      noLoop();
        }
       
    }
  
}
