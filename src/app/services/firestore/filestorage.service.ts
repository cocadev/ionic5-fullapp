import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    private storage: AngularFireStorage,
    private baseFs: FirestoreService
  ) {
  }

  public uploadContent(file: any, fileName: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (file) {
          return this.storage.upload(`uploads/${fileName}`, file).then(
            success => {
              return this.storage.ref(`uploads/${fileName}`).getDownloadURL().subscribe(url => {
                return this.baseFs.uploadFile('uploads', url, fileName)
                  .then(() => {
                    resolve({ url, fileName });
                  })
                  .catch(err => {

                    reject(err);
                  });
              });
            },
            failure => {

              reject(failure);
            }
          )
            .catch(err => {

              reject(err);
            });
        } else {
          reject(new Error(' choice key not given'));
        }
      } catch (e) {

        reject(e);
      }

    });
  }
}

