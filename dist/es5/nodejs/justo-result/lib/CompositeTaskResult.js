"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();var _get = function get(_x, _x2, _x3) {var _again = true;_function: while (_again) {var object = _x, property = _x2, receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _Result2 = require(
"./Result");var _Result3 = _interopRequireDefault(_Result2);var _Results = require(
"./Results");var _Results2 = _interopRequireDefault(_Results);var _ResultState = require(
"./ResultState");var _ResultState2 = _interopRequireDefault(_ResultState);var 






CompositeTaskResult = (function (_Result) {_inherits(CompositeTaskResult, _Result);



  function CompositeTaskResult(parent, title, task) {_classCallCheck(this, CompositeTaskResult);
    _get(Object.getPrototypeOf(CompositeTaskResult.prototype), "constructor", this).call(this, parent, title, task);

    Object.defineProperty(this, "results", { value: new _Results2["default"]() });
    Object.defineProperty(this, "_state", { value: undefined, writable: true });}_createClass(CompositeTaskResult, [{ key: "setAsIgnored", value: 





    function setAsIgnored() {
      this._state = _ResultState2["default"].IGNORED;} }, { key: "add", value: 







    function add(res) {
      this.results.add(res);} }, { key: "getNumberOf", value: 






























    function getNumberOf(state) {
      if (state === _ResultState2["default"].IGNORED && this._state === _ResultState2["default"].IGNORED) return 1;else 
      return this.results.getNumberOf(state);} }, { key: "state", get: function get() {if (this._state) return this._state;else return this.results.state;} }, { key: "error", get: function get() {return this.results.error;} }, { key: "time", get: function get() {return this.results.time;} }, { key: "count", get: 







    function get() {
      return this.results.count;} }]);return CompositeTaskResult;})(_Result3["default"]);exports["default"] = CompositeTaskResult;module.exports = exports["default"];
