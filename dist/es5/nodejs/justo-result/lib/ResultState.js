"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var 




ResultState = (function () {
  function ResultState(name, value) {_classCallCheck(this, ResultState);
    Object.defineProperty(this, "name", { value: name, enumerable: true });
    Object.defineProperty(this, "value", { value: value, enumerable: true });}_createClass(ResultState, [{ key: "toString", value: 





    function toString() {
      return this.name;} }]);return ResultState;})();exports["default"] = ResultState;



Object.defineProperty(ResultState, "OK", { value: new ResultState("OK", 1), enumerable: true });
Object.defineProperty(ResultState, "FAILED", { value: new ResultState("FAILED", 2), enumerable: true });
Object.defineProperty(ResultState, "IGNORED", { value: new ResultState("IGNORED", 3), enumerable: true });module.exports = exports["default"];
