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
        if (this.y > game.drawHeight + 30) {
            this.kill();
            game.emit("lifelost", new ex.GameEvent());
        }
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
var _this = this;
var game = new ex.Engine({
    height: 600,
    width: 400
});
ex.Physics.enabled = true;
ex.Physics.collisionResolutionStrategy = ex.CollisionResolutionStrategy.RigidBody;
//Helper variables
var elapsed = 0;
var difficulty = 0;
//Actors
var loader = new ex.Loader();
var rand = new ex.Random();
var p = new Player();
var bg = new ex.Actor();
var scoreLabel = new ex.Label();
var healthLabel = new ex.Label();
var overLabel = new ex.Label();
var mainScene = new ex.Scene();
var overScene = new ex.Scene();
var overBg = new ex.Actor();
var score = 0;
var health = 5;
//Ressources
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
//Game starter
game.start(loader).then(function () {
    //Set up Background
    bg.addDrawing(txBg.asSprite());
    bg.pos.x += 100;
    bg.pos.y += 300;
    mainScene.add(bg);
    scoreLabel.x = 70;
    scoreLabel.y = 50;
    scoreLabel.fontFamily = "Arial";
    scoreLabel.fontSize = 30;
    scoreLabel.fontUnit = ex.FontUnit.Px;
    scoreLabel.text = "Score: " + _this.score;
    scoreLabel.color = ex.Color.White;
    scoreLabel.textAlign = ex.TextAlign.Center;
    mainScene.add(scoreLabel);
    healthLabel.x = 330;
    healthLabel.y = 50;
    healthLabel.fontFamily = "Arial";
    healthLabel.fontSize = 30;
    healthLabel.fontUnit = ex.FontUnit.Px;
    healthLabel.text = "Life: " + _this.health;
    healthLabel.color = ex.Color.Red;
    healthLabel.textAlign = ex.TextAlign.Center;
    mainScene.add(healthLabel);
    p.addDrawing(txPlayer.asSprite());
    mainScene.add(p);
    game.add("main", mainScene);
    overBg.setWidth(1000);
    overBg.setHeight(1000);
    overBg.x = 200;
    overBg.y = 200;
    overBg.color = ex.Color.Black;
    overScene.add(overBg);
    overLabel.x = game.halfDrawWidth;
    overLabel.y = game.halfDrawHeight;
    overLabel.fontFamily = "Arial";
    overLabel.fontSize = 30;
    overLabel.fontUnit = ex.FontUnit.Px;
    overLabel.color = ex.Color.Red;
    overLabel.textAlign = ex.TextAlign.Center;
    overScene.add(overLabel);
    game.add("over", overScene);
    game.goToScene("main");
    track.play(100);
});
//handler functions
game.input.pointers.primary.on('move', function (e) {
    p.move(e);
});
game.on('preupdate', function (e) {
    //Accelerating Timer
    elapsed += e.delta;
    if (elapsed > (1000 - difficulty * 5)) {
        elapsed = 0;
        spawnIngredient();
        difficulty += 0.3;
    }
    //Restart Track
    if (!track.isPlaying())
        track.play(100);
    //Stop Game when Health == 0
    if (health == 0) {
        //alert("YOU LOST! Your Score was: " + score.toString());
        track.stop();
        overLabel.text = "YOU LOST! \n Score: " + score.toString();
        game.goToScene("over");
        game.stop();
    }
});
p.on('precollision', function (e) {
    p.coll(e);
    score++;
    scoreLabel.text = "Score: " + score.toString();
    scoreLabel.update(game, 0);
});
game.on('lifelost', function (e) {
    health--;
    healthLabel.text = "Life: " + health.toString();
    healthLabel.update(game, 0);
});
function spawnIngredient() {
    var i = rand.integer(1, 5);
    switch (i) {
        case 1:
            mainScene.add(new Ingredient(txOnion, difficulty));
            break;
        case 2:
            mainScene.add(new Ingredient(txTomato, difficulty));
            break;
        case 3:
            mainScene.add(new Ingredient(txSauce, difficulty));
            break;
        case 4:
            mainScene.add(new Ingredient(txSalad, difficulty));
            break;
        case 5:
            mainScene.add(new Ingredient(txMeat, difficulty));
            break;
    }
}
