"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_planner_tab2_module_ts"],{

/***/ 8763
/*!************************************************!*\
  !*** ./src/app/planner/tab2-routing.module.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab2PageRoutingModule: () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page */ 31981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: '',
  component: _tab2_page__WEBPACK_IMPORTED_MODULE_1__.Tab2Page
}];
class Tab2PageRoutingModule {
  static {
    this.ɵfac = function Tab2PageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab2PageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: Tab2PageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab2PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 5466
/*!****************************************!*\
  !*** ./src/app/planner/tab2.module.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab2PageModule: () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ 31981);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 71307);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2-routing.module */ 8763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94363);







class Tab2PageModule {
  static {
    this.ɵfac = function Tab2PageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab2PageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: Tab2PageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__.ExploreContainerComponentModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__.Tab2PageRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](Tab2PageModule, {
    declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_3__.Tab2Page],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__.ExploreContainerComponentModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__.Tab2PageRoutingModule]
  });
})();

/***/ },

/***/ 31981
/*!**************************************!*\
  !*** ./src/app/planner/tab2.page.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab2Page: () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 57630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/file.service */ 6071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/**
 * Import the entire underscore library and assign it to the variable '_'.
 * This allows you to use all the functions provided by the underscore library.
 */







function Tab2Page_ion_content_19_ion_list_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 10)(1, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Tab2Page_ion_content_19_ion_list_3_Template_ion_item_click_1_listener() {
      const note_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openNote(note_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const note_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](note_r2.title);
  }
}
function Tab2Page_ion_content_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content")(1, "ion-card")(2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Tab2Page_ion_content_19_ion_list_3_Template, 4, 1, "ion-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx_r2.notes));
  }
}
function Tab2Page_ion_content_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content")(1, "ion-card")(2, "ion-card-content")(3, "ion-row")(4, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-datetime", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
function Tab2Page_ion_content_21_ion_card_1_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 22)(2, "ion-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function Tab2Page_ion_content_21_ion_card_1_ion_row_4_Template_ion_checkbox_ionChange_2_listener() {
      const t_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.chkChanged(task_r7.id, t_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", t_r6.done);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r6.content);
  }
}
function Tab2Page_ion_content_21_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 16)(1, "ion-card-content")(2, "ion-row")(3, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Tab2Page_ion_content_21_ion_card_1_ion_row_4_Template, 5, 2, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 19)(6, "ion-buttons")(7, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Tab2Page_ion_content_21_ion_card_1_Template_ion_button_click_7_listener() {
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.editTask(task_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Tab2Page_ion_content_21_ion_card_1_Template_ion_button_click_9_listener() {
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteTask(task_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r7.tasks);
  }
}
function Tab2Page_ion_content_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Tab2Page_ion_content_21_ion_card_1_Template, 11, 1, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
  }
}
class Tab2Page {
  /**
   * Constructs a new instance of the class.
   * @param {FileService} fileService - The file service used for file operations.
   * @param {Router} router - The router used for navigation.
   * @param {ActivatedRoute} route - The route used for accessing route parameters.
   */
  constructor(fileService, router, route) {
    this.fileService = fileService;
    this.router = router;
    this.route = route;
    /**
     * The current segment of the planner.
     * @type {string}
     */
    this.plannerSegment = 'calendar';
  }
  /**
   * Initializes the component and subscribes to the queryParamMap of the route.
   * Retrieves the 'open' parameter from the query parameters and assigns it to the 'plannerSegment' property if it exists.
   * Reads the notes from the file service and assigns them to the 'notes' property.
   * Reads the tasks from the file service and assigns them to the 'tasks' property.
   * Logs the retrieved tasks to the console.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const segment = params.get('open');
      if (segment) this.plannerSegment = segment;
      this.notes = this.fileService.readNotes();
      this.fileService.readTasks().then(value => {
        this.tasks = value;
        console.log(value);
      });
    });
  }
  /**
   * Opens a note with the specified ID.
   * @param {string} id - The ID of the note to open.
   * @returns None
   */
  openNote(id) {
    this.router.navigateByUrl('/note?id=' + id);
  }
  /**
   * Redirects the user to the task editor page with the specified task ID.
   * @param {string} id - The ID of the task to edit.
   * @returns None
   */
  editTask(id) {
    this.router.navigateByUrl('/task-editor?id=' + id);
  }
  /**
   * Deletes a task with the given ID.
   * @param {string} id - The ID of the task to delete.
   * @returns None
   */
  deleteTask(id) {
    this.fileService.deleteTask(id).then(() => {
      this.fileService.readTasks().then(value => this.tasks = value);
    });
  }
  /**
   * Finds a task with the given taskid in the tasks array and checks if it has changed.
   * @param {string} taskid - The id of the task to check.
   * @param {string} id - The id of the task to compare with.
   * @returns The task object if found, otherwise undefined.
   */
  chkChanged(taskid, id) {
    var task = underscore__WEBPACK_IMPORTED_MODULE_0__.find(this.tasks, function (task) {
      return task.id == taskid;
    });
    /**
     * Updates the status of a task with the given ID and saves the updated task to the file service.
     * @param {number} id - The ID of the task to update.
     * @param {Task} task - The task object containing the list of tasks.
     */
    underscore__WEBPACK_IMPORTED_MODULE_0__.each(task.tasks, function (t) {
      if (t.id == id) {
        t.done = !t.done;
      }
    });
    this.fileService.saveTask(task);
  }
  static {
    this.ɵfac = function Tab2Page_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab2Page)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Tab2Page,
      selectors: [["app-tab2"]],
      standalone: false,
      decls: 22,
      vars: 4,
      consts: [["slot", "start"], [1, "ion-no-margin"], [1, "ion-no-border", "drop-shadow"], [3, "ngModelChange", "ngModel"], ["value", "notes"], ["color", "primary"], ["value", "calendar"], ["value", "tasks"], [4, "ngIf"], ["size", "12", "class", "ion-text-center", 4, "ngFor", "ngForOf"], ["size", "12", 1, "ion-text-center"], [3, "click"], [1, "text-center"], ["size", "12", 1, "ion-text-center", "mb-4"], ["presentation", "date"], ["size", "12", "class", "ion-text-left", 4, "ngFor", "ngForOf"], ["size", "12", 1, "ion-text-left"], ["size", "8"], [4, "ngFor", "ngForOf"], ["size", "4", 1, "ion-align-self-end"], ["color", "primary", "fill", "solid", 1, "my-2", 3, "click"], ["color", "primary", "fill", "outline", 1, "my-2", 3, "click"], ["size", "12"], ["size", "large", 3, "ionChange", "checked"], [1, "ion-margin"]],
      template: function Tab2Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid", 1)(5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Planner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-header", 2)(8, "ion-toolbar")(9, "ion-segment", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function Tab2Page_Template_ion_segment_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.plannerSegment, $event) || (ctx.plannerSegment = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-segment-button", 4)(11, "ion-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-segment-button", 6)(14, "ion-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-segment-button", 7)(17, "ion-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, Tab2Page_ion_content_19_Template, 5, 3, "ion-content", 8)(20, Tab2Page_ion_content_20_Template, 6, 0, "ion-content", 8)(21, Tab2Page_ion_content_21_Template, 2, 1, "ion-content", 8);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.plannerSegment);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.plannerSegment == "notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.plannerSegment == "calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.plannerSegment == "tasks");
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["ion-datetime[_ngcontent-%COMP%] {\n  min-width: fit-content;\n  --background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXDEuJTIwUmVwb3NpdG9yeVxcTGlmZUNhbnZhcy1Bbmd1bGFyLUlvbmljXFxhcHBcXExpZmVDYW52YXNcXHNyY1xcYXBwXFxwbGFubmVyXFx0YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1kYXRldGltZXtcclxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn0iLCJpb24tZGF0ZXRpbWUge1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGxhbm5lci90YWIyLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLzEuJTIwUmVwb3NpdG9yeS9MaWZlQ2FudmFzLUFuZ3VsYXItSW9uaWMvYXBwL0xpZmVDYW52YXMvc3JjL2FwcC9wbGFubmVyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0EsNGxCQUE0bEIiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZGF0ZXRpbWV7XHJcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59IiwiaW9uLWRhdGV0aW1lIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_planner_tab2_module_ts.js.map