(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account-create/account-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account/account-create/account-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Create account</h1>\n  <form [formGroup]=\"accountForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <mat-label>First Name</mat-label>\n      <input matInput formControlName=\"firstName\">\n      <mat-error *ngIf=\"firstName.invalid\">Error: only letters</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>lastName</mat-label>\n      <input matInput formControlName=\"lastName\">\n      <mat-error *ngIf=\"lastName.invalid\">Error: only letters</mat-error>\n    </mat-form-field>\n    <button mat-button type=\"submit\" [disabled]=\"!accountForm.valid\">Submit</button>\n    <button mat-button (click)=\"gotoList()\">Return</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account-create/account-create.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/account/account-create/account-create.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1jcmVhdGUvYWNjb3VudC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/account-create/account-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/account-create/account-create.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCreateComponent", function() { return AccountCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/account.service */ "./src/app/service/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AccountCreateComponent = /** @class */ (function () {
    function AccountCreateComponent(accountsService, router, fb) {
        this.accountsService = accountsService;
        this.router = router;
        this.fb = fb;
        this.regex = "^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\\s-]{1,60}$";
        this.accountForm = this.fb.group({
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regex)
                ])],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regex)
                ])],
        });
    }
    AccountCreateComponent.prototype.ngOnInit = function () {
    };
    AccountCreateComponent.prototype.createAccount = function () {
        var _this = this;
        this.accountsService.add(this.firstName.value).subscribe(function (data) {
            _this.router.navigate(['/account/details'], { queryParams: { id: data } });
        });
    };
    AccountCreateComponent.prototype.onSubmit = function () {
        this.createAccount();
    };
    AccountCreateComponent.prototype.gotoList = function () {
        this.router.navigate(['/account']);
    };
    Object.defineProperty(AccountCreateComponent.prototype, "lastName", {
        get: function () {
            return this.accountForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountCreateComponent.prototype, "firstName", {
        get: function () {
            return this.accountForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    AccountCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-create',
            template: __webpack_require__(/*! ./account-create.component.html */ "./src/app/account/account-create/account-create.component.html"),
            styles: [__webpack_require__(/*! ./account-create.component.scss */ "./src/app/account/account-create/account-create.component.scss"), __webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AccountCreateComponent);
    return AccountCreateComponent;
}());



/***/ }),

/***/ "./src/app/account/account-details/account-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/account/account-details/account-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Account details</h1>\n  <table>\n    <tr>\n      <td>ID</td>\n      <td>{{account.id}}</td>\n    </tr>\n    <tr>\n      <td>Balance</td>\n      <td>{{account.balance}}</td>\n    </tr>\n  </table>\n  <button mat-button (click)=\"gotoHistory()\">History</button>\n  <button mat-button (click)=\"gotoOperation()\">Operation</button>\n  <button mat-button (click)=\"gotoList()\">Return</button>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account-details/account-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/account/account-details/account-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1kZXRhaWxzL2FjY291bnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account-details/account-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/account-details/account-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsComponent", function() { return AccountDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/account.service */ "./src/app/service/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AccountDetailsComponent = /** @class */ (function () {
    function AccountDetailsComponent(accountsService, route, router) {
        this.accountsService = accountsService;
        this.route = route;
        this.router = router;
        this.account = [];
    }
    AccountDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.id = params.id;
        });
        this.getAccount();
    };
    AccountDetailsComponent.prototype.getAccount = function () {
        var _this = this;
        this.account = [];
        this.accountsService.get(this.id).subscribe(function (data) {
            _this.account = data;
        });
    };
    AccountDetailsComponent.prototype.gotoHistory = function () {
        this.router.navigate(['/account/history'], { queryParams: { id: this.id } });
    };
    AccountDetailsComponent.prototype.gotoOperation = function () {
        this.router.navigate(['/account/operation'], { queryParams: { id: this.id } });
    };
    AccountDetailsComponent.prototype.gotoList = function () {
        this.router.navigate(['/account']);
    };
    AccountDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-details',
            template: __webpack_require__(/*! ./account-details.component.html */ "./src/app/account/account-details/account-details.component.html"),
            styles: [__webpack_require__(/*! ./account-details.component.scss */ "./src/app/account/account-details/account-details.component.scss"), __webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}());



