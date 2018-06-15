class Bullet extends egret.Sprite {
	public id: number;
	public isShoot = false;//可撞击
	public type: string;
	public isEquip: boolean;

	private bullets: egret.Bitmap;

	public constructor() {
		super();
		this.bullets = new egret.Bitmap(RES.getRes("bullet1_png"));
		this.addChild(this.bullets);
		// this.anchorOffsetX = this.bullets.width / 2;
		// this.anchorOffsetY = this.bullets.height;
	}


	private x1: number;
	private y1: number;
	private count = 0;
	private vx: number;
	private vy: number;

	public initfly(weaponX: number, weaponY: number, weaponR: number, vx: number, vy: number) {
		this.isShoot = true;
		// if (this.isShoot) {
		this.x = weaponX;
		this.y = weaponY;
		this.rotation = weaponR - 90;
		this.vx = vx;
		this.vy = vy;

		egret.startTick(this.fly_tmp, this)
		// }
		return false;
	}

	private fly_tmp(): boolean {
		this.count++;
		this.x1 = GameData.bulletFlySpeed * this.vx / Math.sqrt(this.vx * this.vx + this.vy * this.vy);
		this.y1 = GameData.bulletFlySpeed * this.vy / Math.sqrt(this.vx * this.vx + this.vy * this.vy);
		if (this.vx > 0) {
			this.x += Math.abs(this.x1);
			// this.x += 1;
		} else if (this.vx < 0) {
			this.x -= Math.abs(this.x1);
			// this.x -= 1;
		}
		if (this.vy > 0) {
			this.y += Math.abs(this.y1);
		} else if (this.vy < 0) {
			this.y -= Math.abs(this.y1);
		}

		// console.log(this.x,this.y);
		// if (this.count >= 80) {
		// 	// console.log("stop")
		// 	egret.stopTick(this.fly_tmp, this)
		// }
		//子弹飞行范围
		if (this.x <= -30 ||
			this.x >= 700 ||
			this.y < -30 ||
			this.y > 500) {
			this.isShoot = false;
			egret.stopTick(this.fly_tmp, this);
		}
		return false;
	}

}