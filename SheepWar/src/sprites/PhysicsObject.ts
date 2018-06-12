// TypeScript file


class PhysicsObject extends egret.DisplayObjectContainer {
    private rect: egret.Shape;

    public constructor() {
        super();
    }

    // /**绘制正方形，用以作为体积触碰用,与图片下方重合。大约为图片下方1/3面积*/
    protected drawGrid( bmW: number, bmH: number) {
        this.rect = new egret.Shape();
        var w = 9 * bmW / 10;
        var h = 1 * bmH / 3;
        var x = (bmW-w)/2;
        var y = bmH-h;

        this.rect.graphics.beginFill(0xff0000,1);
        this.rect.graphics.drawRect(0, 0, w, h);
        this.rect.graphics.endFill();
        // this.rect.anchorOffsetX = this.rect.width / 2;
        // this.rect.anchorOffsetX = this.rect.height;
        this.rect.x = x;
        this.rect.y = y;
        this.rect.visible = false;
        // console.log("rect==", this.rect.width, this.rect.height, this.rect.x, this.rect.y);

        this.addChild(this.rect);
    }
}