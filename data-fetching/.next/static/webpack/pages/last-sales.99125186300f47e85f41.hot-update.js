webpackHotUpdate_N_E("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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



function LastSalesPage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
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

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 16
    }, this);
  }

  if (!sales) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: sales.map(function (sale) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [sale.username, " - $", sale.volume]
      }, sale.id, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 26
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 12
  }, this);
}

_s(LastSalesPage, "c+X+bUeHHb7DD9DeEt3gLkugrDk=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = LastSalesPage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcyJdLCJuYW1lcyI6WyJMYXN0U2FsZXNQYWdlIiwidXNlU3RhdGUiLCJzYWxlcyIsInNldFNhbGVzIiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwidHJhbnNmb3JtZWRTYWxlcyIsImtleSIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwidm9sdW1lIiwibWFwIiwic2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsRUFEZDtBQUFBLE1BQ2JDLEtBRGE7QUFBQSxNQUNOQyxRQURNLGlCQUVwQjs7O0FBRm9CLGdCQUlFQyxtREFBTSxDQUFDLG9FQUFELENBSlI7QUFBQSxNQUliQyxJQUphLFdBSWJBLElBSmE7QUFBQSxNQUlQQyxLQUpPLFdBSVBBLEtBSk87O0FBTXBCQyx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHRixJQUFILEVBQVE7QUFDSixVQUFNRyxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFDQSxXQUFLLElBQU1DLEdBQVgsSUFBa0JKLElBQWxCLEVBQXVCO0FBQ25CRyx3QkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBc0I7QUFBQ0MsWUFBRSxFQUFDRixHQUFKO0FBQ2xCRyxrQkFBUSxFQUFDUCxJQUFJLENBQUNJLEdBQUQsQ0FBSixDQUFVRyxRQUREO0FBRWxCQyxnQkFBTSxFQUFDUixJQUFJLENBQUNJLEdBQUQsQ0FBSixDQUFVSTtBQUZDLFNBQXRCO0FBR0g7O0FBRURWLGNBQVEsQ0FBQ0ssZ0JBQUQsQ0FBUjtBQUNIO0FBQ0osR0FYUSxFQVdOLENBQUNILElBQUQsQ0FYTSxDQUFULENBTm9CLENBb0JwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFHQyxLQUFILEVBQVM7QUFDTCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBRUQsTUFBRyxDQUFDRCxJQUFKLEVBQVM7QUFDTCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBRUQsTUFBRyxDQUFDSCxLQUFKLEVBQVU7QUFDTix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBRUQsc0JBQU87QUFBQSxjQUNGQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsMEJBQUU7QUFBQSxtQkFDaEJBLElBQUksQ0FBQ0gsUUFEVyxVQUNHRyxJQUFJLENBQUNGLE1BRFI7QUFBQSxTQUFXRSxJQUFJLENBQUNKLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRjtBQUFBLEtBQWQ7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFJSDs7R0F0RFFYLGE7VUFJaUJJLDJDOzs7S0FKakJKLGE7QUF3RE1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhc3Qtc2FsZXMuOTkxMjUxODYzMDBmNDdlODVmNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcclxuLy8gdXNlRWZmZWN0IC0gZmV0Y2goKVxyXG4vLyB1c2VTV1JcclxuLy8gY29tYmluaW5nIHByZS1mZXRjaGluZyB3aXRoIGNsaWVudCBzaWRlIGZldGNoaW5nXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UoKXtcclxuICAgIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUignaHR0cHM6Ly9uZXh0anMtY291cnNlLTRiMjkwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSl7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe2lkOmtleSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ZGF0YVtrZXldLnVzZXJuYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWU6ZGF0YVtrZXldLnZvbHVtZX0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkYXRhXSlcclxuXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57fSxbXSk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyAgICAgZmV0Y2goJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS00YjI5MC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbidcclxuICAgIC8vICAgICApLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gICAgIC50aGVuKGRhdGE9PntcclxuICAgIC8vICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xyXG4gICAgLy8gICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKXtcclxuICAgIC8vICAgICAgICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7aWQ6a2V5LCBcclxuICAgIC8vICAgICAgICAgICAgICAgICB1c2VybmFtZTpkYXRhW2tleV0udXNlcm5hbWUsIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZvbHVtZTpkYXRhW2tleV0udm9sdW1lfSlcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcclxuICAgIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiA8cD5mYWlsZWQgdG8gbG9hZDwvcD5cclxuICAgIH1cclxuXHJcbiAgICBpZighZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXNhbGVzKXtcclxuICAgICAgICByZXR1cm4gPHA+bG9hZGluZy4uLjwvcD5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPHVsPlxyXG4gICAgICAgIHtzYWxlcy5tYXAoc2FsZT0+PGxpIGtleSA9IHtzYWxlLmlkfT5cclxuICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfTwvbGk+KX1cclxuICAgIDwvdWw+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==