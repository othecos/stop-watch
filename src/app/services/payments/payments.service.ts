import { Injectable } from '@angular/core';
import { CryptoPayments } from './payments.models';
import { payments } from './payments.data';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private _payments: Array<CryptoPayments> = payments;
  public get payments(): Array<CryptoPayments> {
    return this._payments;
  }
  constructor() { }

}
