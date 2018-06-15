//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.frameCount = 0;
        _this.moveFrameCount = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.startPage = new egret.Bitmap(RES.getRes("start_jpg"));
                        this.startPage.x = this.stage.stageWidth / 2 - this.startPage.width / 2;
                        this.startPage.y = this.stage.stageHeight / 2 - this.startPage.height / 2;
                        this.addChild(this.startPage);
                        console.log("dkjdf");
                        this.startPage.touchEnabled = true;
                        this.startPage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createGameScene, this);
                        console.log("dkjdf");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.createGameScene = function () {
        this.removeChild(this.startPage);
        GameData.initData();
        this.initImg();
        // egret.startTick(this.alltick, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.allFrame, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.revolveWeapon, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.revolveWeapon, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            egret.stopTick(this.move, this);
        }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            for (var i = 0; i < GameData.liveSheepCount.length; i++) {
                GameData.liveSheepCount[i].moveOff = false;
            }
        }, this);
    };
    /**参数初始化*/
    Main.prototype.initImg = function () {
        //添加背景
        this.bg = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.bg.x = (this.stage.stageWidth - this.bg.width) / 2;
        this.bg.y = (this.stage.stageHeight - this.bg.height) / 2;
        this.addChild(this.bg);
        //添加英雄
        this.hero = new Hero(this.stage.stageWidth, this.stage.stageHeight);
        // console.log("hero====",this.hero.anchorOffsetX, this.hero.anchorOffsetY, this.hero.width, this.hero.height)
        this.addChild(this.hero);
        //加枪
        this.weapon = new Weapon(this.hero.x, this.hero.y, this.hero.height);
        this.addChild(this.weapon);
        //加羊
        this.createSheep(10);
        //记分板
        this.socreLabel = new egret.TextField();
        this.socreLabel.fontFamily = "Arial";
        this.socreLabel.textColor = 0xFF0000;
        this.socreLabel.size = 20;
        this.socreLabel.text = "Sorce: " + GameData.sorce;
        this.socreLabel.x = 10;
        this.socreLabel.y = 10;
        this.addChild(this.socreLabel);
        this.scountLabel = new egret.TextField();
        this.scountLabel.fontFamily = "Arial";
        this.scountLabel.textColor = 0xFF0000;
        this.scountLabel.size = 20;
        this.scountLabel.text = "sheep  " + GameData.sheepCount + " /100";
        this.scountLabel.x = 10;
        this.scountLabel.y = 40;
        this.addChild(this.scountLabel);
    };
    Main.prototype.allFrame = function () {
        this.frameCount++;
        //回收子弹,1s检测一次带回收的
        // var recycleBullet = function () {
        if (this.frameCount % 30 === 0) {
            for (var i = 0; i < GameData.shootingBulletCount.length; i++) {
                if (!GameData.shootingBulletCount[i].isShoot) {
                    console.log("d====");
                    this.removeChild(GameData.shootingBulletCount[i]);
                    GameData.putBullet(GameData.shootingBulletCount[i]);
                    GameData.shootingBulletCount.splice(i, 1);
                }
            }
        }
        // }
        // new recycleBullet();
        //羊的碰撞监测
        for (var j = 0; j < GameData.liveSheepCount.length; j++) {
            if (!GameData.liveSheepCount[j].isDead) {
                // console.log("ddddd")
                for (var k = 0; k < GameData.shootingBulletCount.length; k++) {
                    if (GameData.liveSheepCount[j].isCloseWithBullet(GameData.shootingBulletCount[k]) && GameData.shootingBulletCount[k].isShoot == true) {
                        GameData.sheepCount--;
                        GameData.sorce++;
                        GameData.shootingBulletCount[k].isShoot = false;
                        GameData.shootingBulletCount[k].visible = false;
                    }
                }
            }
        }
        //回收羊
        if (this.frameCount % 10 === 0) {
            for (var i = 0; i < GameData.liveSheepCount.length; i++) {
                if (!GameData.liveSheepCount[i].isVisible) {
                    GameData.putSheep(GameData.liveSheepCount[i]);
                    this.removeChild(GameData.liveSheepCount[i]);
                    GameData.liveSheepCount.splice(i, 1);
                }
            }
        }
        //生成羊
        if (this.frameCount % GameData.creeatSheepSpeed === 0) {
            this.createSheep(GameData.creeatSheepNum);
            GameData.sheepCount += GameData.creeatSheepNum;
        }
        //更新计分版
        this.socreLabel.text = "Sorce: " + GameData.sorce;
        this.scountLabel.text = "sheep  " + GameData.sheepCount + " /100";
        // return false;
    };
    //旋转武器
    Main.prototype.revolveWeapon = function (evt) {
        this.vx = evt.stageX - this.weapon.x;
        this.vy = evt.stageY - this.weapon.y;
        //反转图片
        if (this.vx < 0) {
            this.hero.skewY = 0;
        }
        else if (this.vx > 0) {
            this.hero.skewY = 180;
        }
        this.weapon.rotation = Math.atan2(this.vy, this.vx) * 180 / Math.PI + 90;
        egret.startTick(this.move, this);
    };
    Main.prototype.move = function () {
        this.x1 = GameData.heroSpeed * this.vx / Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        this.y1 = GameData.heroSpeed * this.vy / Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (this.vx > 0 && this.bg.x + this.bg.width > this.hero.x) {
            this.bg.x -= Math.abs(this.x1);
        }
        else if (this.vx < 0 && this.bg.x < this.hero.x) {
            this.bg.x += Math.abs(this.x1);
        }
        if (this.vy > 0 && this.bg.y + this.bg.height > this.hero.y) {
            this.bg.y -= Math.abs(this.y1);
        }
        else if (this.vy < 0 && this.bg.y < this.hero.y) {
            this.bg.y += Math.abs(this.y1);
        }
        //羊跟随背景
        for (var i = 0; i < GameData.liveSheepCount.length; i++) {
            GameData.liveSheepCount[i].moveOff = true;
            GameData.liveSheepCount[i].followBg(this.bg.x, this.bg.y);
        }
        //开枪
        if (this.moveFrameCount % GameData.createBulletSpeed == 0) {
            this.shoot();
        }
        this.moveFrameCount++;
        return false;
    };
    Main.prototype.shoot = function () {
        var bullet = GameData.getBullet();
        this.addChild(bullet);
        bullet.visible = true;
        bullet.initfly(this.weapon.x, this.weapon.y, this.weapon.rotation, this.vx, this.vy);
        GameData.shootingBulletCount.push(bullet);
        // console.log("shootingBullet", GameData.shootingBulletCount)
    };
    //批量造羊
    Main.prototype.createSheep = function (x) {
        for (var i = 1; i <= x; i++) {
            var sheep = GameData.getSheep();
            sheep.initSheep(this.bg.x, this.bg.y);
            this.addChild(sheep);
            GameData.liveSheepCount.push(sheep);
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map