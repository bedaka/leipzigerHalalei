/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

class Ingredient extends ex.Actor{

    public size = 10;
    public speed = 150;
    public rand = new ex.Random();

    constructor(){
      super();

      this.y = 50;
      this.x = this.rand.floating(0, game.drawWidth);
      this.setWidth(this.size);
      this.setHeight(this.size);
      this.color = ex.Color.White;
      this.rx = 1;

      this.collisionType = ex.CollisionType.Passive;
      this.body.useCircleCollision(this.size);
      this.vel = new ex.Vector(0,this.speed);


    }

    public update(engine: ex.Engine, delta: number){
        ex.Actor.prototype.update.apply(this, [engine, delta]);

        if(this.y > game.drawHeight + 100) this.kill();
    }



}
