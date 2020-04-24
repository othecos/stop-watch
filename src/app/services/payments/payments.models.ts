export type PaymentsType =  'crypto' | 'paypal' | 'credit' | 'mercado-pago';
export interface PaymentInterface {
    key: string;
    label: string;
    type: PaymentsType;
}

export class Payment implements PaymentInterface {
    key: string;
    label: string;
    type: PaymentsType;
    constructor( label: string, type: PaymentsType) {
        // tslint:disable-next-line: no-use-before-declare
        this.key = PaymentsMethods.generateKey();
        this.label = label || '';
        this.type = type;
    }
}
export class MercadoPagoPayment extends Payment{
    icon: {
        type: 'ionic' | 'img'
        url: string
    };
    linkToRedirect: string;
    constructor(label, iconType: 'ionic'| 'img',linkToRedirect:string, iconUrl: string) {
        super(label, 'mercado-pago');
        this.linkToRedirect = linkToRedirect;
        this.icon = {
            type: iconType || 'ionic',
            url : iconUrl && iconType ? iconUrl : 'card'
        };
    }
}
export class CryptoPayments extends Payment {
    QR_CODE: string;
    walletAddress: string;
    icon: {
        type: 'ionic' | 'img'
        url: string
    };
    constructor(label, QR_CODE, walletAddress, iconType: 'ionic'| 'img', iconUrl: string) {
        super(label, 'crypto');
        this.QR_CODE = QR_CODE || '';
        this.walletAddress = walletAddress;
        this.icon = {
            type: iconType || 'ionic',
            url : iconUrl && iconType ? iconUrl : 'logo-bitcoin'
        };
    }
}
export abstract class PaymentsMethods {
    static generateKey() {
         return `payment_${Math.random()}`;
    }
}
