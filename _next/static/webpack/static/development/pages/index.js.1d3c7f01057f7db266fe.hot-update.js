webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Precio.js":
/*!******************************!*\
  !*** ./components/Precio.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Argento Hosting\\Desktop\\BitcoinAPP\\components\\Precio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Precio = function Precio(props) {
  var _props$precio = props.precio,
      price = _props$precio.price,
      percent_change_1h = _props$precio.percent_change_1h,
      percent_change_7d = _props$precio.percent_change_7d,
      percent_change_24h = _props$precio.percent_change_24h;
  return __jsx("div", {
    className: " card text-white bg-info mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Last Information "), __jsx("div", {
    className: " card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " Actual Price U$D : ", price.toFixed())), __jsx("div", {
    className: " d-md-flex justify-content-between m-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " Last Hour ", ' ', __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, percent_change_1h), " %"), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Last 24 Hs  ", ' ', __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, percent_change_24h), " %"), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Last 7 Days   ", ' ', __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, percent_change_7d), " %")));
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.1d3c7f01057f7db266fe.hot-update.js.map