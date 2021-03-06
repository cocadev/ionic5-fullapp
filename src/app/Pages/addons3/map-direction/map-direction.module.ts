/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapDirectionPageRoutingModule } from './map-direction-routing.module';

import { MapDirectionPage } from './map-direction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapDirectionPageRoutingModule
  ],
  declarations: [MapDirectionPage]
})
export class MapDirectionPageModule {}
