webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nvar _jsxFileName = \"/Users/w/Development/projects/chefnotes/chefnotes-app/src/components/NavBar.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n  grow: {\n    flexGrow: 1\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  title: {\n    display: \"none\",\n    [theme.breakpoints.up(\"sm\")]: {\n      display: \"block\"\n    }\n  },\n  search: {\n    position: \"relative\",\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"fade\"])(theme.palette.common.white, 0.15),\n    \"&:hover\": {\n      backgroundColor: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"fade\"])(theme.palette.common.white, 0.25)\n    },\n    marginRight: theme.spacing(2),\n    marginLeft: 0,\n    width: \"100%\",\n    [theme.breakpoints.up(\"sm\")]: {\n      marginLeft: theme.spacing(3),\n      width: \"auto\"\n    }\n  },\n  searchIcon: {\n    padding: theme.spacing(0, 2),\n    height: \"100%\",\n    position: \"absolute\",\n    pointerEvents: \"none\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  inputRoot: {\n    color: \"inherit\"\n  },\n  inputInput: {\n    padding: theme.spacing(1, 1, 1, 0),\n    // vertical padding + font size from searchIcon\n    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,\n    transition: theme.transitions.create(\"width\"),\n    width: \"100%\",\n    [theme.breakpoints.up(\"md\")]: {\n      width: \"20ch\"\n    }\n  },\n  sectionDesktop: {\n    display: \"none\",\n    [theme.breakpoints.up(\"md\")]: {\n      display: \"flex\"\n    }\n  },\n  sectionMobile: {\n    display: \"flex\",\n    [theme.breakpoints.up(\"md\")]: {\n      display: \"none\"\n    }\n  }\n}));\nconst NavBar = ({\n  router,\n  user\n}) => {\n  _s();\n\n  const classes = useStyles();\n  const [logout, {\n    loading: logoutFetching\n  }] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__[\"useLogoutMutation\"])();\n  const apolloClient = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useApolloClient\"])();\n\n  if (!user) {\n    router.push('/login');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AppBar\"], {\n    position: \"static\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n        edge: \"start\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h5\",\n        children: \"Chefnotes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        onClick: async () => {\n          await logout;\n          await apolloClient.resetStore();\n          router.push('/login');\n        },\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(NavBar, \"1xJhGUQwwWbDzURFXTNNa0cYxfY=\", false, function () {\n  return [useStyles, _generated_graphql__WEBPACK_IMPORTED_MODULE_4__[\"useLogoutMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useApolloClient\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImdyb3ciLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImRpc3BsYXkiLCJicmVha3BvaW50cyIsInVwIiwic2VhcmNoIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dFJvb3QiLCJjb2xvciIsImlucHV0SW5wdXQiLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsInNlY3Rpb25EZXNrdG9wIiwic2VjdGlvbk1vYmlsZSIsIk5hdkJhciIsInJvdXRlciIsInVzZXIiLCJjbGFzc2VzIiwibG9nb3V0IiwibG9hZGluZyIsImxvZ291dEZldGNoaW5nIiwidXNlTG9nb3V0TXV0YXRpb24iLCJhcG9sbG9DbGllbnQiLCJ1c2VBcG9sbG9DbGllbnQiLCJwdXNoIiwicmVzZXRTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQU1BLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxJQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE4sR0FESztBQUlYQyxZQUFVLEVBQUU7QUFDVkMsZUFBVyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBREgsR0FKRDtB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QUFNLENBQUNTLElBQVAsQ0FBWSxRQUFaO0FBRUQ7O0FBRUQsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFBLDhCQUNFLHFFQUFDLDREQUFEO0FBQVksWUFBSSxFQUFDLE9BQWpCO0FBQUEsK0JBQ0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFLHFFQUFDLHdEQUFEO0FBQVEsZUFBTyxFQUFFLFlBQVU7QUFDekIsZ0JBQU1OLE1BQU47QUFDQSxnQkFBTUksWUFBWSxDQUFDRyxVQUFiLEVBQU47QUFDQVYsZ0JBQU0sQ0FBQ1MsSUFBUCxDQUFZLFFBQVo7QUFDRCxTQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBMUJNOztHQUFNVixNO1VBQ0t2QyxTLEVBQzRCOEMsb0UsRUFFeEJFLDhEOzs7S0FKVFQsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBBcHBCYXIsXG4gIEJ1dHRvbixcbiAgSWNvbkJ1dHRvbixcbiAgbWFrZVN0eWxlcyxcbiAgY3JlYXRlU3R5bGVzLFxuICBUaGVtZSxcbiAgVG9vbGJhcixcbiAgVHlwb2dyYXBoeSxcbiAgZmFkZSxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IHtOZXh0Um91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE1lUXVlcnksIHVzZUxvZ291dE11dGF0aW9uLCB1c2VNZVF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyB1c2VBcG9sbG9DbGllbnQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHtcbiAgcm91dGVyOk5leHRSb3V0ZXJcbiAgdXNlcjpNZVF1ZXJ5fHVuZGVmaW5lZFxufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGdyb3c6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgbWVudUJ1dHRvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXG4gICAgICB9LFxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWFyY2hJY29uOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgaW5wdXRSb290OiB7XG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgfSxcbiAgICBpbnB1dElucHV0OiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxuICAgICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cbiAgICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIpLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICAgIHdpZHRoOiBcIjIwY2hcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWN0aW9uRGVza3RvcDoge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VjdGlvbk1vYmlsZToge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoeyByb3V0ZXIsIHVzZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtsb2dvdXQsIHtsb2FkaW5nOiBsb2dvdXRGZXRjaGluZ31dID0gdXNlTG9nb3V0TXV0YXRpb24oKVxuICBcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID11c2VBcG9sbG9DbGllbnQoKVxuXG4gIGlmKCF1c2VyKXtcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICA8VG9vbGJhcj5cbiAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCI+XG4gICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5DaGVmbm90ZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17YXN5bmMgKCk9PntcbiAgICAgICAgICBhd2FpdCBsb2dvdXRcbiAgICAgICAgICBhd2FpdCBhcG9sbG9DbGllbnQucmVzZXRTdG9yZSgpXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIH19PkxvZ291dDwvQnV0dG9uPlxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvQXBwQmFyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})