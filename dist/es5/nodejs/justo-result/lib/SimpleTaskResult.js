"use strict";var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();Object.defineProperty(exports, "__esModule", { value: true });var _Result2 = require("./Result");var _Result3 = _interopRequireDefault(_Result2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var 





SimpleTaskResult = function (_Result) {_inherits(SimpleTaskResult, _Result);
  function SimpleTaskResult(parent, title, task, state) {_classCallCheck(this, SimpleTaskResult);var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleTaskResult).call(this, 
    parent, title, task, state));

    Object.defineProperty(_this, "_time", { value: undefined, writable: true });
    Object.defineProperty(_this, "_error", { value: undefined, writable: true });return _this;}_createClass(SimpleTaskResult, [{ key: "isSimple", value: function isSimple() 





    {
      return true;} }, { key: "setResult", value: function setResult(
























    state, error, start, end) {
      this._state = state;
      this._time = end - start;
      this._error = error;} }, { key: "time", get: function get() {return this._time;} }, { key: "error", get: function get() {return this._error;} }]);return SimpleTaskResult;}(_Result3.default);exports.default = SimpleTaskResult;
