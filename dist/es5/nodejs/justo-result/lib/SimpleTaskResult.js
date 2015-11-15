"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();var _get = function get(_x, _x2, _x3) {var _again = true;_function: while (_again) {var object = _x, property = _x2, receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _Result2 = require(
"./Result");var _Result3 = _interopRequireDefault(_Result2);var 




SimpleTaskResult = (function (_Result) {_inherits(SimpleTaskResult, _Result);
  function SimpleTaskResult(parent, title, task) {_classCallCheck(this, SimpleTaskResult);
    _get(Object.getPrototypeOf(SimpleTaskResult.prototype), "constructor", this).call(this, parent, title, task);

    Object.defineProperty(this, "_state", { value: undefined, writable: true });
    Object.defineProperty(this, "_time", { value: undefined, writable: true });
    Object.defineProperty(this, "_error", { value: undefined, writable: true });}_createClass(SimpleTaskResult, [{ key: "setResult", value: 































    function setResult(state, error, start, end) {
      this._state = state;
      this._time = end - start;
      this._error = error;} }, { key: "state", get: function get() {return this._state;} }, { key: "time", get: function get() {return this._time;} }, { key: "error", get: function get() {return this._error;} }]);return SimpleTaskResult;})(_Result3["default"]);exports["default"] = SimpleTaskResult;module.exports = exports["default"];
