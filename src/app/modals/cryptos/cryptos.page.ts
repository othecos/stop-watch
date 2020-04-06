import { Component, OnInit, Input } from '@angular/core';
import { CryptoPayments } from 'src/app/services/payments/payments.models';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { ModalController } from '@ionic/angular';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.page.html',
  styleUrls: ['./cryptos.page.scss'],
})
export class CryptosPage implements OnInit {

  // tslint:disable-next-line: variable-name
  private _crypto: CryptoPayments;
  public showThanks = false;

  @Input('crypto')
  public set crypto(value: CryptoPayments) {
    this._crypto = value;
  }
  public get crypto(): CryptoPayments {
    return this._crypto;
  }

  constructor(
    private utils: IonicUtilsService,
    private modalController: ModalController
  ) { }
  onDismiss() {
    this.modalController.dismiss();
  }
  ngOnInit() {
  }
  onAddressClicked(address: string) {
    if ( Utils.copyToClipboard(address)) {
      this.utils.presentToast(`Wallet address<br><b>${address}!</b><br> copied!`, 2000, 'bottom', 'success');
      this.showThanks = true;
    }
  }
}
