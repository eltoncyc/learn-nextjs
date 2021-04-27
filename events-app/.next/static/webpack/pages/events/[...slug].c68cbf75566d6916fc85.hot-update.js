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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])('https://nextjs-course-4b290-default-rtdb.firebaseio.com/events.json'),
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
      lineNumber: 35,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "A list of filtered events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 23
  }, this);

  if (!loadedEvents) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "center",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
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
      lineNumber: 56,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "All events for ".concat(numMonth, "/").concat(numYear, ".")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 22
  }, this);

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filter. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this);
  }

  var date = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_results_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
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


_s(FilteredEventsPage, "GX80lACDceDfc4Z9DzgY4WObsPA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkRXZlbnRzIiwic2V0TG9hZGVkRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsInVzZUVmZmVjdCIsImV2ZW50cyIsImtleSIsInB1c2giLCJpZCIsInBhZ2VIZWFkRGF0YSIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImZpbHRlcmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJldmVudERhdGUiLCJEYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsRUFEZjtBQUFBLE1BQzFCQyxZQUQwQjtBQUFBLE1BQ1pDLGVBRFk7O0FBRWpDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQzs7QUFKaUMsZ0JBTVhDLG1EQUFNLENBQUMscUVBQUQsQ0FOSztBQUFBLE1BTTFCQyxJQU4wQixXQU0xQkEsSUFOMEI7QUFBQSxNQU1wQkMsS0FOb0IsV0FNcEJBLEtBTm9COztBQVFqQ0MseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBR0YsSUFBSCxFQUFRO0FBQ04sVUFBTUcsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsV0FBSSxJQUFNQyxHQUFWLElBQWlCSixJQUFqQixFQUFzQjtBQUNwQkcsY0FBTSxDQUFDRSxJQUFQO0FBQ0VDLFlBQUUsRUFBQ0Y7QUFETCxXQUVLSixJQUFJLENBQUNJLEdBQUQsQ0FGVDtBQUlEOztBQUNEWCxxQkFBZSxDQUFDVSxNQUFELENBQWY7QUFDRDtBQUNGLEdBWFEsRUFXTixDQUFDSCxJQUFELENBWE0sQ0FBVDs7QUFlQSxNQUFJTyxZQUFZLGdCQUFJLHFFQUFDLGlEQUFEO0FBQUEsNEJBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRG9CLGVBRXBCO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFDQSxhQUFPLEVBQUM7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFwQjs7QUFNQSxNQUFJLENBQUNmLFlBQUwsRUFBbUI7QUFDakIsd0JBQ0EscUVBQUMsOENBQUQ7QUFBQSxpQkFDR2UsWUFESCxlQUVFO0FBQUcsaUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREE7QUFNRDs7QUFFRCxNQUFNQyxZQUFZLEdBQUdaLFVBQVUsQ0FBQyxDQUFELENBQS9CO0FBQ0EsTUFBTWEsYUFBYSxHQUFHYixVQUFVLENBQUMsQ0FBRCxDQUFoQztBQUVBLE1BQU1jLE9BQU8sR0FBRyxDQUFDRixZQUFqQjtBQUNBLE1BQU1HLFFBQVEsR0FBRyxDQUFDRixhQUFsQjtBQUVBRixjQUFZLGdCQUFPLHFFQUFDLGlEQUFEO0FBQUEsNEJBQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRG1CLGVBRW5CO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFDQSxhQUFPLDJCQUFvQkksUUFBcEIsY0FBZ0NELE9BQWhDO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBbkI7O0FBT0EsTUFDRUUsS0FBSyxDQUFDRixPQUFELENBQUwsSUFDQUUsS0FBSyxDQUFDRCxRQUFELENBREwsSUFFQUQsT0FBTyxHQUFHLElBRlYsSUFHQUEsT0FBTyxHQUFHLElBSFYsSUFJQUMsUUFBUSxHQUFHLENBSlgsSUFLQUEsUUFBUSxHQUFHLEVBTmIsRUFPRTtBQUNBLHdCQUNFLHFFQUFDLDhDQUFEO0FBQUEsaUJBQ0NKLFlBREQsZUFFRSxxRUFBQyxrRUFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBV0Q7O0FBRUQsTUFBTU0sY0FBYyxHQUFHckIsWUFBWSxDQUFDc0IsTUFBYixDQUFvQixVQUFDQyxLQUFELEVBQVc7QUFDcEQsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU0YsS0FBSyxDQUFDRyxJQUFmLENBQWxCO0FBQ0EsV0FDRUYsU0FBUyxDQUFDRyxXQUFWLE9BQTRCVCxPQUE1QixJQUNBTSxTQUFTLENBQUNJLFFBQVYsT0FBeUJULFFBQVEsR0FBRyxDQUZ0QztBQUlELEdBTnNCLENBQXZCOztBQVFBLE1BQUksQ0FBQ0UsY0FBRCxJQUFtQkEsY0FBYyxDQUFDUSxNQUFmLEtBQTBCLENBQWpELEVBQW9EO0FBQ2xELHdCQUNFLHFFQUFDLDhDQUFEO0FBQUEsaUJBQ0NkLFlBREQsZUFFRSxxRUFBQyxrRUFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBV0Q7O0FBRUQsTUFBTVcsSUFBSSxHQUFHLElBQUlELElBQUosQ0FBU1AsT0FBVCxFQUFrQkMsUUFBUSxHQUFHLENBQTdCLENBQWI7QUFFQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLGVBQ0dKLFlBREgsZUFFRSxxRUFBQyx3RUFBRDtBQUFjLFVBQUksRUFBRVc7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMscUVBQUQ7QUFBVyxXQUFLLEVBQUVMO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9ELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FqSlN4QixrQjtVQUVRTSxxRCxFQUlPSSwyQzs7O0tBTmZWLGtCO0FBcUpNQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmM2OGNiZjc1NTY2ZDY5MTZmYzg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwaS11dGlsJztcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCc7XG5pbXBvcnQgUmVzdWx0c1RpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL3Jlc3VsdHMtdGl0bGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgRXJyb3JBbGVydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL2Vycm9yLWFsZXJ0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZShwcm9wcykge1xuICBjb25zdCBbbG9hZGVkRXZlbnRzLCBzZXRMb2FkZWRFdmVudHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xuXG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS00YjI5MC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZXZlbnRzLmpzb24nKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZihkYXRhKXtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xuICAgICAgZm9yKGNvbnN0IGtleSBpbiBkYXRhKXtcbiAgICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAgIGlkOmtleSxcbiAgICAgICAgICAuLi5kYXRhW2tleV0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2V0TG9hZGVkRXZlbnRzKGV2ZW50cyk7XG4gICAgfVxuICB9LCBbZGF0YV0pXG5cbiAgXG5cbiAgbGV0IHBhZ2VIZWFkRGF0YSA9ICA8SGVhZD5cbiAgPHRpdGxlPkZpbHRlcmVkIGV2ZW50czwvdGl0bGU+XG4gIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIFxuICBjb250ZW50PVwiQSBsaXN0IG9mIGZpbHRlcmVkIGV2ZW50c1wiLz5cbjwvSGVhZD5cblxuICBpZiAoIWxvYWRlZEV2ZW50cykge1xuICAgIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3BhZ2VIZWFkRGF0YX1cbiAgICAgIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5Mb2FkaW5nLi4uPC9wPlxuICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuICBcbiAgcGFnZUhlYWREYXRhID0gICAgIDxIZWFkPlxuICA8dGl0bGU+RmlsdGVyZWQgZXZlbnRzPC90aXRsZT5cbiAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgXG4gIGNvbnRlbnQ9e2BBbGwgZXZlbnRzIGZvciAke251bU1vbnRofS8ke251bVllYXJ9LmB9Lz5cbjwvSGVhZD5cblxuXG4gIGlmICAoXG4gICAgaXNOYU4obnVtWWVhcikgfHxcbiAgICBpc05hTihudW1Nb250aCkgfHxcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxuICAgIG51bVllYXIgPCAyMDIxIHx8XG4gICAgbnVtTW9udGggPCAxIHx8XG4gICAgbnVtTW9udGggPiAxMlxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAge3BhZ2VIZWFkRGF0YX1cbiAgICAgICAgPEVycm9yQWxlcnQ+XG4gICAgICAgICAgPHA+SW52YWxpZCBmaWx0ZXIuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPlxuICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxuICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBsb2FkZWRFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gbnVtWWVhciAmJlxuICAgICAgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxuICAgICk7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgIHtwYWdlSGVhZERhdGF9XG4gICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgIDxwPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPlxuICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxuICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG51bVllYXIsIG51bU1vbnRoIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7cGFnZUhlYWREYXRhfVxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfSAvPlxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuLy8gU2VydmVyLXNpZGUgcmVuZGVyaW5nIFxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbi8vICAgY29uc3R7cGFyYW1zfSA9IGNvbnRleHQ7XG5cbi8vICAgY29uc3QgZmlsdGVyRGF0YSA9IHBhcmFtcy5zbHVnO1xuXG4vLyAgIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4vLyAgIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4vLyAgIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuLy8gICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuXG4vLyAgIGlmIChcbi8vICAgICBpc05hTihudW1ZZWFyKSB8fFxuLy8gICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuLy8gICAgIG51bVllYXIgPiAyMDMwIHx8XG4vLyAgICAgbnVtWWVhciA8IDIwMjEgfHxcbi8vICAgICBudW1Nb250aCA8IDEgfHxcbi8vICAgICBudW1Nb250aCA+IDEyXG4vLyAgICkge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczp7aGFzRXJyb3I6dHJ1ZX1cbi8vICAgICAgIC8vIG5vdEZvdW5kOnRydWUsXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gYXdhaXQgZ2V0RmlsdGVyZWRFdmVudHMoe1xuLy8gICAgIHllYXI6IG51bVllYXIsXG4vLyAgICAgbW9udGg6IG51bU1vbnRoLFxuLy8gICB9KTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBldmVudHM6ZmlsdGVyZWRFdmVudHMsXG4vLyAgICAgICBkYXRlIDoge1xuLy8gICAgICAgICB5ZWFyOm51bVllYXIsXG4vLyAgICAgICAgIG1vbnRoOm51bU1vbnRoLFxuLy8gICAgICAgfSxcbi8vICAgICB9XG4vLyAgIH07XG4vLyB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50c1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9