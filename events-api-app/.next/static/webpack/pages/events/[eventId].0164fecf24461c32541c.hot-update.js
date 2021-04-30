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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      comments = _useState2[0],
      setComments = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (showComments) {
      fetch('/api/comments/' + eventId).then(function (response) {
        return response.json();
      }).then(function (data) {
        setComments(data.comments);
      });
    }
  }, [showComments]);

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
      lineNumber: 45,
      columnNumber: 7
    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_new_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddComment: addCommentHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 24
    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_comment_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: comments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s(Comments, "s7Ua4oZer57BXoYludj/2o2YLho=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcyJdLCJuYW1lcyI6WyJDb21tZW50cyIsInByb3BzIiwiZXZlbnRJZCIsInVzZVN0YXRlIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0b2dnbGVDb21tZW50c0hhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYWRkQ29tbWVudEhhbmRsZXIiLCJjb21tZW50RGF0YSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLE1BQ2ZDLE9BRGUsR0FDSEQsS0FERyxDQUNmQyxPQURlOztBQUFBLGtCQUdpQkMsc0RBQVEsQ0FBQyxLQUFELENBSHpCO0FBQUEsTUFHaEJDLFlBSGdCO0FBQUEsTUFHRkMsZUFIRTs7QUFBQSxtQkFLU0Ysc0RBQVEsQ0FBQyxFQUFELENBTGpCO0FBQUEsTUFLaEJHLFFBTGdCO0FBQUEsTUFLTkMsV0FMTTs7QUFPdkJDLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQUdKLFlBQUgsRUFBZ0I7QUFDZEssV0FBSyxDQUFDLG1CQUFpQlAsT0FBbEIsQ0FBTCxDQUNDUSxJQURELENBQ00sVUFBQUMsUUFBUTtBQUFBLGVBQUVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFGO0FBQUEsT0FEZCxFQUVDRixJQUZELENBRU0sVUFBQ0csSUFBRCxFQUFRO0FBQ1pOLG1CQUFXLENBQUNNLElBQUksQ0FBQ1AsUUFBTixDQUFYO0FBRUQsT0FMRDtBQU1EO0FBQ0YsR0FUUSxFQVNQLENBQUNGLFlBQUQsQ0FUTyxDQUFUOztBQVVBLFdBQVNVLHFCQUFULEdBQWlDO0FBQy9CVCxtQkFBZSxDQUFDLFVBQUNVLFVBQUQ7QUFBQSxhQUFnQixDQUFDQSxVQUFqQjtBQUFBLEtBQUQsQ0FBZjtBQUlEOztBQUVELFdBQVNDLGlCQUFULENBQTJCQyxXQUEzQixFQUF3QztBQUN0QztBQUNBUixTQUFLLENBQUMsbUJBQWtCUCxPQUFuQixFQUE0QjtBQUMvQmdCLFlBQU0sRUFBQyxNQUR3QjtBQUUvQkMsVUFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosV0FBZixDQUYwQjtBQUcvQkssYUFBTyxFQUFDO0FBQ04sd0JBQWU7QUFEVDtBQUh1QixLQUE1QixDQUFMLENBTUdaLElBTkgsQ0FNUSxVQUFBQyxRQUFRO0FBQUEsYUFBRUEsUUFBUSxDQUFDQyxJQUFULEVBQUY7QUFBQSxLQU5oQixFQU9DRixJQVBELENBT00sVUFBQ0csSUFBRDtBQUFBLGFBQVFVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxJQUFaLENBQVI7QUFBQSxLQVBOO0FBUUQ7O0FBRUQsc0JBQ0U7QUFBUyxhQUFTLEVBQUVZLDJEQUFPLENBQUNuQixRQUE1QjtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFUSxxQkFBakI7QUFBQSxpQkFDR1YsWUFBWSxHQUFHLE1BQUgsR0FBWSxNQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlHQSxZQUFZLGlCQUFJLHFFQUFDLG9EQUFEO0FBQVksa0JBQVksRUFBRVk7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpuQixFQUtHWixZQUFZLGlCQUFJLHFFQUFDLHFEQUFEO0FBQWEsV0FBSyxFQUFFRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBN0NRTixROztLQUFBQSxRO0FBK0NNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLjAxNjRmZWNmMjQ0NjFjMzI1NDFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi9jb21tZW50LWxpc3QnO1xuaW1wb3J0IE5ld0NvbW1lbnQgZnJvbSAnLi9uZXctY29tbWVudCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2NvbW1lbnRzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDb21tZW50cyhwcm9wcykge1xuICBjb25zdCB7IGV2ZW50SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtzaG93Q29tbWVudHMsIHNldFNob3dDb21tZW50c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoc2hvd0NvbW1lbnRzKXtcbiAgICAgIGZldGNoKCcvYXBpL2NvbW1lbnRzLycrZXZlbnRJZClcbiAgICAgIC50aGVuKHJlc3BvbnNlPT5yZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSk9PntcbiAgICAgICAgc2V0Q29tbWVudHMoZGF0YS5jb21tZW50cyk7XG5cbiAgICAgIH0pXG4gICAgfVxuICB9LFtzaG93Q29tbWVudHNdKVxuICBmdW5jdGlvbiB0b2dnbGVDb21tZW50c0hhbmRsZXIoKSB7XG4gICAgc2V0U2hvd0NvbW1lbnRzKChwcmV2U3RhdHVzKSA9PiAhcHJldlN0YXR1cyk7XG5cblxuXG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50SGFuZGxlcihjb21tZW50RGF0YSkge1xuICAgIC8vIHNlbmQgZGF0YSB0byBBUElcbiAgICBmZXRjaCgnL2FwaS9jb21tZW50cy8nKyBldmVudElkLCB7XG4gICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShjb21tZW50RGF0YSksXG4gICAgICBoZWFkZXJzOntcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSkudGhlbihyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKT0+Y29uc29sZS5sb2coZGF0YSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29tbWVudHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb21tZW50c0hhbmRsZXJ9PlxuICAgICAgICB7c2hvd0NvbW1lbnRzID8gJ0hpZGUnIDogJ1Nob3cnfSBDb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxOZXdDb21tZW50IG9uQWRkQ29tbWVudD17YWRkQ29tbWVudEhhbmRsZXJ9IC8+fVxuICAgICAge3Nob3dDb21tZW50cyAmJiA8Q29tbWVudExpc3QgaXRlbXM9e2NvbW1lbnRzfS8+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9