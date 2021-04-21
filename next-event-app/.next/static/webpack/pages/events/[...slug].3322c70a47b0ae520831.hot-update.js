webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");


var _jsxFileName = "D:\\Projects\\learn-nextjs\\next-event-app\\pages\\events\\[...slug].js",
    _this = undefined,
    _s = $RefreshSig$();





var FilteredEventPage = function FilteredEventPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var filterData = router.query.slug;

  if (!filterData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }, _this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Invalid filter. Please adjust your search."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }, _this);
  }

  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_2__["getFilteredEvents"])({
    year: numYear,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No events found for the chosen filter!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 16
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(FilteredEventPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = FilteredEventPage;
/* harmony default export */ __webpack_exports__["default"] = (FilteredEventPage);

var _c;

$RefreshReg$(_c, "FilteredEventPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwieWVhciIsIm1vbnRoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBQyxTQUFsQkEsaUJBQWtCLEdBQUk7QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDOztBQUVBLE1BQUcsQ0FBQ0YsVUFBSixFQUFlO0FBQ1gsd0JBQU87QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0g7O0FBRUQsTUFBTUcsWUFBWSxHQUFHSCxVQUFVLENBQUMsQ0FBRCxDQUEvQjtBQUNBLE1BQU1JLGFBQWEsR0FBR0osVUFBVSxDQUFDLENBQUQsQ0FBaEM7QUFFQSxNQUFNSyxPQUFPLEdBQUcsQ0FBQ0YsWUFBakI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0YsYUFBbEI7O0FBRUEsTUFBR0csS0FBSyxDQUFDRixPQUFELENBQUwsSUFBa0JFLEtBQUssQ0FBQ0QsUUFBRCxDQUF2QixJQUNIRCxPQUFPLEdBQUMsSUFETCxJQUNhQSxPQUFPLEdBQUcsSUFEdkIsSUFFSEMsUUFBUSxHQUFHLEVBRlIsSUFFYUEsUUFBUSxHQUFDLENBRnpCLEVBRTJCO0FBQ3ZCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSDs7QUFFRCxNQUFNRSxjQUFjLEdBQUdDLHFFQUFpQixDQUFDO0FBQ3JDQyxRQUFJLEVBQUNMLE9BRGdDO0FBRXJDTSxTQUFLLEVBQUNMO0FBRitCLEdBQUQsQ0FBeEM7O0FBS0EsTUFBRyxDQUFDRSxjQUFELElBQW1CQSxjQUFjLENBQUNJLE1BQWYsS0FBd0IsQ0FBOUMsRUFBZ0Q7QUFDNUMsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNIOztBQUVELHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMscUVBQUQ7QUFBVyxXQUFLLEVBQUVKO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQWxDRDs7R0FBTVgsaUI7VUFDYUUscUQ7OztLQURiRixpQjtBQW9DU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1suLi5zbHVnXS4zMzIyYzcwYTQ3YjBhZTUyMDgzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vZHVtbXktZGF0YSc7XHJcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCc7XHJcblxyXG5jb25zdCBGaWx0ZXJlZEV2ZW50UGFnZT0oKT0+e1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XHJcblxyXG4gICAgaWYoIWZpbHRlckRhdGEpe1xyXG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NlbnRlcic+TG9hZGluZy4uLjwvcD47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcclxuICAgIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xyXG5cclxuICAgIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xyXG4gICAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcclxuXHJcbiAgICBpZihpc05hTihudW1ZZWFyKSB8fCBpc05hTihudW1Nb250aCkgfHwgXHJcbiAgICBudW1ZZWFyPjIwMzAgfHwgbnVtWWVhciA8IDIwMjEgfHxcclxuICAgIG51bU1vbnRoID4gMTJ8fCBudW1Nb250aDwxKXtcclxuICAgICAgICByZXR1cm4gPHA+SW52YWxpZCBmaWx0ZXIuIFBsZWFzZSBhZGp1c3QgeW91ciBzZWFyY2guPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoe1xyXG4gICAgICAgIHllYXI6bnVtWWVhcixcclxuICAgICAgICBtb250aDpudW1Nb250aFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aD09PTApe1xyXG4gICAgICAgIHJldHVybiA8cD5ObyBldmVudHMgZm91bmQgZm9yIHRoZSBjaG9zZW4gZmlsdGVyITwvcD5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=