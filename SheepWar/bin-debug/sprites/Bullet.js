var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super.call(this) || this;
        _this.isShoot = false;
        _this.count = 0;
        _this.bullets = new egret.Bitmap(RES.getRes("bullet1_png"));
        _this.addChild(_this.bullets);
        _this.isShoot = true;
        _this.anchorOffsetX = _this.bullets.width / 2;
        _this.anchorOffsetY = _this.bullets.height;
        return _this;
    }
    Bullet.prototype.fly = function (weaponX, weaponY, weaponR, vx, vy) {
        if (this.isShoot) {
            this.x = weaponX;
            this.y = weaponY;
            this.rotation = weaponR - 90;
            this.vx = vx;
            this.vy = vy;
            egret.startTick(this.fly_tmp, this);
        }
        return false;
    };
    Bullet.prototype.fly_tmp = function () {
        this.count++;
        this.x1 = GameData.bulletFlySpeed * this.vx / Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        this.y1 = GameData.bulletFlySpeed * this.vy / Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (this.vx > 0) {
            this.x += Math.abs(this.x1);
        }
        else if (this.vx < 0) {
            this.x -= Math.abs(this.x1);
        }
        if (this.vy > 0) {
            this.y += Math.abs(this.y1);
        }
        else if (this.vy < 0) {
            this.y -= Math.abs(this.y1);
        }
        // console.log(this.x,this.y);
        if (this.count >= 60) {
            // console.log("stop")
            egret.stopTick(this.fly_tmp, this);
        }
        if (this.x <= -30 ||
            this.x >= this.stage.stageWidth + 30 ||
            this.y < -30 ||
            this.y > this.stage.stageHeight) {
            this.isShoot = false;
            egret.stopTick(this.fly_tmp, this);
        }
        return false;
    };
    return Bullet;
}(egret.Sprite));
__reflect(Bullet.prototype, "Bullet");
//# sourceMappingURL=Bullet.js.map