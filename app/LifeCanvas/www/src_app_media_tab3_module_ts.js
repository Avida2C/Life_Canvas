"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_media_tab3_module_ts"],{

/***/ 55478
/*!**********************************************!*\
  !*** ./src/app/media/tab3-routing.module.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab3PageRoutingModule: () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page */ 42184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




const routes = [{
  path: '',
  component: _tab3_page__WEBPACK_IMPORTED_MODULE_1__.Tab3Page
}];
class Tab3PageRoutingModule {
  static {
    this.ɵfac = function Tab3PageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab3PageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: Tab3PageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab3PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 78559
/*!**************************************!*\
  !*** ./src/app/media/tab3.module.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab3PageModule: () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ 42184);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 71307);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab3-routing.module */ 55478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94363);







class Tab3PageModule {
  static {
    this.ɵfac = function Tab3PageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab3PageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: Tab3PageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__.ExploreContainerComponentModule, _tab3_routing_module__WEBPACK_IMPORTED_MODULE_5__.Tab3PageRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](Tab3PageModule, {
    declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_3__.Tab3Page],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__.ExploreContainerComponentModule, _tab3_routing_module__WEBPACK_IMPORTED_MODULE_5__.Tab3PageRoutingModule]
  });
})();

/***/ },

/***/ 42184
/*!************************************!*\
  !*** ./src/app/media/tab3.page.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab3Page: () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 54982);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/image.service */ 18578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 79748);







function Tab3Page_ion_col_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 7)(1, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab3Page_ion_col_13_Template_ion_button_click_1_listener() {
      const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.setModalImage(image_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r2.imagePath);
  }
}
function Tab3Page_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Image Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-buttons", 10)(5, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab3Page_ng_template_19_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content")(8, "ion-card")(9, "ion-card-content")(10, "ion-list")(11, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ion-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab3Page_ng_template_19_Template_ion_label_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deleteImage(ctx_r2.imageModal.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("strong", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.imageModal.imagePath);
  }
}
class Tab3Page {
  /**
   * Constructs a new instance of the class.
   * @param {ImageService} imageService - The image service to be used by the class.
   */
  constructor(imageService) {
    this.imageService = imageService;
  }
  /**
   * Initializes the component by loading the image JSON data and assigning it to the gallery property.
   * @returns None
   */
  ngOnInit() {
    this.gallery = this.imageService.loadImageJson();
  }
  /**
   * Takes a photo using the device's camera.
   * @returns {Promise<string>} A promise that resolves to the URI of the captured image.
   */
  takePhoto() {
    var _this = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri
      });
      /**
       * Adds an image to the image service and updates the gallery.
       * @param {string} webPath - The web path of the image to add.
       */
      yield _this.imageService.addImage(image.webPath);
      _this.gallery = _this.imageService.loadImageJson();
    })();
  }
  /**
   * Closes the modal by dismissing it with a 'cancel' result.
   * @returns None
   */
  close() {
    this.modal.dismiss(null, 'cancel');
  }
  /**
   * Sets the path of the image to be displayed in the modal and presents the modal.
   * @param {string} path - The path of the image to be displayed.
   * @returns None
   */
  setModalImage(path) {
    this.imageModal = path;
    this.modal.present();
  }
  /**
   * Deletes an image with the specified ID.
   * @param {string} id - The ID of the image to delete.
   * @returns None
   */
  deleteImage(id) {
    this.imageService.deleteImage(id).then(() => {
      this.gallery = this.imageService.loadImageJson();
      this.close();
    });
  }
  static {
    this.ɵfac = function Tab3Page_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Tab3Page)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: Tab3Page,
      selectors: [["app-tab3"]],
      viewQuery: function Tab3Page_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonModal, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      standalone: false,
      decls: 20,
      vars: 3,
      consts: [[1, "ion-no-border", "drop-shadow"], ["slot", "start"], [1, "ion-no-margin"], ["size", "4", 4, "ngFor", "ngForOf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "add"], ["size", "4"], ["fill", "outline", "expand", "block", 1, "ion-no-padding", 3, "click"], [3, "src"], ["slot", "end"], [3, "click", "strong"], ["size", "large", "name", "close"], ["expand", "block", 3, "click"]],
      template: function Tab3Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-grid", 2)(5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Media");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content")(8, "ion-card")(9, "ion-card-content")(10, "ion-list")(11, "ion-item")(12, "ion-row");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, Tab3Page_ion_col_13_Template, 3, 1, "ion-col", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-fab", 4)(16, "ion-fab-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Tab3Page_Template_ion_fab_button_click_16_listener() {
            return ctx.takePhoto();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-modal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, Tab3Page_ng_template_19_Template, 15, 2, "ng-template");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 1, ctx.gallery));
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonModal, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVkaWEvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdKQUF3SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 18578
/*!******************************************!*\
  !*** ./src/app/service/image.service.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageService: () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 63474);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ 57630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




/**
 * A class that provides image-related functionality.
 */
