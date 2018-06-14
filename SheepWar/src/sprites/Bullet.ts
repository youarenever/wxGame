class Bullet extends egret.Sprite {
	public id:number;
	public speed=1;
	public type:string;
	public isEquip:boolean;

	private bullets:egret.Bitmap;
	public constructor(x,y,r) {
		super();
		this.bullets=new egret.Bitmap(RES.getRes("bullet1_png"));
		this.addChild(this.bullets);

		this.x = x;
		this.y = y;
		this.rotation=r;
		this.fly();
	}

	private fly(){
		// this.x +=10;
		// this.y +=10;
	}

	
}