/***/ }),

/***/ "./src/app/account/account-history/account-history.component.html":
/*!************************************************************************!*\
  !*** ./src/app/account/account-history/account-history.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Account history</h1>\n  <table>\n    <tr>\n      <th>ID</th>\n      <th>Date</th>\n      <th>Type</th>\n      <th>Amount</th>\n      <th>Balance</th>\n    </tr>\n    <tr *ngFor=\"let h of history;\">\n      <td>{{h.id}}</td>\n      <td>{{h.date}}</td>\n      <td>{{h.type}}</td>\n      <td>{{h.amount}}</td>\n      <td>{{h.balance}}</td>\n    </tr>\n  </table>\n  <button mat-button (click)=\"gotoDetails()\">Return</button>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account-history/account-history.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/account/account-history/account-history.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1oaXN0b3J5L2FjY291bnQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account-history/account-history.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/account-history/account-history.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHistoryComponent", function() { return AccountHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/operation.service */ "./src/app/service/operation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AccountHistoryComponent = /** @class */ (function () {
    function AccountHistoryComponent(operationService, route, router) {
        this.operationService = operationService;
        this.route = route;
        this.router = router;
        this.history = [];
    }
    AccountHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.id = params.id;
        });
        this.getHistory();
    };
    AccountHistoryComponent.prototype.getHistory = function () {
        var _this = this;
        this.history = [];
        this.operationService.getHistory(this.id).subscribe(function (data) {
            _this.history = data;
        });
    };
    AccountHistoryComponent.prototype.gotoDetails = function () {
        this.router.navigate(['/account/details'], { queryParams: { id: this.id } });
    };
    AccountHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-history',
            template: __webpack_require__(/*! ./account-history.component.html */ "./src/app/account/account-history/account-history.component.html"),
            styles: [__webpack_require__(/*! ./account-history.component.scss */ "./src/app/account/account-history/account-history.component.scss"), __webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccountHistoryComponent);
    return AccountHistoryComponent;
}());



/***/ }),

