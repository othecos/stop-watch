(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-timer-timer-module"],{

/***/ "./src/app/modals/timer/timer-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modals/timer/timer-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TimerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPageRoutingModule", function() { return TimerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.page */ "./src/app/modals/timer/timer.page.ts");




const routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_3__["TimerPage"]
    }
];
let TimerPageRoutingModule = class TimerPageRoutingModule {
};
TimerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TimerPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/timer/timer.module.ts":
/*!**********************************************!*\
  !*** ./src/app/modals/timer/timer.module.ts ***!
  \**********************************************/
/*! exports provided: TimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPageModule", function() { return TimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer-routing.module */ "./src/app/modals/timer/timer-routing.module.ts");






let TimerPageModule = class TimerPageModule {
};
TimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimerPageRoutingModule"]
        ],
    })
], TimerPageModule);



/***/ })

}]);
//# sourceMappingURL=modals-timer-timer-module-es2015.js.map