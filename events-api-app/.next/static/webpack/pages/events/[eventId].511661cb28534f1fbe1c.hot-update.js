webpackHotUpdate_N_E("pages/events/[eventId]",{

/***/ "./components/input/comments.js":
/*!**************************************!*\
  !*** ./components/input/comments.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-list */ "./components/input/comment-list.js");
/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-comment */ "./components/input/new-comment.js");
/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments.module.css */ "./components/input/comments.module.css");
/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Projects\\learn-nextjs\\events-api-app\\components\\input\\comments.js",
    _s = $RefreshSig$();






function Comments(props) {
  _s();

  var eventId = props.eventId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showComments = _useState[0],
      setShowComments = _useState[1];

  function toggleCommentsHandler() {
    setShowComments(function (prevStatus) {
      return !prevStatus;
    });
  }

  function addCommentHandler(commentData) {
    // send data to API
    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return console.log(data);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _comments_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.comments,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: toggleCommentsHandler,
      children: [showComments ? 'Hide' : 'Show', " Comments"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_new_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddComment: addCommentHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 24
    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_comment_list__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(Comments, "gUalz5uzo2DQxKYlHRyIpHQgmLQ=");

_c = Comments;
/* harmony default export */ __webpack_exports__["default"] = (Comments);

var _c;

$RefreshReg$(_c, "Comments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/input/new-comment.js":
/*!*****************************************!*\
  !*** ./components/input/new-comment.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-comment.module.css */ "./components/input/new-comment.module.css");
/* harmony import */ var _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_comment_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Projects\\learn-nextjs\\events-api-app\\components\\input\\new-comment.js",
    _s = $RefreshSig$();




function NewComment(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isInvalid = _useState[0],
      setIsInvalid = _useState[1];

  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var commentInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function sendCommentHandler(event) {
    event.preventDefault();
    var enteredEmail = emailInputRef.current.value;
    var enteredName = nameInputRef.current.value;
    var enteredComment = commentInputRef.current.value;

    if (!enteredEmail || enteredEmail.trim() === '' || !enteredEmail.includes('@') || !enteredName || enteredName.trim() === '' || !enteredComment || enteredComment.trim() === '') {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
    onSubmit: sendCommentHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          ref: emailInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          children: "Your name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          ref: nameInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "comment",
        children: "Your comment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        id: "comment",
        rows: "5",
        ref: commentInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), isInvalid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Please enter a valid email address and comment!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(NewComment, "shnA/fndA2fZM1qYDvr//SN1INg=");

_c = NewComment;
/* harmony default export */ __webpack_exports__["default"] = (NewComment);

var _c;

$RefreshReg$(_c, "NewComment");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXctY29tbWVudC5qcyJdLCJuYW1lcyI6WyJDb21tZW50cyIsInByb3BzIiwiZXZlbnRJZCIsInVzZVN0YXRlIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwidG9nZ2xlQ29tbWVudHNIYW5kbGVyIiwicHJldlN0YXR1cyIsImFkZENvbW1lbnRIYW5kbGVyIiwiY29tbWVudERhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJjb21tZW50cyIsIk5ld0NvbW1lbnQiLCJpc0ludmFsaWQiLCJzZXRJc0ludmFsaWQiLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwibmFtZUlucHV0UmVmIiwiY29tbWVudElucHV0UmVmIiwic2VuZENvbW1lbnRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWROYW1lIiwiZW50ZXJlZENvbW1lbnQiLCJ0cmltIiwiaW5jbHVkZXMiLCJvbkFkZENvbW1lbnQiLCJlbWFpbCIsIm5hbWUiLCJ0ZXh0IiwiZm9ybSIsInJvdyIsImNvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsTUFDZkMsT0FEZSxHQUNIRCxLQURHLENBQ2ZDLE9BRGU7O0FBQUEsa0JBR2lCQyxzREFBUSxDQUFDLEtBQUQsQ0FIekI7QUFBQSxNQUdoQkMsWUFIZ0I7QUFBQSxNQUdGQyxlQUhFOztBQUt2QixX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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1tldmVudElkXS41MTE2NjFjYjI4NTM0ZjFmYmUxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuL2NvbW1lbnQtbGlzdCc7XG5pbXBvcnQgTmV3Q29tbWVudCBmcm9tICcuL25ldy1jb21tZW50JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29tbWVudHMubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gIGNvbnN0IHsgZXZlbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3Nob3dDb21tZW50cywgc2V0U2hvd0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVDb21tZW50c0hhbmRsZXIoKSB7XG4gICAgc2V0U2hvd0NvbW1lbnRzKChwcmV2U3RhdHVzKSA9PiAhcHJldlN0YXR1cyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50SGFuZGxlcihjb21tZW50RGF0YSkge1xuICAgIC8vIHNlbmQgZGF0YSB0byBBUElcbiAgICBmZXRjaCgnL2FwaS9jb21tZW50cy8nKyBldmVudElkLCB7XG4gICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShjb21tZW50RGF0YSksXG4gICAgICBoZWFkZXJzOntcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSkudGhlbihyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKT0+Y29uc29sZS5sb2coZGF0YSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29tbWVudHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb21tZW50c0hhbmRsZXJ9PlxuICAgICAgICB7c2hvd0NvbW1lbnRzID8gJ0hpZGUnIDogJ1Nob3cnfSBDb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxOZXdDb21tZW50IG9uQWRkQ29tbWVudD17YWRkQ29tbWVudEhhbmRsZXJ9IC8+fVxuICAgICAge3Nob3dDb21tZW50cyAmJiA8Q29tbWVudExpc3QgLz59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25ldy1jb21tZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBOZXdDb21tZW50KHByb3BzKSB7XG4gIGNvbnN0IFtpc0ludmFsaWQsIHNldElzSW52YWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29tbWVudElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gc2VuZENvbW1lbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkTmFtZSA9IG5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRDb21tZW50ID0gY29tbWVudElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBpZiAoXG4gICAgICAhZW50ZXJlZEVtYWlsIHx8XG4gICAgICBlbnRlcmVkRW1haWwudHJpbSgpID09PSAnJyB8fFxuICAgICAgIWVudGVyZWRFbWFpbC5pbmNsdWRlcygnQCcpIHx8XG4gICAgICAhZW50ZXJlZE5hbWUgfHxcbiAgICAgIGVudGVyZWROYW1lLnRyaW0oKSA9PT0gJycgfHxcbiAgICAgICFlbnRlcmVkQ29tbWVudCB8fFxuICAgICAgZW50ZXJlZENvbW1lbnQudHJpbSgpID09PSAnJ1xuICAgICkge1xuICAgICAgc2V0SXNJbnZhbGlkKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb3BzLm9uQWRkQ29tbWVudCh7XG4gICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgbmFtZTogZW50ZXJlZE5hbWUsXG4gICAgICB0ZXh0OiBlbnRlcmVkQ29tbWVudCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzZW5kQ29tbWVudEhhbmRsZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5Zb3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPllvdXIgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSduYW1lJyByZWY9e25hbWVJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29tbWVudCc+WW91ciBjb21tZW50PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGlkPSdjb21tZW50JyByb3dzPSc1JyByZWY9e2NvbW1lbnRJbnB1dFJlZn0+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzSW52YWxpZCAmJiA8cD5QbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIGFuZCBjb21tZW50ITwvcD59XG4gICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3Q29tbWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=