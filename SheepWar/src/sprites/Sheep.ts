enum sheep_png { "sheep0_png", "sheep1_png", "sheep2_png", "sheep3_png" }

class Sheep extends PhysicsObject {
	// public id:number;
	public isVisible: boolean;		//是否可见，用于监测是否收回，因为羊死后还有动画，所以不能跟是否可碰撞用一个。
	public isDead: boolean;			//用于监测是否可碰撞
	public moveOff: boolean = false;
	

	private sp: egret.Bitmap;
	private x0: number;	//背景图相对坐标原点
	private y0: number;
	private backx0: number;	//背景图相对坐标原点
	private backy0: number;
	private bgW = 1200;
	private bgH = 800;

	public constructor() {
		super();

		let i = Math.floor(Math.random() * 4); //随机加载图片
		this.sp = new egret.Bitmap(RES.getRes("sheep2_png"));
		this.anchorOffsetX = this.sp.width / 2;
		this.anchorOffsetY = this.sp.height;
		this.addChild(this.sp);
		// this.x = 100; //for test
		// this.y =100;

		this.drawGrid(this.sp.width, this.sp.height);
	}

	public initSheep(x0, y0) {
		this.x0 = this.backx0 = x0;
		this.y0 = this.backy0 = y0;
		this.x = Math.random() * this.bgW + this.x0;
		this.y = Math.random() * this.bgH + this.y0;
		this.moveOff = true;
		this.isDead=false;
		this.isVisible=true;
		// this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
	}

	public followBg(x0: number, y0: number) {
		this.backx0 = this.x0;	//之前的坐标原点备份
		this.backy0 = this.y0;
		this.x0 = x0;				//目前的坐标原点
		this.y0 = y0;
		// this.time = egret.getTimer();
		if (this.moveOff) {
			egret.startTick(this.moveWithBg, this);
		}
	}

	private moveWithBg(timeStamp: number): boolean {
		this.x = this.x + (this.x0 - this.backx0);
		this.y = this.y + (this.y0 - this.backy0);
		if (!this.moveOff) {
			egret.stopTick(this.moveWithBg, this);
		}

		// var now = timeStamp;
		// var time = this.time;
		// var pass = now - time;
		// console.log("moveStar: ", (1000 / pass).toFixed(5));
		// this.time = now;
		return false;
	}

	private movieCount =0;	//动画时间

	//碰撞监测
	public isCloseWithBullet(bName:Bullet):boolean{
		if(this.hitTestPoint( bName.x,bName.y )){
			this.isDead=true;
			this.movieCount=0;
			egret.startTick(this.deadMovie,this);
			return true;
		}else{
			return false;
		}
	}

	//死亡动画

	public deadMovie():boolean{
		this.movieCount++;
		// console.log("start movie",this.moveCount);
		if(this.movieCount===50){
		// console.log("over movie");
			this.isVisible=false;
			egret.stopTick(this.deadMovie,this);
		}
		return false;
	}

}