/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />



var game = new ex.Engine({

    suppressHiDPIScaling: true,
    displayMode: ex.DisplayMode.Container,
    canvasElementId: "gCanvas",
  });

  game.canvas.height = 600;
  game.canvas.width = 400;


// create an asset loader
var loader = new ex.Loader();
var resources = {


};
for (var r in resources) {
    loader.addResource(resources[r]);
}

/*game.canvas.width = 400;
game.canvas.height = 600;*/

var a = new ex.Actor(10,10,10,10, ex.Color.Black);
game.add(a);

// uncomment loader after adding resources
game.start(/* loader */).then(() => {


  var p = new Player();
  game.add(p);

  game.input.pointers.primary.on('move', function(e: ex.Input.PointerEvent){
      p.move(e);
  });

});
