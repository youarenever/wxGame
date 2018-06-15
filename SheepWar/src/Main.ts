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

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private startPage:egret.Bitmap;

    private async runGame() {
        await this.loadResource()
        this.startPage=new egret.Bitmap(RES.getRes("start_jpg"));
        this.startPage.x=this.stage.stageWidth/2-this.startPage.width/2;
        this.startPage.y=this.stage.stageHeight/2-this.startPage.height/2;
        this.addChild(this.startPage);
        console.log("dkjdf");
        this.startPage.touchEnabled=true;
        this.startPage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createGameScene, this);
        console.log("dkjdf");

        // const result = await RES.getResAsync("description_json")
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private bg: egret.Bitmap;
    private hero: Hero;
    // private sheepGroup: Array<Sheep>;
    private weapon: Weapon;
    // private sheep:Sheep;
    private socreLabel: egret.TextField;
    private scountLabel: egret.TextField;

    private createGameScene() {
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
            for (let i = 0; i < GameData.liveSheepCount.length; i++) {
                GameData.liveSheepCount[i].moveOff = false;
            }
        }, this);


    }

    /**参数初始化*/
    private initImg() {
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
    }

    private frameCount = 0;

    private allFrame() {
        this.frameCount++;

        //回收子弹,1s检测一次带回收的
        // var recycleBullet = function () {
        if (this.frameCount % 30 === 0) {
            for (let i = 0; i < GameData.shootingBulletCount.length; i++) {
                if (!GameData.shootingBulletCount[i].isShoot) {
                    console.log("d====")
                    this.removeChild(GameData.shootingBulletCount[i]);
                    GameData.putBullet(GameData.shootingBulletCount[i]);
                    GameData.shootingBulletCount.splice(i, 1);
                }
            }
        }
        // }

        // new recycleBullet();
        //羊的碰撞监测
        for (let j = 0; j < GameData.liveSheepCount.length; j++) {
            if (!GameData.liveSheepCount[j].isDead) {
                // console.log("ddddd")
                for (let k = 0; k < GameData.shootingBulletCount.length; k++) {
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
            for (let i = 0; i < GameData.liveSheepCount.length; i++) {
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

    }


    private vx: number;
    private vy: number;

    //旋转武器
    private revolveWeapon(evt: egret.TouchEvent): void {
        this.vx = evt.stageX - this.weapon.x;
        this.vy = evt.stageY - this.weapon.y;

        //反转图片
        if (this.vx < 0) {
            this.hero.skewY = 0;
        } else if (this.vx > 0) {
            this.hero.skewY = 180;
        }

        this.weapon.rotation = Math.atan2(this.vy, this.vx) * 180 / Math.PI + 90;
        egret.startTick(this.move, this);
    }


    //羊和背景的移动
    private x1; //移动距离
    private y1;
    private moveFrameCount = 0;

    private move(): boolean {
        this.x1 = GameData.heroSpeed * this.vx / Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        this.y1 = GameData.heroSpeed * this.vy / Math.sqrt(this.vx * this.vx + this.vy * this.vy);

        if (this.vx > 0 && this.bg.x + this.bg.width > this.hero.x) {
            this.bg.x -= Math.abs(this.x1);
        } else if (this.vx < 0 && this.bg.x < this.hero.x) {
            this.bg.x += Math.abs(this.x1);
        }
        if (this.vy > 0 && this.bg.y + this.bg.height > this.hero.y) {
            this.bg.y -= Math.abs(this.y1);
        } else if (this.vy < 0 && this.bg.y < this.hero.y) {
            this.bg.y += Math.abs(this.y1);
        }

        //羊跟随背景
        for (let i = 0; i < GameData.liveSheepCount.length; i++) {
            GameData.liveSheepCount[i].moveOff = true;
            GameData.liveSheepCount[i].followBg(this.bg.x, this.bg.y);
        }

        //开枪
        if (this.moveFrameCount % GameData.createBulletSpeed == 0) {
            this.shoot();
        }
        this.moveFrameCount++;

        return false;
    }

    private shoot() {
        var bullet: Bullet = GameData.getBullet();
        this.addChild(bullet);
        bullet.visible = true;
        bullet.initfly(this.weapon.x, this.weapon.y, this.weapon.rotation, this.vx, this.vy);
        GameData.shootingBulletCount.push(bullet);
        // console.log("shootingBullet", GameData.shootingBulletCount)
    }

    //批量造羊
    private createSheep(x: number) {
        for (let i = 1; i <= x; i++) {
            var sheep: Sheep = GameData.getSheep();
            sheep.initSheep(this.bg.x, this.bg.y)
            this.addChild(sheep)
            GameData.liveSheepCount.push(sheep);
        }
    }

}