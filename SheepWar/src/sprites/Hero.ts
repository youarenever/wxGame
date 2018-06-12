// TypeScript file

class Hero extends PhysicsObject {

    private hero: egret.Bitmap;
    private defalutWeapon: egret.Bitmap;

    public constructor() {
        super();

        this.hero = new egret.Bitmap(RES.getRes("hero_png"));
        this.hero.anchorOffsetX = this.hero.width / 2;		//描点为下边长中点
        this.hero.anchorOffsetY = this.hero.height;
        this.hero.x = this.hero.width / 2;
        this.hero.y = this.hero.height;

        console.log("hero==",this.hero.anchorOffsetX, this.hero.anchorOffsetY,this.hero.x,this.hero.y = 0);
        this.addChild(this.hero);

        //添加武器
        this.defalutWeapon = new egret.Bitmap(RES.getRes("gun_png"));
        this.defalutWeapon.anchorOffsetX = this.defalutWeapon.width / 2;
        this.defalutWeapon.anchorOffsetY = 2 * this.defalutWeapon.height / 3;
        this.defalutWeapon.x = this.hero.x;
        this.defalutWeapon.y = this.hero.y;
        this.addChild(this.defalutWeapon);

        this.drawGrid(this.hero.x, this.hero.y, this.hero.width, this.hero.height);
    }

    public addGun() {

    }

    //武器随手指旋转
    public revolveWeapon(evt: egret.TouchEvent): void {
        var vx = evt.stageX - this.defalutWeapon.x;
        var vy = evt.stageY - this.defalutWeapon.y;
        this.defalutWeapon.rotation = Math.atan2(vy, vx) * 180 / Math.PI + 90;
    }

}