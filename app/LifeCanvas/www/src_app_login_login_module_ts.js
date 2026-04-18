"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 41122
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 49444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage
}];
class LoginPageRoutingModule {
  static {
    this.ɵfac = function LoginPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginPageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LoginPageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 91307
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ 41122);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ 49444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94363);






class LoginPageModule {
  static {
    this.ɵfac = function LoginPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: LoginPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_4__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
  });
})();

/***/ },

/***/ 49444
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 46493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 21507);






class LoginPage {
  /**
   * Constructs a new instance of the class.
   * @param {FormBuilder} fb - The FormBuilder instance used for creating forms.
   * @param {Router} route - The Router instance used for navigating between routes.
   */
  constructor(fb, route) {
    this.fb = fb;
    this.route = route;
  }
  /**
   * Navigates to the next page after setting the user's name in the preferences.
   * @returns None
   */
  nextpage() {
    let userName = this.formLogin.get('name')?.value;
    /**
     * Sets the user's name in the preferences and navigates to the '/tabs' route.
     * @param {string} userName - The user's name to be stored in the preferences.
     */
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({
      key: 'name',
      value: userName
    }).then(() => {
      this.route.navigate(['/tabs']);
    });
  }
  /**
   * Initializes the component and performs necessary setup tasks.
   * - Retrieves the value of the 'name' key from the Preferences storage.
   * - If a value is found, logs it to the console and navigates to the '/tabs' route.
   * - Sets up the formLogin FormGroup with a 'name' field that is required.
   * @returns None
   */
  ngOnInit() {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
      key: 'name'
    }).then(({
      value
    }) => {
      if (value) {
        this.route.navigate(['/tabs']);
      }
    });
    this.formLogin = this.fb.group({
      name: ['Name', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
    });
  }
  static {
    this.ɵfac = function LoginPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginPage,
      selectors: [["app-login"]],
      standalone: false,
      decls: 16,
      vars: 1,
      consts: [[3, "formGroup"], ["fixed", ""], [1, "grid", "justify-items-center"], ["size", "9"], ["src", "../assets/icon/favicon.png", "alt", "App Icon"], ["size", "10"], ["label", "Stacked label", "labelPlacement", "stacked", "label", "Your Name", "formControlName", "name", "required", ""], ["size", "10", 1, "grid", "justify-items-end"], ["fill", "outline", 1, "mt-6", 3, "click"]],
      template: function LoginPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content")(1, "form", 0)(2, "ion-grid", 1)(3, "ion-row", 2)(4, "ion-col", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col", 5)(7, "ion-list")(8, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 5)(11, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "By clicking on the 'Proceed' button you are agreeing to our terms and conditions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-col", 7)(14, "ion-button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_14_listener() {
            return ctx.nextpage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Proceed ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formLogin);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  align-content: center;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --padding-top:10px;\n  --padding-bottom:10px;\n  --border-radius: 0;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\nion-grid[_ngcontent-%COMP%] {\n  margin-top: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwxLiUyMFJlcG9zaXRvcnlcXExpZmVDYW52YXMtQW5ndWxhci1Jb25pY1xcYXBwXFxMaWZlQ2FudmFzXFxzcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1wYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5pb24tbGlzdHtcclxuICAgIG1hcmdpbi10b3A6MmVtO1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICAgIG1hcmdpbi10b3A6IDhlbTtcclxufVxyXG5cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXRvcDoxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOjEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbmlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogOGVtO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vMS4lMjBSZXBvc2l0b3J5L0xpZmVDYW52YXMtQW5ndWxhci1Jb25pYy9hcHAvTGlmZUNhbnZhcy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjtBRENBLDRtQ0FBNG1DIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tcGFkZGluZy10b3A6MTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206MTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOjJlbTtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgICBtYXJnaW4tdG9wOiA4ZW07XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy10b3A6MTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbToxMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDhlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map