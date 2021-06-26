/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardsService } from './guards/guards.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'card-slider',
    loadChildren: () => import('./Pages/card/card-slider/card-slider.module').then(m => m.CardSliderPageModule)
  },
  {
    path: 'event-card',
    loadChildren: () => import('./Pages/card/event-card/event-card.module').then(m => m.EventCardPageModule)
  },
  {
    path: 'filtering-list',
    loadChildren: () => import('./Pages/card/filtering-card/filtering-card.module').then(m => m.FilteringCardPageModule)
  },
  {
    path: 'large-card',
    loadChildren: () => import('./Pages/card/large-card/large-card.module').then(m => m.LargeCardPageModule)
  },
  {
    path: 'movie-ticket',
    loadChildren: () => import('./Pages/card/movie-ticket/movie-ticket.module').then(m => m.MovieTicketPageModule)
  },
  {
    path: 'product-card',
    loadChildren: () => import('./Pages/card/product-card/product-card.module').then(m => m.ProductCardPageModule)
  },
  {
    path: 'sliders',
    loadChildren: () => import('./Pages/card/sliders/sliders.module').then(m => m.SlidersPageModule)
  },
  {
    path: 'expandable-list',
    loadChildren: () => import('./Pages/grid/expandable-list/expandable-list.module').then(m => m.ExpandableListPageModule)
  },
  {
    path: 'full-grid',
    loadChildren: () => import('./Pages/grid/full-grid/full-grid.module').then(m => m.FullGridPageModule)
  },
  {
    path: 'grid-x2',
    loadChildren: () => import('./Pages/grid/grid-x2/grid-x2.module').then(m => m.GridX2PageModule)
  },
  {
    path: 'grid-x3',
    loadChildren: () => import('./Pages/grid/grid-x3/grid-x3.module').then(m => m.GridX3PageModule)
  },
  {
    path: 'masonry-grid',
    loadChildren: () => import('./Pages/grid/masonry-grid/masonry-grid.module').then(m => m.MasonryGridPageModule)
  },
  {
    path: 'shop-grid',
    loadChildren: () => import('./Pages/grid/shop-grid/shop-grid.module').then(m => m.ShopGridPageModule)
  },
  {
    path: 'square-grid',
    loadChildren: () => import('./Pages/grid/square-grid/square-grid.module').then(m => m.SquareGridPageModule)
  },
  {
    path: 'card8',
    loadChildren: () => import('./Pages/card/card8/card8.module').then(m => m.Card8PageModule)
  },
  {
    path: 'login-1',
    loadChildren: () => import('./Pages/loginSignups/login1/login1.module').then(m => m.Login1PageModule)
  },
  {
    path: 'login-2',
    loadChildren: () => import('./Pages/loginSignups/login2/login2.module').then(m => m.Login2PageModule)
  },
  {
    path: 'login-3',
    loadChildren: () => import('./Pages/loginSignups/login3/login3.module').then(m => m.Login3PageModule)
  },
  {
    path: 'register-1',
    loadChildren: () => import('./Pages/loginSignups/register1/register1.module').then(m => m.Register1PageModule)
  },
  {
    path: 'home',
    canActivate: [GuardsService],
    loadChildren: () => import('./Pages/firebase/firebase-home/firebase-home.module').then(m => m.FirebaseHomePageModule)
  },
  {
    path: 'image-upload',
    loadChildren: () => import('./Pages/firebase/image-upload/image-upload.module').then(m => m.ImageUploadPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/firebase/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Pages/firebase/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'insta',
    loadChildren: () => import('./Pages/layouts/insta/insta.module').then(m => m.InstaPageModule)
  },
  {
    path: 'instaprofile',
    loadChildren: () => import('./Pages/layouts/instaprofile/instaprofile.module').then(m => m.InstaprofilePageModule)
  },
  {
    path: 'insta-tabs',
    loadChildren: () => import('./Pages/layouts/insta-tabs/insta-tabs.module').then(m => m.InstaTabsPageModule)
  },
  {
    path: 'netflix',
    loadChildren: () => import('./Pages/layouts/netflix/netflix.module').then(m => m.NetflixPageModule)
  },
  {
    path: 'uber-map-flow',
    loadChildren: () => import('./Pages/layouts/uber-map-flow/uber-map-flow.module').then(m => m.UberMapFlowPageModule)
  },
  {
    path: 'whatsapp',
    loadChildren: () => import('./Pages/layouts/whatsapp/whatsapp.module').then(m => m.WhatsappPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./Pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {
    path: 'video-large-card',
    loadChildren: () => import('./Pages/video-playlists/largecard/largecard.module').then(m => m.LargecardPageModule)
  },
  {
    path: 'view-video',
    loadChildren: () => import('./Pages/video-playlists/view-video/view-video.module').then(m => m.ViewVideoPageModule)
  },
  {
    path: 'youtube-home-playlist',
    loadChildren: () => import('./Pages/video-playlists/youtube-home-playlist/youtube-home-playlist.module').then(m => m.YoutubeHomePlaylistPageModule)
  },
  {
    path: 'grid-youtube-playlist',
    loadChildren: () => import('./Pages/video-playlists/youtube-playlist/youtube-playlist.module').then(m => m.YoutubePlaylistPageModule)
  },
  {
    path: 'phaser',
    loadChildren: () => import('./Pages/phaser/phaser.module').then(m => m.PhaserPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./Pages/slider/slider.module').then(m => m.SliderPageModule)
  },
  {
    path: 'profile1',
    loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Pages/woocommerce/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./Pages/woocommerce/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'orderinfo',
    loadChildren: () => import('./Pages/woocommerce/orderinfo/orderinfo.module').then(m => m.OrderinfoPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./Pages/woocommerce/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'woocommerce-products',
    loadChildren: () => import('./Pages/woocommerce/woocommerce-products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./Pages/woocommerce/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'blogpage',
    loadChildren: () => import('./Pages/wordpress/blogpage/blogpage.module').then(m => m.BlogpagePageModule)
  },
  { path: 'blogs/:id',
   loadChildren: () => import('./Pages/wordpress/blogpage/blogpage.module').then(m => m.BlogpagePageModule) 
  },
  {
    path: 'blogs',
    loadChildren: () => import('./Pages/wordpress/blogs/blogs.module').then(m => m.BlogsPageModule)
  },
  {
    path: 'admob',
    loadChildren: () => import('./Pages/addons/admob/admob.module').then(m => m.AdmobPageModule)
  },
  {
    path: 'content-loader',
    loadChildren: () => import('./Pages/addons/content-loader/content-loader.module').then(m => m.ContentLoaderPageModule)
  },
  {
    path: 'content-loader2',
    loadChildren: () => import('./Pages/addons/content-loader2/content-loader2.module').then(m => m.ContentLoader2PageModule)
  },
  {
    path: 'cropper',
    loadChildren: () => import('./Pages/addons/cropper/cropper.module').then(m => m.CropperPageModule)
  },
  {
    path: 'customfonts',
    loadChildren: () => import('./Pages/addons/customfonts/customfonts.module').then(m => m.CustomfontsPageModule)
  },
  {
    path: 'datetimepickers',
    loadChildren: () => import('./Pages/addons/datetime-pickers/datetime-pickers.module').then(m => m.DatetimePickersPageModule)
  },
  {
    path: 'infinite',
    loadChildren: () => import('./Pages/addons/infinite/infinite.module').then(m => m.InfinitePageModule)
  },
  {
    path: 'refresh',
    loadChildren: () => import('./Pages/addons/refresh/refresh.module').then(m => m.RefreshPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./Pages/addons/reorder/reorder.module').then(m => m.ReorderPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./Pages/addons/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'translate',
    loadChildren: () => import('./Pages/addons/translate/translate.module').then(m => m.TranslatePageModule)
  },
  {
    path: 'bar-code',
    loadChildren: () => import('./Pages/addons3/bar-code/bar-code.module').then(m => m.BarCodePageModule)
  },
  {
    path: 'google-autocomplete',
    loadChildren: () => import('./Pages/addons3/google-autocomplete/google-autocomplete.module').then(m => m.GoogleAutocompletePageModule)
  },
  {
    path: 'google-places',
    loadChildren: () => import('./Pages/addons3/google-places/google-places.module').then(m => m.GooglePlacesPageModule)
  },
  {
    path: 'in-app-browser',
    loadChildren: () => import('./Pages/addons3/in-app-browser/in-app-browser.module').then(m => m.InAppBrowserPageModule)
  },
  {
    path: 'local-notification',
    loadChildren: () => import('./Pages/addons3/local-notification/local-notification.module').then(m => m.LocalNotificationPageModule)
  },
  {
    path: 'map-direction',
    loadChildren: () => import('./Pages/addons3/map-direction/map-direction.module').then(m => m.MapDirectionPageModule)
  },
  {
    path: 'social-share',
    loadChildren: () => import('./Pages/addons3/social-share/social-share.module').then(m => m.SocialSharePageModule)
  },
  {
    path: 'sweet-alert',
    loadChildren: () => import('./Pages/addons3/sweet-alert/sweet-alert.module').then(m => m.SweetAlertPageModule)
  },
  {
    path: 'applepay',
    loadChildren: () => import('./Pages/paymentGateways/applepay/applepay.module').then(m => m.ApplepayPageModule)
  },
  {
    path: 'paypalpayment',
    loadChildren: () => import('./Pages/paymentGateways/paypalpayment/paypalpayment.module').then(m => m.PaypalpaymentPageModule)
  },
  {
    path: 'paypal-web',
    loadChildren: () => import('./Pages/paymentGateways/paypal-web/paypal-web.module').then(m => m.PaypalWebPageModule)
  },
  {
    path: 'stripepayment',
    loadChildren: () => import('./Pages/paymentGateways/stripepayment/stripepayment.module').then(m => m.StripepaymentPageModule)
  },
  {
    path: 'stripe-web',
    loadChildren: () => import('./Pages/paymentGateways/stripe-web/stripe-web.module').then(m => m.StripeWebPageModule)
  },
  {
    path: 'artboard',
    loadChildren: () => import('./Pages/chat/artboard/artboard.module').then(m => m.ArtboardPageModule)
  },
  {
    path: 'blocks',
    loadChildren: () => import('./Pages/chat/blocks/blocks.module').then(m => m.BlocksPageModule)
  },
  {
    path: 'breeze',
    loadChildren: () => import('./Pages/chat/breeze/breeze.module').then(m => m.BreezePageModule)
  },
  {
    path: 'bubble',
    loadChildren: () => import('./Pages/chat/bubble/bubble.module').then(m => m.BubblePageModule)
  },
  {
    path: 'bubble2',
    loadChildren: () => import('./Pages/chat/bubble2/bubble2.module').then(m => m.Bubble2PageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./Pages/chat/business/business.module').then(m => m.BusinessPageModule)
  },
  {
    path: 'classic',
    loadChildren: () => import('./Pages/chat/classic/classic.module').then(m => m.ClassicPageModule)
  },
  {
    path: 'classic-chatlist',
    loadChildren: () => import('./Pages/chat/classic-chatlist/classic-chatlist.module').then(m => m.ClassicChatlistPageModule)
  },
  {
    path: 'elegance',
    loadChildren: () => import('./Pages/chat/elegance/elegance.module').then(m => m.ElegancePageModule)
  },
  {
    path: 'fluid',
    loadChildren: () => import('./Pages/chat/fluid/fluid.module').then(m => m.FluidPageModule)
  },
  {
    path: 'minimal',
    loadChildren: () => import('./Pages/chat/minimal/minimal.module').then(m => m.MinimalPageModule)
  },
  {
    path: 'pastry',
    loadChildren: () => import('./Pages/chat/pastry/pastry.module').then(m => m.PastryPageModule)
  },
  {
    path: 'rose',
    loadChildren: () => import('./Pages/chat/rose/rose.module').then(m => m.RosePageModule)
  },
  {
    path: 'rose-list',
    loadChildren: () => import('./Pages/chat/rose-list/rose-list.module').then(m => m.RoseListPageModule)
  },
  {
    path: 'starbucks',
    loadChildren: () => import('./Pages/chat/starbucks/starbucks.module').then(m => m.StarbucksPageModule)
  },
  {
    path: 'tinder-cards',
    loadChildren: () => import('./Pages/layouts/tinder/home/home.module').then(m => m.HomePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
