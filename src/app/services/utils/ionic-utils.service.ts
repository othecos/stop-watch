import { Injectable } from '@angular/core';
import { AlertController, ToastController, PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicUtilsService {
  currentPopover;
  constructor(
    private alertController: AlertController,
    public toastController: ToastController,
    public popoverController: PopoverController
  ) { }
  async presentAlertConfirm(header = 'Confirm', message = 'Message <strong>text</strong>!!!', confirmFunction: () => void) {
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
            confirmFunction();
          }
        }
      ]
    });

    return await alert.present();
  }

  async presentToast(message = 'Action Done', duration = 2000, position: 'bottom' | 'top' | 'middle' = 'bottom', color = 'light') {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      color,
      cssClass: ['ion-text-center', 'ion-text-wrap']
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
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  async presentPopover(ev: any, componentRef: any) {
    console.log(ev, componentRef);

    const popover = await this.popoverController.create({
      component: componentRef,
      event: ev,
      translucent: true,

    });
    this.currentPopover = popover;
    return await popover.present();
  }
  dismissPopover() {
    if (this.currentPopover) {
      this.currentPopover.dismiss().then(() => { this.currentPopover = null; });
    }
  }
}
