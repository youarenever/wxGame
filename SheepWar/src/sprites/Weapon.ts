// TypeScript file

class Weapon extends egret.DisplayObjectContainer {
    public id:number;
    public type:string;
    public isVisible:boolean;
    public isEquip:boolean;
    public bulletType:string;

    private defalutWeapon: egret.Bitmap;

    constructor(hx, hy, hh) {
        super();

        //添加武器
        this.defalutWeapon = new egret.Bitmap(RES.getRes("gun_png"));
        this.anchorOffsetX = this.defalutWeapon.width / 2;
        this.anchorOffsetY = 2 * this.defalutWeapon.height / 3;
        this.x = hx;
        this.y = hy - 2*hh / 5;
        this.addChild(this.defalutWeapon);
    }
}
