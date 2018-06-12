// TypeScript file
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
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.hero = new egret.Bitmap(RES.getRes("hero_png"));
        _this.hero.anchorOffsetX = _this.hero.width / 2; //描点为下边长中点
        _this.hero.anchorOffsetY = _this.hero.height;
        _this.hero.x = _this.hero.width / 2;
        _this.hero.y = _this.hero.height;
        console.log("hero==", _this.hero.anchorOffsetX, _this.hero.anchorOffsetY, _this.hero.x, _this.hero.y = 0);
        _this.addChild(_this.hero);
        //添加武器
        _this.defalutWeapon = new egret.Bitmap(RES.getRes("gun_png"));
        _this.defalutWeapon.anchorOffsetX = _this.defalutWeapon.width / 2;
        _this.defalutWeapon.anchorOffsetY = 2 * _this.defalutWeapon.height / 3;
        _this.defalutWeapon.x = _this.hero.x;
        _this.defalutWeapon.y = _this.hero.y;
        _this.addChild(_this.defalutWeapon);
        _this.drawGrid(_this.hero.x, _this.hero.y, _this.hero.width, _this.hero.height);
        return _this;
    }
    Hero.prototype.addGun = function () {
    };
    //武器随手指旋转
    Hero.prototype.revolveWeapon = function (evt) {
        var vx = evt.stageX - this.defalutWeapon.x;
        var vy = evt.stageY - this.defalutWeapon.y;
        this.defalutWeapon.rotation = Math.atan2(vy, vx) * 180 / Math.PI + 90;
    };
    return Hero;
}(PhysicsObject));
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=Hero.js.map