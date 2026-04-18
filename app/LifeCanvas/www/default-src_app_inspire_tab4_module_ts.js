"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_inspire_tab4_module_ts"],{

/***/ 80755
/*!************************************************!*\
  !*** ./src/app/inspire/tab4-routing.module.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab4PageRoutingModule: () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 41429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: '',
  component: _tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page
}];
class Tab4PageRoutingModule {
  static {
    this.ɵfac = function Tab4PageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab4PageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: Tab4PageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab4PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 26098
/*!****************************************!*\
  !*** ./src/app/inspire/tab4.module.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab4PageModule: () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4-routing.module */ 80755);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab4.page */ 41429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94363);






class Tab4PageModule {
  static {
    this.ɵfac = function Tab4PageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab4PageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: Tab4PageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _tab4_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab4PageRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Tab4PageModule, {
    declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_4__.Tab4Page],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _tab4_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab4PageRoutingModule]
  });
})();

/***/ },

/***/ 41429
/*!**************************************!*\
  !*** ./src/app/inspire/tab4.page.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab4Page: () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ 57630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _service_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/apis.service */ 90048);
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/file.service */ 6071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);

/**
 * Import the entire underscore library and assign it to the variable '_'.
 * This allows you to use all the functions and utilities provided by underscore.
 */







