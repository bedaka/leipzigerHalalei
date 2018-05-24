/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />



var game = new ex.Engine({
    width: 400,
    height: 600,
});

// create an asset loader
var loader = new ex.Loader();
var resources = {

    /* include resources here */
    //txPlayer: new ex.Texture("assets/tex/player.png")

};

// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}

game.canvas.hideFocus = true;
var p = new Player();
game.add(p);

game.input.pointers.primary.on('move', function(e: ex.Input.PointerEvent){
    p.move(e);
});



// uncomment loader after adding resources
game.start(/* loader */).then(() => {

    // start your game!

});
