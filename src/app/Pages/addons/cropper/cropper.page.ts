
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.page.html',
  styleUrls: ['./cropper.page.scss'],
})
export class CropperPage implements OnInit {
  public galleryImage: any;
  public cameraImage: any;

  constructor(
    private crop: Crop,
    private menuCtrl: MenuController,
    public actionCtrl: ActionSheetController,
    public camera: Camera,
    public base64: Base64,
    public domSanitizer: DomSanitizer,
    public platform: Platform,
    public webview: WebView
  ) { }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

  ngOnInit() {

  }

  async openActionsheet() {
    const action = await this.actionCtrl.create({
      buttons: [
        {
          text: 'Take a picture',
          role: 'destructive',
          cssClass: 'buttonCss',
          handler: () => {
            this.openCamera();
          }
        }, {
          text: 'Pick From Gallery',
          handler: () => {
            this.openGallery();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'buttonCss_Cancel',
          handler: () => {
            console.log('cancel');

          }
        }
      ]
    });
    await action.present();
  }
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options)
      .then((fileUri) => {
        console.log(fileUri);
        let nativePath = '';
        window['resolveLocalFileSystemURL'](fileUri, (fileEntry) => {
          nativePath = fileEntry.toURL();
          console.log('Native URI: ' + nativePath);
          this.cropImage(nativePath, 'camera');
        }, (err) => {
          console.log('File does not exist');
        });
      });
  }

  public openGallery() {

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((fileUri) => {
      let nativePath = '';
      window['resolveLocalFileSystemURL'](fileUri, (fileEntry: { toURL: () => string; }) => {
        nativePath = fileEntry.toURL();
        this.cropImage(nativePath, 'gallery');
      }, (err: any) => {
        console.log('File does not exist');
      });
    });
  }

  cropImage(url: string, source: string) {
    this.crop.crop(url, { quality: 100, targetWidth: -1, targetHeight: -1 })
      .then(
        newImage => {
          console.log('new image path is: ' + newImage);
          source === 'camera' ? this.setCameraImage(newImage) : this.setGalleryImage(newImage);
        },
        error => console.error('Error cropping image', error)
      );
  }

  setGalleryImage(newImage: string) {
    if (this.platform.is('ios')) {
      newImage = this.webview.convertFileSrc(newImage);
    }
    this.base64.encodeFile(newImage).then((base64File: string) => {
      const imageSrc = base64File.split(',');
      this.galleryImage =
        this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' +
          imageSrc[1]);
    });
  }

  setCameraImage(newImage: string) {
    if (this.platform.is('ios')) {
      newImage = this.webview.convertFileSrc(newImage);
    }
    this.base64.encodeFile(newImage).then((base64File: string) => {
      const imageSrc = base64File.split(',');
      this.cameraImage =
        this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' +
          imageSrc[1]);
    });
  }

}