function Tab4Page_ion_content_16_ion_card_1_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_ion_content_16_ion_card_1_ion_icon_7_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const affirmation_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deleteAffirmation(affirmation_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Tab4Page_ion_content_16_ion_card_1_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_ion_content_16_ion_card_1_ion_icon_8_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const affirmation_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.saveAffirmation(affirmation_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Tab4Page_ion_content_16_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 9)(1, "ion-card-content")(2, "ion-row")(3, "ion-col", 10)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Tab4Page_ion_content_16_ion_card_1_ion_icon_7_Template, 1, 0, "ion-icon", 12)(8, Tab4Page_ion_content_16_ion_card_1_ion_icon_8_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const affirmation_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](affirmation_r2.quote);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", affirmation_r2.exists);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !affirmation_r2.exists);
  }
}
function Tab4Page_ion_content_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Tab4Page_ion_content_16_ion_card_1_Template, 9, 3, "ion-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.affirmations);
  }
}
function Tab4Page_ion_content_17_ion_card_1_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_ion_content_17_ion_card_1_ion_icon_7_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const quote_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deleteQuote(quote_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Tab4Page_ion_content_17_ion_card_1_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_ion_content_17_ion_card_1_ion_icon_8_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const quote_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.saveQuote(quote_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Tab4Page_ion_content_17_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 9)(1, "ion-card-content")(2, "ion-row")(3, "ion-col", 10)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Tab4Page_ion_content_17_ion_card_1_ion_icon_7_Template, 1, 0, "ion-icon", 12)(8, Tab4Page_ion_content_17_ion_card_1_ion_icon_8_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 16)(11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const quote_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](quote_r6.quoteText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", quote_r6.exists);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !quote_r6.exists);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](quote_r6.quoteAuthor);
  }
}
function Tab4Page_ion_content_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Tab4Page_ion_content_17_ion_card_1_Template, 13, 4, "ion-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.quotes);
  }
}
class Tab4Page {
  /**
   * Constructs a new instance of the class.
   * @param {ApisService} apis - The ApisService instance to use.
   * @param {FileService} fileService - The FileService instance to use.
   */
  constructor(apis, fileService) {
    this.apis = apis;
    this.fileService = fileService;
    /**
     * Represents a segment of inspiration, such as affirmations or quotes.
     * @property {string} inspireSegment - The segment of inspiration, such as "affirmations".
     * @property {any | undefined} quotes - The quotes associated with the inspiration segment.
     * @property {any | undefined} affirmations - The affirmations associated with the inspiration segment.
     * @property {any} savedAffirmations - The saved affirmations for the inspiration segment.
     * @property {any} savedQuotes - The saved quotes for the inspiration segment.
     */
    this.inspireSegment = 'affirmations';
  }
  /**
   * Initializes the component by fetching saved affirmations and quotes from the file service,
   * and fetching quotes and affirmations from the APIs. It then updates the component's state
   * with the fetched data.
   * @returns None
   */
  ngOnInit() {
    var _this = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.savedAffirmations = yield _this.fileService.readAffirmations();
      _this.savedQuotes = yield _this.fileService.readQuotes();
      _this.apis.getQuotes().then(value => {
        const list = Array.isArray(value) ? value.filter(q => q?.quoteText) : [];
        const saved = _this.savedQuotes ?? [];
        underscore__WEBPACK_IMPORTED_MODULE_1__.each(list, q => {
          const exists = underscore__WEBPACK_IMPORTED_MODULE_1__.some(saved, s => s.quote === q.quoteText);
          if (exists) {
            q.exists = true;
          }
        });
        _this.quotes = list;
      });
      /**
       * Retrieves affirmations from the API and updates the component's state with the retrieved data.
       */
      _this.apis.GetAffirmations().then(value => {
        const list = Array.isArray(value) ? value.filter(q => q?.quote) : [];
        const saved = _this.savedAffirmations ?? [];
        underscore__WEBPACK_IMPORTED_MODULE_1__.each(list, q => {
          const exists = underscore__WEBPACK_IMPORTED_MODULE_1__.some(saved, s => {
            const a = s?.affirmation;
            const text = typeof a === 'string' ? a : a?.quote;
            return text === q.quote;
          });
          if (exists) {
            q.exists = true;
          }
        });
        _this.affirmations = list;
      });
    })();
  }
  /**
   * Saves a quote to the file system.
   * @param {any} quote - The quote object to be saved.
   * @returns None
   */
  saveQuote(quote) {
    this.fileService.saveQuote(quote.quoteText, quote.quoteAuthor).then(() => this.fileService.readQuotes().then(value => {
      this.savedQuotes = value;
      this.quotes = this.quotes;
      quote.exists = true;
    }));
  }
  /**
   * Deletes a quote from the list of saved quotes.
   * @param {any} quote - The quote object to delete.
   * @returns None
   */
  deleteQuote(quote) {
    this.fileService.deleteQuotes(quote.quoteText).then(() => this.fileService.readQuotes().then(value => {
      this.savedQuotes = value;
      quote.exists = false;
    }));
  }
  /**
   * Saves an affirmation to the file service and updates the list of saved affirmations.
   * @param {any} affirmation - The affirmation to save.
   * @returns None
   */
  saveAffirmation(affirmation) {
    this.fileService.saveAffirmation(affirmation).then(() => this.fileService.readAffirmations().then(value => {
      this.savedAffirmations = value;
      affirmation.exists = true;
    }));
  }
  /**
   * Deletes an affirmation from the list of saved affirmations.
   * @param {any} affirmation - The affirmation object to delete.
   * @returns None
   */
  deleteAffirmation(affirmation) {
    this.fileService.deleteAffirmation(affirmation).then(() => this.fileService.readAffirmations().then(value => {
      this.savedAffirmations = value;
      affirmation.exists = false;
    }));
  }
  static {
    this.ɵfac = function Tab4Page_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab4Page)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_apis_service__WEBPACK_IMPORTED_MODULE_4__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_file_service__WEBPACK_IMPORTED_MODULE_5__.FileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: Tab4Page,
      selectors: [["app-tab4"]],
      standalone: false,
      decls: 18,
      vars: 3,
      consts: [["slot", "start"], [1, "ion-no-margin"], [1, "ion-no-border", "drop-shadow"], [3, "ngModelChange", "ngModel"], ["value", "affirmations"], ["color", "primary"], ["value", "quotes"], [4, "ngIf"], ["size", "12", 4, "ngFor", "ngForOf"], ["size", "12"], ["size", "10"], ["align", "end", "size", "2"], ["size", "large", "color", "primary", "name", "heart", 3, "click", 4, "ngIf"], ["size", "large", "color", "primary", "name", "heart-outline", 3, "click", 4, "ngIf"], ["size", "large", "color", "primary", "name", "heart", 3, "click"], ["size", "large", "color", "primary", "name", "heart-outline", 3, "click"], ["align", "end"]],
      template: function Tab4Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-grid", 1)(5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Inspire");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-header", 2)(8, "ion-toolbar")(9, "ion-segment", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function Tab4Page_Template_ion_segment_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.inspireSegment, $event) || (ctx.inspireSegment = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-segment-button", 4)(11, "ion-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Affirmations");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-segment-button", 6)(14, "ion-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Quotes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, Tab4Page_ion_content_16_Template, 2, 1, "ion-content", 7)(17, Tab4Page_ion_content_17_Template, 2, 1, "ion-content", 7);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.inspireSegment);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.inspireSegment == "affirmations");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.inspireSegment == "quotes");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5zcGlyZS90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0pBQXdKIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 90048
