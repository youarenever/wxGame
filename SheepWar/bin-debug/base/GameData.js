//基础数据
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.prototype.init = function () {
        GameData.sorce = 0;
        GameData.initSheepNumber = 10;
        GameData.sheepPool = [];
        GameData.liveSheepCount = [];
        GameData.bulletPool = [];
    };
    GameData.prototype.putSheep = function (name) {
        GameData.sheepPool.push();
    };
    GameData.prototype.getSheep = function () {
        if (GameData.sheepPool.length > 0) {
            var sheep_tmp = GameData.sheepPool[0];
            GameData.sheepPool.shift();
            return sheep_tmp;
        }
        return new Sheep();
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map