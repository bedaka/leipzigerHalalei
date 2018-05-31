/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />



var game = new ex.Engine({

    displayMode: ex.DisplayMode.Fixed,
    height: 600,
    width: 400
  });



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

});
