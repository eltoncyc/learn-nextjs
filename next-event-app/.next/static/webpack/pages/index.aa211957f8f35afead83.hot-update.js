webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item.module.css */ "./components/events/event-item.module.css");
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");
/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/date-icon */ "./components/icons/date-icon.js");
/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/address-icon */ "./components/icons/address-icon.js");
/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/arrow-right-icon */ "./components/icons/arrow-right-icon.js");


var _jsxFileName = "D:\\Projects\\learn-nextjs\\next-event-app\\components\\events\\event-item.js",
    _this = undefined;







var EventItem = function EventItem(props) {
  var title = props.title,
      image = props.image,
      date = props.date,
      location = props.location,
      id = props.id;
  var humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  var formattedAddress = location.replace(', ', '\n');
  var exploreLink = "/events/".concat(id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: '/' + image,
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.date,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_date_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: humanReadableDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.address,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_address_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: formattedAddress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          link: exploreLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Explore Event"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "classes.icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, _this);
};

_c = EventItem;
/* harmony default export */ __webpack_exports__["default"] = (EventItem);

var _c;

$RefreshReg$(_c, "EventItem");

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

/***/ }),

/***/ "./components/icons/arrow-right-icon.js":
/*!**********************************************!*\
  !*** ./components/icons/arrow-right-icon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Projects\\learn-nextjs\\next-event-app\\components\\icons\\arrow-right-icon.js";

function ArrowRightIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
      clipRule: "evenodd"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

_c = ArrowRightIcon;
/* harmony default export */ __webpack_exports__["default"] = (ArrowRightIcon);

var _c;

$RefreshReg$(_c, "ArrowRightIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29ucy9hcnJvdy1yaWdodC1pY29uLmpzIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsInByb3BzIiwidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJsb2NhdGlvbiIsImlkIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJleHBsb3JlTGluayIsImNsYXNzZXMiLCJpdGVtIiwiY29udGVudCIsInN1bW1hcnkiLCJhZGRyZXNzIiwiYWN0aW9ucyIsIkFycm93UmlnaHRJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBQyxTQUFWQSxTQUFVLENBQUFDLEtBQUssRUFBRTtBQUFBLE1BRVpDLEtBRlksR0FFd0JELEtBRnhCLENBRVpDLEtBRlk7QUFBQSxNQUVMQyxLQUZLLEdBRXdCRixLQUZ4QixDQUVMRSxLQUZLO0FBQUEsTUFFRUMsSUFGRixHQUV3QkgsS0FGeEIsQ0FFRUcsSUFGRjtBQUFBLE1BRVFDLFFBRlIsR0FFd0JKLEtBRnhCLENBRVFJLFFBRlI7QUFBQSxNQUVrQkMsRUFGbEIsR0FFd0JMLEtBRnhCLENBRWtCSyxFQUZsQjtBQUluQixNQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxJQUFKLENBQVNKLElBQVQsRUFBZUssa0JBQWYsQ0FDdEIsT0FEc0IsRUFDZDtBQUNKQyxPQUFHLEVBQUMsU0FEQTtBQUVKQyxTQUFLLEVBQUMsTUFGRjtBQUdKQyxRQUFJLEVBQUM7QUFIRCxHQURjLENBQTFCO0FBT0EsTUFBTUMsZ0JBQWdCLEdBQUdSLFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQixJQUFqQixFQUF1QixJQUF2QixDQUF6QjtBQUNBLE1BQU1DLFdBQVcscUJBQWNULEVBQWQsQ0FBakI7QUFDQSxzQkFDSTtBQUFJLGFBQVMsRUFBRVUsNkRBQU8sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRSxNQUFJZCxLQUFkO0FBQXFCLFNBQUcsRUFBRUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUVjLDZEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRiw2REFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNJO0FBQUEsb0JBQUtqQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFTLEVBQUVjLDZEQUFPLENBQUNaLElBQXhCO0FBQUEsa0NBQ0kscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsc0JBQU9HO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFNSTtBQUFLLG1CQUFTLEVBQUVTLDZEQUFPLENBQUNJLE9BQXhCO0FBQUEsa0NBQ0EscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVJO0FBQUEsc0JBQVVQO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFZSTtBQUFLLGlCQUFTLEVBQUVHLDZEQUFPLENBQUNLLE9BQXhCO0FBQUEsK0JBRUkscUVBQUMsa0RBQUQ7QUFBUSxjQUFJLEVBQUVOLFdBQWQ7QUFBQSxrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBCSCxDQXZDRDs7S0FBTWYsUztBQXlDU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREEsU0FBU3NCLGNBQVQsR0FBMEI7QUFDeEIsc0JBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFFBQUksRUFBQyxjQUhQO0FBQUEsMkJBS0U7QUFDRSxjQUFRLEVBQUMsU0FEWDtBQUVFLE9BQUMsRUFBQywwSUFGSjtBQUdFLGNBQVEsRUFBQztBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7S0FkUUEsYztBQWdCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWEyMTE5NTdmOGYzNWFmZWFkODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWl0ZW0ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvYnV0dG9uJztcclxuaW1wb3J0IERhdGVJY29uIGZyb20gJy4uL2ljb25zL2RhdGUtaWNvbic7XHJcbmltcG9ydCBBZGRyZXNzSWNvbiBmcm9tICcuLi9pY29ucy9hZGRyZXNzLWljb24nO1xyXG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnLi4vaWNvbnMvYXJyb3ctcmlnaHQtaWNvbic7XHJcblxyXG5jb25zdCBFdmVudEl0ZW09cHJvcHM9PntcclxuXHJcbiAgICBjb25zdCB7dGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgaWR9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgICAgJ2VuLVVTJyx7XHJcbiAgICAgICAgICAgIGRheTonbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1vbnRoOidsb25nJyxcclxuICAgICAgICAgICAgeWVhcjonbnVtZXJpYycsXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBsb2NhdGlvbi5yZXBsYWNlKCcsICcsICdcXG4nKTtcclxuICAgIGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXsnLycraW1hZ2V9IGFsdD17dGl0bGV9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZHJlc3NJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsaW5rPXtleHBsb3JlTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBFdmVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGFzc2VzLmljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50SXRlbTsiLCJmdW5jdGlvbiBBcnJvd1JpZ2h0SWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgIGQ9J00xMi4yOTMgNS4yOTNhMSAxIDAgMDExLjQxNCAwbDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNC41ODYgMTFIM2ExIDEgMCAxMTAtMmgxMS41ODZsLTIuMjkzLTIuMjkzYTEgMSAwIDAxMC0xLjQxNHonXG4gICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dSaWdodEljb247XG4iXSwic291cmNlUm9vdCI6IiJ9