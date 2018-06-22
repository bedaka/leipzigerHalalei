/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

var game = new ex.Engine({
    height: 600,
    width: 400
  });

ex.Physics.enabled = true;
ex.Physics.collisionResolutionStrategy = ex.CollisionResolutionStrategy.RigidBody;

//Helper variables
var elapsed = 0;
var difficulty = 0;

//Actors
var loader = new ex.Loader();
var rand = new ex.Random();
var p = new Player();
var bg = new ex.Actor();
var score = new ex.Label();

//Ressources
var txPlayer = new ex.Texture("assets/donerk.png");
var txBg = new ex.Texture("assets/merkel.png");
var txOnion = new ex.Texture("assets/zweibeln.png");
var txTomato = new ex.Texture("assets/tomate.png");
var txSauce = new ex.Texture("assets/sosse.png");
var txSalad = new ex.Texture("assets/salat.png");
var txMeat = new ex.Texture("assets/fleisch.png");
var track = new ex.Sound("assets/track.mp3");
var resources = {txPlayer, txBg, txOnion, txTomato, txSauce, txSalad, txMeat,track};

for (var r in resources) {
    loader.addResource(resources[r]);
}

//Game starter
game.start(loader).then(() => {

  //Set up Background
  bg.addDrawing(txBg.asSprite());
  bg.pos.x += 100;
  bg.pos.y += 300;
  game.add(bg);

  //Set up UI
  score.text = "Hello Boy";
  score.fontFamily = "Arial";
  score.fontUnit = ex.FontUnit.Em;
  score.color = ex.Color.White;
  score.pos.x = 30;
  score.pos.y = 30;
  score.fontSize = 30;
  game.add(score);


  p.addDrawing(txPlayer.asSprite());
  game.add(p);

  track.play(100);

});

//handler functions
game.input.pointers.primary.on('move', function(e: ex.Input.PointerEvent){
  p.move(e);
});


game.on('preupdate', function(e){

  //Accelerating Timer
  elapsed += e.delta;
  if(elapsed > (1000 - difficulty * 5)){
    elapsed = 0;
    spawnIngredient();
    difficulty += 0.3;
  }

  //Restart Track
  if(!track.isPlaying()) track.play(100);
  
});

p.on('precollision', function (e){
    p.coll(e);
});

function spawnIngredient(){
  var i = rand.integer(1, 5);
  switch(i){
    case 1: game.add(new Ingredient(txOnion,difficulty)); break;
    case 2: game.add(new Ingredient(txTomato,difficulty)); break;
    case 3: game.add(new Ingredient(txSauce,difficulty)); break;
    case 4: game.add(new Ingredient(txSalad,difficulty)); break;
    case 5: game.add(new Ingredient(txMeat,difficulty)); break;
  }

}
