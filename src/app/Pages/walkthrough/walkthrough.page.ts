/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {
  public slideOpts: object = {
    effect: 'flip',
  };
  public slides: Array<any>;

  constructor(
    private splashScreen: SplashScreen,
    private platform: Platform,
    private route: Router,
    private menuCtrl: MenuController
  ) {

    this.menuCtrl.enable(false);
    this.slides = environment.APP_SLIDES;
  }

  ngOnInit() {
  }

  sliderChanges(event: any) {
    console.log('sliderChanges', event);
  }

  skip() {
    console.log('skip slides');
    this.route.navigate(['login']);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }


}
