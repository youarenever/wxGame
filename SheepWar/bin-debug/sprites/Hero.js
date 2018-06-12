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
    function Hero(sw, sh) {
        var _this = _super.call(this) || this;
        _this.hero = new egret.Bitmap(RES.getRes("hero_png"));
        _this.anchorOffsetX = _this.hero.width / 2;
        _this.anchorOffsetY = _this.hero.height;
        _this.x = sw / 2;
        _this.y = sh / 2 + _this.height;
        console.log("hero==", _this.hero.width, _this.hero.height, _this.hero.x, _this.hero.y);
        _this.addChild(_this.hero);
        _this.drawGrid(_this.hero.width, _this.hero.height);
        return _this;
    }
    return Hero;
}(PhysicsObject));
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=Hero.js.map