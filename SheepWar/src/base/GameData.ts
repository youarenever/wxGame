//基础数据

class GameData {
	public static sorce: number;
	public static initSheepNumber: number;
	public static initWeaponType: string;
	public static createBulletSpeed: number;
	public static sheepPool: Sheep[];
	public static liveSheepCount: Sheep[];
	public static bulletPool: Bullet[];
	public static shootingBulletCount: Bullet[];


	public static initData() {
		GameData.sorce = 0;
		GameData.initSheepNumber = 10;
		GameData.sheepPool = [];
		GameData.liveSheepCount = [];
		GameData.bulletPool = [];
		GameData.shootingBulletCount=[];

	}

	//回收羊，羊死亡后调用
	public static putSheep(name:Sheep) {
		GameData.sheepPool.push();
	}

	//取回收的羊，没有则新建
	public static getSheep():Sheep{
		if(GameData.sheepPool.length>0){
			var sheep_tmp:Sheep = GameData.sheepPool[0];
			GameData.sheepPool.shift();
			return sheep_tmp;
		}
		return  new Sheep();
	}

	//回收子弹
	public static putBullet(name:Bullet){
		GameData.bulletPool.push();
	}

		//取回收的子弹，没有则新建

	public static getBullet():Bullet{
		if(GameData.sheepPool.length>0){
			var bullet_tmp:Bullet = GameData.bulletPool[0];
			GameData.bulletPool.shift();
			return bullet_tmp;
		}
		// return  new Bullet();
	}
}
