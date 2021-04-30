module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/comments/[eventId].js");
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

/***/ "./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/db-util */ "./helpers/db-util.js");


async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;

  try {
    client = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__["connectDatabase"])();
  } catch (error) {
    res.status(500).json({
      message: 'Connecting to the datbase failed!'
    });
    return;
  }

  if (req.method === 'POST') {
    const {
      email,
      name,
      text
    } = req.body; //add server side validation

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({
        message: 'Invalid Input.'
      });
      return;
    }

    console.log(email, name, text);
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
      eventId
    };
    let result;

    try {
      result = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__["insertDocument"])(client, 'comments', newComment);
    } catch (error) {
      res.status(500).json({
        message: 'Inserting comment failed!'
      });
      client.close();
      return;
    }

    newComment._id = result.insertedId;
    res.status(201).json({
      message: 'Added comment.',
      comment: newComment
    });
  }

  if (req.method === 'GET') {
    try {
      const documents = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__["getAllDocuments"])(client, 'comments', {
        _id: -1
      });
      res.status(200).json({
        comments: documents
      });
    } catch (error) {
      res.status(500).json({
        message: 'Getting comments failed.'
      });
      client.close();
      return;
    }
  }

  client.close();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9kYi11dGlsLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jb21tZW50cy9bZXZlbnRJZF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sIm5hbWVzIjpbImNvbm5lY3REYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImluc2VydERvY3VtZW50IiwiY29sbGVjdGlvbiIsImRvY3VtZW50IiwiZGIiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJnZXRBbGxEb2N1bWVudHMiLCJzb3J0IiwiZG9jdW1lbnRzIiwiZmluZCIsInRvQXJyYXkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXZlbnRJZCIsInF1ZXJ5IiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm1ldGhvZCIsImVtYWlsIiwibmFtZSIsInRleHQiLCJib2R5IiwiaW5jbHVkZXMiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsIm5ld0NvbW1lbnQiLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNsb3NlIiwiX2lkIiwiaW5zZXJ0ZWRJZCIsImNvbW1lbnQiLCJjb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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LFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGVBQU8sRUFBQztBQUFULE9BQXJCO0FBQ0F0QixZQUFNLENBQUNvQyxLQUFQO0FBQ0E7QUFDSDs7QUFFREosY0FBVSxDQUFDSyxHQUFYLEdBQWlCOUIsTUFBTSxDQUFDK0IsVUFBeEI7QUFDQXRCLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGFBQU8sRUFBQyxnQkFBVDtBQUEwQmlCLGFBQU8sRUFBQ1A7QUFBbEMsS0FBckI7QUFDSDs7QUFFRCxNQUFHakIsR0FBRyxDQUFDUSxNQUFKLEtBQWEsS0FBaEIsRUFBc0I7QUFHbEIsUUFBRztBQUNDLFlBQU1aLFNBQVMsR0FBRyxNQUFNRix3RUFBZSxDQUFDVCxNQUFELEVBQVMsVUFBVCxFQUFxQjtBQUFDcUMsV0FBRyxFQUFDLENBQUM7QUFBTixPQUFyQixDQUF2QztBQUNBckIsU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ21CLGdCQUFRLEVBQUM3QjtBQUFWLE9BQXJCO0FBQ0gsS0FIRCxDQUdDLE9BQU1RLEtBQU4sRUFBWTtBQUNUSCxTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFyQjtBQUNBdEIsWUFBTSxDQUFDb0MsS0FBUDtBQUNBO0FBQ0g7QUFHSjs7QUFFRHBDLFFBQU0sQ0FBQ29DLEtBQVA7QUFDSDs7QUFFY3RCLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDbEVBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9jb21tZW50cy9bZXZlbnRJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jb21tZW50cy9bZXZlbnRJZF0uanNcIik7XG4iLCJpbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tICdtb25nb2RiJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0RGF0YWJhc2UoKXtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgICAgJ21vbmdvZGIrc3J2Oi8vYWRtaW4tdXNlcjpDMTIzNDU2QGNsdXN0ZXIwLmZ0dTlmLm1vbmdvZGIubmV0L2V2ZW50cz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbiAgICAgICAgKTtcclxuICAgIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnREb2N1bWVudChjbGllbnQsIGNvbGxlY3Rpb24sZG9jdW1lbnQpe1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuaW5zZXJ0T25lKGRvY3VtZW50KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0KXtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXHJcbiAgICAuZmluZCgpXHJcbiAgICAuc29ydChzb3J0KS50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gZG9jdW1lbnRzO1xyXG59XHJcbiIsImltcG9ydCB7Y29ubmVjdERhdGFiYXNlLCBnZXRBbGxEb2N1bWVudHMsIGluc2VydERvY3VtZW50fSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2RiLXV0aWwnXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcclxuXHJcblxyXG4gICAgY29uc3QgZXZlbnRJZCA9IHJlcS5xdWVyeS5ldmVudElkO1xyXG4gICAgbGV0IGNsaWVudDtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFiYXNlKCk7XHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiAnQ29ubmVjdGluZyB0byB0aGUgZGF0YmFzZSBmYWlsZWQhJ30pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmKHJlcS5tZXRob2Q9PT0nUE9TVCcpe1xyXG4gICAgICAgIGNvbnN0IHtlbWFpbCwgbmFtZSwgdGV4dH0gPSByZXEuYm9keTtcclxuICAgICAgICAvL2FkZCBzZXJ2ZXIgc2lkZSB2YWxpZGF0aW9uXHJcbiAgICAgICAgaWYoIWVtYWlsLmluY2x1ZGVzKCdAJylcclxuICAgICAgICB8fCAhbmFtZSB8fCBuYW1lLnRyaW0oKT09PScnXHJcbiAgICAgICAgfHwhdGV4dHx8dGV4dC50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHttZXNzYWdlOidJbnZhbGlkIElucHV0Lid9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwsIG5hbWUsIHRleHQpO1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgICAgIGlkOm5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIGV2ZW50SWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGluc2VydERvY3VtZW50KGNsaWVudCwgJ2NvbW1lbnRzJywgbmV3Q29tbWVudCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6J0luc2VydGluZyBjb21tZW50IGZhaWxlZCEnfSk7XHJcbiAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIG5ld0NvbW1lbnQuX2lkID0gcmVzdWx0Lmluc2VydGVkSWQ7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6J0FkZGVkIGNvbW1lbnQuJyxjb21tZW50Om5ld0NvbW1lbnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihyZXEubWV0aG9kPT09J0dFVCcpe1xyXG5cclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCAnY29tbWVudHMnLCB7X2lkOi0xfSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtjb21tZW50czpkb2N1bWVudHN9KTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTonR2V0dGluZyBjb21tZW50cyBmYWlsZWQuJ30pXHJcbiAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==