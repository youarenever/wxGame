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
var sheep_png;
(function (sheep_png) {
    sheep_png[sheep_png["sheep0_png"] = 0] = "sheep0_png";
    sheep_png[sheep_png["sheep1_png"] = 1] = "sheep1_png";
    sheep_png[sheep_png["sheep2_png"] = 2] = "sheep2_png";
    sheep_png[sheep_png["sheep3_png"] = 3] = "sheep3_png";
})(sheep_png || (sheep_png = {}));
var Sheep = (function (_super) {
    __extends(Sheep, _super);
    function Sheep(randX, randY) {
        var _this = _super.call(this) || this;
        var i = Math.floor(Math.random() * 4); //随机加载图片,randX,rany控制出现的位置。
        console.log(i);
        _this.sp = new egret.Bitmap(RES.getRes("sheep2_png"));
        _this.sp.anchorOffsetX = _this.sp.width / 2; //描点为下边长中点
        _this.sp.anchorOffsetX = _this.sp.height;
        _this.sp.x = randX;
        _this.sp.y = randY;
        _this.addChild(_this.sp);
        _this.drawGrid(_this.sp.x, _this.sp.y, _this.sp.width, _this.sp.height);
        return _this;
    }
    return Sheep;
}(PhysicsObject));
__reflect(Sheep.prototype, "Sheep");
//# sourceMappingURL=Sheep.js.map