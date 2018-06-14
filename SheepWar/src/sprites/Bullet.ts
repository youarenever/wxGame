class Bullet extends egret.Sprite {
	public id: number;
	public isShoot = false;
	public type: string;
	public isEquip: boolean;

	private bullets: egret.Bitmap;
	public constructor() {
		super();
		this.bullets = new egret.Bitmap(RES.getRes("bullet1_png"));
		this.addChild(this.bullets);
		this.isShoot = true;
		this.anchorOffsetX = this.bullets.width / 2;
		this.anchorOffsetY = this.bullets.height;
	}

	public fly(weaponX: number, weaponY: number, weaponR: number, vx: number, vy: number) {
		if (this.isShoot) {
			this.x = weaponX;
			this.y = weaponY;
			this.rotation = weaponR;
			// egret.startTick(function () {
			var timer: egret.Timer = new egret.Timer(50, 30);
			timer.addEventListener(egret.TimerEvent.TIMER, function () {
				var x1 = GameData.bulletFlySpeed * vx / Math.sqrt(vx * vx + vy * vy);
				var y1 = GameData.bulletFlySpeed * vy / Math.sqrt(vx * vx + vy * vy);
				if (vx > 0) {
					this.x += Math.abs(x1);
				} else if (vx < 0) {
					this.x -= Math.abs(x1);
				}
				if (vy > 0) {
					this.y += Math.abs(y1);
				} else if (vy < 0) {
					this.y -= Math.abs(y1);
				}
				// this.tickCount++;
				// return false;
			}, this);
			timer.start();
			
			// }, this)
		}

	}

}