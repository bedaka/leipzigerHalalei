/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

class Player extends ex.Actor{

  public size = game.drawWidth / 10;

    constructor(){
      super();

      this.pos.x = game.drawWidth / 2;
      this.pos.y = game.drawHeight - this.size - game.drawHeight / 100;
      this.setWidth(this.size);
      this.setHeight(this.size);
      this.color = ex.Color.Yellow;


      this.collisionType = ex.CollisionType.Passive;
      this.body.useCircleCollision(this.size / 4);

    }


    //Methode welchen den Döner an die x-Position der Maus bewegt
    public move(e: ex.Input.PointerEvent){
      if(!(e.worldPos.x > 0 + this.size / 2)){
          this.pos.x = this.size / 2;
      }else if(!(e.worldPos.x < game.drawWidth - this.size / 2)){
          this.pos.x = game.drawWidth - this.size / 2
      }else{
          this.pos.x = e.worldPos.x;
      }
    }

    public coll(e: ex.PreCollisionEvent){
      e.other.kill();
    }

    public updade(engine: ex.Engine, delta: number){
        ex.Actor.prototype.update.apply(this, [engine, delta]);

    }





}
