/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

class Player extends ex.Actor{

    constructor(){
      super();
    }

    public xPos = game.drawWidth / 2;
    public yPos = game.drawHeight - game.drawHeight / 20;

    public onInitialize(engine: ex.Engine){
        this.x = this.xPos;
        this.y = this.yPos;
        this.setWidth(100);
        this.setHeight(100);

        this.color = ex.Color.Yellow;
    }

}
