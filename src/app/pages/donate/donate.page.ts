import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { ModalController } from '@ionic/angular';
import { CryptosPage } from 'src/app/modals/cryptos/cryptos.page';
import { CryptoPayments } from 'src/app/services/payments/payments.models';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public paymentsServices:PaymentsService,
    private utils:IonicUtilsService,
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }
  async onCryptoClicked(crypto:CryptoPayments){
    await this.presentModal(crypto)
  }
  private async presentModal(value) {
    console.log(value);
    
    const modal = await this.modalController.create({
      component: CryptosPage,
      swipeToClose: true,
      componentProps: {
        'crypto' : value
      }
    });
    return await modal.present();
  }
}