class ImageService {
  constructor() {
    var _this = this;
    /**
     * Adds an image to the images.json file.
     * @param {string | undefined} imageUrl - The URL of the image to add.
     * @returns None
     */
    this.addImage = /*#__PURE__*/function () {
      var _ref = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (imageUrl) {
        let images = yield _this.loadImageJson();
        /**
         * Adds an image object to the images array.
         * If the images array is empty, it creates a new array with the given image.
         * If the images array is not empty, it generates a new ID for the image and adds it to the array.
         * @param {Array} images - The array of image objects.
         * @param {string} imageUrl - The URL of the image to add.
         */
        if (!images) {
          images = [{
            "id": 0,
            "imagePath": imageUrl
          }];
        } else {
          let maxID = parseInt(underscore__WEBPACK_IMPORTED_MODULE_2__.max(images, function (c) {
            return c.id;
          }).id);
          maxID++;
          images.push({
            "id": maxID,
            "imagePath": imageUrl
          });
        }
        /**
         * Writes the given data to a file in the specified directory with the specified encoding.
         * @param {object} options - The options for writing the file.
         * @param {string} options.path - The path of the file to write.
         * @param {string} options.data - The data to write to the file.
         * @param {Directory} options.directory - The directory where the file should be written.
         * @param {Encoding} options.encoding - The encoding to use for writing the file.
         * */
        yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
          path: 'images.json',
          data: JSON.stringify(images),
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * Loads the contents of the 'images.json' file from the external directory and returns
     * the parsed JSON data.
     * @returns {Promise<Object|null>} - A promise that resolves to the parsed JSON data if
     * the file is successfully read, or null if an error occurs.
     */
    this.loadImageJson = /*#__PURE__*/(0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
          path: 'images.json',
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
        return JSON.parse(contents.data.toString());
      } catch (e) {
        return null;
      }
    });
    /**
     * Deletes an image with the specified ID from the image JSON file.
     * @param {string} id - The ID of the image to delete.
     * @returns {Promise<void>} - A promise that resolves when the image is successfully deleted.
     * @throws {Error} - If there is an error writing to the image JSON file.
     */
    this.deleteImage = /*#__PURE__*/function () {
      var _ref3 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {
        var contents = yield _this.loadImageJson();
        contents = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(contents, function (c) {
          return c.id == id;
        });
        try {
          yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
            path: 'images.json',
            data: JSON.stringify(contents),
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
            encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
          });
        } catch (e) {
          console.error(e);
        }
      });
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
  }
  static {
    this.ɵfac = function ImageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ImageService,
      factory: ImageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 96984
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraDirection: () => (/* binding */ CameraDirection),
/* harmony export */   CameraResultType: () => (/* binding */ CameraResultType),
/* harmony export */   CameraSource: () => (/* binding */ CameraSource),
/* harmony export */   EncodingType: () => (/* binding */ EncodingType),
/* harmony export */   MediaType: () => (/* binding */ MediaType),
/* harmony export */   MediaTypeSelection: () => (/* binding */ MediaTypeSelection)
/* harmony export */ });
/**
 * @deprecated This enum is only meant to be used for deprecated `getPhoto` method.
 * It will be removed in a future major version of the plugin, along with `getPhoto`.
 */
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
/**
 * @deprecated This enum is only meant to be used for `ImageOptions` in deprecated `getPhoto` method.
 * It will be removed in a future major version of the plugin, along with `getPhoto`.
 */
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var MediaType;
(function (MediaType) {
  MediaType[MediaType["Photo"] = 0] = "Photo";
  MediaType[MediaType["Video"] = 1] = "Video";
})(MediaType || (MediaType = {}));
var MediaTypeSelection;
(function (MediaTypeSelection) {
  MediaTypeSelection[MediaTypeSelection["Photo"] = 0] = "Photo";
  MediaTypeSelection[MediaTypeSelection["Video"] = 1] = "Video";
  MediaTypeSelection[MediaTypeSelection["All"] = 2] = "All";
})(MediaTypeSelection || (MediaTypeSelection = {}));
var EncodingType;
(function (EncodingType) {
  EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
  EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));

