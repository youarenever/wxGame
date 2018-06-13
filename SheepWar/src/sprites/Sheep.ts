enum sheep_png { "sheep0_png", "sheep1_png", "sheep2_png", "sheep3_png" }

class Sheep extends PhysicsObject {
	public id:number;
	public isVisible:boolean;
	public isDead:boolean;

	private sp: egret.Bitmap;
	private x0:number;	//背景图相对坐标原点
	private y0:number;
	private backx0:number;	//背景图相对坐标原点
	private backy0:number;
	private bgW =1200;
	private bgH =800;
	public moveOff:boolean=false;

	public constructor() {
		super();
		let i = Math.floor(Math.random() * 4); //随机加载图片
		this.sp = new egret.Bitmap(RES.getRes("sheep2_png"));
		this.anchorOffsetX = this.sp.width / 2;
		this.anchorOffsetY = this.sp.height;
		// this.x = Math.random()* this.bgW +this.x0;
		// this.y = Math.random()* this.bgH +this.y0;
		this.x = 100; //for test
		this.y =100;

		this.drawGrid(this.sp.width, this.sp.height);
	}

	public add(x0,y0){
		this.x0=this.backx0=x0;
		this.y0=this.backy0=y0;
		this.addChild(this.sp);
		this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
	}

	private onLoad(event: egret.Event) {
		// this.time = egret.getTimer();
		egret.startTick(this.moveWithBg, this);
	}


	public setX0Y0(x0:number,y0:number){
		this.backx0 = this.x0;	//之前的坐标原点备份
		this.backy0 = this.y0;
		this.x0=x0;				//目前的坐标原点
		this.y0=y0;
	}
	
	private moveWithBg(timeStamp: number): boolean {
		if (this.moveOff){
			this.x=this.x+(this.x0-this.backx0);
			this.y=this.y+(this.y0-this.backy0);
		}

		

		
		// var now = timeStamp;
		// var time = this.time;
		// var pass = now - time;
		// console.log("moveStar: ", (1000 / pass).toFixed(5));
		// this.time = now;
		return false;
	}


}