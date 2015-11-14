"use strict";Object.defineProperty(exports, "__esModule", { value: true });function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var 




ResultState = 
function ResultState(name, value) {_classCallCheck(this, ResultState);
  Object.defineProperty(this, "name", { value: name, enumerable: true });
  Object.defineProperty(this, "value", { value: value, enumerable: true });};exports["default"] = ResultState;



Object.defineProperty(ResultState, "OK", { value: new ResultState("OK", 1), enumerable: true });
Object.defineProperty(ResultState, "FAILED", { value: new ResultState("FAILED", 2), enumerable: true });
Object.defineProperty(ResultState, "IGNORED", { value: new ResultState("IGNORED", 3), enumerable: true });module.exports = exports["default"];
