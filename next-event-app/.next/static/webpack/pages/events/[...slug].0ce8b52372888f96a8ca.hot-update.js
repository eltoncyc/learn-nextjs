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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ "./components/events/results-title.js");


var _jsxFileName = "D:\\Projects\\learn-nextjs\\next-event-app\\pages\\events\\[...slug].js",
    _this = undefined,
    _s = $RefreshSig$();







var FilteredEventPage = function FilteredEventPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var filterData = router.query.slug;

  if (!filterData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }, _this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Invalid filter. Please adjust your search."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 16
    }, _this);
  }

  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__["getFilteredEvents"])({
    year: numYear,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No events found for the chosen filter!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }, _this);
  }

  var date = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(FilteredEventPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwieWVhciIsIm1vbnRoIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBQyxTQUFsQkEsaUJBQWtCLEdBQUk7QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDOztBQUVBLE1BQUcsQ0FBQ0YsVUFBSixFQUFlO0FBQ1gsd0JBQU87QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0g7O0FBRUQsTUFBTUcsWUFBWSxHQUFHSCxVQUFVLENBQUMsQ0FBRCxDQUEvQjtBQUNBLE1BQU1JLGFBQWEsR0FBR0osVUFBVSxDQUFDLENBQUQsQ0FBaEM7QUFFQSxNQUFNSyxPQUFPLEdBQUcsQ0FBQ0YsWUFBakI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0YsYUFBbEI7O0FBRUEsTUFBR0csS0FBSyxDQUFDRixPQUFELENBQUwsSUFBa0JFLEtBQUssQ0FBQ0QsUUFBRCxDQUF2QixJQUNIRCxPQUFPLEdBQUMsSUFETCxJQUNhQSxPQUFPLEdBQUcsSUFEdkIsSUFFSEMsUUFBUSxHQUFHLEVBRlIsSUFFYUEsUUFBUSxHQUFDLENBRnpCLEVBRTJCO0FBQ3ZCLHdCQUFPLHFFQUFDLDhDQUFEO0FBQUEsNkJBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFHSDs7QUFFRCxNQUFNRSxjQUFjLEdBQUdDLHFFQUFpQixDQUFDO0FBQ3JDQyxRQUFJLEVBQUNMLE9BRGdDO0FBRXJDTSxTQUFLLEVBQUNMO0FBRitCLEdBQUQsQ0FBeEM7O0FBS0EsTUFBRyxDQUFDRSxjQUFELElBQW1CQSxjQUFjLENBQUNJLE1BQWYsS0FBd0IsQ0FBOUMsRUFBZ0Q7QUFDNUMsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNIOztBQUVELE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNULE9BQVQsRUFBa0JDLFFBQVEsR0FBRSxDQUE1QixDQUFiO0FBR0Esc0JBQ0kscUVBQUMsOENBQUQ7QUFBQSw0QkFDQSxxRUFBQyx3RUFBRDtBQUFjLFVBQUksRUFBRU87QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUkscUVBQUMscUVBQUQ7QUFBVyxXQUFLLEVBQUVMO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBeENEOztHQUFNWCxpQjtVQUNhRSxxRDs7O0tBRGJGLGlCO0FBMENTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvWy4uLnNsdWddLjBjZThiNTIzNzI4ODhmOTZhOGNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vZHVtbXktZGF0YSc7XHJcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCc7XHJcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvcmVzdWx0cy10aXRsZSc7XHJcblxyXG5jb25zdCBGaWx0ZXJlZEV2ZW50UGFnZT0oKT0+e1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XHJcblxyXG4gICAgaWYoIWZpbHRlckRhdGEpe1xyXG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NlbnRlcic+TG9hZGluZy4uLjwvcD47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcclxuICAgIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xyXG5cclxuICAgIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xyXG4gICAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcclxuXHJcbiAgICBpZihpc05hTihudW1ZZWFyKSB8fCBpc05hTihudW1Nb250aCkgfHwgXHJcbiAgICBudW1ZZWFyPjIwMzAgfHwgbnVtWWVhciA8IDIwMjEgfHxcclxuICAgIG51bU1vbnRoID4gMTJ8fCBudW1Nb250aDwxKXtcclxuICAgICAgICByZXR1cm4gPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cD5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHNlYXJjaC48L3A+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGdldEZpbHRlcmVkRXZlbnRzKHtcclxuICAgICAgICB5ZWFyOm51bVllYXIsXHJcbiAgICAgICAgbW9udGg6bnVtTW9udGhcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGg9PT0wKXtcclxuICAgICAgICByZXR1cm4gPHA+Tm8gZXZlbnRzIGZvdW5kIGZvciB0aGUgY2hvc2VuIGZpbHRlciE8L3A+XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG51bVllYXIsIG51bU1vbnRoIC0xKTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGV9Lz5cclxuICAgICAgICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9Lz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==