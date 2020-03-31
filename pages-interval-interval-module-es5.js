(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interval-interval-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interval/interval.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interval/interval.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesIntervalIntervalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title [ngClass]=\"getAnimationClasses(null)\">{{getTitle()}}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"buttonsController.exerciseModal.show\" #exerciseModal\n      [ngClass]=\"{'blink': buttonsController.exerciseModal.animate}\">\n      <ion-button color=\"light\" shape=\"round\" size=\"large\" [disabled]=\"buttonsController.exerciseModal.disabled\"\n        (click)=\"onOpenModalExercise()\">\n        <ion-icon color=\"dark\" name=\"barbell\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ng-container *ngIf=\"exercisesService.exercises.length > 0; else noExercise\">\n      <ion-slides #slides>\n        <ion-slide *ngFor=\"let slide of exercisesService.exercises; index as i \" class=\"full\">\n          <div class=\"flex\">\n            <div class=\"capitalize big-text\" [ngClass]=\"getAnimationClasses(slide)\">{{slide.counter}}</div>\n            <h1 class=\"capitalize \">{{slide.name}}</h1>\n            <h1 class=\"capitalize \">{{ (i+1) + \"/\" + (exercisesService.exercises.length)}}</h1>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ng-container>\n    <ng-template #noExercise>\n      <div>\n        <div class=\"flex\">\n          <div class=\"message ion-padding-vertical\">\n            <h2 class=\"capitalize \">Let's start</h2>\n            <p class=\"capitalize \">Click on the <b>\n                <ion-icon name=\"barbell\"></ion-icon>\n              </b> to add exercises</p>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"buttonsController.previous.show\">\n      <ion-fab-button color=\"dark\" [disabled]=\"buttonsController.previous.disabled \" (click)=\"goPrevious()\">\n        <ion-icon color=\"light\" name=\"play-skip-back\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"buttonsController.next.show\">\n      <ion-fab-button color=\"dark\" [disabled]=\"buttonsController.next.disabled\" (click)=\"goNext()\">\n        <ion-icon color=\"light\" name=\"play-skip-forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n</ion-content>\n<div>\n\n</div>\n\n<ion-footer>\n\n  <ion-row class=\" ion-padding-vertical ion-align-items-end ion-justify-content-center\">\n    <ion-button *ngIf=\"buttonsController.restart.show\" color=\"dark\" shape=\"round\" size=\"large\"\n      [disabled]=\"buttonsController.restart.disabled\" (click)=\"onRefresh()\">\n      <ion-icon color=\"light\" name=\"refresh\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"buttonsController.pause.show\" [disabled]=\"buttonsController.pause.disabled\" color=\"dark\"\n      shape=\"round\" size=\"large\" (click)=\"onPause()\">\n      <ion-icon color=\"danger\" name=\"pause\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"buttonsController.play.show\" [disabled]=\"buttonsController.play.disabled\" color=\"dark\"\n      shape=\"round\" size=\"large\" (click)=\"onPlay()\">\n      <ion-icon color=\"light\" name=\"play\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"buttonsController.stop.show\" [disabled]=\"buttonsController.stop.disabled\" color=\"dark\"\n      shape=\"round\" size=\"large\" (click)=\"onStop()\">\n      <ion-icon color=\"light\" name=\"stop\"></ion-icon>\n    </ion-button>\n  </ion-row>\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/interval/interval-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/interval/interval-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: IntervalPageRoutingModule */

  /***/
  function srcAppPagesIntervalIntervalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntervalPageRoutingModule", function () {
      return IntervalPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _interval_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./interval.page */
    "./src/app/pages/interval/interval.page.ts");

    const routes = [{
      path: '',
      component: _interval_page__WEBPACK_IMPORTED_MODULE_3__["IntervalPage"]
    }];
    let IntervalPageRoutingModule = class IntervalPageRoutingModule {};
    IntervalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IntervalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/interval/interval.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/interval/interval.module.ts ***!
    \***************************************************/

  /*! exports provided: IntervalPageModule */

  /***/
  function srcAppPagesIntervalIntervalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntervalPageModule", function () {
      return IntervalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _interval_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./interval-routing.module */
    "./src/app/pages/interval/interval-routing.module.ts");
    /* harmony import */


    var _interval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./interval.page */
    "./src/app/pages/interval/interval.page.ts");

    let IntervalPageModule = class IntervalPageModule {};
    IntervalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _interval_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntervalPageRoutingModule"]],
      declarations: [_interval_page__WEBPACK_IMPORTED_MODULE_6__["IntervalPage"]]
    })], IntervalPageModule);
    /***/
  },

  /***/
  "./src/app/pages/interval/interval.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/interval/interval.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesIntervalIntervalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-title {\n  text-transform: capitalize;\n}\n\n#container {\n  height: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#container strong {\n  line-height: 26px;\n}\n\n.big-text {\n  width: 100%;\n  font-size: calc(8em + 8vw);\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\nion-slide.full {\n  width: var(--ion-slide-width) !important;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: transparent;\n}\n\nion-fab {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.exercise {\n  color: green;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.delay {\n  color: red;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.ion-padding-vertical {\n  padding: 8px 0;\n}\n\n.blink {\n  -webkit-animation: bounce 1s ease infinite;\n          animation: bounce 1s ease infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdGF2aW9oZW5yaXF1ZXBpcmVzY29zdGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1BlcnNvbmFsL0lvbmljL3N0b3Atd2F0Y2gtb3RoZWNvcy9zcmMvYXBwL3BhZ2VzL2ludGVydmFsL2ludGVydmFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW50ZXJ2YWwvaW50ZXJ2YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksK0JBQUE7QUNBSjs7QURFRTtFQUNFLDBCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDRUo7O0FEQUU7RUFDRSx3Q0FBQTtBQ0dKOztBRERFO0VBQ0UscUJBQUE7QUNJSjs7QURERTtFQUNFLHlCQUFBO0FDSUo7O0FERkU7RUFDRSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNLSjs7QURIRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDTUo7O0FESkU7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ09KOztBRExFO0VBQ0ksY0FBQTtBQ1FOOztBRExFO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50ZXJ2YWwvaW50ZXJ2YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgaW9uLXRpdGxle1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBcbiAgfVxuICAuYmlnLXRleHR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAgY2FsYyg4ZW0gKyA4dncpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGlvbi1zbGlkZS5mdWxse1xuICAgIHdpZHRoOiB2YXIoLS1pb24tc2xpZGUtd2lkdGgpICFpbXBvcnRhbnRcbiAgfVxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgaW9uLWZhYntcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5leGVyY2lzZXtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuICAuZGVsYXl7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB9XG4gIC5pb24tcGFkZGluZy12ZXJ0aWNhbHtcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG5cbiAgLmJsaW5re1xuICAgIGFuaW1hdGlvbjogIGJvdW5jZSAxcyBlYXNlIGluZmluaXRlO1xuICB9XG4iLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLmJpZy10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogY2FsYyg4ZW0gKyA4dncpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLXNsaWRlLmZ1bGwge1xuICB3aWR0aDogdmFyKC0taW9uLXNsaWRlLXdpZHRoKSAhaW1wb3J0YW50O1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZhYiB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5leGVyY2lzZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5kZWxheSB7XG4gIGNvbG9yOiByZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uaW9uLXBhZGRpbmctdmVydGljYWwge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmJsaW5rIHtcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/interval/interval.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/interval/interval.page.ts ***!
    \*************************************************/

  /*! exports provided: IntervalPage */

  /***/
  function srcAppPagesIntervalIntervalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntervalPage", function () {
      return IntervalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_clocker_clocker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/clocker/clocker.service */
    "./src/app/services/clocker/clocker.service.ts");
    /* harmony import */


    var src_app_classes_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/classes/utils */
    "./src/app/classes/utils.ts");
    /* harmony import */


    var src_app_modals_exercises_exercises_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modals/exercises/exercises.page */
    "./src/app/modals/exercises/exercises.page.ts");
    /* harmony import */


    var src_app_services_exercises_exercises_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/exercises/exercises.service */
    "./src/app/services/exercises/exercises.service.ts");
    /* harmony import */


    var src_app_services_utils_ionic_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/utils/ionic-utils.service */
    "./src/app/services/utils/ionic-utils.service.ts");
    /* harmony import */


    var src_app_services_audio_audio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/audio/audio.service */
    "./src/app/services/audio/audio.service.ts");

    let IntervalPage = class IntervalPage {
      constructor(clockerService, exercisesService, menu, modalController, alertController, utils, audioService) {
        this.clockerService = clockerService;
        this.exercisesService = exercisesService;
        this.menu = menu;
        this.modalController = modalController;
        this.alertController = alertController;
        this.utils = utils;
        this.audioService = audioService;
        this.subscriptions = [];
        this.buttonsController = {
          previous: {
            disabled: false,
            show: true
          },
          next: {
            disabled: false,
            show: false
          },
          play: {
            disabled: true,
            show: true
          },
          pause: {
            disabled: false,
            show: false
          },
          stop: {
            disabled: false,
            show: false
          },
          restart: {
            disabled: true,
            show: false
          },
          clear: {
            disabled: true,
            show: false
          },
          exerciseModal: {
            disabled: false,
            show: true,
            animate: true
          }
        };
        this.stayOpen = true;
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.updateButtonController();
          let exerciseSubscription = this.exercisesService.eventEmitter.subscribe(event => {
            if (this.slides) {
              this.slides.lockSwipes(true);
            }

            switch (event.eventName) {
              case 'remove':
                if (event.element && event.element.length > 0) this.clockerService.stop(event.element[0]);
                break;

              case 'add':
              case 'replace':
              case 'clear':
              case 'load':
                this.fixIonBug();
                this.updateButtonController();

              default:
            }
          });
          this.subscriptions.push(exerciseSubscription);
          let clockerSubscription = this.clockerService.eventsEmitter.subscribe(event => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            switch (event) {
              case "stop":
              case "pause":
              case "refresh":
              case "rebuild":
              case "resume":
              case 'general':
                this.updateButtonController();

              default:
                break;
            }
          }));
          this.subscriptions.push(clockerSubscription);
        });
      }

      ngAfterViewInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {});
      }

      onPlay() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let currentElementIndex = yield this.getCurrentExerciseIndex();

          if (currentElementIndex != -1) {
            this.clockerService.resume(this.exercisesService.exercises[currentElementIndex]);
          } else {
            this.initRoutine(0);
          }
        });
      }

      onPause() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let currentElementIndex = yield this.getCurrentExerciseIndex();
          console.log(currentElementIndex);

          if (currentElementIndex != -1) {
            this.clockerService.pause(this.exercisesService.exercises[currentElementIndex]);
          }
        });
      }

      onRefresh() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.clockerService.stopAll();
          let refreshedExercises = yield this.clockerService.refresh(this.exercisesService.exercises);
          this.exercisesService.replace(refreshedExercises);
          this.initRoutine(0);
        });
      }

      onStop() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.clockerService.stopAll();
          let refreshedExercises = yield this.clockerService.refresh(this.exercisesService.exercises);
          this.exercisesService.replace(refreshedExercises);
          yield this.goTo(0);
        });
      }

      onOpenModalExercise() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.buttonsController.exerciseModal.animate = false;
          yield this.presentModal();
        });
      }

      goPrevious() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.slides) {
            yield this.slides.lockSwipes(false);
            yield this.slides.slidePrev();
            yield this.slides.lockSwipes(true);
            yield this.fixIonBug();
            yield this.checkNavigationButtonState();
          }

          let currentElementIndex = yield this.getCurrentExerciseIndex();

          if (currentElementIndex != -1 && currentElementIndex - 1 >= 0) {
            yield this.playNextExercise(this.exercisesService.exercises[currentElementIndex - 1], currentElementIndex - 1);
          }
        });
      }

      goNext() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.slides) {
            yield this.slides.lockSwipes(false);
            yield this.slides.slideNext();
            yield this.slides.lockSwipes(true);
            yield this.fixIonBug();
            yield this.checkNavigationButtonState();
          }

          let currentElementIndex = yield this.getCurrentExerciseIndex();

          if (currentElementIndex != -1 && currentElementIndex + 1 < this.exercisesService.exercises.length) {
            yield this.playNextExercise(this.exercisesService.exercises[currentElementIndex + 1], currentElementIndex + 1);
          }
        });
      }

      goTo(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.slides) {
            yield this.slides.lockSwipes(false);
            yield this.slides.slideTo(index);
            yield this.slides.lockSwipes(true);
            yield this.fixIonBug();
            yield this.checkNavigationButtonState();
          }
        });
      }

      getAnimationClasses(exercise) {
        let classes = [];

        if (!exercise) {
          exercise = this.exercisesService.exercises.find(exercise => {
            return exercise.progress.initiated && !exercise.progress.finished;
          });
        }

        if (this.clockerService.intervalTimer.isRunning && exercise.counter <= 5) {
          classes.push('blink');
        }

        if (this.clockerService.intervalTimer.isInitiated && !this.clockerService.intervalTimer.isFinished) {
          if (this.clockerService.intervalTimer.stages.exercise.isInitiated && !this.clockerService.intervalTimer.stages.exercise.isFinished) {
            classes.push('exercise');
          } else if (this.clockerService.intervalTimer.stages.delay.isInitiated && !this.clockerService.intervalTimer.stages.delay.isFinished) {
            classes.push('delay');
          }
        }

        return classes;
      }

      presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: src_app_modals_exercises_exercises_page__WEBPACK_IMPORTED_MODULE_5__["ExercisesPage"],
            swipeToClose: true
          });
          return yield modal.present();
        });
      }

      updateSlides(counter = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.slides) {
            yield this.slides.update();
            return true;
          } else if (counter < 3) {
            yield src_app_classes_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].sleep(200);
            return this.updateSlides(++counter);
          } else {
            return false;
          }
        });
      }

      initRoutine(indexToBegin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.playNextExercise(this.exercisesService.exercises[indexToBegin], indexToBegin);
        });
      }

      playNextExercise(exercise, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            yield this.cleanCurrentExercise();
            yield this.playExercise(exercise, index);

            if (index + 1 < this.exercisesService.exercises.length) {
              yield this.playNextExercise(this.exercisesService.exercises[index + 1], index + 1);
            } else {
              this.clockerService.refresh(this.exercisesService.exercises);
            }
          } catch (_a) {}
        });
      }

      playExercise(exercise, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            if (index < this.exercisesService.exercises.length) {
              yield this.goTo(index);
              return yield this.clockerService.play(exercise, index == this.exercisesService.exercises.length - 1);
            }
          } catch (err) {
            console.warn(err);
            throw {
              status: 'stopped'
            };
          }
        });
      }

      fixIonBug() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.exercisesService.exercises.length > 2) {
            let ionSlide = document.body.getElementsByTagName('ion-slide');

            for (let index = 0; index < ionSlide.length; index++) {
              const element = ionSlide.item(index);
              element.classList.remove('full');
            }

            yield this.updateSlides();
          }
        });
      }

      getCurrentExerciseIndex() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.exercisesService.exercises.findIndex(exercise => {
            return exercise.progress.initiated && !exercise.progress.finished;
          });
        });
      }

      cleanCurrentExercise() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let currentElementIndex = yield this.getCurrentExerciseIndex();

          if (currentElementIndex != -1) {
            yield this.clockerService.stop(this.exercisesService.exercises[currentElementIndex]);
            this.exercisesService.exercises[currentElementIndex] = yield this.clockerService.rebuild(this.exercisesService.exercises[currentElementIndex]);
          }
        });
      }

      checkNavigationButtonState() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.buttonsController.previous.disabled = yield this.slides.isBeginning();
            this.buttonsController.next.disabled = yield this.slides.isEnd();
          } catch (_a) {}

          this.buttonsController.previous.show = this.exercisesService.hasExercises();
          this.buttonsController.next.show = this.exercisesService.hasExercises();
        });
      }

      updateButtonController() {
        //Play
        this.buttonsController.play.disabled = !this.exercisesService.hasExercises();
        this.buttonsController.play.show = !this.clockerService.intervalTimer.isRunning; //Stop

        this.buttonsController.stop.disabled = !this.clockerService.intervalTimer.isRunning;
        this.buttonsController.stop.show = this.exercisesService.hasExercises(); //Pause

        this.buttonsController.pause.disabled = !this.clockerService.intervalTimer.isRunning;
        this.buttonsController.pause.show = this.clockerService.intervalTimer.isRunning; //Restart

        this.buttonsController.restart.disabled = !this.clockerService.intervalTimer.isRunning;
        this.buttonsController.restart.show = this.exercisesService.hasExercises(); //ExerciseModal

        this.buttonsController.exerciseModal.disabled = this.clockerService.intervalTimer.isRunning;
        this.buttonsController.exerciseModal.show = true;
        this.buttonsController.exerciseModal.animate = !this.exercisesService.hasExercises(); //Next
        //Previous

        this.checkNavigationButtonState();
      }

      getTitle() {
        if (this.clockerService.intervalTimer.isInitiated && !this.clockerService.intervalTimer.isFinished) {
          if (this.clockerService.intervalTimer.stages.delay.isInitiated && !this.clockerService.intervalTimer.stages.delay.isFinished) {
            return 'Delay';
          } else {
            return 'Exercise';
          }
        } else {
          return 'Interval Timer';
        }
      }

      ngOnDestroy() {
        this.subscriptions.forEach(subs => subs.unsubscribe());
      }

    };

    IntervalPage.ctorParameters = () => [{
      type: src_app_services_clocker_clocker_service__WEBPACK_IMPORTED_MODULE_3__["ClockerService"]
    }, {
      type: src_app_services_exercises_exercises_service__WEBPACK_IMPORTED_MODULE_6__["ExercisesService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: src_app_services_utils_ionic_utils_service__WEBPACK_IMPORTED_MODULE_7__["IonicUtilsService"]
    }, {
      type: src_app_services_audio_audio_service__WEBPACK_IMPORTED_MODULE_8__["AudioService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], IntervalPage.prototype, "slides", void 0);
    IntervalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-interval',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./interval.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interval/interval.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./interval.page.scss */
      "./src/app/pages/interval/interval.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_clocker_clocker_service__WEBPACK_IMPORTED_MODULE_3__["ClockerService"], src_app_services_exercises_exercises_service__WEBPACK_IMPORTED_MODULE_6__["ExercisesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_utils_ionic_utils_service__WEBPACK_IMPORTED_MODULE_7__["IonicUtilsService"], src_app_services_audio_audio_service__WEBPACK_IMPORTED_MODULE_8__["AudioService"]])], IntervalPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-interval-interval-module-es5.js.map