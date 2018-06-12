enum sheep_png { "sheep0_png", "sheep1_png", "sheep2_png", "sheep3_png" }

class Sheep extends PhysicsObject {

	private sp: egret.Bitmap;

	public constructor(randX, randY) {
		super();

		let i = Math.floor(Math.random() * 4); //随机加载图片
		// console.log("i:", i);
		this.sp = new egret.Bitmap(RES.getRes("sheep2_png"));
		// this.sp.anchorOffsetX = this.sp.width / 2;		//描点为下边长中点
		// this.sp.anchorOffsetX = this.sp.height;
		this.anchorOffsetX = this.sp.width / 2;
		this.anchorOffsetY = this.sp.height;
		this.x = randX;
		this.y = randY;
		this.addChild(this.sp);

		this.drawGrid(this.sp.width, this.sp.height);
		this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
	}

    private speed:number = 0.05;
    private time:number = 0;
	private onLoad(event: egret.Event) {
		this.time = egret.getTimer();
		egret.startTick(this.moveStar, this);
	}
	
	private moveStar(timeStamp: number): boolean {
		var now = timeStamp;
		var time = this.time;
		var pass = now - time;
		console.log("moveStar: ", (1000 / pass).toFixed(5));
		this.time = now;
		return false;
	}


}