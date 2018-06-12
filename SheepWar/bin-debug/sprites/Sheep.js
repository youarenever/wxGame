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
        _this.speed = 0.05;
        _this.time = 0;
        var i = Math.floor(Math.random() * 4); //随机加载图片
        // console.log("i:", i);
        _this.sp = new egret.Bitmap(RES.getRes("sheep2_png"));
        // this.sp.anchorOffsetX = this.sp.width / 2;		//描点为下边长中点
        // this.sp.anchorOffsetX = this.sp.height;
        _this.anchorOffsetX = _this.sp.width / 2;
        _this.anchorOffsetY = _this.sp.height;
        _this.x = randX;
        _this.y = randY;
        _this.addChild(_this.sp);
        _this.drawGrid(_this.sp.width, _this.sp.height);
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
        return _this;
    }
    Sheep.prototype.onLoad = function (event) {
        this.time = egret.getTimer();
        egret.startTick(this.moveStar, this);
    };
    Sheep.prototype.moveStar = function (timeStamp) {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        console.log("moveStar: ", (1000 / pass).toFixed(5));
        this.time = now;
        return false;
    };
    return Sheep;
}(PhysicsObject));
__reflect(Sheep.prototype, "Sheep");
//# sourceMappingURL=Sheep.js.map