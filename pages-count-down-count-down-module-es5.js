(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-count-down-count-down-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/count-down/count-down.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/count-down/count-down.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCountDownCountDownPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Count Down</ion-title>\n   \n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <div class=\"center\">{{this.counter.timer |date: 'HH:mm:ss:SS'}}</div>\n  <ion-fab vertical=\"top\" horizontal=\"end\">\n    <ion-fab-button color=\"dark\" (click)=\"onSetTime()\">\n      <ion-icon name=\"alarm\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n\n  <ion-row class=\" ion-padding-vertical ion-align-items-end ion-justify-content-center\">\n    <ion-button  color=\"dark\" shape=\"round\" size=\"large\" (click)=\"onRestart()\" *ngIf=\"this.counter.isRunning\" >\n      <ion-icon color=\"light\" name=\"refresh\"></ion-icon>\n    </ion-button>\n    <ion-button  color=\"dark\"  shape=\"round\" size=\"large\" (click)=\"onPause()\" [disabled]=\"!this.counter.isRunning\">\n      <ion-icon color=\"danger\" name=\"pause\"></ion-icon>\n    </ion-button>\n    <ion-button  color=\"dark\"  shape=\"round\" size=\"large\" (click)=\"onPlay()\" *ngIf=\"!this.counter.isRunning\">\n      <ion-icon color=\"light\" name=\"play\"></ion-icon>\n    </ion-button>\n    <ion-button  color=\"dark\" shape=\"round\" size=\"large\" (click)=\"onStop()\" [disabled]=\"!this.counter.isRunning\">\n      <ion-icon color=\"light\" name=\"stop\"></ion-icon>\n    </ion-button>\n  </ion-row>\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/count-down/count-down-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/count-down/count-down-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CountDownPageRoutingModule */

  /***/
  function srcAppPagesCountDownCountDownRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountDownPageRoutingModule", function () {
      return CountDownPageRoutingModule;
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


    var _count_down_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./count-down.page */
    "./src/app/pages/count-down/count-down.page.ts");

    const routes = [{
      path: '',
      component: _count_down_page__WEBPACK_IMPORTED_MODULE_3__["CountDownPage"]
    }];
    let CountDownPageRoutingModule = class CountDownPageRoutingModule {};
    CountDownPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CountDownPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/count-down/count-down.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/count-down/count-down.module.ts ***!
    \*******************************************************/

  /*! exports provided: CountDownPageModule */

  /***/
  function srcAppPagesCountDownCountDownModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountDownPageModule", function () {
      return CountDownPageModule;
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


    var _count_down_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./count-down-routing.module */
    "./src/app/pages/count-down/count-down-routing.module.ts");
    /* harmony import */


    var _count_down_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./count-down.page */
    "./src/app/pages/count-down/count-down.page.ts");

    let CountDownPageModule = class CountDownPageModule {};
    CountDownPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _count_down_routing_module__WEBPACK_IMPORTED_MODULE_5__["CountDownPageRoutingModule"]],
      declarations: [_count_down_page__WEBPACK_IMPORTED_MODULE_6__["CountDownPage"]]
    })], CountDownPageModule);
    /***/
  },

  /***/
  "./src/app/pages/count-down/count-down.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/count-down/count-down.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCountDownCountDownPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  font-size: 3em;\n}\n@media all and (min-width: 992px) {\n  .center {\n    font-size: 4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdGF2aW9oZW5yaXF1ZXBpcmVzY29zdGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1BlcnNvbmFsL0lvbmljL3N0b3Atd2F0Y2gtb3RoZWNvcy9zcmMvYXBwL3BhZ2VzL2NvdW50LWRvd24vY291bnQtZG93bi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvdW50LWRvd24vY291bnQtZG93bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFQSjtJQVFRLGNBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291bnQtZG93bi9jb3VudC1kb3duLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuXG4gICAgfVxufSIsIi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzZW07XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2VudGVyIHtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/count-down/count-down.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/count-down/count-down.page.ts ***!
    \*****************************************************/

  /*! exports provided: CountDownPage */

  /***/
  function srcAppPagesCountDownCountDownPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountDownPage", function () {
      return CountDownPage;
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


    var src_app_services_counter_down_counter_down_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/counter-down/counter-down.service */
    "./src/app/services/counter-down/counter-down.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_modals_timer_timer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modals/timer/timer.page */
    "./src/app/modals/timer/timer.page.ts");

    let CountDownPage = class CountDownPage {
      constructor(counter, modalController) {
        this.counter = counter;
        this.modalController = modalController;
      }

      onSetTime() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('Set Time');
          yield this.presentModal();
        });
      }

      onPlay() {
        this.counter.start();
      }

      onPause() {
        this.counter.pause();
      }

      onStop() {
        this.counter.stop();
      }

      onRestart() {
        this.counter.restart();
      }

      presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: src_app_modals_timer_timer_page__WEBPACK_IMPORTED_MODULE_4__["TimerPage"],
            swipeToClose: true
          });
          modal.onDidDismiss().then(response => {
            console.log(response);
          });
          return yield modal.present();
        });
      }

    };

    CountDownPage.ctorParameters = () => [{
      type: src_app_services_counter_down_counter_down_service__WEBPACK_IMPORTED_MODULE_2__["CounterDownService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }];

    CountDownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-count-down',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./count-down.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/count-down/count-down.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./count-down.page.scss */
      "./src/app/pages/count-down/count-down.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_counter_down_counter_down_service__WEBPACK_IMPORTED_MODULE_2__["CounterDownService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], CountDownPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-count-down-count-down-module-es5.js.map