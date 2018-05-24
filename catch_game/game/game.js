var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.size = game.drawWidth / 10; //game.drawWidth / 10;
        _this.xPos = game.drawWidth / 2;
        _this.yPos = game.drawHeight - _this.size - game.drawHeight / 100;
        return _this;
    }
    Player.prototype.onInitialize = function (engine) {
        this.pos.x = this.xPos;
        this.pos.y = this.yPos;
        this.setWidth(this.size);
        this.setHeight(this.size);
        this.color = ex.Color.Yellow;
    };
    Player.prototype.move = function (e) {
        this.pos.x = e.x;
    };
    Player.prototype.updade = function (engine, delta) {
        _super.prototype.update.call(this, engine, delta);
    };
    return Player;
}(ex.Actor));
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
game.input.pointers.primary.on('move', function (e) {
    p.move(e);
});
// uncomment loader after adding resources
game.start( /* loader */).then(function () {
    // start your game!
});
