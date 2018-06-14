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
            this.rotation = weaponR;
            // egret.startTick(function () {
            var timer = new egret.Timer(50, 30);
            timer.addEventListener(egret.TimerEvent.TIMER, function () {
                var x1 = GameData.bulletFlySpeed * vx / Math.sqrt(vx * vx + vy * vy);
                var y1 = GameData.bulletFlySpeed * vy / Math.sqrt(vx * vx + vy * vy);
                if (vx > 0) {
                    this.x += Math.abs(x1);
                }
                else if (vx < 0) {
                    this.x -= Math.abs(x1);
                }
                if (vy > 0) {
                    this.y += Math.abs(y1);
                }
                else if (vy < 0) {
                    this.y -= Math.abs(y1);
                }
                // this.tickCount++;
                // return false;
            }, this);
            timer.start();
            // }, this)
        }
    };
    return Bullet;
}(egret.Sprite));
__reflect(Bullet.prototype, "Bullet");
//# sourceMappingURL=Bullet.js.map