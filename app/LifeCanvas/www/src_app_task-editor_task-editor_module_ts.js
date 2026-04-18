"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_task-editor_task-editor_module_ts"],{

/***/ 30510
/*!***********************************************************!*\
  !*** ./src/app/task-editor/task-editor-routing.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskEditorPageRoutingModule: () => (/* binding */ TaskEditorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _task_editor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-editor.page */ 22352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: '',
  component: _task_editor_page__WEBPACK_IMPORTED_MODULE_1__.TaskEditorPage
}];
class TaskEditorPageRoutingModule {
  static {
    this.ɵfac = function TaskEditorPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskEditorPageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TaskEditorPageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TaskEditorPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 47927
/*!***************************************************!*\
  !*** ./src/app/task-editor/task-editor.module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskEditorPageModule: () => (/* binding */ TaskEditorPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _task_editor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-editor-routing.module */ 30510);
/* harmony import */ var _task_editor_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-editor.page */ 22352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94363);






class TaskEditorPageModule {
  static {
    this.ɵfac = function TaskEditorPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskEditorPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: TaskEditorPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _task_editor_routing_module__WEBPACK_IMPORTED_MODULE_3__.TaskEditorPageRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TaskEditorPageModule, {
    declarations: [_task_editor_page__WEBPACK_IMPORTED_MODULE_4__.TaskEditorPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _task_editor_routing_module__WEBPACK_IMPORTED_MODULE_3__.TaskEditorPageRoutingModule]
  });
})();

/***/ },

/***/ 22352
/*!*************************************************!*\
  !*** ./src/app/task-editor/task-editor.page.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskEditorPage: () => (/* binding */ TaskEditorPage)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 57630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/file.service */ 6071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);







function TaskEditorPage_ion_card_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-content", 6)(1, "ion-row")(2, "ion-col", 7)(3, "ion-buttons")(4, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskEditorPage_ion_card_content_8_Template_ion_button_click_4_listener() {
      const t_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeTask(t_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 10)(7, "ion-row")(8, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 12)(11, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TaskEditorPage_ion_card_content_8_Template_ion_input_ngModelChange_11_listener($event) {
      const t_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](t_r2.content, $event) || (t_r2.content = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r2.hideX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", t_r2.content);
  }
}
class TaskEditorPage {
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
     * Represents a task with a title, task list, and a flag to hide the 'X' button.
     * @property {string} title - The title of the task.
     * @property {any} taskList - The task list object containing an ID and an array of tasks.
     * @property {boolean} hideX - A flag indicating whether to hide the 'X' button. It is set to true if the task list has only one task.
     */
    this.title = 'New Task';
    this.taskList = {
      id: null,
      tasks: [{
        id: 0,
        content: '',
        done: false
      }]
    };
    this.hideX = this.taskList.tasks.length == 1;
  }
  /**
   * Initializes the component and subscribes to the queryParamMap observable to retrieve the 'id' parameter from the URL.
   * If the 'id' parameter is present, sets the title to 'Edit Task' and reads the tasks from the file service.
   * Finds the task with the matching 'id' and assigns it to the taskList property.
   * Sets the hideX property to true if the taskList has only one task.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.title = 'Edit Task';
        this.fileService.readTasks().then(tasks => {
          this.taskList = underscore__WEBPACK_IMPORTED_MODULE_0__.find(tasks, function (n) {
            return n.id == id;
          });
          this.hideX = this.taskList.tasks.length == 1;
        });
      }
    });
  }
  /**
   * Adds a new task to the task list.
   * @returns None
   */
  addTask() {
    var lastid = underscore__WEBPACK_IMPORTED_MODULE_0__.last(this.taskList.tasks).id;
    this.taskList.tasks.push({
      id: lastid + 1,
      content: '',
      done: false
    });
    this.hideX = this.taskList.tasks.length == 1;
  }
  /**
   * Removes a task from the task list based on its ID.
   * @param {string} id - The ID of the task to remove.
   * @returns None
   */
  removeTask(id) {
    this.taskList.tasks = underscore__WEBPACK_IMPORTED_MODULE_0__.reject(this.taskList.tasks, function (t) {
      return t.id == id;
    });
    for (var i = 0; i < this.taskList.tasks; i++) {
      this.taskList.tasks[i].id = i;
    }
    this.hideX = this.taskList.tasks.length == 1;
  }
  /**
   * Saves the task list to the file service and navigates to the tasks tab.
   * @returns None
   */
  saveTask() {
    this.fileService.saveTask(this.taskList).then(() => {
      this.router.navigateByUrl('/tabs/tab2?open=tasks');
    });
  }
  static {
    this.ɵfac = function TaskEditorPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskEditorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TaskEditorPage,
      selectors: [["app-task-editor"]],
      standalone: false,
      decls: 16,
      vars: 4,
      consts: [[3, "translucent"], ["slot", "start"], [3, "fullscreen"], ["size", "12", "class", "ion-text-left ion-no-padding ion-no-margin", 4, "ngFor", "ngForOf"], ["color", "primary", "fill", "outline", 1, "mt-6", 3, "click"], ["color", "primary", "fill", "solid", 1, "mt-6", 3, "click"], ["size", "12", 1, "ion-text-left", "ion-no-padding", "ion-no-margin"], ["size", "2"], [3, "click", "hidden"], ["size", "large", "color", "primary", "name", "close-circle-outline", 1, "mt-2"], ["size", "8"], [1, "my-3"], ["size", "10"], ["placeholder", "Enter task", 3, "ngModelChange", "ngModel"]],
      template: function TaskEditorPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 2)(7, "ion-card");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TaskEditorPage_ion_card_content_8_Template, 12, 2, "ion-card-content", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card")(10, "ion-card-content")(11, "ion-buttons")(12, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskEditorPage_Template_ion_button_click_12_listener() {
            return ctx.addTask();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskEditorPage_Template_ion_button_click_14_listener() {
            return ctx.saveTask();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Save ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.taskList.tasks);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWVkaXRvci5wYWdlLnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFzay1lZGl0b3IvdGFzay1lZGl0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_task-editor_task-editor_module_ts.js.map