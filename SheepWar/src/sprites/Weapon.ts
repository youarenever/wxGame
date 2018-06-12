// TypeScript file

class Weapon extends egret.DisplayObjectContainer {
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
        // console.log(this.defalutWeapon.x,this.defalutWeapon.y)

        // console.log("defalutWeapon==", this.defalutWeapon.width, this.defalutWeapon.height, this.defalutWeapon.x, this.defalutWeapon.y);
    }

    // //武器随手指旋转
    // public revolveWeapon(evt: egret.TouchEvent): void {
    //     var vx = evt.stageX - this.x;
    //     var vy = evt.stageY - this.y;
    //     this.defalutWeapon.addEventListener(egret.Event.ENTER_FRAME, function () {
    //         this.rotation = Math.atan2(vy, vx) * 180 / Math.PI + 90;
    //     }, this)

    // }
}
