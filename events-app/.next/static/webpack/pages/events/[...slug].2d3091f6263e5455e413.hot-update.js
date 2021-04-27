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
/* harmony import */ var D_Projects_learn_nextjs_events_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/api-util */ "./helpers/api-util.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/events/results-title */ "./components/events/results-title.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/button */ "./components/ui/button.js");
/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/error-alert */ "./components/ui/error-alert.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "D:\\Projects\\learn-nextjs\\events-app\\pages\\events\\[...slug].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projects_learn_nextjs_events_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function FilteredEventsPage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      loadedEvents = _useState[0],
      setLoadedEvents = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var filterData = router.query.slug;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])("https://nextjs-course-4b290-default-rtdb.firebaseio.com/events.json"),
      data = _useSWR.data,
      error = _useSWR.error;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (data) {
      var events = [];

      for (var key in data) {
        events.push(_objectSpread({
          id: key
        }, data[key]));
      }

      setLoadedEvents(events);
    }
  }, [data]);

  var pageHeadData = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Filtered events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "A list of filtered events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);

  if (!loadedEvents) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "center",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;
  pageHeadData = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Filtered events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "All events for ".concat(numMonth, "/").concat(numYear, ".")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filter. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = loadedEvents.filter(function (event) {
    var eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "No events found for the chosen filter!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this);
  }

  var date = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_results_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, this);
} // Server-side rendering
// export async function getServerSideProps(context){
//   const{params} = context;
//   const filterData = params.slug;
//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];
//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;
//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props:{hasError:true}
//       // notFound:true,
//     };
//   }
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });
//   return {
//     props: {
//       events:filteredEvents,
//       date : {
//         year:numYear,
//         month:numMonth,
//       },
//     }
//   };
// }


