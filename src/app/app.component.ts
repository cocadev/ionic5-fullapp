/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit } from '@angular/core';
import { MovieTicketPage } from '@app/Pages/card/movie-ticket/movie-ticket.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, ModalController } from '@ionic/angular';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { UtilService } from '@app/services/util/util.service';
import { AuthenticationService } from '@app/services/firestore/firebase-authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public sidemenu = 1;
  private showChildren = '';
  public sidemenuLayout1: Array<any>;
  public beginnerMenu: Array<any>;
  public startupMenu: Array<any>;
  public proMenu: Array<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private authService: AuthenticationService,
    private util: UtilService,
    public modalCtrl: ModalController,
  ) {
    this.initializeApp();
    this.beginnerMenu = environment.BEGINNER_SIDEMENU;
    this.startupMenu = environment.STARTUP_SIDEMENU;
    this.proMenu = environment.PRO_SIDEMENU;
    this.sidemenuLayout1 = environment.SIDEMENU_LAYOUTS;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showSidemenu(index: number) {
    this.sidemenu = index + 1;
  }

  expandMenu(title) {
    console.log('title', title);
    if (this.showChildren === title) {
      this.showChildren = '';
    } else {
      this.showChildren = title;
    }
    console.log(this.showChildren);
  }

  ngOnInit() {
  }
  async redirectPage(pageUrl, disabled) {
    if (disabled) {
      return;
    }
    if (pageUrl === '/movie-ticket') {
      const modal = await this.modalCtrl.create({
        component: MovieTicketPage
      });
      return modal.present();
    } else if (pageUrl === '/logout') {
      this.logout();
    } else if (pageUrl === '/product-details') {
      this.route.navigate([pageUrl, { id: 19 }]);
    } else {
      this.route.navigate([pageUrl]);
    }
  }

  logout() {
    console.log('logout');
    this.authService.logout().then(() => {
      this.util.navigate('login', false);
    });
  }
}
