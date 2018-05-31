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
var Ingredient = /** @class */ (function (_super) {
    __extends(Ingredient, _super);
    function Ingredient() {
        var _this = _super.call(this) || this;
        _this.size = 10;
        _this.speed = 150;
        _this.y = 50;
        _this.x = game.halfDrawWidth;
        _this.setWidth(_this.size);
        _this.setHeight(_this.size);
        _this.color = ex.Color.White;
        _this.rx = 1;
        _this.collisionType = ex.CollisionType.Passive;
        _this.body.useCircleCollision(_this.size);
        _this.vel = new ex.Vector(0, _this.speed);
        return _this;
    }
    Ingredient.prototype.update = function (engine, delta) {
        ex.Actor.prototype.update.apply(this, [engine, delta]);
        if (this.y > game.drawHeight + 100)
            this.kill();
    };
    return Ingredient;
}(ex.Actor));
/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.size = game.drawWidth / 10;
        _this.pos.x = game.drawWidth / 2;
        _this.pos.y = game.drawHeight - _this.size - game.drawHeight / 100;
        _this.setWidth(_this.size);
        _this.setHeight(_this.size);
        _this.color = ex.Color.Yellow;
        _this.collisionType = ex.CollisionType.Passive;
        _this.body.useCircleCollision(_this.size / 4);
        return _this;
    }
    //Methode welchen den Döner an die x-Position der Maus bewegt
    Player.prototype.move = function (e) {
        if (!(e.worldPos.x > 0 + this.size / 2)) {
            this.pos.x = this.size / 2;
        }
        else if (!(e.worldPos.x < game.drawWidth - this.size / 2)) {
            this.pos.x = game.drawWidth - this.size / 2;
        }
        else {
            this.pos.x = e.worldPos.x;
        }
    };
    Player.prototype.coll = function (e) {
        e.other.kill();
    };
    Player.prototype.updade = function (engine, delta) {
        ex.Actor.prototype.update.apply(this, [engine, delta]);
    };
    return Player;
}(ex.Actor));
/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />
var game = new ex.Engine({
    height: 600,
    width: 400
});
ex.Physics.enabled = true;
ex.Physics.collisionResolutionStrategy = ex.CollisionResolutionStrategy.RigidBody;
// create an asset loader
var loader = new ex.Loader();
var resources = {};
for (var r in resources) {
    loader.addResource(resources[r]);
}
// uncomment loader after adding resources
game.start( /* loader */).then(function () {
    var p = new Player();
    game.add(p);
    game.input.pointers.primary.on('move', function (e) {
        p.move(e);
    });
    game.input.pointers.primary.on('down', function (e) {
        spawn();
    });
    p.on('precollision', function (e) {
        console.log("turn up");
        p.coll(e);
    });
    function spawn() {
        game.add(new Ingredient());
    }
});
