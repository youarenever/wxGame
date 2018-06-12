enum sheep_png { "sheep0_png", "sheep1_png", "sheep2_png", "sheep3_png" }

class Sheep extends PhysicsObject {

	private sp: egret.Bitmap;

	public constructor(randX, randY) {
		super();
		
		let i = Math.floor(Math.random() * 4); //随机加载图片,randX,rany控制出现的位置。
		console.log(i);
		this.sp = new egret.Bitmap(RES.getRes("sheep2_png"));
		this.sp.anchorOffsetX = this.sp.width / 2;		//描点为下边长中点
		this.sp.anchorOffsetX = this.sp.height;
		this.sp.x = randX;
		this.sp.y = randY;
		this.addChild(this.sp);

		this.drawGrid(this.sp.x, this.sp.y, this.sp.width, this.sp.height);
	}

}