(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{K2bJ:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var o=t("pMnS"),i=t("MKJQ"),a=t("sZkV"),c=t("SVse"),r=t("mrSG"),s=t("BYaT");const b=[new s.a("Etherium","assets/img/payments/etherium.jpeg","0x8Af27265933b392D0ba50A090258fa76c485D21E","img","assets/img/coins/ethereum.png"),new s.a("Bitcoin","assets/img/payments/bitcoin.jpeg","bc1qmsh6hvd6vraeej8qehpvzvnxlnlem6en2ev2ut","img","assets/img/coins/bitcoin.png"),new s.a("Lite Coin","assets/img/payments/litecoin.jpeg","ltc1q0q4t24atvuqge5t63c3m5qlgy0ahsy554n9cx0","img","assets/img/coins/litecoin.png"),new s.a("TrueUSD","assets/img/payments/trueUSD.jpeg","0x8Af27265933b392D0ba50A090258fa76c485D21E","img","assets/img/coins/dollar.png"),new s.a("XRP (Ripple)","assets/img/payments/xrp.jpeg","rB3en761DLCkkxzp3U1SZERZG8B4y5ztR5","img","assets/img/coins/ripple.png")],p=[new s.b("R$1,99","img","https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-f389ae45-fe6d-4510-97ae-786c2fd7fe22","assets/img/payments/agreement.png"),new s.b("R$4,99","img","https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-665e3e8e-5760-4ee1-be2e-f0a8998449dd","assets/img/payments/agreement.png"),new s.b("R$9,99","img","https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-633648f9-d8e1-46d4-8844-a4811b6373f3","assets/img/payments/agreement.png"),new s.b("R$50","img","https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-64e2eb00-9407-487f-a54d-b335c17191a4","assets/img/payments/agreement.png"),new s.b("R$100","img","https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=120584160-e89dcc5d-401d-48cf-8ddb-a23f3ddf7d0f","assets/img/payments/agreement.png")];let m=(()=>{class l{constructor(){this._payments=b,this._mercadoPagoPayments=p}get payments(){return this._payments}get mercadoPagoPayments(){return this._mercadoPagoPayments}}return l.ngInjectableDef=e.Ob({factory:function(){return new l},token:l,providedIn:"root"}),l})();var g=t("Rghr");class d{constructor(l,n){this.paymentsServices=l,this.modalController=n}ngOnInit(){}onCryptoClicked(l){return r.a(this,void 0,void 0,(function*(){yield this.presentModal(l)}))}presentModal(l){return r.a(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:g.a,swipeToClose:!0,componentProps:{crypto:l}});return yield n.present()}))}}var f=e.nb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100%;width:100%;display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;padding:10px}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px;width:auto}ion-row[_ngcontent-%COMP%]{-webkit-animation:1s cubic-bezier(.25,.46,.45,.94) both slide-top;animation:1s cubic-bezier(.25,.46,.45,.94) both slide-top;-webkit-box-pack:center;justify-content:center;page-break-after:always}ion-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:.2rem}#mercado-pago[_ngcontent-%COMP%], ion-row[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-left:.2rem;height:32px;width:32px}.mercado-pago__button[_ngcontent-%COMP%], .mercado-pago__title[_ngcontent-%COMP%]{color:var(--mercado-pago-color-light)}"]],data:{}});function h(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-button",[["color","dark"],["fill","outline"],["shape","round"]],null,null,null,i.H,i.c)),e.ob(1,49152,null,0,a.j,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],href:[2,"href"],shape:[3,"shape"]},null),(l()(),e.Ib(2,0,[" "," "]))],(function(l,n){l(n,1,0,"dark","outline",n.context.$implicit.linkToRedirect,"round")}),(function(l,n){l(n,2,0,n.context.$implicit.label)}))}function y(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,11,"div",[["class","mercado-pago"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,6,"h1",[],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["You can donate by "])),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,1,"strong",[["class","mercado-pago__title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Mercado Pago"])),(l()(),e.pb(7,0,null,null,0,"img",[["alt","Mercado Pago icon"],["id","mercado-pago"],["src","assets/img/payments/agreement.png"]],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,3,"ion-row",[],null,null,null,i.bb,i.w)),e.ob(9,49152,null,0,a.fb,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,h)),e.ob(11,278528,null,0,c.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,11,0,n.context.ngIf)}),null)}function w(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"ion-icon",[["slot","end"]],null,null,null,i.O,i.j)),e.ob(2,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,null==n.parent.context.$implicit?null:null==n.parent.context.$implicit.icon?null:n.parent.context.$implicit.icon.url)}),null)}function x(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-avatar",[],null,null,null,i.G,i.b)),e.ob(1,49152,null,0,a.f,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,(function(l,n){l(n,2,0,null==n.parent.context.$implicit?null:null==n.parent.context.$implicit.icon?null:n.parent.context.$implicit.icon.url,(null==n.parent.context.$implicit?null:n.parent.context.$implicit.label)+"_icon")}))}function k(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"ion-button",[["color","dark"],["fill","outline"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onCryptoClicked(l.context.$implicit)&&e),e}),i.H,i.c)),e.ob(1,49152,null,0,a.j,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),e.eb(16777216,null,0,1,null,w)),e.ob(3,16384,null,0,c.k,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.eb(0,[["img",2]],0,0,null,x))],(function(l,n){l(n,1,0,"dark","outline","round"),l(n,3,0,"ionic"==(null==n.context.$implicit?null:null==n.context.$implicit.icon?null:n.context.$implicit.icon.type),e.Ab(n,4))}),null)}function v(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.N,i.i)),e.ob(1,49152,null,0,a.A,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.jb,i.E)),e.ob(3,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.I,i.d)),e.ob(5,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.U,i.q)),e.ob(7,49152,null,0,a.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.hb,i.C)),e.ob(9,49152,null,0,a.wb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Donate"])),(l()(),e.pb(11,0,null,null,14,"ion-content",[],null,null,null,i.J,i.e)),e.ob(12,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,12,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,y)),e.ob(15,16384,null,0,c.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(16,0,null,null,9,"div",[["class","cryptos"]],null,null,null,null,null)),(l()(),e.pb(17,0,null,null,4,"h1",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" And we accept donations by "])),(l()(),e.pb(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,1,"strong",[["style","color: orange; font-weight: bold;"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["CryptoCoins! \u20bf"])),(l()(),e.pb(22,0,null,null,3,"ion-row",[],null,null,null,i.bb,i.w)),e.ob(23,49152,null,0,a.fb,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,k)),e.ob(25,278528,null,0,c.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,!0),l(n,15,0,t.paymentsServices.mercadoPagoPayments),l(n,25,0,t.paymentsServices.payments)}),null)}function _(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-donate",[],null,null,null,v,f)),e.ob(1,114688,null,0,d,[m,a.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var P=e.lb("app-donate",d,_,{},{},[]),C=t("s7LF"),M=t("iInd");class j{}t.d(n,"DonatePageModuleNgFactory",(function(){return $}));var $=e.mb(u,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,P]],[3,e.j],e.v]),e.yb(4608,c.m,c.l,[e.s,[2,c.x]]),e.yb(4608,C.r,C.r,[]),e.yb(4608,a.b,a.b,[e.x,e.g]),e.yb(4608,a.Db,a.Db,[a.b,e.j,e.p]),e.yb(4608,a.Hb,a.Hb,[a.b,e.j,e.p]),e.yb(1073742336,c.b,c.b,[]),e.yb(1073742336,C.q,C.q,[]),e.yb(1073742336,C.g,C.g,[]),e.yb(1073742336,a.Ab,a.Ab,[]),e.yb(1073742336,M.o,M.o,[[2,M.t],[2,M.m]]),e.yb(1073742336,j,j,[]),e.yb(1073742336,u,u,[]),e.yb(1024,M.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);