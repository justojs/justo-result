"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _Result2 = require("./Result");var _Result3 = _interopRequireDefault(_Result2);
var _Results = require("./Results");var _Results2 = _interopRequireDefault(_Results);
var _ResultState = require("./ResultState");var _ResultState2 = _interopRequireDefault(_ResultState);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var 






CompositeTaskResult = function (_Result) {_inherits(CompositeTaskResult, _Result);



  function CompositeTaskResult(parent, title, task, state) {_classCallCheck(this, CompositeTaskResult);var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CompositeTaskResult).call(this, 
    parent, title, task, state));

    Object.defineProperty(_this, "results", { value: new _Results2.default() });return _this;}_createClass(CompositeTaskResult, [{ key: "isSimple", value: function isSimple() 





    {
      return false;} }, { key: "add", value: function add(







    res) {
      this.results.add(res);} }, { key: "getNumberOf", value: function getNumberOf(





























    state) {
      if (state === _ResultState2.default.IGNORED && this._state === _ResultState2.default.IGNORED) return 1;else 
      return this.results.getNumberOf(state);} }, { key: "state", get: function get() {return this._state || this.results.state;} }, { key: "error", get: function get() {return this._error || this.results.error;} }, { key: "time", get: function get() {return this._time || this.results.time;} }, { key: "count", get: function get() 







    {
      return this.results.count;} }]);return CompositeTaskResult;}(_Result3.default);exports.default = CompositeTaskResult;
