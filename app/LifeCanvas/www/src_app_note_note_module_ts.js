"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_note_note_module_ts"],{

/***/ 90716
/*!*********************************************!*\
  !*** ./src/app/note/note-routing.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotePageRoutingModule: () => (/* binding */ NotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.page */ 7366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: '',
  component: _note_page__WEBPACK_IMPORTED_MODULE_1__.NotePage
}];
class NotePageRoutingModule {
  static {
    this.ɵfac = function NotePageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotePageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NotePageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 30973
/*!*************************************!*\
  !*** ./src/app/note/note.module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotePageModule: () => (/* binding */ NotePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _note_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-routing.module */ 90716);
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note.page */ 7366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94363);






class NotePageModule {
  static {
    this.ɵfac = function NotePageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotePageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: NotePageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _note_routing_module__WEBPACK_IMPORTED_MODULE_3__.NotePageRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NotePageModule, {
    declarations: [_note_page__WEBPACK_IMPORTED_MODULE_4__.NotePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _note_routing_module__WEBPACK_IMPORTED_MODULE_3__.NotePageRoutingModule]
  });
})();

/***/ },

/***/ 7366
/*!***********************************!*\
  !*** ./src/app/note/note.page.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotePage: () => (/* binding */ NotePage)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 57630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/file.service */ 6071);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 21507);
/**
 * Import the entire underscore library and assign it to the variable '_'.
 * This allows you to use all the functions provided by the underscore library.
 */





class NotePage {
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
     * Represents a note object with a title, content, and ID.
     * @property {string} title - The title of the note.
     * @property {string | null} noteContent - The content of the note, can be null if no content is provided.
     * @property {string} id - The unique ID of the note.
     */
    this.title = 'Note';
    this.id = '';
  }
  /**
   * Initializes the component and retrieves the note content and title based on the query parameters.
   * If the 'id' parameter is not provided, it navigates to the '/tabs' route.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      /**
       * Checks if an ID exists. If it does, it reads the notes from the file service and
       * retrieves the note with the matching ID. It then sets the note content, title, and ID
       * variables accordingly.
       * If the ID does not exist, it navigates to the '/tabs' route.
       * @param {string} id - The ID to check
       */
      if (!id) {
        this.router.navigate(['/tabs']);
      } else {
        this.fileService.readNotes().then(notes => {
          let note = underscore__WEBPACK_IMPORTED_MODULE_0__.find(notes, function (n) {
            return n.id == id;
          });
          this.noteContent = note.data;
          this.title = note.title;
          this.id = note.id;
        });
      }
    });
  }
  /**
   * Redirects the user to the note editor page with the specified note ID.
   * @param {string} id - The ID of the note to edit.
   * @returns None
   */
  editNote(id) {
    this.router.navigateByUrl('/editor?type=notes&id=' + id);
  }
  /**
   * Deletes a note with the specified ID.
   * @param {string} id - The ID of the note to delete.
   * @returns None
   */
  deleteNote(id) {
    this.fileService.deleteNote(id).then(() => {
      this.router.navigateByUrl('/tabs/tab2?open=notes');
    });
  }
  static {
    this.ɵfac = function NotePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotePage,
      selectors: [["app-note"]],
      standalone: false,
      decls: 19,
      vars: 3,
      consts: [[3, "translucent"], ["slot", "start"], ["size", "12"], [3, "innerHTML"], ["color", "primary", "fill", "solid", 1, "mt-6", 3, "click"], ["color", "primary", "fill", "outline", 1, "mt-6", 3, "click"]],
      template: function NotePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "ion-card")(8, "ion-card-content")(9, "ion-row")(10, "ion-col", 2)(11, "ion-list")(12, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-buttons", 1)(15, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotePage_Template_ion_button_click_15_listener() {
            return ctx.editNote(ctx.id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Edit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotePage_Template_ion_button_click_17_listener() {
            return ctx.deleteNote(ctx.id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Delete ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.noteContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLnBhZ2Uuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90ZS9ub3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0pBQXdKIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_note_note_module_ts.js.map