/*!*****************************************!*\
  !*** ./src/app/service/apis.service.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApisService: () => (/* binding */ ApisService)
/* harmony export */ });
/* harmony import */ var E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);



/**
 * A service class that provides APIs for interacting with external services.
 * This class can be used to make HTTP requests, handle authentication, and perform other operations related to external APIs.
 * @class ApisService
 */
class ApisService {
  constructor() {}
  /**
   * Fetches a list of quotes from an API.
   * @returns {Promise<Array<Object>>} - A promise that resolves to an array of quote objects.
   */
  getQuotes() {
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * Fetches data from the specified URL using the GET method and returns the result.
       * @param {string} url - The URL to fetch data from.
       * */
      const result = yield fetch('https://quote-garden.onrender.com/api/v3/quotes/random?' + new URLSearchParams({
        'count': '15'
      }), {
        method: 'GET'
      });
      if (!result.ok) {
        return [];
      }
      const data = yield result.json();
      return Array.isArray(data?.data) ? data.data : [];
    })();
  }
  /**
   * Retrieves a list of affirmations from an API.
   * Uses API-Ninjas when {@link environment.apiNinjasKey} is set; otherwise fills from Quotable (no key).
   * @returns {Promise<any[]>} - A promise that resolves to an array of `{ quote, author }` items.
   */
  GetAffirmations() {
    var _this = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const affirmations = [];
      const key = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiNinjasKey?.trim();
      if (key) {
        for (let i = 0; i < 10; i++) {
          const row = yield _this.fetchApiNinjasInspirationalQuote(key);
          if (row) {
            affirmations.push(row);
          }
        }
      }
      const need = 10 - affirmations.length;
      if (need > 0) {
        const fallback = yield _this.fetchZenQuotesBatch(need);
        affirmations.push(...fallback);
      }
      return affirmations;
    })();
  }
  fetchApiNinjasInspirationalQuote(apiKey) {
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const result = yield fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
          headers: {
            'X-Api-Key': apiKey
          }
        });
        if (!result.ok) {
          return null;
        }
        const data = yield result.json();
        const item = Array.isArray(data) ? data[0] : null;
        return item?.quote ? item : null;
      } catch {
        return null;
      }
    })();
  }
  /** ZenQuotes — no API key; returns up to `count` items shaped like API-Ninjas quote rows. */
  fetchZenQuotesBatch(count) {
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const n = Math.min(Math.max(count, 1), 10);
        const result = yield fetch(`https://zenquotes.io/api/random/${n}`);
        if (!result.ok) {
          return [];
        }
        const data = yield result.json();
        if (!Array.isArray(data)) {
          return [];
        }
        return data.filter(x => x?.q).map(x => ({
          quote: x.q,
          author: x.a ?? ''
        }));
      } catch {
        return [];
      }
    })();
  }
  static {
    this.ɵfac = function ApisService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApisService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApisService,
      factory: ApisService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_inspire_tab4_module_ts.js.map