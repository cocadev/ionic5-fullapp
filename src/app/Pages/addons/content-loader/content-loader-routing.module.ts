/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentLoaderPage } from './content-loader.page';

const routes: Routes = [
  {
    path: '',
    component: ContentLoaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentLoaderPageRoutingModule {}
