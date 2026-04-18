"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 40060
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 70054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
  children: [{
    path: 'tab1',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_filesystem_dist_esm_index_js-node_modules_underscore_modules_i-61681a"), __webpack_require__.e("default-src_app_service_file_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_me_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../me/tab1.module */ 83501)).then(m => m.Tab1PageModule)
  }, {
    path: 'tab2',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_filesystem_dist_esm_index_js-node_modules_underscore_modules_i-61681a"), __webpack_require__.e("default-src_app_service_file_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_planner_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../planner/tab2.module */ 5466)).then(m => m.Tab2PageModule)
  }, {
    path: 'tab3',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_filesystem_dist_esm_index_js-node_modules_underscore_modules_i-61681a"), __webpack_require__.e("common"), __webpack_require__.e("src_app_media_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../media/tab3.module */ 78559)).then(m => m.Tab3PageModule)
  }, {
    path: 'tab4',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_filesystem_dist_esm_index_js-node_modules_underscore_modules_i-61681a"), __webpack_require__.e("default-src_app_service_file_service_ts"), __webpack_require__.e("default-src_app_inspire_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../inspire/tab4.module */ 26098)).then(m => m.Tab4PageModule)
  }, {
    path: 'favorite',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_filesystem_dist_esm_index_js-node_modules_underscore_modules_i-61681a"), __webpack_require__.e("default-src_app_service_file_service_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../favorite/favorite.module */ 70229)).then(m => m.FavoritePageModule)
  }, {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/tab1',
  pathMatch: 'full'
}];
class TabsPageRoutingModule {
  static {
    this.ɵfac = function TabsPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TabsPageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TabsPageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 20637
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-routing.module */ 40060);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ 70054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94363);






class TabsPageModule {
  static {
    this.ɵfac = function TabsPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TabsPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: TabsPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__.TabsPageRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TabsPageModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_4__.TabsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__.TabsPageRoutingModule]
  });
})();

/***/ },

/***/ 70054
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 46493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);





class TabsPage {
  /**
   * Constructs a new instance of the class.
   * @param {Router} router - The router object used for navigation.
   */
  constructor(router) {
    this.router = router;
    /**
     * Represents the state of the theme toggle and the name property.
     * @property {boolean} themeToggle - Indicates whether the theme is toggled on or off.
     * @property {any} name - The name property.
     */
    this.themeToggle = false;
    this.onSystemThemeChange = e => this.applyTheme(e.matches, {
      followSystem: true
    });
  }
  ngOnDestroy() {
    this.prefersDarkMq?.removeEventListener('change', this.onSystemThemeChange);
  }
  /**
   * Initializes the component by retrieving preferences and setting up the dark theme.
   * @returns None
   */
  ngOnInit() {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({
      key: 'darkmode'
    }).then(({
      value
    }) => {
      const unset = value == null || value === '';
      if (unset) {
        this.prefersDarkMq = window.matchMedia('(prefers-color-scheme: dark)');
        this.applyTheme(this.prefersDarkMq.matches, {
          followSystem: true
        });
        this.prefersDarkMq.addEventListener('change', this.onSystemThemeChange);
      } else {
        // Stored as String(true/false); Boolean("false") is wrongly true in JavaScript.
        const isDark = value === 'true';
        this.applyTheme(isDark, {
          followSystem: false
        });
      }
    });
    /**
     * Retrieves the value of the 'name' key from the Preferences storage and assigns it to the 'name' property of the current object.
     */
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({
      key: 'name'
    }).then(({
      value
    }) => {
      this.name = value;
    });
  }
  /**
   * Applies light/dark appearance on {@code document.body}.
   * When the user chose light mode while the OS is dark, {@code body.light} opts out of
   * {@code prefers-color-scheme} rules in {@code variables.scss}.
   */
  applyTheme(isDark, options) {
    this.themeToggle = isDark;
    document.body.classList.toggle('dark', isDark);
    const forceLightUi = !isDark && !options.followSystem;
    document.body.classList.toggle('light', forceLightUi);
  }
  /**
   * Toggles the dark theme based on the value of the checkbox.
   * @param {any} ev - The event object containing the checkbox value.
   * @returns None
   */
  toggleChange(ev) {
    const isDark = !!ev.detail?.checked;
    this.applyTheme(isDark, {
      followSystem: false
    });
    void _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
      key: 'darkmode',
      value: String(isDark)
    });
  }
  /**
   * Saves the name value to the preferences and navigates to the tab1 page with the updated name parameter.
   * @returns None
   */
  saveName() {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
      key: 'name',
      value: this.name
    }).then(() => {
      this.router.navigateByUrl('/tabs/tab1?name=' + this.name);
    });
  }
  /**
   * Opens the editor page based on the given type.
   * @param {string} type - The type of editor to open.
   * @returns None
   */
  openEditor(type) {
    this.router.navigateByUrl('/editor?type=' + type);
  }
  /**
   * Opens the task editor page by navigating to the '/task-editor' URL.
   * @returns None
   */
  openTaskEditor() {
    this.router.navigateByUrl('/task-editor');
  }
  /**
   * Navigates to the "Favorite" page in the application.
   * @returns None
   */
  openFavorites() {
    this.router.navigate(['/tabs/favorite']);
  }
  static {
    this.ɵfac = function TabsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TabsPage,
      selectors: [["app-tabs"]],
      standalone: false,
      decls: 65,
      vars: 2,
      consts: [["side", "start", "menuId", "first", "contentId", "main-content"], [1, "drop-shadow-none"], [1, "ion-no-margin"], ["size", "9"], ["label", "Username:", "labelPlacement", "stacked", "placeholder", "Enter text", 3, "ngModelChange", "ngModel"], ["size", "3"], [3, "click"], ["justify", "space-between", 3, "ngModelChange", "ionChange", "ngModel"], ["size", "large", "color", "primary", "name", "heart"], [1, "ion-no-margin", "ion-no-padding"], ["align", "end"], ["id", "main-content"], ["slot", "fixed", "vertical", "bottom", "horizontal", "center"], [1, "fab-btn-main", "ion-no-padding", "pb-1"], ["size", "large", "name", "add-circle"], ["side", "top", 1, "inher-fab"], ["color", "light", 3, "click"], ["slot", "bottom", 1, "ion-padding"], ["tab", "tab1", "href", "/tabs/tab1"], ["aria-hidden", "true", "name", "person"], ["tab", "tab2", "href", "/tabs/tab2"], ["aria-hidden", "true", "name", "bookmarks"], ["disabled", "true", "layout", "label-only", 1, "tab-fab-spacer"], [1, "ion-hide"], ["tab", "tab3", "href", "/tabs/tab3"], ["aria-hidden", "true", "name", "camera", "size", "large"], ["tab", "tab4", "href", "/tabs/tab4"], ["aria-hidden", "true", "name", "paper-plane", "size", "large"]],
      template: function TabsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-menu", 0)(1, "ion-header", 1)(2, "ion-toolbar", 1)(3, "ion-grid", 2)(4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "ion-list")(8, "ion-item")(9, "ion-row")(10, "ion-col", 3)(11, "ion-label")(12, "ion-input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TabsPage_Template_ion_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.name, $event) || (ctx.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 5)(14, "ion-menu-toggle")(15, "ion-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsPage_Template_ion_button_click_15_listener() {
            return ctx.saveName();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item")(18, "ion-label")(19, "ion-toggle", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function TabsPage_Template_ion_toggle_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.themeToggle, $event) || (ctx.themeToggle = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function TabsPage_Template_ion_toggle_ionChange_19_listener($event) {
            return ctx.toggleChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Dark Mode ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-menu-toggle")(22, "ion-item", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsPage_Template_ion_item_click_22_listener() {
            return ctx.openFavorites();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Favorite Inspirations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item")(27, "ion-label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "LifeCanvas ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "v1.0.0.0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ion-router-outlet", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-tabs")(33, "ion-fab", 12)(34, "ion-fab-button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-fab-list", 15)(37, "ion-fab-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsPage_Template_ion_fab_button_click_37_listener() {
            return ctx.openEditor("journal");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Entry");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-fab-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsPage_Template_ion_fab_button_click_40_listener() {
            return ctx.openEditor("notes");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Note");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-fab-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsPage_Template_ion_fab_button_click_43_listener() {
            return ctx.openTaskEditor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-tab-bar", 17)(47, "ion-tab-button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-tab-button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "ion-icon", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Planner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-tab-button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "ion-label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-tab-button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "ion-icon", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Media");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-tab-button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "ion-icon", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Inspire");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.themeToggle);
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabs, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: [".inher-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 65px;\n  --padding-end: 65px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  --border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-tabs[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%] {\n  border-top: 2px solid #ff784a;\n}\n\n\n.tab-fab-spacer[_ngcontent-%COMP%] {\n  --color: transparent;\n  pointer-events: none;\n  max-width: 56px;\n}\n\n.fab-btn-main[_ngcontent-%COMP%] {\n  --border-radius: 20px;\n  margin-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXDEuJTIwUmVwb3NpdG9yeVxcTGlmZUNhbnZhcy1Bbmd1bGFyLUlvbmljXFxhcHBcXExpZmVDYW52YXNcXHNyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVRLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0RaOztBRE1JO0VBQ0UsNkJBQUE7QUNITjs7QURPRSxxRUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPRTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7QUNMSiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmluaGVyLWZhYiB7XHJcbiAgICBpb24tZmFiLWJ1dHRvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNjVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNjVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tdGFic3tcclxuICAgIGlvbi10YWItYmFye1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmNzg0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIE1pZGRsZSB0YWI6IHJlc2VydmUgc3BhY2UgZm9yIEZBQiB3aXRob3V0IGxvYWRpbmcgYSBtaXNzaW5nIGljb24gKi9cclxuICAudGFiLWZhYi1zcGFjZXIge1xyXG4gICAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG1heC13aWR0aDogNTZweDtcclxuICB9XHJcblxyXG4gIC5mYWItYnRuLW1haW5cclxuICB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgfVxyXG4iLCIuaW5oZXItZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNjVweDtcbiAgLS1wYWRkaW5nLWVuZDogNjVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXRhYnMgaW9uLXRhYi1iYXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmNzg0YTtcbn1cblxuLyogTWlkZGxlIHRhYjogcmVzZXJ2ZSBzcGFjZSBmb3IgRkFCIHdpdGhvdXQgbG9hZGluZyBhIG1pc3NpbmcgaWNvbiAqL1xuLnRhYi1mYWItc3BhY2VyIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBtYXgtd2lkdGg6IDU2cHg7XG59XG5cbi5mYWItYnRuLW1haW4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLzEuJTIwUmVwb3NpdG9yeS9MaWZlQ2FudmFzLUFuZ3VsYXItSW9uaWMvYXBwL0xpZmVDYW52YXMvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRVEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRFo7O0FETUk7RUFDRSw2QkFBQTtBQ0hOOztBRE9FLHFFQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE9FO0VBRUUscUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEQUEsNGhGQUE0aEYiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5pbmhlci1mYWIge1xyXG4gICAgaW9uLWZhYi1idXR0b25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDY1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDY1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXRhYnN7XHJcbiAgICBpb24tdGFiLWJhcntcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZjc4NGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBNaWRkbGUgdGFiOiByZXNlcnZlIHNwYWNlIGZvciBGQUIgd2l0aG91dCBsb2FkaW5nIGEgbWlzc2luZyBpY29uICovXHJcbiAgLnRhYi1mYWItc3BhY2VyIHtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBtYXgtd2lkdGg6IDU2cHg7XHJcbiAgfVxyXG5cclxuICAuZmFiLWJ0bi1tYWluXHJcbiAge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIH1cclxuIiwiLmluaGVyLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDY1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDY1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi10YWJzIGlvbi10YWItYmFyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZjc4NGE7XG59XG5cbi8qIE1pZGRsZSB0YWI6IHJlc2VydmUgc3BhY2UgZm9yIEZBQiB3aXRob3V0IGxvYWRpbmcgYSBtaXNzaW5nIGljb24gKi9cbi50YWItZmFiLXNwYWNlciB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbWF4LXdpZHRoOiA1NnB4O1xufVxuXG4uZmFiLWJ0bi1tYWluIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map