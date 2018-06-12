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
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(hx, hy, hh) {
        var _this = _super.call(this) || this;
        //添加武器
        _this.defalutWeapon = new egret.Bitmap(RES.getRes("gun_png"));
        _this.anchorOffsetX = _this.defalutWeapon.width / 2;
        _this.anchorOffsetY = 2 * _this.defalutWeapon.height / 3;
        _this.x = hx;
        _this.y = hy - 2 * hh / 5;
        _this.addChild(_this.defalutWeapon);
        return _this;
        // console.log(this.defalutWeapon.x,this.defalutWeapon.y)
        // console.log("defalutWeapon==", this.defalutWeapon.width, this.defalutWeapon.height, this.defalutWeapon.x, this.defalutWeapon.y);
    }
    return Weapon;
}(egret.DisplayObjectContainer));
__reflect(Weapon.prototype, "Weapon");
//# sourceMappingURL=Weapon.js.map