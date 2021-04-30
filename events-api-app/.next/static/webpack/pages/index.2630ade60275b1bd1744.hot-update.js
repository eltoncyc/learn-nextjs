webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-registration.module.css */ "./components/input/newsletter-registration.module.css");
/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/notification-context */ "./store/notification-context.js");


var _jsxFileName = "D:\\Projects\\learn-nextjs\\events-api-app\\components\\input\\newsletter-registration.js",
    _s = $RefreshSig$();





function NewsletterRegistration() {
  _s();

  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_3__["default"]);

  function registrationHandler(event) {
    event.preventDefault();
    var enteredEmail = emailInputRef.current.value;
    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending'
    });
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }

      return response.json().then(function (data) {
        throw new Error(data.message || 'Something went wrong!');
      });
    }).then(function (data) {
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Successfully registered for newsletter!',
        status: 'success'
      });
    })["catch"](function (error) {
      notificationCtx.showNotification({
        title: 'Error',
        message: error.message || 'Somthing went wrong!',
        status: 'error'
      });
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.newsletter,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Sign up to stay updated!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: registrationHandler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          placeholder: "Your email",
          "aria-label": "Your email",
          ref: emailInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(NewsletterRegistration, "DPwtQQ/gldp2MEe6QW3mx9/oYa8=");

_c = NewsletterRegistration;
/* harmony default export */ __webpack_exports__["default"] = (NewsletterRegistration);

var _c;

$RefreshReg$(_c, "NewsletterRegistration");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJOZXdzbGV0dGVyUmVnaXN0cmF0aW9uIiwiZW1haWxJbnB1dFJlZiIsInVzZVJlZiIsIm5vdGlmaWNhdGlvbkN0eCIsInVzZUNvbnRleHQiLCJOb3RpZmljYXRpb25Db250ZXh0IiwicmVnaXN0cmF0aW9uSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJzaG93Tm90aWZpY2F0aW9uIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJFcnJvciIsImVycm9yIiwiY2xhc3NlcyIsIm5ld3NsZXR0ZXIiLCJjb250cm9sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxzQkFBVCxHQUFrQztBQUFBOztBQUNoQyxNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHQyx3REFBVSxDQUFDQyxtRUFBRCxDQUFsQzs7QUFFQSxXQUFTQyxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDbENBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLFlBQVksR0FBR1IsYUFBYSxDQUFDUyxPQUFkLENBQXNCQyxLQUEzQztBQUNBUixtQkFBZSxDQUFDUyxnQkFBaEIsQ0FBaUM7QUFDL0JDLFdBQUssRUFBQyxlQUR5QjtBQUUvQkMsYUFBTyxFQUFFLDZCQUZzQjtBQUcvQkMsWUFBTSxFQUFDO0FBSHdCLEtBQWpDO0FBS0FDLFNBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUN2QkMsWUFBTSxFQUFDLE1BRGdCO0FBRXZCQyxVQUFJLEVBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLGFBQUssRUFBRVo7QUFBUixPQUFmLENBRmtCO0FBR3ZCYSxhQUFPLEVBQUM7QUFDTix3QkFBZTtBQURUO0FBSGUsS0FBcEIsQ0FBTCxDQU1HQyxJQU5ILENBTVEsVUFBQUMsUUFBUSxFQUFFO0FBQ2hCLFVBQUdBLFFBQVEsQ0FBQ0MsRUFBWixFQUFlO0FBQ2IsZUFBT0QsUUFBUSxDQUFDRSxJQUFULEVBQVA7QUFDRDs7QUFDRCxhQUFPRixRQUFRLENBQUNFLElBQVQsR0FBZ0JILElBQWhCLENBQXFCLFVBQUFJLElBQUksRUFBRTtBQUNoQyxjQUFNLElBQUlDLEtBQUosQ0FBVUQsSUFBSSxDQUFDYixPQUFMLElBQWMsdUJBQXhCLENBQU47QUFDRCxPQUZNLENBQVA7QUFHRCxLQWJELEVBY0NTLElBZEQsQ0FjTSxVQUFDSSxJQUFELEVBQVE7QUFDWnhCLHFCQUFlLENBQUNTLGdCQUFoQixDQUFpQztBQUMvQkMsYUFBSyxFQUFDLFNBRHlCO0FBRS9CQyxlQUFPLEVBQUUseUNBRnNCO0FBRy9CQyxjQUFNLEVBQUM7QUFId0IsT0FBakM7QUFLRCxLQXBCRCxXQW9CUyxVQUFBYyxLQUFLLEVBQUU7QUFDZDFCLHFCQUFlLENBQUNTLGdCQUFoQixDQUFpQztBQUMvQkMsYUFBSyxFQUFDLE9BRHlCO0FBRS9CQyxlQUFPLEVBQUVlLEtBQUssQ0FBQ2YsT0FBTixJQUFlLHNCQUZPO0FBRy9CQyxjQUFNLEVBQUM7QUFId0IsT0FBakM7QUFLRCxLQTFCRDtBQTRCRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRWUsMEVBQU8sQ0FBQ0MsVUFBNUI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUV6QixtQkFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUV3QiwwRUFBTyxDQUFDRSxPQUF4QjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLHFCQUFXLEVBQUMsWUFIZDtBQUlFLHdCQUFXLFlBSmI7QUFLRSxhQUFHLEVBQUUvQjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBNURRRCxzQjs7S0FBQUEsc0I7QUE4RE1BLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI2MzBhZGU2MDI3NWIxYmQxNzQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLm1vZHVsZS5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSAnLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQnO1xuXG5mdW5jdGlvbiBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uKCkge1xuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcmVnaXN0cmF0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgdGl0bGU6J1NpZ25pbmcgdXAuLi4nLFxuICAgICAgbWVzc2FnZTogJ1JlZ2lzdGVyaW5nIGZvciBuZXdzbGV0dGVyLicsXG4gICAgICBzdGF0dXM6J3BlbmRpbmcnXG4gICAgfSlcbiAgICBmZXRjaCgnL2FwaS9uZXdzbGV0dGVyJywge1xuICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe2VtYWlsOiBlbnRlcmVkRW1haWx9KSxcbiAgICAgIGhlYWRlcnM6e1xuICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9XG4gICAgfSkudGhlbihyZXNwb25zZT0+e1xuICAgICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGRhdGE9PntcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZXx8J1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKT0+e1xuICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTonU3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgbmV3c2xldHRlciEnLFxuICAgICAgICBzdGF0dXM6J3N1Y2Nlc3MnXG4gICAgICB9KVxuICAgIH0pLmNhdGNoKGVycm9yPT57XG4gICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHRpdGxlOidFcnJvcicsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2V8fCdTb210aGluZyB3ZW50IHdyb25nIScsXG4gICAgICAgIHN0YXR1czonZXJyb3InXG4gICAgICB9KVxuICAgIH0pO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdzbGV0dGVyfT5cbiAgICAgIDxoMj5TaWduIHVwIHRvIHN0YXkgdXBkYXRlZCE8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3JlZ2lzdHJhdGlvbkhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1lvdXIgZW1haWwnXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdZb3VyIGVtYWlsJ1xuICAgICAgICAgICAgcmVmPXtlbWFpbElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NsZXR0ZXJSZWdpc3RyYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9