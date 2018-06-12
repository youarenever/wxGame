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
var PhysicsObject = (function (_super) {
    __extends(PhysicsObject, _super);
    function PhysicsObject() {
        return _super.call(this) || this;
    }
    // /**绘制正方形，用以作为体积触碰用,与图片下方重合。大约为图片下方1/3面积*/
    PhysicsObject.prototype.drawGrid = function (bmW, bmH) {
        this.rect = new egret.Shape();
        var w = 9 * bmW / 10;
        var h = 1 * bmH / 3;
        var x = (bmW - w) / 2;
        var y = bmH - h;
        this.rect.graphics.beginFill(0xff0000, 1);
        this.rect.graphics.drawRect(0, 0, w, h);
        this.rect.graphics.endFill();
        // this.rect.anchorOffsetX = this.rect.width / 2;
        // this.rect.anchorOffsetX = this.rect.height;
        this.rect.x = x;
        this.rect.y = y;
        this.rect.visible = false;
        // console.log("rect==", this.rect.width, this.rect.height, this.rect.x, this.rect.y);
        this.addChild(this.rect);
    };
    return PhysicsObject;
}(egret.DisplayObjectContainer));
__reflect(PhysicsObject.prototype, "PhysicsObject");
//# sourceMappingURL=PhysicsObject.js.map