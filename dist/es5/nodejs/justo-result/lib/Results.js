"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();var _get = function get(_x, _x2, _x3) {var _again = true;_function: while (_again) {var object = _x, property = _x2, receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _Result = require(
"./Result");var _Result2 = _interopRequireDefault(_Result);var _ResultState = require(
"./ResultState");var _ResultState2 = _interopRequireDefault(_ResultState);var 




Results = (function (_Array) {_inherits(Results, _Array);function Results() {_classCallCheck(this, Results);_get(Object.getPrototypeOf(Results.prototype), "constructor", this).apply(this, arguments);}_createClass(Results, [{ key: "add", value: 





    function add(res) {
      this.push(res);} }, { key: "getNumberOf", value: 


























































    function getNumberOf(state) {
      var res = 0;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {


        for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var r = _step.value;
          res += r.getNumberOf(state);}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator["return"]) {_iterator["return"]();}} finally {if (_didIteratorError) {throw _iteratorError;}}}



      return res;} }, { key: "time", get: function get() {var time;time = 0;for (var i = 0; i < this.length; ++i) {time += this[i].time;}return time;} }, { key: "state", get: function get() {var res;for (var i = 0; res != _ResultState2["default"].FAILED && i < this.length; ++i) {switch (this[i].state) {case _ResultState2["default"].OK:res = _ResultState2["default"].OK;break;case _ResultState2["default"].FAILED:res = _ResultState2["default"].FAILED;break;case _ResultState2["default"].IGNORED:if (!res) res = _ResultState2["default"].IGNORED;break;}}if (res === undefined) res = _ResultState2["default"].OK;return res;} }]);return Results;})(Array);exports["default"] = Results;module.exports = exports["default"];
