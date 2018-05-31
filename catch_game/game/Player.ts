/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

class Player extends ex.Actor{

    constructor(){
      super();
    }

    public size = game.canvas.width / 10; //game.canvas.width / 10;
    public xPos = game.canvas.width / 2;
    public yPos = game.canvas.height - this.size - game.canvas.height / 100;

    public onInitialize(engine: ex.Engine){

        this.pos.x = this.xPos;
        this.pos.y = this.yPos;
        this.setWidth(this.size);
        this.setHeight(this.size);

        this.color = ex.Color.Yellow;

    }

    public move(e: ex.Input.PointerEvent){
      if(!(e.worldPos.x > 0 + this.size / 2)){
          this.pos.x = this.size / 2;
      }else if(!(e.worldPos.x < game.canvas.width - this.size / 2)){
          this.pos.x = game.canvas.width - this.size / 2
      }else{
          this.pos.x = e.worldPos.x;
      }

    }

    public updade(engine: ex.Engine, delta: number){
        super.update(engine, delta);



    }

}