/***/ },

/***/ 54982
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraDirection: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection),
/* harmony export */   CameraResultType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraResultType),
/* harmony export */   CameraSource: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource),
/* harmony export */   EncodingType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.EncodingType),
/* harmony export */   MediaType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.MediaType),
/* harmony export */   MediaTypeSelection: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.MediaTypeSelection)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 14070);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 8436);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 96984);


const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => new _web__WEBPACK_IMPORTED_MODULE_1__.CameraWeb()
});



/***/ },

/***/ 8436
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraWeb: () => (/* binding */ CameraWeb)
/* harmony export */ });
/* harmony import */ var E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 14070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 96984);



class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  takePhoto(options) {
    var _this = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (options.webUseInput) {
            _this.takePhotoCameraInputExperience(options, resolve, reject);
          } else {
            _this.takePhotoCameraExperience(options, resolve, reject);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  recordVideo(_options) {
    var _this2 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this2.unimplemented('recordVideo is not implemented on Web.');
    })();
  }
  playVideo(_options) {
    var _this3 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this3.unimplemented('playVideo is not implemented on Web.');
    })();
  }
  chooseFromGallery(options) {
    var _this4 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref2 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          _this4.galleryInputExperience(options, resolve, reject);
        });
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  editPhoto(_options) {
    var _this5 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this5.unimplemented('editPhoto is not implemented on Web.');
    })();
  }
  editURIPhoto(_options) {
    var _this6 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this6.unimplemented('editURIPhoto is not implemented on Web.');
    })();
  }
  getPhoto(options) {
    var _this7 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref3 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos) {
            _this7.fileInputExperience(options, resolve, reject);
          } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
            let actionSheet = document.querySelector('pwa-action-sheet');
            if (!actionSheet) {
              actionSheet = document.createElement('pwa-action-sheet');
              document.body.appendChild(actionSheet);
            }
            actionSheet.header = options.promptLabelHeader || 'Photo';
            actionSheet.cancelable = false;
            actionSheet.options = [{
              title: options.promptLabelPhoto || 'From Photos'
            }, {
              title: options.promptLabelPicture || 'Take Picture'
            }];
            actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
              var _ref4 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const selection = e.detail;
                if (selection === 0) {
                  _this7.fileInputExperience(options, resolve, reject);
                } else {
                  _this7.cameraExperience(options, resolve, reject);
                }
              });
              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }());
          } else {
            _this7.cameraExperience(options, resolve, reject);
          }
        });
        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  pickImages(_options) {
    var _this8 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref5 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          _this8.multipleFileInputExperience(resolve, reject);
        });
        return function (_x8, _x9) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }
  cameraExperience(options, resolve, reject) {
    var _this9 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9._setupPWACameraModal(options.direction, photo => _this9._getCameraPhoto(photo, options), () => _this9.fileInputExperience(options, resolve, reject), resolve, reject);
    })();
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input';
      input.type = 'file';
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const file = input.files[0];
        let format = 'jpeg';
        if (file.type === 'image/png') {
          format = 'png';
        } else if (file.type === 'image/gif') {
          format = 'gif';
        }
        if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            if (options.resultType === 'dataUrl') {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === 'base64') {
              const b64 = reader.result.split(',')[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format: format
          });
          cleanup();
        }
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.capture = true;
    if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
      input.removeAttribute('capture');
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front) {
      input.capture = 'user';
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Rear) {
      input.capture = 'environment';
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input-multiple');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input-multiple';
      input.type = 'file';
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const photos = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = 'jpeg';
          if (file.type === 'image/png') {
            format = 'png';
          } else if (file.type === 'image/gif') {
            format = 'gif';
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format: format
          });
        }
        resolve({
          photos
        });
        cleanup();
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = this._getFileFormat(photo);
      if (options.resultType === 'uri') {
        resolve({
          webPath: URL.createObjectURL(photo),
          format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === 'dataUrl') {
            resolve({
              dataUrl: r,
              format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(',')[1],
              format,
              saved: false
            });
          }
        };
        reader.onerror = e => {
          reject(e);
        };
      }
    });
  }
  takePhotoCameraExperience(options, resolve, reject) {
    var _this0 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this0._setupPWACameraModal(options.cameraDirection, photo => {
        var _a;
        return _this0._buildPhotoMediaResult(photo, (_a = options.includeMetadata) !== null && _a !== void 0 ? _a : false);
      }, () => _this0.takePhotoCameraInputExperience(options, resolve, reject), resolve, reject);
    })();
  }
  takePhotoCameraInputExperience(options, resolve, reject) {
    var _this1 = this;
    const input = this._createFileInput('_capacitor-camera-input-takephoto');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    input.onchange = /*#__PURE__*/function () {
      var _ref6 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_e) {
        var _a;
        if (!_this1._validateFileInput(input, reject, cleanup)) {
          return;
        }
        const file = input.files[0];
        resolve(yield _this1._buildPhotoMediaResult(file, (_a = options.includeMetadata) !== null && _a !== void 0 ? _a : false));
        cleanup();
      });
      return function (_x0) {
        return _ref6.apply(this, arguments);
      };
    }();
    input.oncancel = () => {
      reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
      cleanup();
    };
    input.accept = 'image/*';
    if (options.cameraDirection === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front) {
      input.capture = 'user';
    } else {
      // CameraDirection.Rear
      input.capture = 'environment';
    }
    input.click();
  }
  galleryInputExperience(options, resolve, reject) {
    var _this10 = this;
    var _a, _b;
    const input = this._createFileInput('_capacitor-camera-input-gallery');
    input.multiple = (_a = options.allowMultipleSelection) !== null && _a !== void 0 ? _a : false;
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    input.onchange = /*#__PURE__*/function () {
      var _ref7 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_e) {
        var _a;
        if (!_this10._validateFileInput(input, reject, cleanup)) {
          return;
        }
        const results = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          if (file.type.startsWith('image/')) {
            results.push(yield _this10._buildPhotoMediaResult(file, (_a = options.includeMetadata) !== null && _a !== void 0 ? _a : false));
          } else if (file.type.startsWith('video/')) {
            const format = _this10._getFileFormat(file);
            let thumbnail;
            let resolution;
            let duration;
            try {
              const videoInfo = yield _this10._getVideoMetadata(file);
              thumbnail = videoInfo.thumbnail;
              if (options.includeMetadata) {
                resolution = videoInfo.resolution;
                duration = videoInfo.duration;
              }
            } catch (e) {
              console.warn('Failed to get video metadata:', e);
            }
            const result = {
              type: _definitions__WEBPACK_IMPORTED_MODULE_2__.MediaType.Video,
              thumbnail,
              webPath: URL.createObjectURL(file),
              saved: false
            };
            if (options.includeMetadata) {
              result.metadata = {
                format,
                resolution,
                size: file.size,
                creationDate: new Date(file.lastModified).toISOString(),
                duration
              };
            }
            results.push(result);
          }
        }
        resolve({
          results
        });
        cleanup();
      });
      return function (_x1) {
        return _ref7.apply(this, arguments);
      };
    }();
    input.oncancel = () => {
      reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
      cleanup();
    };
    // Set accept attribute based on mediaType
    const mediaType = (_b = options.mediaType) !== null && _b !== void 0 ? _b : _definitions__WEBPACK_IMPORTED_MODULE_2__.MediaTypeSelection.Photo;
    if (mediaType === _definitions__WEBPACK_IMPORTED_MODULE_2__.MediaTypeSelection.Photo) {
      input.accept = 'image/*';
    } else if (mediaType === _definitions__WEBPACK_IMPORTED_MODULE_2__.MediaTypeSelection.Video) {
      input.accept = 'video/*';
    } else {
      // MediaTypeSelection.All
      input.accept = 'image/*,video/*';
    }
    input.click();
  }
  _getFileFormat(file) {
    if (file.type === 'image/png') {
      return 'png';
    } else if (file.type === 'image/gif') {
      return 'gif';
    } else if (file.type.startsWith('video/')) {
      return file.type.split('/')[1];
    } else if (file.type.startsWith('image/')) {
      return 'jpeg';
    }
    return file.type.split('/')[1] || 'jpeg';
  }
  _buildPhotoMediaResult(file, includeMetadata) {
    var _this11 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const format = _this11._getFileFormat(file);
      const thumbnail = yield _this11._getBase64FromFile(file);
      const result = {
        type: _definitions__WEBPACK_IMPORTED_MODULE_2__.MediaType.Photo,
        thumbnail,
        webPath: URL.createObjectURL(file),
        saved: false
      };
      if (includeMetadata) {
        const resolution = yield _this11._getImageResolution(file);
        result.metadata = {
          format,
          resolution,
          size: file.size,
          creationDate: 'lastModified' in file ? new Date(file.lastModified).toISOString() : new Date().toISOString()
        };
      }
      return result;
    })();
  }
  _validateFileInput(input, reject, cleanup) {
    if (!input.files || input.files.length === 0) {
      const message = input.multiple ? 'No files selected' : 'No file selected';
      reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException(message));
      cleanup();
      return false;
    }
    return true;
  }
  _setupPWACameraModal(cameraDirection, onPhotoCallback, fallbackCallback, resolve, reject) {
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (customElements.get('pwa-camera-modal')) {
        const cameraModal = document.createElement('pwa-camera-modal');
        cameraModal.facingMode = cameraDirection === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front ? 'user' : 'environment';
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
            var _ref8 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
              const photo = e.detail;
              if (photo === null) {
                reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
              } else if (photo instanceof Error) {
                reject(photo);
              } else {
                resolve(yield onPhotoCallback(photo));
              }
              cameraModal.dismiss();
              document.body.removeChild(cameraModal);
            });
            return function (_x10) {
              return _ref8.apply(this, arguments);
            };
          }());
          cameraModal.present();
        } catch (e) {
          fallbackCallback();
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        fallbackCallback();
      }
    })();
  }
  _createFileInput(id) {
    let input = document.querySelector(`#${id}`);
    if (!input) {
      input = document.createElement('input');
      input.id = id;
      input.type = 'file';
      input.hidden = true;
      document.body.appendChild(input);
    }
    return input;
  }
  _getImageResolution(image) {
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const bitmap = yield createImageBitmap(image);
        const resolution = `${bitmap.width}x${bitmap.height}`;
        bitmap.close();
        return resolution;
      } catch (e) {
        console.warn('Failed to get image resolution:', e);
        return undefined;
      }
    })();
  }
  _getBase64FromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        const base64 = dataUrl.split(',')[1];
        resolve(base64);
      };
      reader.onerror = e => {
        reject(e);
      };
      reader.readAsDataURL(file);
    });
  }
  _getVideoMetadata(videoFile) {
    return new Promise(resolve => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.muted = true;
      video.onloadedmetadata = () => {
        // Seek to 1 second or 10% of duration to capture thumbnail
        const seekTime = Math.min(1, video.duration * 0.1);
        video.currentTime = seekTime;
      };
      video.onseeked = () => {
        const result = {
          resolution: `${video.videoWidth}x${video.videoHeight}`,
          duration: video.duration
        };
        try {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            result.thumbnail = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
          }
        } catch (e) {
          console.warn('Failed to generate video thumbnail:', e);
        }
        URL.revokeObjectURL(video.src);
        resolve(result);
      };
      video.onerror = () => {
        // Clean up and return defaults
        URL.revokeObjectURL(video.src);
        resolve({});
      };
      video.src = URL.createObjectURL(videoFile);
    });
  }
  checkPermissions() {
    var _this12 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.permissions) {
        throw _this12.unavailable('Permissions API not available in this browser');
      }
      try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
        // the specific permissions that are supported varies among browsers that implement the
        // permissions API, so we need a try/catch in case 'camera' is invalid
        const permission = yield window.navigator.permissions.query({
          name: 'camera'
        });
        return {
          camera: permission.state,
          photos: 'granted'
        };
      } catch (_a) {
        throw _this12.unavailable('Camera permissions are not available in this browser');
      }
    })();
  }
  requestPermissions() {
    var _this13 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this13.unimplemented('Not implemented on web.');
    })();
  }
  pickLimitedLibraryPhotos() {
    var _this14 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this14.unavailable('Not implemented on web.');
    })();
  }
  getLimitedLibraryPhotos() {
    var _this15 = this;
    return (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this15.unavailable('Not implemented on web.');
    })();
  }
}
const Camera = new CameraWeb();


/***/ }

}]);
//# sourceMappingURL=src_app_media_tab3_module_ts.js.map