/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />



var game = new ex.Engine({
    height: 600,
    width: 400
  });

  ex.Physics.enabled = true;
  ex.Physics.collisionResolutionStrategy = ex.CollisionResolutionStrategy.RigidBody;


// create an asset loader
var loader = new ex.Loader();
var resources = {


};
for (var r in resources) {
    loader.addResource(resources[r]);
}


// uncomment loader after adding resources
game.start(/* loader */).then(() => {



  var p = new Player();
  game.add(p);


  game.input.pointers.primary.on('move', function(e: ex.Input.PointerEvent){
      p.move(e);
  });

  game.input.pointers.primary.on('down', function(e: ex.Input.PointerEvent){
      spawnIngredient();
  });

  p.on('precollision', function (e){
      p.coll(e);
  });

  function spawnIngredient(){
    game.add(new Ingredient());
  }



});
