"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_service_file_service_ts"],{

/***/ 6071
/*!*****************************************!*\
  !*** ./src/app/service/file.service.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileService: () => (/* binding */ FileService)
/* harmony export */ });
/* harmony import */ var E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 63474);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ 57630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94363);




/**
 * A class that provides file-related operations.
 */
class FileService {
  constructor() {
    var _this = this;
    /**
     * Saves a note to a JSON file.
     * @param {string} data - The content of the note.
     * @param {string} title - The title of the note.
     * @param {string | null} id - The ID of the note. If null, a new note will be created.
     * @returns None
     */
    this.saveNote = /*#__PURE__*/function () {
      var _ref = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, title, id) {
        let notes = yield _this.readNotes();
        let content;
        /**
         * Checks if the 'notes' array is not empty and assigns its value to the 'content' variable.
         */
        if (notes && notes.length > 0) {
          content = notes;
          /**
           * Updates the content array with the provided data and title. If the id is null, a new object
           * with a unique id is added to the content array. If the id is not null, the object with the
           * matching id in the content array is updated with the provided data and title.
           * @param {string | null} id - The id of the object to update. If null, a new object is added.
           * @param {string} data - The new data to update or add.
           * @param {string} title - The new title to update or add.
           */
          if (id == null) {
            let maxID = parseInt(underscore__WEBPACK_IMPORTED_MODULE_2__.max(content, function (c) {
              return c.id;
            }).id);
            maxID++;
            content.push({
              "id": maxID,
              "data": data,
              "title": title
            });
          } else {
            content.forEach(note => {
              if (note.id == id) {
                note.data = data;
                note.title = title;
              }
            });
          }
          /**
           * Writes the given data to a JSON file named 'notes.json' in the external directory.
           * If the file already exists, the data will be appended to it. If not, a new file will be created.
           * @param {any} data - The data to be written to the file.
           * @param {string} title - The title of the data.
           */
        } else {
          content = [{
            "id": 0,
            "data": data,
            "title": title
          }];
        }
        yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
          path: 'notes.json',
          data: JSON.stringify(content),
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
      });
      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * Reads the contents of a JSON file asynchronously and returns the parsed JSON data.
     * @returns {Promise<Object|null>} A promise that resolves to the parsed JSON data if the file exists, or null if the file does not exist or an error occurs.
     */
    this.readNotes = /*#__PURE__*/(0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
          path: 'notes.json',
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
        return JSON.parse(contents.data.toString());
      } catch (e) {
        return null;
      }
    });
    /**
     * Deletes a note with the specified ID from the notes.json file.
     * @param {string} id - The ID of the note to delete.
     * @returns None
     * @throws {Error} If there is an error writing to the notes.json file.
     */
    this.deleteNote = /*#__PURE__*/function () {
      var _ref3 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {
        var contents = yield _this.readNotes();
        contents = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(contents, function (c) {
          return c.id == id;
        });
        try {
          yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
            path: 'notes.json',
            data: JSON.stringify(contents),
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
            encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
          });
        } catch (e) {
          console.error(e);
        }
      });
      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }();
    /**
     * Saves a task to the tasks.json file.
     * @param {any | null} taskList - The task list object to save.
     * @returns None
     */
    this.saveTask = /*#__PURE__*/function () {
      var _ref4 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (taskList) {
        let tasks = yield _this.readTasks();
        /**
         * Updates the task list based on the given taskList object.
         * If the task list already exists in the tasks array, it updates the tasks property of that task list.
         * If the task list does not exist in the tasks array, it assigns a new ID to the task list and adds it to the tasks array.
         * If the tasks array is empty, it assigns an ID of 0 to the task list and initializes the tasks array with the taskList object.
         * @param {Array} tasks - The array of existing task lists.
         * @param {Object} taskList - The task list object to update or add.
         */
        if (tasks && tasks.length > 0) {
          if (taskList.id == null) {
            let maxID = parseInt(underscore__WEBPACK_IMPORTED_MODULE_2__.max(tasks, function (c) {
              return c.id;
            }).id);
            maxID++;
            taskList.id = maxID;
            tasks.push(taskList);
          } else {
            tasks.forEach(task => {
              if (task.id == taskList.id) {
                task.tasks = taskList.tasks;
              }
            });
          }
        } else {
          taskList.id = 0;
          tasks = [taskList];
        }
        /**
         * Writes the given data to a file with the specified path and encoding.
         * @param {object} options - The options object containing the file path, data, directory, and encoding.
         * @param {string} options.path - The path of the file to write.
         * @param {string} options.data - The data to write to the file.
         * @param {Directory} options.directory - The directory where the file should be written.
         * @param {Encoding} options.encoding - The encoding to use when writing the file.
         */
        yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
          path: 'tasks.json',
          data: JSON.stringify(tasks),
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
      });
      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }();
    /**
     * Reads the contents of a JSON file asynchronously and returns the parsed JSON data.
     * @returns {Promise<Object|null>} A promise that resolves to the parsed JSON data if the file is successfully read, or null if an error occurs.
     */
    this.readTasks = /*#__PURE__*/(0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
          path: 'tasks.json',
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
        return JSON.parse(contents.data.toString());
      } catch (e) {
        return null;
      }
    });
    /**
     * Deletes a task with the given ID from the tasks.json file.
     * @param {string} id - The ID of the task to delete.
     * @returns None
     * @throws {Error} If there is an error writing to the tasks.json file.
     */
    this.deleteTask = /*#__PURE__*/function () {
      var _ref6 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {
        var contents = yield _this.readTasks();
        contents = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(contents, function (c) {
          return c.id == id;
        });
        try {
          yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
            path: 'tasks.json',
            data: JSON.stringify(contents),
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
            encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
          });
        } catch (e) {
          console.error(e);
        }
      });
      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();
    /**
     * Saves a journal entry to a JSON file.
     * @param {string} data - The content of the journal entry.
     * @param {string} title - The title of the journal entry.
     * @param {string | null} id - The ID of the journal entry. If null, a new entry will be created.
     * @returns None
     */
    this.saveJournal = /*#__PURE__*/function () {
      var _ref7 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, title, id) {
        let journal = yield _this.readJournal();
        let content;
        let date = new Date();
        /**
         * Updates the content of a journal entry with the given data, title, and date.
         * If the journal entry does not exist, a new entry is created.
         * @param {boolean} journal - Indicates whether the content is a journal entry.
         * @param {Array} content - The array of journal entries.
         * @param {string} id - The ID of the journal entry to update. If null, a new entry is created.
         * @param {string} data - The updated data for the journal entry.
         * @param {string} title - The updated title for the journal entry.
         * @param {Date} date - The updated date for the journal entry.
         * */
        if (journal) {
          content = journal;
          if (id == null) {
            let maxID = parseInt(underscore__WEBPACK_IMPORTED_MODULE_2__.max(content, function (c) {
              return c.id;
            }).id);
            maxID++;
            content.push({
              "id": maxID,
              "data": data,
              "title": title,
              "date": date
            });
          } else {
            content.forEach(note => {
              if (note.id == id) {
                note.data = data;
                note.title = title;
                note.date = date;
              }
            });
          }
        } else {
          content = [{
            "id": 0,
            "data": data,
            "title": title,
            "date": date
          }];
        }
        /**
         * Writes the given content to a file in the external directory with the specified path and encoding.
         * @param {string} path - The path of the file to write.
         * @param {any} content - The content to write to the file.
         * @param {Directory} directory - The directory where the file should be written.
         * @param {Encoding} encoding - The encoding to use for writing the file.
         * */
        yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
          path: 'journal.json',
          data: JSON.stringify(content),
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
      });
      return function (_x7, _x8, _x9) {
        return _ref7.apply(this, arguments);
      };
    }();
    /**
     * Reads the contents of a journal file asynchronously.
     * @returns {Promise<Object|null>} - A promise that resolves to the parsed JSON contents of the journal file, or null if an error occurs.
     */
    this.readJournal = /*#__PURE__*/(0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
          path: 'journal.json',
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
        return JSON.parse(contents.data.toString());
      } catch (e) {
        return null;
      }
    });
    /**
     * Deletes a journal entry with the specified ID from the journal file.
     * @param {string} id - The ID of the journal entry to delete.
     * @returns {Promise<void>} - A promise that resolves when the deletion is complete.
     * @throws {Error} - If there is an error while deleting the journal entry.
     */
    this.deleteJournal = /*#__PURE__*/function () {
      var _ref9 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {
        var contents = yield _this.readJournal();
        contents = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(contents, function (c) {
          return c.id == id;
        });
        try {
          yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
            path: 'journal.json',
            data: JSON.stringify(contents),
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
            encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
          });
        } catch (e) {
          console.error(e);
        }
      });
      return function (_x0) {
        return _ref9.apply(this, arguments);
      };
    }();
    /**
     * Reads the contents of a JSON file asynchronously and returns the parsed JSON data.
     * @returns {Promise<Object|null>} A promise that resolves to the parsed JSON data if the file exists, or null if the file does not exist or an error occurs.
     */
    this.readQuotes = /*#__PURE__*/(0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
          path: 'quotes.json',
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
        return JSON.parse(contents.data.toString());
      } catch (e) {
        return null;
      }
    });
    /**
     * Saves a quote and its author to a JSON file.
     * @param {string} quote - The quote to save.
     * @param {string} author - The author of the quote.
     * @returns {Promise<void>} - A promise that resolves when the quote is saved.
     */
    this.saveQuote = /*#__PURE__*/function () {
      var _ref1 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (quote, author) {
        let quotes = yield _this.readQuotes();
        /**
         * Adds a new quote to the existing list of quotes, or creates a new list if none exists.
         * @param {Array} quotes - The existing list of quotes.
         * @param {string} quote - The new quote to add.
         * @param {string} author - The author of the new quote.
         */
        if (quotes && quotes.length > 0) {
          quotes.push({
            quote,
            author
          });
        } else {
          quotes = [{
            quote,
            author
          }];
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
          path: 'quotes.json',
          data: JSON.stringify(quotes),
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
      });
      return function (_x1, _x10) {
        return _ref1.apply(this, arguments);
      };
    }();
    /**
     * Deletes a quote from the quotes.json file.
     * @param {string} quote - The quote to be deleted.
     * @returns None
     * @throws {Error} If there is an error writing to the quotes.json file.
     */
    this.deleteQuotes = /*#__PURE__*/function () {
      var _ref10 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (quote) {
        var contents = yield _this.readQuotes();
        contents = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(contents, function (c) {
          return c.quote == quote;
        });
        try {
          yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
            path: 'quotes.json',
            data: JSON.stringify(contents),
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
            encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
          });
        } catch (e) {
          console.error(e);
        }
      });
      return function (_x11) {
        return _ref10.apply(this, arguments);
      };
    }();
    /**
     * Reads the contents of the 'affirmations.json' file from the external directory.
     * @returns {Promise<Array<string> | null>} - A promise that resolves to an array of affirmations
     * if the file is successfully read, or null if there is an error.
     */
    this.readAffirmations = /*#__PURE__*/(0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
          path: 'affirmations.json',
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
        return JSON.parse(contents.data.toString());
      } catch (e) {
        return null;
      }
    });
    /**
     * Saves an affirmation to the affirmations.json file.
     * @param {string} affirmation - The affirmation to save.
     * @returns {Promise<void>} - A promise that resolves when the affirmation is saved.
     */
    this.saveAffirmation = /*#__PURE__*/function () {
      var _ref12 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (affirmation) {
        let affirmations = yield _this.readAffirmations();
        /**
         * Adds an affirmation object to the affirmations array if it exists, otherwise creates a new array with the affirmation object.
         * @param {Array} affirmations - The array of affirmations.
         * @param {string} affirmation - The affirmation to add to the array.
         * @returns None
         */
        if (affirmations && affirmations.length > 0) {
          affirmations.push({
            affirmation
          });
        } else {
          affirmations = [{
            affirmation
          }];
        }
        yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
          path: 'affirmations.json',
          data: JSON.stringify(affirmations),
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
          encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
        });
      });
      return function (_x12) {
        return _ref12.apply(this, arguments);
      };
    }();
    /**
     * Deletes an affirmation from the affirmations.json file.
     * @param {string} affirmation - The affirmation quote to delete.
     * @returns None
     * @throws {Error} If there is an error writing to the affirmations.json file.
     */
    this.deleteAffirmation = /*#__PURE__*/function () {
      var _ref13 = (0,E_1_Repository_LifeCanvas_Angular_Ionic_app_LifeCanvas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (affirmation) {
        var contents = yield _this.readAffirmations();
        contents = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(contents, function (c) {
          return c.affirmation.quote == affirmation;
        });
        try {
          yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
            path: 'affirmations.json',
            data: JSON.stringify(contents),
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.External,
            encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8
          });
        } catch (e) {
          console.error(e);
        }
      });
      return function (_x13) {
        return _ref13.apply(this, arguments);
      };
    }();
  }
  static {
    this.ɵfac = function FileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FileService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: FileService,
      factory: FileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_service_file_service_ts.js.map