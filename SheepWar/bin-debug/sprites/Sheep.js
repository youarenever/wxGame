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
    function Sheep() {
        var _this = _super.call(this) || this;
        _this.bgW = 1200;
        _this.bgH = 800;
        _this.moveOff = false;
        var i = Math.floor(Math.random() * 4); //随机加载图片
        _this.sp = new egret.Bitmap(RES.getRes("sheep2_png"));
        _this.anchorOffsetX = _this.sp.width / 2;
        _this.anchorOffsetY = _this.sp.height;
        // this.x = 100; //for test
        // this.y =100;
        _this.drawGrid(_this.sp.width, _this.sp.height);
        return _this;
    }
    Sheep.prototype.add = function (x0, y0) {
        this.x0 = this.backx0 = x0;
        this.y0 = this.backy0 = y0;
        this.x = Math.random() * this.bgW + this.x0;
        this.y = Math.random() * this.bgH + this.y0;
        this.addChild(this.sp);
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
    };
    Sheep.prototype.onLoad = function (event) {
        // this.time = egret.getTimer();
        egret.startTick(this.moveWithBg, this);
    };
    Sheep.prototype.setX0Y0 = function (x0, y0) {
        this.backx0 = this.x0; //之前的坐标原点备份
        this.backy0 = this.y0;
        this.x0 = x0; //目前的坐标原点
        this.y0 = y0;
    };
    Sheep.prototype.moveWithBg = function (timeStamp) {
        if (this.moveOff) {
            this.x = this.x + (this.x0 - this.backx0);
            this.y = this.y + (this.y0 - this.backy0);
        }
        // var now = timeStamp;
        // var time = this.time;
        // var pass = now - time;
        // console.log("moveStar: ", (1000 / pass).toFixed(5));
        // this.time = now;
        return false;
    };
    return Sheep;
}(PhysicsObject));
__reflect(Sheep.prototype, "Sheep");
//# sourceMappingURL=Sheep.js.map