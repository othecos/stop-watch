import { CryptoPayments } from './payments.models';

export const payments:Array<CryptoPayments> = [
    new CryptoPayments('Etherium','assets/img/payments/etherium.jpeg','0x8Af27265933b392D0ba50A090258fa76c485D21E','img', 'assets/img/coins/ethereum.png'),
    new CryptoPayments('Bitcoin','assets/img/payments/bitcoin.jpeg','bc1qmsh6hvd6vraeej8qehpvzvnxlnlem6en2ev2ut','img', 'assets/img/coins/bitcoin.png'),
    new CryptoPayments('Lite Coin','assets/img/payments/litecoin.jpeg','ltc1q0q4t24atvuqge5t63c3m5qlgy0ahsy554n9cx0','img', 'assets/img/coins/litecoin.png'),
    new CryptoPayments('TrueUSD','assets/img/payments/trueUSD.jpeg','0x8Af27265933b392D0ba50A090258fa76c485D21E','img', 'assets/img/coins/dollar.png'),
    new CryptoPayments('XRP (Ripple)','assets/img/payments/xrp.jpeg','rB3en761DLCkkxzp3U1SZERZG8B4y5ztR5','img', 'assets/img/coins/ripple.png'),
]