(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-count-up-count-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/count-up/count-up.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/count-up/count-up.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-header  >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Count Up</ion-title>\n   \n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <div class=\"center\">\n    {{this.counter.timer |date: 'HH:mm:ss:SS'}}\n  </div>\n  <!-- <ion-fab vertical=\"center\" horizontal=\"end\">\n    <ion-fab-button color=\"dark\">\n      Lap\n    </ion-fab-button>\n  </ion-fab> -->\n</ion-content>\n<ion-footer>\n\n  <ion-row class=\" ion-padding-vertical ion-align-items-end ion-justify-content-center\">\n    <ion-button  color=\"dark\" shape=\"round\" size=\"large\" (click)=\"onRestart()\" *ngIf=\"this.counter.isRunning\" >\n      <ion-icon color=\"light\" name=\"refresh\"></ion-icon>\n    </ion-button>\n    <ion-button  color=\"dark\"  shape=\"round\" size=\"large\" (click)=\"onPause()\" [disabled]=\"!this.counter.isRunning\">\n      <ion-icon color=\"danger\" name=\"pause\"></ion-icon>\n    </ion-button>\n    <ion-button  color=\"dark\"  shape=\"round\" size=\"large\" (click)=\"onPlay()\" *ngIf=\"!this.counter.isRunning\">\n      <ion-icon color=\"light\" name=\"play\"></ion-icon>\n    </ion-button>\n    <ion-button  color=\"dark\" shape=\"round\" size=\"large\" (click)=\"onStop()\" [disabled]=\"!this.counter.isRunning\">\n      <ion-icon color=\"light\" name=\"stop\"></ion-icon>\n    </ion-button>\n  </ion-row>\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/count-up/count-up-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/count-up/count-up-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CountUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUpPageRoutingModule", function() { return CountUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _count_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count-up.page */ "./src/app/pages/count-up/count-up.page.ts");




const routes = [
    {
        path: '',
        component: _count_up_page__WEBPACK_IMPORTED_MODULE_3__["CountUpPage"]
    }
];
let CountUpPageRoutingModule = class CountUpPageRoutingModule {
};
CountUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CountUpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/count-up/count-up.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/count-up/count-up.module.ts ***!
  \***************************************************/
/*! exports provided: CountUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUpPageModule", function() { return CountUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _count_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./count-up-routing.module */ "./src/app/pages/count-up/count-up-routing.module.ts");
/* harmony import */ var _count_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./count-up.page */ "./src/app/pages/count-up/count-up.page.ts");







let CountUpPageModule = class CountUpPageModule {
};
CountUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _count_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["CountUpPageRoutingModule"]
        ],
        declarations: [_count_up_page__WEBPACK_IMPORTED_MODULE_6__["CountUpPage"]]
    })
], CountUpPageModule);



/***/ }),

/***/ "./src/app/pages/count-up/count-up.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/count-up/count-up.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  font-size: 3em;\n}\n@media all and (min-width: 992px) {\n  .center {\n    font-size: 4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdGF2aW9oZW5yaXF1ZXBpcmVzY29zdGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1BlcnNvbmFsL0lvbmljL3N0b3Atd2F0Y2gtb3RoZWNvcy9zcmMvYXBwL3BhZ2VzL2NvdW50LXVwL2NvdW50LXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY291bnQtdXAvY291bnQtdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBUEo7SUFRUSxjQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdW50LXVwL2NvdW50LXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuXG4gICAgfVxufSIsIi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzZW07XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2VudGVyIHtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/count-up/count-up.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/count-up/count-up.page.ts ***!
  \*************************************************/
/*! exports provided: CountUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUpPage", function() { return CountUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_counter_up_counter_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/counter-up/counter-up.service */ "./src/app/services/counter-up/counter-up.service.ts");




let CountUpPage = class CountUpPage {
    constructor(activatedRoute, counter) {
        this.activatedRoute = activatedRoute;
        this.counter = counter;
    }
    ngOnInit() {
        this.title = this.activatedRoute.snapshot.paramMap.get('id');
        this.activatedRoute.paramMap.subscribe((response) => {
            this.title = response.get('id');
            console.log(response);
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
};
CountUpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_counter_up_counter_up_service__WEBPACK_IMPORTED_MODULE_3__["CounterUpService"] }
];
CountUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-count-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./count-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/count-up/count-up.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./count-up.page.scss */ "./src/app/pages/count-up/count-up.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_counter_up_counter_up_service__WEBPACK_IMPORTED_MODULE_3__["CounterUpService"]])
], CountUpPage);



/***/ }),

/***/ "./src/app/services/counter-up/counter-up.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/counter-up/counter-up.service.ts ***!
  \***********************************************************/
/*! exports provided: CounterUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterUpService", function() { return CounterUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_classes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/utils */ "./src/app/classes/utils.ts");




let CounterUpService = class CounterUpService {
    constructor() {
        this.timer = new Date(Date.now()).setHours(0, 0, 0, 0);
        this.isRunning = false;
        this.isInitiated = false;
        this.isFinished = false;
        this.cyclePeriod = 25;
        this.timer = new Date(Date.now()).setHours(0, 0, 0, 0);
    }
    start() {
        if (this.isInitiated) {
            this.resume();
        }
        else {
            this.isInitiated = true;
            this.isRunning = true;
            this.isFinished = false;
            this.initCounter();
        }
    }
    pause() {
        this.isRunning = false;
        console.log(this.timer);
    }
    resume() {
        this.isRunning = true;
    }
    stop() {
        this.resetTimer();
        this.isRunning = false;
        this.isInitiated = false;
        this.isFinished = true;
        console.count('Stoped');
    }
    restart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.stop();
            yield src_app_classes_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].sleep(this.cyclePeriod * 3);
            this.start();
        });
    }
    initCounter() {
        if (!this.subs || this.subs.closed) {
            let startTime = new Date(Date.now()).setHours(0, 0, 0, 0);
            let timeLapsed = 0;
            this.subs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, this.cyclePeriod).subscribe(() => {
                if (this.isRunning) {
                    timeLapsed += this.cyclePeriod;
                    this.timer = startTime + timeLapsed;
                }
                if (this.isFinished) {
                    this.subs.unsubscribe();
                    console.count("Closed");
                }
            });
        }
    }
    updateTimer() {
    }
    resetTimer() {
        this.timer = new Date(Date.now()).setHours(0, 0, 0, 0);
    }
};
CounterUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CounterUpService);



/***/ })

}]);
//# sourceMappingURL=pages-count-up-count-up-module-es2015.js.map