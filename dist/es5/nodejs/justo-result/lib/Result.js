"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _Results = require(
"./Results");var _Results2 = _interopRequireDefault(_Results);var 











Result = (function () {











  function Result(parent, title, task) {_classCallCheck(this, Result);
    Object.defineProperty(this, "parent", { value: parent, enumerable: true });
    Object.defineProperty(this, "title", { value: title, enumerable: true });
    Object.defineProperty(this, "task", { value: task, enumerable: true });
    Object.defineProperty(this, "_state", { value: undefined, writable: true });
    Object.defineProperty(this, "error", { value: undefined, enumerable: true, writable: true });
    Object.defineProperty(this, "start", { value: undefined, enumerable: true, writable: true });
    Object.defineProperty(this, "end", { value: undefined, enumerable: true, writable: true });
    Object.defineProperty(this, "results", { value: new _Results2["default"](), enumerable: true });

    if (parent) parent.results.add(this);}_createClass(Result, [{ key: "hasParent", value: 







    function hasParent() {
      return !!this.parent;} }, { key: "hasResults", value: 

























    function hasResults() {
      return this.results.length > 0;} }, { key: "getNumberOf", value: 

















    function getNumberOf(state) {
      var res;


      if (this.hasResults()) res = this.results.getNumberOf(state);else 
      res = this.state === state ? 1 : 0;


      return res;} }, { key: "level", get: function get() {return this.hasParent() ? this.parent.level + 1 : 1;} }, { key: "time", get: function get() {return this.end - this.start;} }, { key: "state", get: function get() {return this.hasResults() ? this.results.state : this._state;} }]);return Result;})();exports["default"] = Result;module.exports = exports["default"];
