// TypeScript file

class Hero extends PhysicsObject {

    private hero: egret.Bitmap;
    public constructor(sw, sh) {
        super();

        this.hero = new egret.Bitmap(RES.getRes("hero_png"));
        this.anchorOffsetX = this.hero.width / 2;
        this.anchorOffsetY = this.hero.height;
        this.x = sw / 2;
        this.y = sh / 2 + this.height;
        console.log("hero==", this.hero.width, this.hero.height, this.hero.x, this.hero.y);
        this.addChild(this.hero);

        this.drawGrid(this.hero.width, this.hero.height);
    }
    
}