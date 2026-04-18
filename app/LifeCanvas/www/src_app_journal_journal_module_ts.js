"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_journal_journal_module_ts"],{

/***/ 8702
/*!***************************************************!*\
  !*** ./src/app/journal/journal-routing.module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JournalPageRoutingModule: () => (/* binding */ JournalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _journal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./journal.page */ 77664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: '',
  component: _journal_page__WEBPACK_IMPORTED_MODULE_1__.JournalPage
}];
class JournalPageRoutingModule {
  static {
    this.ɵfac = function JournalPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JournalPageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: JournalPageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JournalPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 2951
/*!*******************************************!*\
  !*** ./src/app/journal/journal.module.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JournalPageModule: () => (/* binding */ JournalPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _journal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal-routing.module */ 8702);
/* harmony import */ var _journal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./journal.page */ 77664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94363);






class JournalPageModule {
  static {
    this.ɵfac = function JournalPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JournalPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: JournalPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _journal_routing_module__WEBPACK_IMPORTED_MODULE_3__.JournalPageRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](JournalPageModule, {
    declarations: [_journal_page__WEBPACK_IMPORTED_MODULE_4__.JournalPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _journal_routing_module__WEBPACK_IMPORTED_MODULE_3__.JournalPageRoutingModule]
  });
})();

/***/ },

/***/ 77664
/*!*****************************************!*\
  !*** ./src/app/journal/journal.page.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JournalPage: () => (/* binding */ JournalPage)
/* harmony export */ });
/* harmony import */ var E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ 57630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/file.service */ 6071);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 79748);

/**
 * Import the entire underscore library and assign it to the variable '_'.
 * This allows you to use all the functions provided by the underscore library.
 */






class JournalPage {
  /**
   * Constructs a new instance of the class.
   * @param {ActivatedRoute} route - The ActivatedRoute instance.
   * @param {Router} router - The Router instance.
   * @param {FileService} fileService - The FileService instance.
   */
  constructor(route, router, fileService) {
    this.route = route;
    this.router = router;
    this.fileService = fileService;
    /**
     * Represents a journal entry.
     * @property {string} title - The title of the journal entry.
     * @property {string} noteContent - The content of the journal entry.
     * @property {string} id - The unique identifier of the journal entry.
     * @property {Date} date - The date of the journal entry.
     */
    this.title = 'Journal';
  }
  /**
   * Initializes the component and retrieves the journal entry based on the query parameters.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      /**
       * If the given ID is false, navigate to the '/tabs' route using the router.
       * @param {any} id - The ID to check.
       */
      if (!id) {
        this.router.navigate(['/tabs']);
        /**
         * Else, read the journal file and retrieve the entry with the specified id.
         * Sets the note content, title, id, and date properties based on the retrieved entry.
         * @param {string} id - The id of the entry to retrieve.
         */
      } else {
        this.fileService.readJournal().then(journal => {
          let entry = underscore__WEBPACK_IMPORTED_MODULE_1__.find(journal, function (n) {
            return n.id == id;
          });
          this.noteContent = entry.data;
          this.title = entry.title;
          this.id = entry.id;
          this.date = entry.date;
        });
      }
    });
  }
  /**
   * Redirects the user to the journal editor page with the specified ID.
   * @param {string} id - The ID of the journal to edit.
   * @returns None
   */
  editJournal(id) {
    this.router.navigateByUrl('/editor?type=journal&id=' + id);
  }
  /**
   * Deletes a journal entry with the specified ID.
   * @param {string} id - The ID of the journal entry to delete.
   * @returns {Promise<void>} - A promise that resolves when the journal entry is successfully deleted.
   */
  deleteJournal(id) {
    var _this = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.fileService.deleteJournal(id);
      _this.router.navigate(['/tabs/tab1']).then();
    })();
  }
  static {
    this.ɵfac = function JournalPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JournalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: JournalPage,
      selectors: [["app-journal"]],
      standalone: false,
      decls: 25,
      vars: 7,
      consts: [[3, "translucent"], ["slot", "start"], ["size", "12"], [3, "innerHTML"], ["size", "3"], ["fill", "outline", 1, "mt-6", 3, "click"], ["size", "2"]],
      template: function JournalPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content")(7, "ion-card")(8, "ion-card-content")(9, "ion-row")(10, "ion-col", 2)(11, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-row")(15, "ion-col", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-grid")(18, "ion-row")(19, "ion-col", 4)(20, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JournalPage_Template_ion_button_click_20_listener() {
            return ctx.editJournal(ctx.id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Edit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-col", 6)(23, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JournalPage_Template_ion_button_click_23_listener() {
            return ctx.deleteJournal(ctx.id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Delete ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 4, ctx.date, "short"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.noteContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb3VybmFsLnBhZ2Uuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvam91cm5hbC9qb3VybmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEpBQTRKIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_journal_journal_module_ts.js.map