/***/ "./src/app/account/account-list/account-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/account/account-list/account-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>List of accounts</h1>\n  <table>\n    <tr>\n      <th>ID</th>\n      <th>Balance</th>\n    </tr>\n    <tr *ngFor=\"let a of accounts;\" (click)=\"gotoDetails(a.id)\">\n      <td>{{a.id}}</td>\n      <td>{{a.balance}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account-list/account-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/account/account-list/account-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1saXN0L2FjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account-list/account-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/account/account-list/account-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return AccountListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/account.service */ "./src/app/service/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(accountsService, router) {
        this.accountsService = accountsService;
        this.router = router;
        this.accounts = [];
    }
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.accounts = [];
        this.accountsService.getAll().subscribe(function (data) {
            _this.accounts = data;
        });
    };
    AccountListComponent.prototype.gotoDetails = function (id) {
        this.router.navigate(['/account/details'], { queryParams: { id: id } });
    };
    AccountListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-list',
            template: __webpack_require__(/*! ./account-list.component.html */ "./src/app/account/account-list/account-list.component.html"),
            styles: [__webpack_require__(/*! ./account-list.component.scss */ "./src/app/account/account-list/account-list.component.scss"), __webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/account/account-operation/account-operation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/account-operation/account-operation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Operation</h1>\n  <form [formGroup]=\"operationForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <mat-label>Amount</mat-label>\n      <input matInput placeholder=\"0.0\" formControlName=\"amount\">\n      <span matPrefix>$&nbsp;</span>\n      <mat-error *ngIf=\"amount.invalid\">Error: only numbers</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Type\" formControlName=\"type\">\n        <mat-option value=\"deposit\">Deposit</mat-option>\n        <mat-option value=\"withdrawal\">Withdrawal</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-button type=\"submit\" [disabled]=\"!operationForm.valid\">Submit</button>\n    <button mat-button (click)=\"gotoDetails()\">Return</button>\n  </form>\n  <br>\n  <mat-error *ngIf=\"error\">Unable to validate operation</mat-error>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account-operation/account-operation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/account/account-operation/account-operation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1vcGVyYXRpb24vYWNjb3VudC1vcGVyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/account-operation/account-operation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/account-operation/account-operation.component.ts ***!
  \**************************************************************************/
/*! exports provided: AccountOperationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOperationComponent", function() { return AccountOperationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/operation.service */ "./src/app/service/operation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AccountOperationComponent = /** @class */ (function () {
    function AccountOperationComponent(route, operationService, router, fb) {
        this.route = route;
        this.operationService = operationService;
        this.router = router;
        this.fb = fb;
        this.error = false;
        this.operationForm = this.fb.group({
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('\\-?\\d*\\.?\\d{1,2}')
                ])],
            type: [,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]
        });
    }
    AccountOperationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.id = params.id;
        });
    };
    AccountOperationComponent.prototype.handleOperation = function () {
        if (this.type.value === "deposit") {
            this.deposit();
        }
        else if (this.type.value === "withdrawal") {
            this.withdrawal();
        }
    };
    AccountOperationComponent.prototype.withdrawal = function () {
        var _this = this;
        this.operationService.withdrawal(this.id, this.amount.value).subscribe(function (data) {
            console.log('success', data),
                _this.router.navigate(['/account/details'], { queryParams: { id: data } });
        }, function (error) {
            console.log('oops', error);
            _this.error = true;
        });
    };
    AccountOperationComponent.prototype.deposit = function () {
        var _this = this;
        this.operationService.deposit(this.id, this.amount.value).subscribe(function (data) {
            console.log('success', data),
                _this.router.navigate(['/account/details'], { queryParams: { id: data } });
        }, function (error) {
            console.log('oops', error);
            _this.error = true;
        });
    };
    AccountOperationComponent.prototype.onSubmit = function () {
        this.handleOperation();
    };
    AccountOperationComponent.prototype.gotoDetails = function () {
        this.router.navigate(['/account/details'], { queryParams: { id: this.id } });
    };
    Object.defineProperty(AccountOperationComponent.prototype, "amount", {
        get: function () {
            return this.operationForm.get('amount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountOperationComponent.prototype, "type", {
        get: function () {
            return this.operationForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    AccountOperationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-operation',
            template: __webpack_require__(/*! ./account-operation.component.html */ "./src/app/account/account-operation/account-operation.component.html"),
            styles: [__webpack_require__(/*! ./account-operation.component.scss */ "./src/app/account/account-operation/account-operation.component.scss"), __webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AccountOperationComponent);
    return AccountOperationComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.routes */ "./src/app/account/account.routes.ts");
/* harmony import */ var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-list/account-list.component */ "./src/app/account/account-list/account-list.component.ts");
/* harmony import */ var _account_create_account_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-create/account-create.component */ "./src/app/account/account-create/account-create.component.ts");
/* harmony import */ var _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-details/account-details.component */ "./src/app/account/account-details/account-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_history_account_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-history/account-history.component */ "./src/app/account/account-history/account-history.component.ts");
/* harmony import */ var _account_operation_account_operation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-operation/account-operation.component */ "./src/app/account/account-operation/account-operation.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");












var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_4__["AccountListComponent"],
                _account_create_account_create_component__WEBPACK_IMPORTED_MODULE_5__["AccountCreateComponent"],
                _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_6__["AccountDetailsComponent"],
                _account_history_account_history_component__WEBPACK_IMPORTED_MODULE_8__["AccountHistoryComponent"],
                _account_operation_account_operation_component__WEBPACK_IMPORTED_MODULE_9__["AccountOperationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routes__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.routes.ts ***!
  \*******************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-list/account-list.component */ "./src/app/account/account-list/account-list.component.ts");
/* harmony import */ var _account_create_account_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-create/account-create.component */ "./src/app/account/account-create/account-create.component.ts");
/* harmony import */ var _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-details/account-details.component */ "./src/app/account/account-details/account-details.component.ts");
/* harmony import */ var _account_history_account_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-history/account-history.component */ "./src/app/account/account-history/account-history.component.ts");
/* harmony import */ var _account_operation_account_operation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-operation/account-operation.component */ "./src/app/account/account-operation/account-operation.component.ts");








