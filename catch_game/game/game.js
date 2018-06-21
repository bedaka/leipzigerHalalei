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
    function Ingredient(t, d) {
        var _this = _super.call(this) || this;
        _this.rand = new ex.Random();
        _this.y = -10;
        _this.x = _this.rand.floating(0, game.drawWidth);
        _this.size = _this.rand.floating(10, 20);
        _this.setWidth(_this.size);
        _this.setHeight(_this.size);
        _this.rx = (_this.rand.floating(1, 5)) + (d * 0.03);
        t.width *= 0.8;
        t.height *= 0.8;
        _this.addDrawing(t.asSprite());
        _this.collisionType = ex.CollisionType.Passive;
        _this.body.useCircleCollision(_this.size * 0.7);
        _this.vel = new ex.Vector(0, (_this.rand.floating(100, 200) + (5 * d)));
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
        _this.pos.y = game.drawHeight - 20;
        _this.setWidth(_this.size);
        _this.setHeight(_this.size);
        //this.color = ex.Color.Yellow;
        _this.collisionType = ex.CollisionType.Passive;
        _this.body.useCircleCollision(_this.size / 2.3);
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
var elapsed = 0;
var difficulty = 0;
var running = false;
var loader = new ex.Loader();
var rand = new ex.Random();
var p = new Player();
var bg = new ex.Actor();
var txPlayer = new ex.Texture("assets/donerk.png");
var txBg = new ex.Texture("assets/merkel.png");
var txOnion = new ex.Texture("assets/zweibeln.png");
var txTomato = new ex.Texture("assets/tomate.png");
var txSauce = new ex.Texture("assets/sosse.png");
var txSalad = new ex.Texture("assets/salat.png");
var txMeat = new ex.Texture("assets/fleisch.png");
var track = new ex.Sound("assets/track.mp3");
var resources = { txPlayer: txPlayer, txBg: txBg, txOnion: txOnion, txTomato: txTomato, txSauce: txSauce, txSalad: txSalad, txMeat: txMeat, track: track };
for (var r in resources) {
    loader.addResource(resources[r]);
}
// uncomment loader after adding resources
game.start(loader).then(function () {
    bg.addDrawing(txBg.asSprite());
    bg.pos.x += 100;
    bg.pos.y += 300;
    game.add(bg);
    p.addDrawing(txPlayer.asSprite());
    game.add(p);
    running = true;
    track.play(100);
});
//handler functions
game.input.pointers.primary.on('move', function (e) {
    if (running)
        p.move(e);
});
game.on('preupdate', function (e) {
    elapsed += e.delta;
    if (elapsed > (1000 - difficulty * 5) && running) {
        elapsed = 0;
        spawnIngredient();
        difficulty++;
    }
});
p.on('precollision', function (e) {
    p.coll(e);
});
function spawnIngredient() {
    var i = rand.integer(1, 5);
    switch (i) {
        case 1:
            game.add(new Ingredient(txOnion, difficulty));
            break;
        case 2:
            game.add(new Ingredient(txTomato, difficulty));
            break;
        case 3:
            game.add(new Ingredient(txSauce, difficulty));
            break;
        case 4:
            game.add(new Ingredient(txSalad, difficulty));
            break;
        case 5:
            game.add(new Ingredient(txMeat, difficulty));
            break;
    }
}
