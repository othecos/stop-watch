import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicUtilsService {

  constructor(
    private alertController:AlertController,
    public toastController: ToastController
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

  async presentToast(message = 'Action Done',duration = 2000,position : 'bottom' | 'top' | 'middle' = 'bottom',color = 'light') {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      color
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
