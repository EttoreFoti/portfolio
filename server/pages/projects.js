/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/data */ \"./constants/data.js\");\n\nvar _jsxFileName = \"/Users/ettorefoti/workspace/DevOps_Studies/simple-developer-portfolio-website/components/Projects.js\";\n\n\nfunction Projects() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: \"bg-white dark:bg-gray-800\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \" text-5xl md:text-9xl font-bold py-20 text-center md:text-left\",\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"bg-[#F1F1F1] dark:bg-gray-900\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40\",\n        children: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.projects.map((proj, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n          title: proj.title,\n          link: proj.link,\n          imgUrl: proj.imgUrl,\n          number: `${idx + 1}`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\nconst ProjectCard = ({\n  title,\n  link,\n  imgUrl,\n  number\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n    href: link,\n    className: \"w-full block shadow-2xl\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"relative overflow-hidden\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-72 object-cover\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: imgUrl,\n          alt: \"portfolio\",\n          className: \"transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"absolute bottom-10 left-10 text-gray-50 font-bold text-xl\",\n        children: number.length === 1 ? \"0\" + number : number\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL1Byb2plY3RzLmpzPzI5MGUiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJ1c2VyRGF0YSIsInByb2oiLCJpZHgiLCJ0aXRsZSIsImxpbmsiLCJpbWdVcmwiLCJQcm9qZWN0Q2FyZCIsIm51bWJlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxzQkFDRTtBQUFTLGFBQVMsRUFBQywyQkFBbkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHFFQUFmO0FBQUEsa0JBQ0dDLGlFQUFBLENBQXNCLENBQUNDLElBQUQsRUFBT0MsR0FBUCxrQkFDckIsOERBQUMsV0FBRDtBQUNFLGVBQUssRUFBRUQsSUFBSSxDQUFDRSxLQURkO0FBRUUsY0FBSSxFQUFFRixJQUFJLENBQUNHLElBRmI7QUFHRSxnQkFBTSxFQUFFSCxJQUFJLENBQUNJLE1BSGY7QUFJRSxnQkFBTSxFQUFHLEdBQUVILEdBQUcsR0FBRyxDQUFFO0FBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztBQUVELE1BQU1JLFdBQVcsR0FBRyxDQUFDO0FBQUVILE9BQUY7QUFBU0MsTUFBVDtBQUFlQyxRQUFmO0FBQXVCRTtBQUF2QixDQUFELEtBQXFDO0FBQ3ZELHNCQUNFO0FBQUcsUUFBSSxFQUFFSCxJQUFUO0FBQWUsYUFBUyxFQUFDLHlCQUF6QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLEVBQUVDLE1BRFA7QUFFRSxhQUFHLEVBQUMsV0FGTjtBQUdFLG1CQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUksaUJBQVMsRUFBQyxtRkFBZDtBQUFBLGtCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFXRTtBQUFJLGlCQUFTLEVBQUMsMkRBQWQ7QUFBQSxrQkFDR0ksTUFBTSxDQUFDQyxNQUFQLEtBQWtCLENBQWxCLEdBQXNCLE1BQU1ELE1BQTVCLEdBQXFDQTtBQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQXBCRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlckRhdGEgZnJvbSBcIkBjb25zdGFudHMvZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIGgtNDggYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHRleHQtNXhsIG1kOnRleHQtOXhsIGZvbnQtYm9sZCBweS0yMCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogR3JpZCBzdGFydHMgaGVyZSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGMUYxRjFdIGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04IHB5LTIwIHBiLTQwXCI+XG4gICAgICAgICAge3VzZXJEYXRhLnByb2plY3RzLm1hcCgocHJvaiwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2oudGl0bGV9XG4gICAgICAgICAgICAgIGxpbms9e3Byb2oubGlua31cbiAgICAgICAgICAgICAgaW1nVXJsPXtwcm9qLmltZ1VybH1cbiAgICAgICAgICAgICAgbnVtYmVyPXtgJHtpZHggKyAxfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3QgUHJvamVjdENhcmQgPSAoeyB0aXRsZSwgbGluaywgaW1nVXJsLCBudW1iZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cInctZnVsbCBibG9jayBzaGFkb3ctMnhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNzIgb2JqZWN0LWNvdmVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICAgICAgICBhbHQ9XCJwb3J0Zm9saW9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEyNSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMDAgZWFzZS1vdXQgb2JqZWN0LWNvdmVyIGgtZnVsbCB3LWZ1bGxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIGxlZnQtMTAgdGV4dC1ncmF5LTUwIGZvbnQtYm9sZCB0ZXh0LXhsIGJnLXJlZC01MDAgcm91bmRlZC1tZCBweC0yXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMTAgdGV4dC1ncmF5LTUwIGZvbnQtYm9sZCB0ZXh0LXhsXCI+XG4gICAgICAgICAge251bWJlci5sZW5ndGggPT09IDEgPyBcIjBcIiArIG51bWJlciA6IG51bWJlcn1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects.js\n");

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerBlock */ \"./components/ContainerBlock.js\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.js\");\n\nvar _jsxFileName = \"/Users/ettorefoti/workspace/DevOps_Studies/simple-developer-portfolio-website/pages/projects.js\";\n\n\n\nfunction projects() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__.default, {\n    title: \"Projects - Ettore Foti\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9wcm9qZWN0cy5qcz80NDcxIl0sIm5hbWVzIjpbInByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDLHNCQUNFLDhEQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBQyx3QkFBdEI7QUFBQSwyQkFDRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJCbG9ja1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT1cIlByb2plY3RzIC0gRXR0b3JlIEZvdGlcIj5cbiAgICAgIDxQcm9qZWN0cyAvPlxuICAgIDwvQ29udGFpbmVyQmxvY2s+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ContainerBlock_js"], function() { return __webpack_exec__("./pages/projects.js"); });
module.exports = __webpack_exports__;

})();