var accountRoutes = [{
        path: 'account',
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"] },
            { path: 'create', component: _account_create_account_create_component__WEBPACK_IMPORTED_MODULE_4__["AccountCreateComponent"] },
            { path: 'details', component: _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_5__["AccountDetailsComponent"] },
            { path: 'history', component: _account_history_account_history_component__WEBPACK_IMPORTED_MODULE_6__["AccountHistoryComponent"] },
            { path: 'operation', component: _account_operation_account_operation_component__WEBPACK_IMPORTED_MODULE_7__["AccountOperationComponent"] }
        ]
    }];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(accountRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");




var routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-navigation></app-navigation>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  width: 700px; }\n\nh1 {\n  color: #009AD8;\n  font-size: 35px;\n  font-weight: bold;\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\nbutton {\n  background-color: #869a9e;\n  color: white;\n  margin-right: 10px;\n  margin-top: 15px;\n  width: 100px; }\n\nbutton:hover {\n  background-color: #5e6f73; }\n\ntable, td, tr, th {\n  padding: 20px;\n  border: 1px solid #ddd; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\ntr:hover {\n  background-color: #ddd; }\n\nth {\n  background-color: #869a9e;\n  color: white; }\n\ninput[type=text], select {\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\ndiv {\n  border-radius: 5px;\n  background-color: #ffffff;\n  padding: 20px; }\n\n.mat-radio-button {\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWF1cnkvSWRlYVByb2plY3RzL0JhbmstYWNjb3VudC1rYXRhLWZ1bGwtc3RhY2svc3JjL21haW4vbmdhcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5REFBeUQ7RUFDekQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzAwcHg7XG59XG5cbmgxIHtcbiAgY29sb3I6ICMwMDlBRDg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NjlhOWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTZmNzM7XG59XG5cbnRhYmxlLCB0ZCwgdHIsIHRoIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NjlhOWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]
            ],
            imports: [
                _account_account_module__WEBPACK_IMPORTED_MODULE_6__["AccountModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav mode=\"push\" class=\"app-sidenav\">\n    <mat-toolbar color=\"primary\">\n      <span class=\"toolbar-filler\"></span>\n      <button mat-icon-button (click)=\"sidenav.toggle()\"\n              class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"!sidenav.opened\">\n        <mat-icon aria-label=\"Menu\" class=\"material-icons\">close</mat-icon>\n      </button>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>list</mat-icon>\n        <span mat-line class=\"title\">List of accounts</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" routerLink=\"/account/create\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>add</mat-icon>\n        <span mat-line class=\"title\">Create an account</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar id=\"appToolbar\" color=\"primary\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\"\n            class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"sidenav.opened\">\n      <mat-icon aria-label=\"Menu\" class=\"material-icons\">menu</mat-icon>\n    </button>\n    <button mat-button routerLink=\"/\">\n      <a style=\"font-size:220%;color:rgb(0,154,216);\">Bank</a>\n      <a style=\"font-size:220%;color:rgb(255,255,255);\">Account</a>\n    </button>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found !\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].bankAccountApi + "/account";
    }
    AccountService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    //TODO remove all
    AccountService.prototype.getAll = function () {
        return this.http.get(this.url + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    //TODO change options to body
    AccountService.prototype.get = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("accountId", id);
        return this.http.get(this.url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    AccountService.prototype.add = function (name) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("name", name);
        return this.http.post(this.url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/service/operation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/operation.service.ts ***!
  \**********************************************/
/*! exports provided: OperationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationService", function() { return OperationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OperationService = /** @class */ (function () {
    function OperationService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].bankAccountApi + "/operation";
    }
    OperationService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    OperationService.prototype.deposit = function (id, amount) {
        return this.http.post(this.url + "/deposit?accountId=" + id + "&amount=" + amount, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    OperationService.prototype.withdrawal = function (id, amount) {
        return this.http.post(this.url + "/withdrawal?accountId=" + id + "&amount=" + amount, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    OperationService.prototype.getHistory = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('accountId', id);
        return this.http.get(this.url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    OperationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OperationService);
    return OperationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    bankAccountApi: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amaury/IdeaProjects/Bank-account-kata-full-stack/src/main/ngapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map