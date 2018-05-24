/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

class Player extends ex.Actor{

    constructor(){
      super();
    }

    public size = game.drawWidth / 10; //game.drawWidth / 10;
    public xPos = game.drawWidth / 2;
    public yPos = game.drawHeight - this.size - game.drawHeight / 100;

    public onInitialize(engine: ex.Engine){

        this.pos.x = this.xPos;
        this.pos.y = this.yPos;
        this.setWidth(this.size);
        this.setHeight(this.size);

        this.color = ex.Color.Yellow;

    }

    public move(e: ex.Input.PointerEvent){
        this.pos.x = e.x;
    }

    public updade(engine: ex.Engine, delta: number){
        super.update(engine, delta);



    }

}
