import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicUtilsService {

  constructor(
    private alertController:AlertController
  ) { }
  async presentAlertConfirm(header = 'Confirm',message = 'Message <strong>text</strong>!!!',confirmFunction: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            confirmFunction()
          }
        }
      ]
    });
    
    return await alert.present();
  }
}
