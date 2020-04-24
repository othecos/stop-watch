import { Injectable } from '@angular/core';
import { CryptoPayments, MercadoPagoPayment } from './payments.models';
import { payments, mercadoPago } from './payments.data';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  // tslint:disable-next-line: variable-name
  private _payments: Array<CryptoPayments> = payments;
  public get payments(): Array<CryptoPayments> {
    return this._payments;
  }
  private _mercadoPagoPayments: Array<MercadoPagoPayment> = mercadoPago;
  public get mercadoPagoPayments(): Array<MercadoPagoPayment> {
    return this._mercadoPagoPayments;
  }
  constructor() { 
  }

}
