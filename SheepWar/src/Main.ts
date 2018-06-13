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

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
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
    private sheep:Sheep;
    private sp=[];

    private createGameScene() {
        this.init();

        //加羊
        // this.createSheep(50);
        this.sheep= new Sheep(this.bg.x,this.bg.y);
        this.sp.push(this.sheep);
        this.addChild(this.sheep);

        console.log(this.sp[0]);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.revolveWeapon, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.revolveWeapon, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, function () { egret.stopTick(this.move, this); }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, function () { this.sheep.moveOff=false; }, this);


    }

    /**参数初始化*/
    private init() {
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
    }

    private vx: number;
    private vy: number;

    private revolveWeapon(evt: egret.TouchEvent): void {
        this.vx = evt.stageX - this.weapon.x;
        this.vy = evt.stageY - this.weapon.y;
        this.weapon.rotation = Math.atan2(this.vy, this.vx) * 180 / Math.PI + 90;
        egret.startTick(this.move, this);
    }



    private move(): boolean {

        if (this.vx > 0 && this.bg.x + this.bg.width > this.hero.x) {
            this.bg.x -= 4;
        } else if (this.vx < 0 && this.bg.x < this.hero.x) {
            this.bg.x += 4;
        }
        if (this.vy > 0 && this.bg.y + this.bg.height > this.hero.y) {
            this.bg.y -= 4;
        } else if (this.vy < 0 && this.bg.y < this.hero.y) {
            this.bg.y += 4;
        }
        this.sheep.moveOff=true;
        this.sheep.setX0Y0(this.bg.x,this.bg.y);
        return false;
    }

    //批量造羊
    // private createSheep(x: number) {
        // for (let i = 1; i <= x; i++) {
            // this.sheep = new Sheep(this.bg.x, this.bg.y);
            // sheep.anchorOffsetX = sheep.width / 2;
            // sheep.anchorOffsetY = sheep.height;
            // sheep.x = Math.random() * 300;
            // sheep.y = Math.random() * 300;
            // this.addChild(this.sheep);
            // this.sheepGroup.push(sheep);
        // }
    // }

}