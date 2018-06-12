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
    private hero: egret.Bitmap;
    private gun: egret.Bitmap;

    private createGameScene() {
        this.bg = new egret.Bitmap(RES.getRes("bg_png"));
        this.bg.x = -this.stage.stageWidth;
        this.bg.y = -this.stage.stageHeight;
        this.addChild(this.bg);

        this.hero = new egret.Bitmap(RES.getRes("hero_png"));
        this.hero.anchorOffsetX = this.hero.width / 2;
        this.hero.anchorOffsetY = this.hero.height / 2;
        this.hero.x = this.stage.stageWidth / 2;
        this.hero.y = this.stage.stageHeight / 2;
        this.addChild(this.hero);

        this.gun = new egret.Bitmap(RES.getRes("gun_png"));
        this.gun.anchorOffsetX = this.gun.width / 2;
        this.gun.anchorOffsetY = 2 * this.gun.height / 3;
        this.gun.x = this.hero.x;
        this.gun.y = this.hero.y;
        this.addChild(this.gun);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.revolve, this);
    }


    // private time: number = 0;
    private moveablie: boolean;

    private revolve(evt: egret.TouchEvent): void {
        this.moveablie = true;
        var vx = evt.stageX - this.gun.x;
        var vy = evt.stageY - this.gun.y;
        this.gun.rotation = Math.atan2(vy, vx) * 180 / Math.PI + 90;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () { egret.stopTick(function () { return true; }, this) }, this)
    }

    // private moveStar(timeStamp: number): boolean {
    //     var now = timeStamp;
    //     var time = this.time;
    //     var pass = now - time;
    //     console.log("moveStar: ", (1000 / pass).toFixed(5));
    //     this.time = now;
    //     return false;
    // }

    private move(evt: egret.TouchEvent): void {
        var vx = evt.stageX - this.gun.x;
        var vy = evt.stageY - this.gun.y;
        this.gun.rotation = Math.atan2(vy, vx) * 180 / Math.PI + 90;
        if (this.moveablie) {
            egret.startTick(function () {
                if (evt.stageX < this.gun.x) {
                    this.bg.x += 1;
                } else if (evt.stageX > this.gun.x) {
                    this.bg.x -= 1;
                }
                if (evt.stageY < this.gun.y) {
                    this.bg.y += 1;
                } else if (evt.stageY > this.gun.y) {
                    this.bg.y -= 1;
                }
                return false;
            }
                , this);
        } 

    }

}