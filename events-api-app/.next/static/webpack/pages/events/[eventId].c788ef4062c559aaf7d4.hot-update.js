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
      className: _new_comment_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form.button,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXctY29tbWVudC5qcyJdLCJuYW1lcyI6WyJOZXdDb21tZW50IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzSW52YWxpZCIsInNldElzSW52YWxpZCIsImVtYWlsSW5wdXRSZWYiLCJ1c2VSZWYiLCJuYW1lSW5wdXRSZWYiLCJjb21tZW50SW5wdXRSZWYiLCJzZW5kQ29tbWVudEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZE5hbWUiLCJlbnRlcmVkQ29tbWVudCIsInRyaW0iLCJpbmNsdWRlcyIsIm9uQWRkQ29tbWVudCIsImVtYWlsIiwibmFtZSIsInRleHQiLCJjbGFzc2VzIiwiZm9ybSIsInJvdyIsImNvbnRyb2wiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ2xCQyxTQURrQjtBQUFBLE1BQ1BDLFlBRE87O0FBR3pCLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdELG9EQUFNLEVBQTNCO0FBQ0EsTUFBTUUsZUFBZSxHQUFHRixvREFBTSxFQUE5Qjs7QUFFQSxXQUFTRyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDakNBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLFlBQVksR0FBR1AsYUFBYSxDQUFDUSxPQUFkLENBQXNCQyxLQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBR1IsWUFBWSxDQUFDTSxPQUFiLENBQXFCQyxLQUF6QztBQUNBLFFBQU1FLGNBQWMsR0FBR1IsZUFBZSxDQUFDSyxPQUFoQixDQUF3QkMsS0FBL0M7O0FBRUEsUUFDRSxDQUFDRixZQUFELElBQ0FBLFlBQVksQ0FBQ0ssSUFBYixPQUF3QixFQUR4QixJQUVBLENBQUNMLFlBQVksQ0FBQ00sUUFBYixDQUFzQixHQUF0QixDQUZELElBR0EsQ0FBQ0gsV0FIRCxJQUlBQSxXQUFXLENBQUNFLElBQVosT0FBdUIsRUFKdkIsSUFLQSxDQUFDRCxjQUxELElBTUFBLGNBQWMsQ0FBQ0MsSUFBZixPQUEwQixFQVA1QixFQVFFO0FBQ0FiLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0E7QUFDRDs7QUFFREgsU0FBSyxDQUFDa0IsWUFBTixDQUFtQjtBQUNqQkMsV0FBSyxFQUFFUixZQURVO0FBRWpCUyxVQUFJLEVBQUVOLFdBRlc7QUFHakJPLFVBQUksRUFBRU47QUFIVyxLQUFuQjtBQUtEOztBQUVELHNCQUNFO0FBQU0sYUFBUyxFQUFFTyw4REFBTyxDQUFDQyxJQUF6QjtBQUErQixZQUFRLEVBQUVmLGtCQUF6QztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFYyw4REFBTyxDQUFDRSxHQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsOERBQU8sQ0FBQ0csT0FBeEI7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsWUFBRSxFQUFDLE9BQXZCO0FBQStCLGFBQUcsRUFBRXJCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUVrQiw4REFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFFLEVBQUMsTUFBdEI7QUFBNkIsYUFBRyxFQUFFbkI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUssZUFBUyxFQUFFZ0IsOERBQU8sQ0FBQ0csT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFVLFVBQUUsRUFBQyxTQUFiO0FBQXVCLFlBQUksRUFBQyxHQUE1QjtBQUFnQyxXQUFHLEVBQUVsQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsRUFlR0wsU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZoQixlQWdCRTtBQUFRLGVBQVMsRUFBRW9CLDhEQUFPLENBQUNDLElBQVIsQ0FBYUcsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBdERRM0IsVTs7S0FBQUEsVTtBQXdETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1tldmVudElkXS5jNzg4ZWY0MDYyYzU1OWFhZjdkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbmV3LWNvbW1lbnQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5ld0NvbW1lbnQocHJvcHMpIHtcbiAgY29uc3QgW2lzSW52YWxpZCwgc2V0SXNJbnZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb21tZW50SW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBmdW5jdGlvbiBzZW5kQ29tbWVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWROYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZENvbW1lbnQgPSBjb21tZW50SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGlmIChcbiAgICAgICFlbnRlcmVkRW1haWwgfHxcbiAgICAgIGVudGVyZWRFbWFpbC50cmltKCkgPT09ICcnIHx8XG4gICAgICAhZW50ZXJlZEVtYWlsLmluY2x1ZGVzKCdAJykgfHxcbiAgICAgICFlbnRlcmVkTmFtZSB8fFxuICAgICAgZW50ZXJlZE5hbWUudHJpbSgpID09PSAnJyB8fFxuICAgICAgIWVudGVyZWRDb21tZW50IHx8XG4gICAgICBlbnRlcmVkQ29tbWVudC50cmltKCkgPT09ICcnXG4gICAgKSB7XG4gICAgICBzZXRJc0ludmFsaWQodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvcHMub25BZGRDb21tZW50KHtcbiAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcbiAgICAgIHRleHQ6IGVudGVyZWRDb21tZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3NlbmRDb21tZW50SGFuZGxlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPllvdXIgZW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9e2VtYWlsSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25hbWUnIHJlZj17bmFtZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdjb21tZW50Jz5Zb3VyIGNvbW1lbnQ8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9J2NvbW1lbnQnIHJvd3M9JzUnIHJlZj17Y29tbWVudElucHV0UmVmfT48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNJbnZhbGlkICYmIDxwPlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MgYW5kIGNvbW1lbnQhPC9wPn1cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm0uYnV0dG9ufT5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0NvbW1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9