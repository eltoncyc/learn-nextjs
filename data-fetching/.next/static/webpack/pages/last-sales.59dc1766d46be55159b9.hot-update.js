webpackHotUpdate_N_E("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


var _jsxFileName = "D:\\Projects\\learn-nextjs\\data-fetching\\pages\\last-sales.js",
    _s = $RefreshSig$();

// client side data fetching
// useEffect - fetch()
// useSWR
// combining pre-fetching with client side fetching



function LastSalesPage(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.sales),
      sales = _useState[0],
      setSales = _useState[1]; // const [isLoading, setIsLoading] = useState(false);


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('https://nextjs-course-4b290-default-rtdb.firebaseio.com/sales.json'),
      data = _useSWR.data,
      error = _useSWR.error;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      var transformedSales = [];

      for (var key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        });
      }

      setSales(transformedSales);
    }
  }, [data]); // useEffect(()=>{},[]);
  // useEffect(()=>{
  //     setIsLoading(true);
  //     fetch('https://nextjs-course-4b290-default-rtdb.firebaseio.com/sales.json'
  //     ).then((response)=>response.json())
  //     .then(data=>{
  //         const transformedSales = [];
  //         for (const key in data){
  //             transformedSales.push({id:key, 
  //                 username:data[key].username, 
  //                 volume:data[key].volume})
  //         }
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "failed to load"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 16
    }, this);
  }

  if (!data && !sales) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 16
    }, this);
  }

  ;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: sales.map(function (sale) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [sale.username, " - $", sale.volume]
      }, sale.id, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 26
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 12
  }, this);
}

_s(LastSalesPage, "shvM6MHhBRL/BOoAQa6GnPsqpoM=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = LastSalesPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (LastSalesPage);

var _c;

$RefreshReg$(_c, "LastSalesPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcyJdLCJuYW1lcyI6WyJMYXN0U2FsZXNQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNhbGVzIiwic2V0U2FsZXMiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJ0cmFuc2Zvcm1lZFNhbGVzIiwia2V5IiwicHVzaCIsImlkIiwidXNlcm5hbWUiLCJ2b2x1bWUiLCJtYXAiLCJzYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsS0FBUCxDQURUO0FBQUEsTUFDbEJBLEtBRGtCO0FBQUEsTUFDWEMsUUFEVyxpQkFFekI7OztBQUZ5QixnQkFJSEMsbURBQU0sQ0FBQyxvRUFBRCxDQUpIO0FBQUEsTUFJbEJDLElBSmtCLFdBSWxCQSxJQUprQjtBQUFBLE1BSVpDLEtBSlksV0FJWkEsS0FKWTs7QUFNekJDLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUdGLElBQUgsRUFBUTtBQUNKLFVBQU1HLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLFdBQUssSUFBTUMsR0FBWCxJQUFrQkosSUFBbEIsRUFBdUI7QUFDbkJHLHdCQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUFDQyxZQUFFLEVBQUNGLEdBQUo7QUFDbEJHLGtCQUFRLEVBQUNQLElBQUksQ0FBQ0ksR0FBRCxDQUFKLENBQVVHLFFBREQ7QUFFbEJDLGdCQUFNLEVBQUNSLElBQUksQ0FBQ0ksR0FBRCxDQUFKLENBQVVJO0FBRkMsU0FBdEI7QUFHSDs7QUFFRFYsY0FBUSxDQUFDSyxnQkFBRCxDQUFSO0FBQ0g7QUFDSixHQVhRLEVBV04sQ0FBQ0gsSUFBRCxDQVhNLENBQVQsQ0FOeUIsQ0FvQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQUdDLEtBQUgsRUFBUztBQUNMLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxNQUFHLENBQUNELElBQUQsSUFBUyxDQUFDSCxLQUFiLEVBQW1CO0FBQ2Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUFBO0FBR0Qsc0JBQU87QUFBQSxjQUNGQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsMEJBQUU7QUFBQSxtQkFDaEJBLElBQUksQ0FBQ0gsUUFEVyxVQUNHRyxJQUFJLENBQUNGLE1BRFI7QUFBQSxTQUFXRSxJQUFJLENBQUNKLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRjtBQUFBLEtBQWQ7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFJSDs7R0FuRFFaLGE7VUFJaUJLLDJDOzs7S0FKakJMLGE7O0FBd0VNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXN0LXNhbGVzLjU5ZGMxNzY2ZDQ2YmU1NTE1OWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXHJcbi8vIHVzZUVmZmVjdCAtIGZldGNoKClcclxuLy8gdXNlU1dSXHJcbi8vIGNvbWJpbmluZyBwcmUtZmV0Y2hpbmcgd2l0aCBjbGllbnQgc2lkZSBmZXRjaGluZ1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKHByb3BzKXtcclxuICAgIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUocHJvcHMuc2FsZXMpO1xyXG4gICAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKCdodHRwczovL25leHRqcy1jb3Vyc2UtNGIyOTAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKXtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7aWQ6a2V5LCBcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTpkYXRhW2tleV0udXNlcm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZTpkYXRhW2tleV0udm9sdW1lfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2RhdGFdKVxyXG5cclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9Pnt9LFtdKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIC8vICAgICBmZXRjaCgnaHR0cHM6Ly9uZXh0anMtY291cnNlLTRiMjkwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJ1xyXG4gICAgLy8gICAgICkudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAgICAgLnRoZW4oZGF0YT0+e1xyXG4gICAgLy8gICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XHJcbiAgICAvLyAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpe1xyXG4gICAgLy8gICAgICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtpZDprZXksIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHVzZXJuYW1lOmRhdGFba2V5XS51c2VybmFtZSwgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdm9sdW1lOmRhdGFba2V5XS52b2x1bWV9KVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xyXG4gICAgLy8gICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICBpZihlcnJvcil7XHJcbiAgICAgICAgcmV0dXJuIDxwPmZhaWxlZCB0byBsb2FkPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFkYXRhICYmICFzYWxlcyl7XHJcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gPHVsPlxyXG4gICAgICAgIHtzYWxlcy5tYXAoc2FsZT0+PGxpIGtleSA9IHtzYWxlLmlkfT5cclxuICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfTwvbGk+KX1cclxuICAgIDwvdWw+XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXh0anMtY291cnNlLTRiMjkwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSl7XHJcbiAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6a2V5LCBcclxuICAgICAgICAgICAgdXNlcm5hbWU6ZGF0YVtrZXldLnVzZXJuYW1lLCBcclxuICAgICAgICAgICAgdm9sdW1lOmRhdGFba2V5XS52b2x1bWV9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e3NhbGVzOnRyYW5zZm9ybWVkU2FsZXN9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6MTBcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=