//基础数据

class GameData {
	public static sorce: number;
	public static initSheepNumber: number;
	public static initWeaponType: string;
	public static createBulletSpeed: number;
	public static bulletFlySpeed: number;	//子弹飞行速度
	public static heroSpeed: number;		//hero移动速度
	public static creeatSheepSpeed:number;  //羊出现的速度
	public static creeatSheepNum:number;  //羊出现的个数
	public static sheepCount:number;		//存在的羊数量

	//羊和子弹的对象
	public static sheepPool: Sheep[];
	public static liveSheepCount: Sheep[];
	public static bulletPool: Bullet[];
	public static shootingBulletCount: Bullet[];


	public static initData() {
		GameData.creeatSheepNum=5;
		GameData.creeatSheepSpeed=60;
		GameData.createBulletSpeed = 40;
		GameData.bulletFlySpeed = 10;
		GameData.heroSpeed = 3;
		GameData.sorce = 0;
		GameData.initSheepNumber = GameData.sheepCount =10;
		GameData.sheepPool = [];
		GameData.liveSheepCount = [];
		GameData.bulletPool = [];
		GameData.shootingBulletCount = [];

	}

	//回收羊，羊死亡后调用
	public static putSheep(name: Sheep) {
		GameData.sheepPool.push(name);
	}

	//取回收的羊，没有则新建
	public static getSheep(): Sheep {
		if (GameData.sheepPool.length > 0) {
			var sheep_tmp: Sheep = GameData.sheepPool[0];
			GameData.sheepPool.shift();
			return sheep_tmp;
		}
		return new Sheep();
	}

	//回收子弹
	public static putBullet(name: Bullet) {

		GameData.bulletPool.push(name);
		// console.log("putbullet succes;")
	}

	//取回收的子弹，没有则新建

	public static getBullet(): Bullet {
		if (GameData.bulletPool.length > 0) {
			var bullet_tmp: Bullet = GameData.bulletPool[0];
			GameData.bulletPool.shift();
			// console.log("getbullet succes;")
			return bullet_tmp;
		}
		// console.log("getbullet :creeat new;")
		return new Bullet();
	}
}
