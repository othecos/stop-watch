export type PaymentsType =  'crypto' | 'paypal' | 'credit'
export interface Payments{
    key: string;
    label: string;
    type: PaymentsType
}

export class Payments implements Payments {
    key: string;
    label: string;
    type: PaymentsType
    constructor( label:string,type:PaymentsType){
        this.key = PaymentsMethods.generateKey()
        this.label = label || ''
        this.type = type
    }
}
export class CryptoPayments extends Payments{
    QR_CODE: string;
    wallet_address: string;
    icon:{
        type: 'ionic' | 'img'
        url: string
    }
    constructor(label,QR_CODE,wallet_address,icon_type: 'ionic'| 'img', icon_url: string){
        super(label,'crypto')
        this.QR_CODE = QR_CODE || ''
        this.wallet_address = wallet_address
        this.icon = {
            type: icon_type || 'ionic',
            url : icon_url && icon_type ? icon_url : 'logo-bitcoin'
        }
    }
}
export abstract class PaymentsMethods{
    static generateKey(){
         return `payment_${Math.random()}` 
    }
}