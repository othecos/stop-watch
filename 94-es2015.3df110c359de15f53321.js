(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{W4yV:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J");class e{}var o=t("pMnS"),i=t("MKJQ"),s=t("sZkV"),r=t("SVse"),a=t("mrSG"),c=t("PqYM"),b=t("SZuZ");let h=(()=>{class n{constructor(){this.timer=new Date(Date.now()).setHours(0,0,0,0),this.isRunning=!1,this.isInitiated=!1,this.isFinished=!1,this.cyclePeriod=80,this.timer=new Date(Date.now()).setHours(0,0,0,0)}start(){this.isInitiated?this.resume():(this.isInitiated=!0,this.isRunning=!0,this.isFinished=!1,this.initCounter())}pause(){this.isRunning=!1}resume(){this.isRunning=!0}stop(){this.resetTimer(),this.isRunning=!1,this.isInitiated=!1,this.isFinished=!0}restart(){return a.a(this,void 0,void 0,(function*(){this.stop(),yield b.a.sleep(3*this.cyclePeriod),this.start()}))}initCounter(){if(!this.subs||this.subs.closed){const n=new Date(Date.now()).setHours(0,0,0,0);let l=0;this.subs=Object(c.a)(0,this.cyclePeriod).subscribe(()=>{this.isRunning&&(l+=this.cyclePeriod,this.timer=n+l),this.isFinished&&this.subs.unsubscribe()})}}updateTimer(){}resetTimer(){this.timer=new Date(Date.now()).setHours(0,0,0,0)}}return n.ngInjectableDef=u.Ob({factory:function(){return new n},token:n,providedIn:"root"}),n})();class p{constructor(n,l){this.activatedRoute=n,this.counter=l}ngOnInit(){this.title=this.activatedRoute.snapshot.paramMap.get("id"),this.activatedRoute.paramMap.subscribe(n=>{this.title=n.get("id")})}onPlay(){this.counter.start()}onPause(){this.counter.pause()}onStop(){this.counter.stop()}onRestart(){this.counter.restart()}}var d=t("iInd"),g=u.nb({encapsulation:0,styles:[[".center[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;font-size:3em}@media all and (min-width:992px){.center[_ngcontent-%COMP%]{font-size:4em}}"]],data:{}});function k(n){return u.Kb(0,[(n()(),u.pb(0,0,null,null,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onRestart()&&u),u}),i.H,i.c)),u.ob(1,49152,null,0,s.j,[u.h,u.k,u.x],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["color","light"],["name","refresh"]],null,null,null,i.O,i.j)),u.ob(3,49152,null,0,s.B,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"dark","round","large"),n(l,3,0,"light","refresh")}),null)}function m(n){return u.Kb(0,[(n()(),u.pb(0,0,null,null,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onPlay()&&u),u}),i.H,i.c)),u.ob(1,49152,null,0,s.j,[u.h,u.k,u.x],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["color","light"],["name","play"]],null,null,null,i.O,i.j)),u.ob(3,49152,null,0,s.B,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"dark","round","large"),n(l,3,0,"light","play")}),null)}function f(n){return u.Kb(0,[u.Cb(0,r.d,[u.s]),(n()(),u.pb(1,0,null,null,10,"ion-header",[],null,null,null,i.N,i.i)),u.ob(2,49152,null,0,s.A,[u.h,u.k,u.x],null,null),(n()(),u.pb(3,0,null,0,8,"ion-toolbar",[],null,null,null,i.jb,i.E)),u.ob(4,49152,null,0,s.yb,[u.h,u.k,u.x],null,null),(n()(),u.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.I,i.d)),u.ob(6,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(n()(),u.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,i.U,i.q)),u.ob(8,49152,null,0,s.Q,[u.h,u.k,u.x],null,null),(n()(),u.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.hb,i.C)),u.ob(10,49152,null,0,s.wb,[u.h,u.k,u.x],null,null),(n()(),u.Ib(-1,0,["Count Up"])),(n()(),u.pb(12,0,null,null,4,"ion-content",[],null,null,null,i.J,i.e)),u.ob(13,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(n()(),u.pb(14,0,null,0,2,"div",[["class","center"]],null,null,null,null,null)),(n()(),u.Ib(15,null,[" "," "])),u.Eb(16,2),(n()(),u.pb(17,0,null,null,15,"ion-footer",[],null,null,null,i.M,i.h)),u.ob(18,49152,null,0,s.y,[u.h,u.k,u.x],null,null),(n()(),u.pb(19,0,null,0,13,"ion-row",[["class"," ion-padding-vertical ion-align-items-end ion-justify-content-center"]],null,null,null,i.bb,i.w)),u.ob(20,49152,null,0,s.fb,[u.h,u.k,u.x],null,null),(n()(),u.eb(16777216,null,0,1,null,k)),u.ob(22,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(23,0,null,0,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onPause()&&u),u}),i.H,i.c)),u.ob(24,49152,null,0,s.j,[u.h,u.k,u.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"],size:[3,"size"]},null),(n()(),u.pb(25,0,null,0,1,"ion-icon",[["color","danger"],["name","pause"]],null,null,null,i.O,i.j)),u.ob(26,49152,null,0,s.B,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),u.eb(16777216,null,0,1,null,m)),u.ob(28,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(29,0,null,0,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onStop()&&u),u}),i.H,i.c)),u.ob(30,49152,null,0,s.j,[u.h,u.k,u.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"],size:[3,"size"]},null),(n()(),u.pb(31,0,null,0,1,"ion-icon",[["color","light"],["name","stop"]],null,null,null,i.O,i.j)),u.ob(32,49152,null,0,s.B,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){var t=l.component;n(l,22,0,t.counter.isRunning),n(l,24,0,"dark",!t.counter.isRunning,"round","large"),n(l,26,0,"danger","pause"),n(l,28,0,!t.counter.isRunning),n(l,30,0,"dark",!t.counter.isRunning,"round","large"),n(l,32,0,"light","stop")}),(function(n,l){var t=l.component,e=u.Jb(l,15,0,n(l,16,0,u.Ab(l,0),t.counter.timer,"HH:mm:ss:SS"));n(l,15,0,e)}))}function y(n){return u.Kb(0,[(n()(),u.pb(0,0,null,null,1,"app-count-up",[],null,null,null,f,g)),u.ob(1,114688,null,0,p,[d.a,h],null,null)],(function(n,l){n(l,1,0)}),null)}var x=u.lb("app-count-up",p,y,{},{},[]),w=t("s7LF");class v{}t.d(l,"CountUpPageModuleNgFactory",(function(){return j}));var j=u.mb(e,[],(function(n){return u.xb([u.yb(512,u.j,u.X,[[8,[o.a,x]],[3,u.j],u.v]),u.yb(4608,r.m,r.l,[u.s,[2,r.x]]),u.yb(4608,w.r,w.r,[]),u.yb(4608,s.b,s.b,[u.x,u.g]),u.yb(4608,s.Db,s.Db,[s.b,u.j,u.p]),u.yb(4608,s.Hb,s.Hb,[s.b,u.j,u.p]),u.yb(1073742336,r.b,r.b,[]),u.yb(1073742336,w.q,w.q,[]),u.yb(1073742336,w.g,w.g,[]),u.yb(1073742336,s.Ab,s.Ab,[]),u.yb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),u.yb(1073742336,v,v,[]),u.yb(1073742336,e,e,[]),u.yb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);