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
    function Bullet(x, y, r) {
        var _this = _super.call(this) || this;
        _this.speed = 1;
        _this.bullets = new egret.Bitmap(RES.getRes("bullet1_png"));
        _this.addChild(_this.bullets);
        _this.x = x;
        _this.y = y;
        _this.rotation = r;
        _this.fly();
        return _this;
    }
    Bullet.prototype.fly = function () {
        // this.x +=10;
        // this.y +=10;
    };
    return Bullet;
}(egret.Sprite));
__reflect(Bullet.prototype, "Bullet");
//# sourceMappingURL=Bullet.js.map