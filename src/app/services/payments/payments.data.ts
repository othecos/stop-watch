import { CryptoPayments, MercadoPagoPayment } from './payments.models';

export const payments: Array<CryptoPayments> = [
    new CryptoPayments(
        'Etherium', 'assets/img/payments/etherium.jpeg', '0x8Af27265933b392D0ba50A090258fa76c485D21E',
        'img', 'assets/img/coins/ethereum.png'),
    new CryptoPayments(
        'Bitcoin', 'assets/img/payments/bitcoin.jpeg', 'bc1qmsh6hvd6vraeej8qehpvzvnxlnlem6en2ev2ut',
        'img', 'assets/img/coins/bitcoin.png'),
    new CryptoPayments(
        'Lite Coin', 'assets/img/payments/litecoin.jpeg', 'ltc1q0q4t24atvuqge5t63c3m5qlgy0ahsy554n9cx0',
        'img', 'assets/img/coins/litecoin.png'),
    new CryptoPayments(
        'TrueUSD', 'assets/img/payments/trueUSD.jpeg', '0x8Af27265933b392D0ba50A090258fa76c485D21E',
        'img', 'assets/img/coins/dollar.png'),
    new CryptoPayments(
        'XRP (Ripple)', 'assets/img/payments/xrp.jpeg', 'rB3en761DLCkkxzp3U1SZERZG8B4y5ztR5',
        'img', 'assets/img/coins/ripple.png'),
];
export const mercadoPago: Array<MercadoPagoPayment> = [
    new MercadoPagoPayment('R$1,99','img','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-f389ae45-fe6d-4510-97ae-786c2fd7fe22','assets/img/payments/agreement.png'),
    new MercadoPagoPayment('R$4,99','img','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-665e3e8e-5760-4ee1-be2e-f0a8998449dd','assets/img/payments/agreement.png'),
    new MercadoPagoPayment('R$9,99','img','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-633648f9-d8e1-46d4-8844-a4811b6373f3','assets/img/payments/agreement.png'),
    new MercadoPagoPayment('R$50','img','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-64e2eb00-9407-487f-a54d-b335c17191a4','assets/img/payments/agreement.png'),
    new MercadoPagoPayment('R$100','img','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-e89dcc5d-401d-48cf-8ddb-a23f3ddf7d0f','assets/img/payments/agreement.png'),

]