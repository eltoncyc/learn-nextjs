webpackHotUpdate_N_E("pages/events",{

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_events_events_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/events-search */ "./components/events/events-search.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Projects\\learn-nextjs\\next-event-app\\pages\\events\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var AllEventsPage = function AllEventsPage() {
  _s();

  var events = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_1__["getAllEvents"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var findEventsHandler = function findEventsHandler(year, month) {
    var fullPath = "/events/".concat(year, "/").concat(month);
    router.push(fullPath);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_events_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onSearch: findEventsHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: events
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_s(AllEventsPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = AllEventsPage;
/* harmony default export */ __webpack_exports__["default"] = (AllEventsPage);

var _c;

$RefreshReg$(_c, "AllEventsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFsbEV2ZW50c1BhZ2UiLCJldmVudHMiLCJnZXRBbGxFdmVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaW5kRXZlbnRzSGFuZGxlciIsInllYXIiLCJtb250aCIsImZ1bGxQYXRoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBQyxTQUFkQSxhQUFjLEdBQUk7QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxnRUFBWSxFQUEzQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUMsU0FBbEJBLGlCQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBZTtBQUNuQyxRQUFNQyxRQUFRLHFCQUFZRixJQUFaLGNBQW9CQyxLQUFwQixDQUFkO0FBQ0FKLFVBQU0sQ0FBQ00sSUFBUCxDQUFZRCxRQUFaO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNBLHFFQUFDLHdFQUFEO0FBQWEsY0FBUSxFQUFFSDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFSSxxRUFBQyxxRUFBRDtBQUFXLFdBQUssRUFBR0o7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FkRDs7R0FBTUQsYTtVQUVhSSxxRDs7O0tBRmJKLGE7QUFnQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy4wNzg0YzY3Y2FiN2ExMmRmN2ZmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRBbGxFdmVudHN9IGZyb20gJy4uLy4uL2R1bW15LWRhdGEnO1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQWxsRXZlbnRzUGFnZT0oKT0+e1xyXG4gICAgY29uc3QgZXZlbnRzID0gZ2V0QWxsRXZlbnRzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGZpbmRFdmVudHNIYW5kbGVyPSh5ZWFyLCBtb250aCk9PntcclxuICAgICAgICBjb25zdCBmdWxsUGF0aD1gL2V2ZW50cy8ke3llYXJ9LyR7bW9udGh9YDtcclxuICAgICAgICByb3V0ZXIucHVzaChmdWxsUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEV2ZW50U2VhcmNoIG9uU2VhcmNoPXtmaW5kRXZlbnRzSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICA8RXZlbnRMaXN0IGl0ZW1zID17ZXZlbnRzfS8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEV2ZW50c1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==