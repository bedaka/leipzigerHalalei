/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

var p = new Player();

var game = new ex.Engine({
    width: 600,
    height: 600
});

// create an asset loader
var loader = new ex.Loader();
var resources = {};

for (var r in resources) {
    loader.addResource(resources[r]);
}



game.add(p);

game.start(/* loader */).then(() => {

    // start your game!

});
