/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />
var game = new ex.Engine({
    width: 500,
    height: 500
});
// create an asset loader
var loader = new ex.Loader();
var resources = {};
// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}

var ball = new ex.Actor(game.drawWidth / 2, game.drawHeight - 50, 100, 100);

ball.color = ex.Color.Yellow;

game.input.pointers.primary.on('move', function(evt){
  if(evt.x >= 50 && evt.x <= game.drawWidth - 50){
    ball.pos.x = evt.x;
  }

});

game.add(ball);
// uncomment loader after adding resources
game.start().then(function () {
    // start your game!
});
