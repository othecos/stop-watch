(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{H6pU:function(l,e,n){"use strict";n.r(e);var i=n("8Y7J");class t{}var s=n("pMnS"),o=n("MKJQ"),r=n("SVse"),u=n("sZkV"),c=n("mrSG"),a=n("0R5k"),d=n("SZuZ"),h=n("HbkB"),b=n("/ksa");class p{constructor(l,e,n){this.clockerService=l,this.exercisesService=e,this.modalController=n,this.subscriptions=[],this.buttonsController={previous:{disabled:!1,show:!0},next:{disabled:!1,show:!1},play:{disabled:!0,show:!0},pause:{disabled:!1,show:!1},stop:{disabled:!1,show:!1},restart:{disabled:!0,show:!1},clear:{disabled:!0,show:!1},exerciseModal:{disabled:!1,show:!0,animate:!0}},this.stayOpen=!0,this.enableDancing=!1}ngOnInit(){return c.a(this,void 0,void 0,(function*(){yield this.updateButtonController();let l=this.exercisesService.eventEmitter.subscribe(l=>{switch(l.eventName){case"remove":l.element&&l.element.length>0&&this.clockerService.stop(l.element[0]);break;default:this.fixIonBug(),this.updateButtonController()}});this.subscriptions.push(l);let e=this.clockerService.eventsEmitter.subscribe(l=>c.a(this,void 0,void 0,(function*(){switch(l){case"dancing":break;case"stop":case"pause":case"refresh":case"rebuild":case"resume":case"general":this.updateButtonController()}})));this.subscriptions.push(e)}))}ngAfterViewInit(){return c.a(this,void 0,void 0,(function*(){}))}onPlay(){return c.a(this,void 0,void 0,(function*(){let l=yield this.getCurrentExerciseIndex();-1!=l?this.clockerService.resume(this.exercisesService.exercises[l]):(yield this.initRoutine(0),yield this.updateButtonController)}))}onPause(){return c.a(this,void 0,void 0,(function*(){let l=yield this.getCurrentExerciseIndex();-1!=l&&this.clockerService.pause(this.exercisesService.exercises[l])}))}onRefresh(){return c.a(this,void 0,void 0,(function*(){yield this.clockerService.stopAll();let l=yield this.clockerService.refresh(this.exercisesService.exercises);this.exercisesService.replace(l),this.initRoutine(0)}))}onStop(){return c.a(this,void 0,void 0,(function*(){yield this.clockerService.stopAll();let l=yield this.clockerService.refresh(this.exercisesService.exercises);this.exercisesService.replace(l),yield this.goTo(0)}))}onOpenModalExercise(){return c.a(this,void 0,void 0,(function*(){this.buttonsController.exerciseModal.animate=!1,yield this.presentModal()}))}goPrevious(){return c.a(this,void 0,void 0,(function*(){this.slides&&(yield this.slides.lockSwipes(!1),yield this.slides.slidePrev(),yield this.slides.lockSwipes(!0),yield this.fixIonBug(),yield this.checkNavigationButtonState());let l=yield this.getCurrentExerciseIndex();-1!=l&&l-1>=0&&(yield this.playNextExercise(this.exercisesService.exercises[l-1],l-1))}))}goNext(){return c.a(this,void 0,void 0,(function*(){this.slides&&(yield this.slides.lockSwipes(!1),yield this.slides.slideNext(),yield this.slides.lockSwipes(!0),yield this.fixIonBug(),yield this.checkNavigationButtonState());let l=yield this.getCurrentExerciseIndex();-1!=l&&l+1<this.exercisesService.exercises.length&&(yield this.playNextExercise(this.exercisesService.exercises[l+1],l+1))}))}goTo(l){return c.a(this,void 0,void 0,(function*(){this.slides&&(yield this.slides.lockSwipes(!1),yield this.slides.slideTo(l),yield this.slides.lockSwipes(!0),yield this.fixIonBug(),yield this.checkNavigationButtonState())}))}getAnimationClasses(l){let e=[];return l||(l=this.exercisesService.exercises.find(l=>l.progress.initiated&&!l.progress.finished)),this.enableDancing&&e.push("dancing-side"),this.clockerService.intervalTimer.isRunning&&l.counter<=5&&e.push("bounce"),this.clockerService.intervalTimer.isInitiated&&!this.clockerService.intervalTimer.isFinished&&(this.clockerService.intervalTimer.stages.exercise.isInitiated&&!this.clockerService.intervalTimer.stages.exercise.isFinished?e.push("exercise"):this.clockerService.intervalTimer.stages.delay.isInitiated&&!this.clockerService.intervalTimer.stages.delay.isFinished&&e.push("delay")),e}presentModal(){return c.a(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:h.a,swipeToClose:!0});return yield l.present()}))}updateSlides(l=0){return c.a(this,void 0,void 0,(function*(){return this.slides?(yield this.slides.update(),!0):l<3&&(yield d.a.sleep(200),this.updateSlides(++l))}))}initRoutine(l){return c.a(this,void 0,void 0,(function*(){yield this.playNextExercise(this.exercisesService.exercises[l],l)}))}playNextExercise(l,e){return c.a(this,void 0,void 0,(function*(){try{yield this.cleanCurrentExercise(),yield this.playExercise(l,e),e+1<this.exercisesService.exercises.length?yield this.playNextExercise(this.exercisesService.exercises[e+1],e+1):yield this.updateButtonController()}catch(n){}}))}playExercise(l,e){return c.a(this,void 0,void 0,(function*(){try{if(e<this.exercisesService.exercises.length)return yield this.goTo(e),yield this.clockerService.play(l,e==this.exercisesService.exercises.length-1)}catch(n){throw console.warn(n),{status:"stopped"}}}))}fixIonBug(){return c.a(this,void 0,void 0,(function*(){if(this.exercisesService.exercises.length>2){let l=document.body.getElementsByTagName("ion-slide");for(let e=0;e<l.length;e++)l.item(e).classList.remove("full");yield this.updateSlides()}}))}getCurrentExerciseIndex(){return c.a(this,void 0,void 0,(function*(){return yield this.exercisesService.exercises.findIndex(l=>l.progress.initiated&&!l.progress.finished)}))}cleanCurrentExercise(){return c.a(this,void 0,void 0,(function*(){let l=yield this.getCurrentExerciseIndex();-1!=l&&(yield this.clockerService.stop(this.exercisesService.exercises[l]),this.exercisesService.exercises[l]=yield this.clockerService.rebuild(this.exercisesService.exercises[l]))}))}checkNavigationButtonState(){return c.a(this,void 0,void 0,(function*(){try{this.buttonsController.previous.disabled=yield this.slides.isBeginning(),this.buttonsController.next.disabled=yield this.slides.isEnd()}catch(l){}this.buttonsController.previous.show=this.exercisesService.hasExercises(),this.buttonsController.next.show=this.exercisesService.hasExercises()}))}updateButtonController(){return c.a(this,void 0,void 0,(function*(){this.buttonsController.play.disabled=!this.exercisesService.hasExercises()||this.clockerService.intervalTimer.isFinished,this.buttonsController.play.show=!this.clockerService.intervalTimer.isRunning,this.buttonsController.stop.disabled=!this.clockerService.intervalTimer.isInitiated,this.buttonsController.stop.show=this.exercisesService.hasExercises()||!this.clockerService.intervalTimer.isFinished,this.buttonsController.pause.disabled=!this.clockerService.intervalTimer.isRunning,this.buttonsController.pause.show=this.clockerService.intervalTimer.isRunning&&!this.clockerService.intervalTimer.isFinished,this.buttonsController.restart.disabled=!(this.clockerService.intervalTimer.isFinished||this.clockerService.intervalTimer.isRunning),this.buttonsController.restart.show=this.exercisesService.hasExercises(),this.buttonsController.exerciseModal.disabled=this.clockerService.intervalTimer.isRunning,this.buttonsController.exerciseModal.show=!0,this.buttonsController.exerciseModal.animate=!this.exercisesService.hasExercises(),yield this.lockSlides(),this.checkNavigationButtonState()}))}getTitle(){return this.clockerService.intervalTimer.isInitiated&&!this.clockerService.intervalTimer.isFinished?this.clockerService.intervalTimer.stages.delay.isInitiated&&!this.clockerService.intervalTimer.stages.delay.isFinished?"Delay":"Exercise":"Interval Timer"}ngOnDestroy(){this.subscriptions.forEach(l=>l.unsubscribe())}lockSlides(l=0){return c.a(this,void 0,void 0,(function*(){return this.slides?(yield this.slides.lockSwipes(!0),!0):l<3&&(yield d.a.sleep(200),this.lockSlides(++l))}))}onJumpToExercise(){return c.a(this,void 0,void 0,(function*(){if(this.clockerService.intervalTimer.stages.delay.isInitiated&&!this.clockerService.intervalTimer.stages.delay.isFinished){let l=yield this.getCurrentExerciseIndex();-1!=l&&this.clockerService.skipDelay(this.exercisesService.exercises[l])}}))}isDelayRunning(l){return this.clockerService.intervalTimer.stages.delay.isInitiated&&this.clockerService.intervalTimer.stages.delay.isRunning&&!this.clockerService.intervalTimer.stages.delay.isFinished&&l>5}}var v=i.nb({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-title[_ngcontent-%COMP%]{text-transform:capitalize}#container[_ngcontent-%COMP%]{height:100%;text-align:center;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{line-height:26px}.big-text[_ngcontent-%COMP%]{width:100%;font-size:calc(8em + 8vw);-webkit-transition:.5s;transition:all .5s}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}ion-slide.full[_ngcontent-%COMP%]{width:var(--ion-slide-width)!important}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:transparent}ion-fab[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.exercise[_ngcontent-%COMP%]{color:green;-webkit-transition:.5s;transition:all .5s}.delay[_ngcontent-%COMP%]{color:red;-webkit-transition:.5s;transition:all .5s}.ion-padding-vertical[_ngcontent-%COMP%]{padding:8px 0}.blink[_ngcontent-%COMP%]{-webkit-animation:1s infinite blink;animation:1s infinite blink}.bounce[_ngcontent-%COMP%]{-webkit-animation:1s infinite bounce;animation:1s infinite bounce}.flex[_ngcontent-%COMP%]{width:100%}.dancing-up[_ngcontent-%COMP%]{-webkit-animation:1s infinite bounce-higher;animation:1s infinite bounce-higher}.dancing-side[_ngcontent-%COMP%]{-webkit-animation:3s infinite bounce-side;animation:3s infinite bounce-side}ion-slides[_ngcontent-%COMP%]{height:100%;width:100%}"]],data:{}});function g(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,8,"ion-buttons",[["slot","end"]],null,null,null,o.D,o.c)),i.Fb(512,null,r.s,r.t,[i.q,i.r,i.k,i.B]),i.ob(2,278528,null,0,r.i,[r.s],{ngClass:[0,"ngClass"]},null),i.Db(3,{bounce:0}),i.ob(4,49152,[["exerciseModal",4]],0,u.j,[i.h,i.k,i.x],null,null),(l()(),i.pb(5,0,null,0,3,"ion-button",[["color","light"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.onOpenModalExercise()&&i),i}),o.C,o.b)),i.ob(6,49152,null,0,u.i,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),i.pb(7,0,null,0,1,"ion-icon",[["color","dark"],["name","barbell"]],null,null,null,o.J,o.i)),i.ob(8,49152,null,0,u.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,e){var n=e.component,i=l(e,3,0,n.buttonsController.exerciseModal.animate);l(e,2,0,i),l(e,6,0,"light",n.buttonsController.exerciseModal.disabled,"round","large"),l(e,8,0,"dark","barbell")}),null)}function x(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,2,"ion-button",[["class","blink"],["color","dark"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.onJumpToExercise()&&i),i}),o.C,o.b)),i.ob(1,49152,null,0,u.i,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.Ib(-1,0,["Jump to exercise"]))],(function(l,e){l(e,1,0,"dark")}),null)}function k(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,12,"ion-slide",[["class","full"]],null,[[null,"ionSlideNextEnd"]],(function(l,e,n){var i=!0,t=l.component;return"ionSlideNextEnd"===e&&(i=!1!==t.goNext()&&i),"ionSlideNextEnd"===e&&(i=!1!==t.goPrevious()&&i),i}),o.W,o.v)),i.ob(1,49152,null,0,u.lb,[i.h,i.k,i.x],null,null),(l()(),i.pb(2,0,null,0,10,"div",[["class","flex"]],null,null,null,null,null)),(l()(),i.eb(16777216,null,null,1,null,x)),i.ob(4,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(5,0,null,null,3,"div",[["class","capitalize big-text"]],null,null,null,null,null)),i.Fb(512,null,r.s,r.t,[i.q,i.r,i.k,i.B]),i.ob(7,278528,null,0,r.i,[r.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),i.Ib(8,null,["",""])),(l()(),i.pb(9,0,null,null,1,"h1",[["class","capitalize "]],null,null,null,null,null)),(l()(),i.Ib(10,null,["",""])),(l()(),i.pb(11,0,null,null,1,"h1",[["class","capitalize "]],null,null,null,null,null)),(l()(),i.Ib(12,null,["",""]))],(function(l,e){var n=e.component;l(e,4,0,n.isDelayRunning(e.context.$implicit.counter)),l(e,7,0,"capitalize big-text",n.getAnimationClasses(e.context.$implicit))}),(function(l,e){var n=e.component;l(e,8,0,e.context.$implicit.counter),l(e,10,0,e.context.$implicit.name),l(e,12,0,e.context.index+1+"/"+n.exercisesService.exercises.length)}))}function f(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),i.pb(1,0,null,null,3,"ion-slides",[],null,null,null,o.X,o.w)),i.ob(2,49152,[[1,4],["slides",4]],0,u.mb,[i.h,i.k,i.x],null,null),(l()(),i.eb(16777216,null,0,1,null,k)),i.ob(4,278528,null,0,r.j,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,e){l(e,4,0,e.component.exercisesService.exercises)}),null)}function m(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),i.pb(1,0,null,null,9,"div",[["class","flex"]],null,null,null,null,null)),(l()(),i.pb(2,0,null,null,8,"div",[["class","message ion-padding-vertical"]],null,null,null,null,null)),(l()(),i.pb(3,0,null,null,1,"h2",[["class","capitalize "]],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Let's start"])),(l()(),i.pb(5,0,null,null,5,"p",[["class","capitalize "]],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Click on the "])),(l()(),i.pb(7,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),i.pb(8,0,null,null,1,"ion-icon",[["name","barbell"]],null,null,null,o.J,o.i)),i.ob(9,49152,null,0,u.A,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.Ib(-1,null,[" to add exercises"]))],(function(l,e){l(e,9,0,"barbell")}),null)}function y(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,8,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","center"]],null,null,null,o.G,o.e)),i.Fb(512,null,r.s,r.t,[i.q,i.r,i.k,i.B]),i.ob(2,278528,null,0,r.i,[r.s],{ngClass:[0,"ngClass"]},null),i.Db(3,{"dancing-up":0}),i.ob(4,49152,null,0,u.u,[i.h,i.k,i.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),i.pb(5,0,null,0,3,"ion-fab-button",[["color","dark"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.goPrevious()&&i),i}),o.F,o.f)),i.ob(6,49152,null,0,u.v,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"]},null),(l()(),i.pb(7,0,null,0,1,"ion-icon",[["color","light"],["name","play-skip-back"]],null,null,null,o.J,o.i)),i.ob(8,49152,null,0,u.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,e){var n=e.component,i=l(e,3,0,n.enableDancing);l(e,2,0,i),l(e,4,0,"start","center"),l(e,6,0,"dark",n.buttonsController.previous.disabled),l(e,8,0,"light","play-skip-back")}),null)}function S(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,8,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","center"]],null,null,null,o.G,o.e)),i.Fb(512,null,r.s,r.t,[i.q,i.r,i.k,i.B]),i.ob(2,278528,null,0,r.i,[r.s],{ngClass:[0,"ngClass"]},null),i.Db(3,{"dancing-up":0}),i.ob(4,49152,null,0,u.u,[i.h,i.k,i.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),i.pb(5,0,null,0,3,"ion-fab-button",[["color","dark"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.goNext()&&i),i}),o.F,o.f)),i.ob(6,49152,null,0,u.v,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"]},null),(l()(),i.pb(7,0,null,0,1,"ion-icon",[["color","light"],["name","play-skip-forward"]],null,null,null,o.J,o.i)),i.ob(8,49152,null,0,u.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,e){var n=e.component,i=l(e,3,0,n.enableDancing);l(e,2,0,i),l(e,4,0,"end","center"),l(e,6,0,"dark",n.buttonsController.next.disabled),l(e,8,0,"light","play-skip-forward")}),null)}function C(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.onRefresh()&&i),i}),o.C,o.b)),i.ob(1,49152,null,0,u.i,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),i.pb(2,0,null,0,1,"ion-icon",[["color","light"],["name","refresh"]],null,null,null,o.J,o.i)),i.ob(3,49152,null,0,u.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,e){l(e,1,0,"dark",e.component.buttonsController.restart.disabled,"round","large"),l(e,3,0,"light","refresh")}),null)}function w(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.onPause()&&i),i}),o.C,o.b)),i.ob(1,49152,null,0,u.i,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),i.pb(2,0,null,0,1,"ion-icon",[["color","danger"],["name","pause"]],null,null,null,o.J,o.i)),i.ob(3,49152,null,0,u.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,e){l(e,1,0,"dark",e.component.buttonsController.pause.disabled,"round","large"),l(e,3,0,"danger","pause")}),null)}function I(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.onPlay()&&i),i}),o.C,o.b)),i.ob(1,49152,null,0,u.i,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),i.pb(2,0,null,0,1,"ion-icon",[["color","light"],["name","play"]],null,null,null,o.J,o.i)),i.ob(3,49152,null,0,u.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,e){l(e,1,0,"dark",e.component.buttonsController.play.disabled,"round","large"),l(e,3,0,"light","play")}),null)}function M(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,3,"ion-button",[["color","dark"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,e,n){var i=!0;return"click"===e&&(i=!1!==l.component.onStop()&&i),i}),o.C,o.b)),i.ob(1,49152,null,0,u.i,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),i.pb(2,0,null,0,1,"ion-icon",[["color","light"],["name","stop"]],null,null,null,o.J,o.i)),i.ob(3,49152,null,0,u.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,e){l(e,1,0,"dark",e.component.buttonsController.stop.disabled,"round","large"),l(e,3,0,"light","stop")}),null)}function E(l){return i.Kb(0,[i.Gb(671088640,1,{slides:0}),(l()(),i.pb(1,0,null,null,14,"ion-header",[],null,null,null,o.I,o.h)),i.ob(2,49152,null,0,u.z,[i.h,i.k,i.x],null,null),(l()(),i.pb(3,0,null,0,12,"ion-toolbar",[],null,null,null,o.bb,o.A)),i.ob(4,49152,null,0,u.xb,[i.h,i.k,i.x],null,null),(l()(),i.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.D,o.c)),i.ob(6,49152,null,0,u.j,[i.h,i.k,i.x],null,null),(l()(),i.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,o.P,o.p)),i.ob(8,49152,null,0,u.P,[i.h,i.k,i.x],null,null),(l()(),i.pb(9,0,null,0,4,"ion-title",[],null,null,null,o.ab,o.z)),i.Fb(512,null,r.s,r.t,[i.q,i.r,i.k,i.B]),i.ob(11,278528,null,0,r.i,[r.s],{ngClass:[0,"ngClass"]},null),i.ob(12,49152,null,0,u.vb,[i.h,i.k,i.x],null,null),(l()(),i.Ib(13,0,["",""])),(l()(),i.eb(16777216,null,0,1,null,g)),i.ob(15,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(16,0,null,null,9,"ion-content",[],null,null,null,o.E,o.d)),i.ob(17,49152,null,0,u.s,[i.h,i.k,i.x],null,null),(l()(),i.pb(18,0,null,0,7,"div",[["id","container"]],null,null,null,null,null)),(l()(),i.eb(16777216,null,null,1,null,f)),i.ob(20,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),i.eb(0,[["noExercise",2]],null,0,null,m)),(l()(),i.eb(16777216,null,null,1,null,y)),i.ob(23,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,null,1,null,S)),i.ob(25,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(26,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),i.pb(27,0,null,null,11,"ion-footer",[],null,null,null,o.H,o.g)),i.ob(28,49152,null,0,u.x,[i.h,i.k,i.x],null,null),(l()(),i.pb(29,0,null,0,9,"ion-row",[["class"," ion-padding-vertical ion-align-items-end ion-justify-content-center"]],null,null,null,o.V,o.u)),i.ob(30,49152,null,0,u.eb,[i.h,i.k,i.x],null,null),(l()(),i.eb(16777216,null,0,1,null,C)),i.ob(32,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,w)),i.ob(34,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,I)),i.ob(36,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,M)),i.ob(38,16384,null,0,r.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component;l(e,11,0,n.getAnimationClasses(null)),l(e,15,0,n.buttonsController.exerciseModal.show),l(e,20,0,n.exercisesService.exercises.length>0,i.Ab(e,21)),l(e,23,0,n.buttonsController.previous.show),l(e,25,0,n.buttonsController.next.show),l(e,32,0,n.buttonsController.restart.show),l(e,34,0,n.buttonsController.pause.show),l(e,36,0,n.buttonsController.play.show),l(e,38,0,n.buttonsController.stop.show)}),(function(l,e){l(e,13,0,e.component.getTitle())}))}function T(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"app-interval",[],null,null,null,E,v)),i.ob(1,4440064,null,0,p,[a.a,b.a,u.Cb],null,null)],(function(l,e){l(e,1,0)}),null)}var z=i.lb("app-interval",p,T,{},{},[]),P=n("s7LF"),O=n("iInd");class J{}n.d(e,"IntervalPageModuleNgFactory",(function(){return B}));var B=i.mb(t,[],(function(l){return i.xb([i.yb(512,i.j,i.X,[[8,[s.a,z]],[3,i.j],i.v]),i.yb(4608,r.m,r.l,[i.s,[2,r.x]]),i.yb(4608,P.q,P.q,[]),i.yb(4608,u.b,u.b,[i.x,i.g]),i.yb(4608,u.Cb,u.Cb,[u.b,i.j,i.p]),i.yb(4608,u.Gb,u.Gb,[u.b,i.j,i.p]),i.yb(1073742336,r.b,r.b,[]),i.yb(1073742336,P.p,P.p,[]),i.yb(1073742336,P.g,P.g,[]),i.yb(1073742336,u.zb,u.zb,[]),i.yb(1073742336,O.o,O.o,[[2,O.t],[2,O.m]]),i.yb(1073742336,J,J,[]),i.yb(1073742336,t,t,[]),i.yb(1024,O.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);