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
/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/notification-context */ "./store/notification-context.js");


var _jsxFileName = "D:\\Projects\\learn-nextjs\\events-api-app\\components\\input\\comments.js",
    _s = $RefreshSig$();







function Comments(props) {
  _s();

  var eventId = props.eventId;
  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_5__["default"]);

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
    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Your comment is currently being sent',
      status: 'pending'
    }); // send data to API

    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Your comment was saved!',
        status: 'success'
      });
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _comments_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.comments,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: toggleCommentsHandler,
      children: [showComments ? 'Hide' : 'Show', " Comments"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_new_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddComment: addCommentHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 24
    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_comment_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: comments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(Comments, "MwPCIVFUQX0VOxTxIpLrTQfVNWs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcyJdLCJuYW1lcyI6WyJDb21tZW50cyIsInByb3BzIiwiZXZlbnRJZCIsIm5vdGlmaWNhdGlvbkN0eCIsInVzZUNvbnRleHQiLCJOb3RpZmljYXRpb25Db250ZXh0IiwidXNlU3RhdGUiLCJzaG93Q29tbWVudHMiLCJzZXRTaG93Q29tbWVudHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRvZ2dsZUNvbW1lbnRzSGFuZGxlciIsInByZXZTdGF0dXMiLCJhZGRDb21tZW50SGFuZGxlciIsImNvbW1lbnREYXRhIiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsTUFDZkMsT0FEZSxHQUNIRCxLQURHLENBQ2ZDLE9BRGU7QUFHdkIsTUFBTUMsZUFBZSxHQUFHQyx3REFBVSxDQUFDQyxtRUFBRCxDQUFsQzs7QUFIdUIsa0JBS2lCQyxzREFBUSxDQUFDLEtBQUQsQ0FMekI7QUFBQSxNQUtoQkMsWUFMZ0I7QUFBQSxNQUtGQyxlQUxFOztBQUFBLG1CQU9TRixzREFBUSxDQUFDLEVBQUQsQ0FQakI7QUFBQSxNQU9oQkcsUUFQZ0I7QUFBQSxNQU9OQyxXQVBNOztBQVN2QkMseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBR0osWUFBSCxFQUFnQjtBQUNkSyxXQUFLLENBQUMsbUJBQWlCVixPQUFsQixDQUFMLENBQ0NXLElBREQsQ0FDTSxVQUFBQyxRQUFRO0FBQUEsZUFBRUEsUUFBUSxDQUFDQyxJQUFULEVBQUY7QUFBQSxPQURkLEVBRUNGLElBRkQsQ0FFTSxVQUFDRyxJQUFELEVBQVE7QUFDWk4sbUJBQVcsQ0FBQ00sSUFBSSxDQUFDUCxRQUFOLENBQVg7QUFFRCxPQUxEO0FBTUQ7QUFDRixHQVRRLEVBU1AsQ0FBQ0YsWUFBRCxDQVRPLENBQVQ7O0FBVUEsV0FBU1UscUJBQVQsR0FBaUM7QUFDL0JULG1CQUFlLENBQUMsVUFBQ1UsVUFBRDtBQUFBLGFBQWdCLENBQUNBLFVBQWpCO0FBQUEsS0FBRCxDQUFmO0FBSUQ7O0FBRUQsV0FBU0MsaUJBQVQsQ0FBMkJDLFdBQTNCLEVBQXdDO0FBQ3RDakIsbUJBQWUsQ0FBQ2tCLGdCQUFoQixDQUFpQztBQUMvQkMsV0FBSyxFQUFDLG9CQUR5QjtBQUUvQkMsYUFBTyxFQUFFLHNDQUZzQjtBQUcvQkMsWUFBTSxFQUFDO0FBSHdCLEtBQWpDLEVBRHNDLENBTXRDOztBQUNBWixTQUFLLENBQUMsbUJBQWtCVixPQUFuQixFQUE0QjtBQUMvQnVCLFlBQU0sRUFBQyxNQUR3QjtBQUUvQkMsVUFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsV0FBZixDQUYwQjtBQUcvQlMsYUFBTyxFQUFDO0FBQ04sd0JBQWU7QUFEVDtBQUh1QixLQUE1QixDQUFMLENBTUdoQixJQU5ILENBTVEsVUFBQUMsUUFBUTtBQUFBLGFBQUVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFGO0FBQUEsS0FOaEIsRUFPQ0YsSUFQRCxDQU9NLFVBQUNHLElBQUQsRUFBUTtBQUNaYixxQkFBZSxDQUFDa0IsZ0JBQWhCLENBQWlDO0FBQy9CQyxhQUFLLEVBQUMsVUFEeUI7QUFFL0JDLGVBQU8sRUFBRSx5QkFGc0I7QUFHL0JDLGNBQU0sRUFBQztBQUh3QixPQUFqQztBQUtELEtBYkQ7QUFjRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRU0sMkRBQU8sQ0FBQ3JCLFFBQTVCO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVRLHFCQUFqQjtBQUFBLGlCQUNHVixZQUFZLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUdBLFlBQVksaUJBQUkscUVBQUMsb0RBQUQ7QUFBWSxrQkFBWSxFQUFFWTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSm5CLEVBS0daLFlBQVksaUJBQUkscUVBQUMscURBQUQ7QUFBYSxXQUFLLEVBQUVFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0ExRFFULFE7O0tBQUFBLFE7QUE0RE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bZXZlbnRJZF0uOThlNGU1MzUwYWY0NjQzZWVmYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuL2NvbW1lbnQtbGlzdCc7XG5pbXBvcnQgTmV3Q29tbWVudCBmcm9tICcuL25ldy1jb21tZW50JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29tbWVudHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XG5cbmZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gIGNvbnN0IHsgZXZlbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICBjb25zdCBbc2hvd0NvbW1lbnRzLCBzZXRTaG93Q29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKHNob3dDb21tZW50cyl7XG4gICAgICBmZXRjaCgnL2FwaS9jb21tZW50cy8nK2V2ZW50SWQpXG4gICAgICAudGhlbihyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpPT57XG4gICAgICAgIHNldENvbW1lbnRzKGRhdGEuY29tbWVudHMpO1xuXG4gICAgICB9KVxuICAgIH1cbiAgfSxbc2hvd0NvbW1lbnRzXSlcbiAgZnVuY3Rpb24gdG9nZ2xlQ29tbWVudHNIYW5kbGVyKCkge1xuICAgIHNldFNob3dDb21tZW50cygocHJldlN0YXR1cykgPT4gIXByZXZTdGF0dXMpO1xuXG5cblxuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ29tbWVudEhhbmRsZXIoY29tbWVudERhdGEpIHtcbiAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICB0aXRsZTonU2VuZGluZyBjb21tZW50Li4uJyxcbiAgICAgIG1lc3NhZ2U6ICdZb3VyIGNvbW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIHNlbnQnLFxuICAgICAgc3RhdHVzOidwZW5kaW5nJ1xuICAgIH0pXG4gICAgLy8gc2VuZCBkYXRhIHRvIEFQSVxuICAgIGZldGNoKCcvYXBpL2NvbW1lbnRzLycrIGV2ZW50SWQsIHtcbiAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGNvbW1lbnREYXRhKSxcbiAgICAgIGhlYWRlcnM6e1xuICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9KS50aGVuKHJlc3BvbnNlPT5yZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpPT57XG4gICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHRpdGxlOidTdWNjZXNzIScsXG4gICAgICAgIG1lc3NhZ2U6ICdZb3VyIGNvbW1lbnQgd2FzIHNhdmVkIScsXG4gICAgICAgIHN0YXR1czonc3VjY2VzcydcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tZW50c30+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzSGFuZGxlcn0+XG4gICAgICAgIHtzaG93Q29tbWVudHMgPyAnSGlkZScgOiAnU2hvdyd9IENvbW1lbnRzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtzaG93Q29tbWVudHMgJiYgPE5ld0NvbW1lbnQgb25BZGRDb21tZW50PXthZGRDb21tZW50SGFuZGxlcn0gLz59XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxDb21tZW50TGlzdCBpdGVtcz17Y29tbWVudHN9Lz59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiJdLCJzb3VyY2VSb290IjoiIn0=