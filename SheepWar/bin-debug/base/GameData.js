//基础数据
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.initData = function () {
        GameData.sorce = 0;
        GameData.initSheepNumber = 10;
        GameData.sheepPool = [];
        GameData.liveSheepCount = [];
        GameData.bulletPool = [];
        GameData.shootingBulletCount = [];
    };
    //回收羊，羊死亡后调用
    GameData.putSheep = function (name) {
        GameData.sheepPool.push();
    };
    //取回收的羊，没有则新建
    GameData.getSheep = function () {
        if (GameData.sheepPool.length > 0) {
            var sheep_tmp = GameData.sheepPool[0];
            GameData.sheepPool.shift();
            return sheep_tmp;
        }
        return new Sheep();
    };
    //回收子弹
    GameData.putBullet = function (name) {
        GameData.bulletPool.push();
    };
    //取回收的子弹，没有则新建
    GameData.getBullet = function () {
        if (GameData.sheepPool.length > 0) {
            var bullet_tmp = GameData.bulletPool[0];
            GameData.bulletPool.shift();
            return bullet_tmp;
        }
        // return  new Bullet();
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map