_s(FilteredEventsPage, "baGcR2zYNkTBGEMbpcQg6la1mJw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = FilteredEventsPage;
/* harmony default export */ __webpack_exports__["default"] = (FilteredEventsPage);

var _c;

$RefreshReg$(_c, "FilteredEventsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkRXZlbnRzIiwic2V0TG9hZGVkRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsInVzZUVmZmVjdCIsImV2ZW50cyIsImtleSIsInB1c2giLCJpZCIsInBhZ2VIZWFkRGF0YSIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImZpbHRlcmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJldmVudERhdGUiLCJEYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsRUFEZjtBQUFBLE1BQzFCQyxZQUQwQjtBQUFBLE1BQ1pDLGVBRFk7O0FBRWpDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQzs7QUFKaUMsZ0JBTVRDLG1EQUFNLENBQzVCLHFFQUQ0QixDQU5HO0FBQUEsTUFNekJDLElBTnlCLFdBTXpCQSxJQU55QjtBQUFBLE1BTW5CQyxLQU5tQixXQU1uQkEsS0FObUI7O0FBVWpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixJQUFKLEVBQVU7QUFDUixVQUFNRyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQU1D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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBV0Q7O0FBRUQsTUFBTVcsSUFBSSxHQUFHLElBQUlELElBQUosQ0FBU1AsT0FBVCxFQUFrQkMsUUFBUSxHQUFHLENBQTdCLENBQWI7QUFFQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLGVBQ0dKLFlBREgsZUFFRSxxRUFBQyx3RUFBRDtBQUFjLFVBQUksRUFBRVc7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMscUVBQUQ7QUFBVyxXQUFLLEVBQUVMO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9ELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FySlN4QixrQjtVQUVRTSxxRCxFQUlTSSwyQzs7O0tBTmpCVixrQjtBQXVKTUEsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1suLi5zbHVnXS4yZDMwOTFmNjI2M2U1NDU1ZTQxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaS11dGlsXCI7XG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0XCI7XG5pbXBvcnQgUmVzdWx0c1RpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9yZXN1bHRzLXRpdGxlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvZXJyb3ItYWxlcnRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZnVuY3Rpb24gRmlsdGVyZWRFdmVudHNQYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtsb2FkZWRFdmVudHMsIHNldExvYWRlZEV2ZW50c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLTRiMjkwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvblwiXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIC4uLmRhdGFba2V5XSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXRMb2FkZWRFdmVudHMoZXZlbnRzKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgbGV0IHBhZ2VIZWFkRGF0YSA9IChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5GaWx0ZXJlZCBldmVudHM8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgbGlzdCBvZiBmaWx0ZXJlZCBldmVudHNcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcblxuICBpZiAoIWxvYWRlZEV2ZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHtwYWdlSGVhZERhdGF9XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkxvYWRpbmcuLi48L3A+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdO1xuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcblxuICBjb25zdCBudW1ZZWFyID0gK2ZpbHRlcmVkWWVhcjtcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcblxuICBwYWdlSGVhZERhdGEgPSAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+RmlsdGVyZWQgZXZlbnRzPC90aXRsZT5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbnRlbnQ9e2BBbGwgZXZlbnRzIGZvciAke251bU1vbnRofS8ke251bVllYXJ9LmB9XG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgKTtcblxuICBpZiAoXG4gICAgaXNOYU4obnVtWWVhcikgfHxcbiAgICBpc05hTihudW1Nb250aCkgfHxcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxuICAgIG51bVllYXIgPCAyMDIxIHx8XG4gICAgbnVtTW9udGggPCAxIHx8XG4gICAgbnVtTW9udGggPiAxMlxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7cGFnZUhlYWREYXRhfVxuICAgICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgICA8cD5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+XG4gICAgICAgIDwvRXJyb3JBbGVydD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9XCIvZXZlbnRzXCI+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBsb2FkZWRFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gbnVtWWVhciAmJlxuICAgICAgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxuICAgICk7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge3BhZ2VIZWFkRGF0YX1cbiAgICAgICAgPEVycm9yQWxlcnQ+XG4gICAgICAgICAgPHA+Tm8gZXZlbnRzIGZvdW5kIGZvciB0aGUgY2hvc2VuIGZpbHRlciE8L3A+XG4gICAgICAgIDwvRXJyb3JBbGVydD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9XCIvZXZlbnRzXCI+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG51bVllYXIsIG51bU1vbnRoIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7cGFnZUhlYWREYXRhfVxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfSAvPlxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuLy8gU2VydmVyLXNpZGUgcmVuZGVyaW5nXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuLy8gICBjb25zdHtwYXJhbXN9ID0gY29udGV4dDtcblxuLy8gICBjb25zdCBmaWx0ZXJEYXRhID0gcGFyYW1zLnNsdWc7XG5cbi8vICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbi8vICAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbi8vICAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4vLyAgIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbi8vICAgaWYgKFxuLy8gICAgIGlzTmFOKG51bVllYXIpIHx8XG4vLyAgICAgaXNOYU4obnVtTW9udGgpIHx8XG4vLyAgICAgbnVtWWVhciA+IDIwMzAgfHxcbi8vICAgICBudW1ZZWFyIDwgMjAyMSB8fFxuLy8gICAgIG51bU1vbnRoIDwgMSB8fFxuLy8gICAgIG51bU1vbnRoID4gMTJcbi8vICAgKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOntoYXNFcnJvcjp0cnVlfVxuLy8gICAgICAgLy8gbm90Rm91bmQ6dHJ1ZSxcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XG4vLyAgICAgeWVhcjogbnVtWWVhcixcbi8vICAgICBtb250aDogbnVtTW9udGgsXG4vLyAgIH0pO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIGV2ZW50czpmaWx0ZXJlZEV2ZW50cyxcbi8vICAgICAgIGRhdGUgOiB7XG4vLyAgICAgICAgIHllYXI6bnVtWWVhcixcbi8vICAgICAgICAgbW9udGg6bnVtTW9udGgsXG4vLyAgICAgICB9LFxuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==