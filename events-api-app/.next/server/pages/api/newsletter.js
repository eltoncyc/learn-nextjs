module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/newsletter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/*! exports provided: connectDatabase, insertDocument, getAllDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectDatabase", function() { return connectDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertDocument", function() { return insertDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDocuments", function() { return getAllDocuments; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function connectDatabase() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect('mongodb+srv://admin-user:C123456@cluster0.ftu9f.mongodb.net/events?retryWrites=true&w=majority');
  return client;
}
async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}
async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}

/***/ }),

/***/ "./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/db-util */ "./helpers/db-util.js");


async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({
        message: 'Invalid email address.'
      });
      return;
    }

    let client;

    try {
      client = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__["connectDatabase"])();
    } catch (error) {
      res.status(500).json({
        message: 'Connecting to the database failed!'
      });
      return;
    }

    try {
      await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__["insertDocument"])(client, 'emails', {
        email: userEmail
      });
      client.close();
    } catch (error) {
      res.status(500).json({
        message: 'inserting data failed'
      });
      return;
    }

    res.status(201).json({
      message: 'Signed up!'
    });
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9kYi11dGlsLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJpbnNlcnREb2N1bWVudCIsImNvbGxlY3Rpb24iLCJkb2N1bWVudCIsImRiIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiZ2V0QWxsRG9jdW1lbnRzIiwic29ydCIsImRvY3VtZW50cyIsImZpbmQiLCJ0b0FycmF5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJFbWFpbCIsImJvZHkiLCJlbWFpbCIsImluY2x1ZGVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sZUFBZUEsZUFBZixHQUFnQztBQUNuQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNqQixnR0FEaUIsQ0FBckI7QUFHQSxTQUFPRixNQUFQO0FBQ0g7QUFFTSxlQUFlRyxjQUFmLENBQThCSCxNQUE5QixFQUFzQ0ksVUFBdEMsRUFBaURDLFFBQWpELEVBQTBEO0FBQzdELFFBQU1DLEVBQUUsR0FBR04sTUFBTSxDQUFDTSxFQUFQLEVBQVg7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUQsRUFBRSxDQUFDRixVQUFILENBQWNBLFVBQWQsRUFBMEJJLFNBQTFCLENBQW9DSCxRQUFwQyxDQUFyQjtBQUNBLFNBQU9FLE1BQVA7QUFDSDtBQUVNLGVBQWVFLGVBQWYsQ0FBK0JULE1BQS9CLEVBQXVDSSxVQUF2QyxFQUFtRE0sSUFBbkQsRUFBd0Q7QUFHM0QsUUFBTUosRUFBRSxHQUFHTixNQUFNLENBQUNNLEVBQVAsRUFBWDtBQUNBLFFBQU1LLFNBQVMsR0FBRyxNQUFNTCxFQUFFLENBQ3pCRixVQUR1QixDQUNaQSxVQURZLEVBRXZCUSxJQUZ1QixHQUd2QkYsSUFIdUIsQ0FHbEJBLElBSGtCLEVBR1pHLE9BSFksRUFBeEI7QUFJQSxTQUFPRixTQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTs7QUFHQSxlQUFlRyxPQUFmLENBQXVCQyxHQUF2QixFQUEyQkMsR0FBM0IsRUFBK0I7QUFDM0IsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWEsTUFBaEIsRUFBdUI7QUFDbkIsVUFBTUMsU0FBUyxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsS0FBM0I7O0FBRUEsUUFBRyxDQUFDRixTQUFELElBQVksQ0FBQ0EsU0FBUyxDQUFDRyxRQUFWLENBQW1CLEdBQW5CLENBQWhCLEVBQXdDO0FBQ3BDTCxTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFyQjtBQUNBO0FBQ0g7O0FBRUQsUUFBSXhCLE1BQUo7O0FBQ0EsUUFBRztBQUNDQSxZQUFNLEdBQUcsTUFBTUQsd0VBQWUsRUFBOUI7QUFDSCxLQUZELENBRUMsT0FBTTBCLEtBQU4sRUFBWTtBQUNUVCxTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFyQjtBQUNBO0FBQ0g7O0FBRUQsUUFBRztBQUNDLFlBQU1yQix1RUFBYyxDQUFDSCxNQUFELEVBQVMsUUFBVCxFQUFrQjtBQUFDb0IsYUFBSyxFQUFDRjtBQUFQLE9BQWxCLENBQXBCO0FBQ0FsQixZQUFNLENBQUMwQixLQUFQO0FBQ0gsS0FIRCxDQUdDLE9BQU1ELEtBQU4sRUFBWTtBQUNUVCxTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFyQjtBQUNBO0FBRUg7O0FBRURSLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGFBQU8sRUFBQztBQUFULEtBQXJCO0FBRUg7QUFDSjs7QUFBQTtBQUVjVixzRUFBZixFOzs7Ozs7Ozs7OztBQ2xDQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvbmV3c2xldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL25ld3NsZXR0ZXIuanNcIik7XG4iLCJpbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tICdtb25nb2RiJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0RGF0YWJhc2UoKXtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgICAgJ21vbmdvZGIrc3J2Oi8vYWRtaW4tdXNlcjpDMTIzNDU2QGNsdXN0ZXIwLmZ0dTlmLm1vbmdvZGIubmV0L2V2ZW50cz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbiAgICAgICAgKTtcclxuICAgIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnREb2N1bWVudChjbGllbnQsIGNvbGxlY3Rpb24sZG9jdW1lbnQpe1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuaW5zZXJ0T25lKGRvY3VtZW50KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0KXtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXHJcbiAgICAuZmluZCgpXHJcbiAgICAuc29ydChzb3J0KS50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gZG9jdW1lbnRzO1xyXG59XHJcbiIsImltcG9ydCB7Y29ubmVjdERhdGFiYXNlLCBpbnNlcnREb2N1bWVudH0gZnJvbSAnLi4vLi4vaGVscGVycy9kYi11dGlsJ1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XHJcbiAgICBpZihyZXEubWV0aG9kPT09J1BPU1QnKXtcclxuICAgICAgICBjb25zdCB1c2VyRW1haWwgPSByZXEuYm9keS5lbWFpbDtcclxuXHJcbiAgICAgICAgaWYoIXVzZXJFbWFpbHx8IXVzZXJFbWFpbC5pbmNsdWRlcygnQCcpKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oe21lc3NhZ2U6J0ludmFsaWQgZW1haWwgYWRkcmVzcy4nfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjbGllbnQ7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjbGllbnQgPSBhd2FpdCBjb25uZWN0RGF0YWJhc2UoKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTonQ29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2UgZmFpbGVkISd9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBpbnNlcnREb2N1bWVudChjbGllbnQsICdlbWFpbHMnLHtlbWFpbDp1c2VyRW1haWx9KVxyXG4gICAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTonaW5zZXJ0aW5nIGRhdGEgZmFpbGVkJ30pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTonU2lnbmVkIHVwISd9KVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9