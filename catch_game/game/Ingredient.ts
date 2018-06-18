/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

class Ingredient extends ex.Actor{

    public size;
    public rand = new ex.Random();

    constructor(t: ex.Texture){
      super();

      this.y = -10;
      this.x = this.rand.floating(0, game.drawWidth);
      this.size = this.rand.floating(10, 20);
      this.setWidth(this.size);
      this.setHeight(this.size);
      this.rx = this.rand.floating(1, 5);
      this.addDrawing(t.asSprite());

      this.collisionType = ex.CollisionType.Passive;
      this.body.useCircleCollision(this.size * 0.7);
      this.vel = new ex.Vector(0,this.rand.floating(100, 200));

    }

    public update(engine: ex.Engine, delta: number){

      ex.Actor.prototype.update.apply(this, [engine, delta]);

      if(this.y > game.drawHeight + 100) this.kill();
    }




}
