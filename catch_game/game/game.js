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
        _this.size = game.canvas.width / 10; //game.canvas.width / 10;
        _this.xPos = game.canvas.width / 2;
        _this.yPos = game.canvas.height - _this.size - game.canvas.height / 100;
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
        if (!(e.worldPos.x > 0 + this.size / 2)) {
            this.pos.x = this.size / 2;
        }
        else if (!(e.worldPos.x < game.canvas.width - this.size / 2)) {
            this.pos.x = game.canvas.width - this.size / 2;
        }
        else {
            this.pos.x = e.worldPos.x;
        }
    };
    Player.prototype.updade = function (engine, delta) {
        _super.prototype.update.call(this, engine, delta);
    };
    return Player;
}(ex.Actor));
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
var resources = {};
for (var r in resources) {
    loader.addResource(resources[r]);
}
/*game.canvas.width = 400;
game.canvas.height = 600;*/
var a = new ex.Actor(10, 10, 10, 10, ex.Color.Black);
game.add(a);
// uncomment loader after adding resources
game.start( /* loader */).then(function () {
    var p = new Player();
    game.add(p);
    game.input.pointers.primary.on('move', function (e) {
        p.move(e);
    });
});
