webpackHotUpdate_N_E("pages/events/[eventId]",{

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
      children: "Submit Comment"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXctY29tbWVudC5qcyJdLCJuYW1lcyI6WyJOZXdDb21tZW50IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzSW52YWxpZCIsInNldElzSW52YWxpZCIsImVtYWlsSW5wdXRSZWYiLCJ1c2VSZWYiLCJuYW1lSW5wdXRSZWYiLCJjb21tZW50SW5wdXRSZWYiLCJzZW5kQ29tbWVudEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZE5hbWUiLCJlbnRlcmVkQ29tbWVudCIsInRyaW0iLCJpbmNsdWRlcyIsIm9uQWRkQ29tbWVudCIsImVtYWlsIiwibmFtZSIsInRleHQiLCJjbGFzc2VzIiwiZm9ybSIsInJvdyIsImNvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ2xCQyxTQURrQjtBQUFBLE1BQ1BDLFlBRE87O0FBR3pCLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdELG9EQUFNLEVBQTNCO0FBQ0EsTUFBTUUsZUFBZSxHQUFHRixvREFBTSxFQUE5Qjs7QUFFQSxXQUFTRyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDakNBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLFlBQVksR0FBR1AsYUFBYSxDQUFDUSxPQUFkLENBQXNCQyxLQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBR1IsWUFBWSxDQUFDTSxPQUFiLENBQXFCQyxLQUF6QztBQUNBLFFBQU1FLGNBQWMsR0FBR1IsZUFBZSxDQUFDSyxPQUFoQixDQUF3QkMsS0FBL0M7O0FBRUEsUUFDRSxDQUFDRixZQUFELElBQ0FBLFlBQVksQ0FBQ0ssSUFBYixPQUF3QixFQUR4QixJQUVBLENBQUNMLFlBQVksQ0FBQ00sUUFBYixDQUFzQixHQUF0QixDQUZELElBR0EsQ0FBQ0gsV0FIRCxJQUlBQSxXQUFXLENBQUNFLElBQVosT0FBdUIsRUFKdkIsSUFLQSxDQUFDRCxjQUxELElBTUFBLGNBQWMsQ0FBQ0MsSUFBZixPQUEwQixFQVA1QixFQVFFO0FBQ0FiLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0E7QUFDRDs7QUFFREgsU0FBSyxDQUFDa0IsWUFBTixDQUFtQjtBQUNqQkMsV0FBSyxFQUFFUixZQURVO0FBRWpCUyxVQUFJLEVBQUVOLFdBRlc7QUFHakJPLFVBQUksRUFBRU47QUFIVyxLQUFuQjtBQUtEOztBQUVELHNCQUNFO0FBQU0sYUFBUyxFQUFFTyw4REFBTyxDQUFDQyxJQUF6QjtBQUErQixZQUFRLEVBQUVmLGtCQUF6QztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFYyw4REFBTyxDQUFDRSxHQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsOERBQU8sQ0FBQ0csT0FBeEI7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsWUFBRSxFQUFDLE9BQXZCO0FBQStCLGFBQUcsRUFBRXJCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUVrQiw4REFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFFLEVBQUMsTUFBdEI7QUFBNkIsYUFBRyxFQUFFbkI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUssZUFBUyxFQUFFZ0IsOERBQU8sQ0FBQ0csT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFVLFVBQUUsRUFBQyxTQUFiO0FBQXVCLFlBQUksRUFBQyxHQUE1QjtBQUFnQyxXQUFHLEVBQUVsQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsRUFlR0wsU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZoQixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0F0RFFILFU7O0tBQUFBLFU7QUF3RE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bZXZlbnRJZF0uZmMxYTQ1NmQ0NWNmMTdhN2NlOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25ldy1jb21tZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBOZXdDb21tZW50KHByb3BzKSB7XG4gIGNvbnN0IFtpc0ludmFsaWQsIHNldElzSW52YWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29tbWVudElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gc2VuZENvbW1lbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkTmFtZSA9IG5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRDb21tZW50ID0gY29tbWVudElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBpZiAoXG4gICAgICAhZW50ZXJlZEVtYWlsIHx8XG4gICAgICBlbnRlcmVkRW1haWwudHJpbSgpID09PSAnJyB8fFxuICAgICAgIWVudGVyZWRFbWFpbC5pbmNsdWRlcygnQCcpIHx8XG4gICAgICAhZW50ZXJlZE5hbWUgfHxcbiAgICAgIGVudGVyZWROYW1lLnRyaW0oKSA9PT0gJycgfHxcbiAgICAgICFlbnRlcmVkQ29tbWVudCB8fFxuICAgICAgZW50ZXJlZENvbW1lbnQudHJpbSgpID09PSAnJ1xuICAgICkge1xuICAgICAgc2V0SXNJbnZhbGlkKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb3BzLm9uQWRkQ29tbWVudCh7XG4gICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgbmFtZTogZW50ZXJlZE5hbWUsXG4gICAgICB0ZXh0OiBlbnRlcmVkQ29tbWVudCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzZW5kQ29tbWVudEhhbmRsZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5Zb3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPllvdXIgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSduYW1lJyByZWY9e25hbWVJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29tbWVudCc+WW91ciBjb21tZW50PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGlkPSdjb21tZW50JyByb3dzPSc1JyByZWY9e2NvbW1lbnRJbnB1dFJlZn0+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzSW52YWxpZCAmJiA8cD5QbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIGFuZCBjb21tZW50ITwvcD59XG4gICAgICA8YnV0dG9uPlN1Ym1pdCBDb21tZW50PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdDb21tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==