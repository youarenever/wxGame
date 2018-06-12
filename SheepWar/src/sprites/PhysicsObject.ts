// TypeScript file


class PhysicsObject extends egret.DisplayObjectContainer {
    private rect: egret.Shape;

    public constructor() {
        super();
    }

    // /**绘制正方形，用以作为体积触碰用,与图片下方重合。大约为图片下方1/3面积*/
    protected drawGrid(bmX: number, bmY: number, bmW: number, bmH: number) {
        this.rect = new egret.Shape();
        var x = bmX;
        var y = bmY;
        var w = 9 * bmW / 10;
        var h = 1 * bmH / 3;
        this.rect.graphics.drawRect(x, y, w, h);
        // this.rect.anchorOffsetX = this.rect.width / 2;
        // this.rect.anchorOffsetX = this.rect.height;
        // this.rect.x = bmX;
        // this.rect.y = bmY;
        // this.rect.visible = false;
        this.addChild(this.rect);
    }
}