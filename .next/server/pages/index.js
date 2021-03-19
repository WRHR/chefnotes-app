module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/w/Development/projects/chefnotes/chefnotes-app/src/components/NavBar.tsx\";\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n  grow: {\n    flexGrow: 1\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  title: {\n    display: \"none\",\n    [theme.breakpoints.up(\"sm\")]: {\n      display: \"block\"\n    }\n  },\n  search: {\n    position: \"relative\",\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"fade\"])(theme.palette.common.white, 0.15),\n    \"&:hover\": {\n      backgroundColor: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"fade\"])(theme.palette.common.white, 0.25)\n    },\n    marginRight: theme.spacing(2),\n    marginLeft: 0,\n    width: \"100%\",\n    [theme.breakpoints.up(\"sm\")]: {\n      marginLeft: theme.spacing(3),\n      width: \"auto\"\n    }\n  },\n  searchIcon: {\n    padding: theme.spacing(0, 2),\n    height: \"100%\",\n    position: \"absolute\",\n    pointerEvents: \"none\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  inputRoot: {\n    color: \"inherit\"\n  },\n  inputInput: {\n    padding: theme.spacing(1, 1, 1, 0),\n    // vertical padding + font size from searchIcon\n    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,\n    transition: theme.transitions.create(\"width\"),\n    width: \"100%\",\n    [theme.breakpoints.up(\"md\")]: {\n      width: \"20ch\"\n    }\n  },\n  sectionDesktop: {\n    display: \"none\",\n    [theme.breakpoints.up(\"md\")]: {\n      display: \"flex\"\n    }\n  },\n  sectionMobile: {\n    display: \"flex\",\n    [theme.breakpoints.up(\"md\")]: {\n      display: \"none\"\n    }\n  }\n}));\nconst NavBar = ({}) => {\n  const classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AppBar\"], {\n    position: \"static\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n        edge: \"start\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h5\",\n        children: \"Chefnotes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, undefined), true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 11\n      }, undefined) : /*#__PURE__*/undefined]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4PzBlMzIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiZ3JvdyIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiZGlzcGxheSIsImJyZWFrcG9pbnRzIiwidXAiLCJzZWFyY2giLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsInNlYXJjaEljb24iLCJwYWRkaW5nIiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0Um9vdCIsImNvbG9yIiwiaW5wdXRJbnB1dCIsInBhZGRpbmdMZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwic2VjdGlvbkRlc2t0b3AiLCJzZWN0aW9uTW9iaWxlIiwiTmF2QmFyIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBT0EsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELElBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQURLO0FBSVhDLFlBQVUsRUFBRTtBQUNWQyxlQUFXLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQ7QUFESCxHQUpEO0FBT1hDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsTUFESjtBQUVMLEtBQUNSLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QkYsYUFBTyxFQUFFO0FBRG1CO0FBRnpCLEdBUEk7QUFhWEcsUUFB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QkFERCxnQkFHQyxTQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBakJNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFwcEJhcixcbiAgQnV0dG9uLFxuICBJY29uQnV0dG9uLFxuICBtYWtlU3R5bGVzLFxuICBjcmVhdGVTdHlsZXMsXG4gIFRoZW1lLFxuICBUb29sYmFyLFxuICBUeXBvZ3JhcGh5LFxuICBmYWRlLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7XG4gIC8vIHVzZXI6IHtcbiAgLy8gICB1c2VybmFtZTogc3RyaW5nO1xuICAvLyB9O1xufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGdyb3c6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgbWVudUJ1dHRvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXG4gICAgICB9LFxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWFyY2hJY29uOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgaW5wdXRSb290OiB7XG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgfSxcbiAgICBpbnB1dElucHV0OiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxuICAgICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cbiAgICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIpLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XG4gICAgICAgIHdpZHRoOiBcIjIwY2hcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWN0aW9uRGVza3RvcDoge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VjdGlvbk1vYmlsZToge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoeyAgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgPFRvb2xiYXI+XG4gICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiPlxuICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+Q2hlZm5vdGVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7dHJ1ZSA/IChcbiAgICAgICAgICA8QnV0dG9uPkxvZ291dDwvQnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvVG9vbGJhcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Homepage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n\nvar _jsxFileName = \"/Users/w/Development/projects/chefnotes/chefnotes-app/src/pages/index.tsx\";\n\nfunction Homepage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"NavBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZXBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFDaEMsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCl7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIj9mNTI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });