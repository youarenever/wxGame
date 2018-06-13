//基础数据

class GameData {
	public static sorce: number;
	public static initSheepNumber: number;
	public static initWeaponType: string;
	public static sheepPool: Sheep[];
	public static liveSheepCount: Sheep[];
	public static bulletPool: Bullet[];

	public static initData() {
		GameData.sorce = 0;
		GameData.initSheepNumber = 10;
		GameData.sheepPool = [];
		GameData.liveSheepCount = [];
		GameData.bulletPool = [];

	}

	public static putSheep(name:Sheep) {
		GameData.sheepPool.push()	
	}


	public static getSheep():Sheep{
		if(GameData.sheepPool.length>0){
			var sheep_tmp:Sheep = GameData.sheepPool[0];
			GameData.sheepPool.shift();
			return sheep_tmp;
		}
		return  new Sheep()
	}

}
