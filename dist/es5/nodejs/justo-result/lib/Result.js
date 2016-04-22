"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var 









Result = function () {








  function Result(parent, title, task, state) {_classCallCheck(this, Result);
    Object.defineProperty(this, "parent", { value: parent, enumerable: true });
    Object.defineProperty(this, "title", { value: title, enumerable: true });
    Object.defineProperty(this, "task", { value: task, enumerable: true });
    Object.defineProperty(this, "_state", { value: state, writable: true });
    Object.defineProperty(this, "_time", { value: undefined, writable: true });
    Object.defineProperty(this, "_error", { value: undefined, writable: true });

    if (parent) parent.add(this);}_createClass(Result, [{ key: "hasParent", value: function hasParent() 







    {
      return !!this.parent;} }, { key: "isSimple", value: function isSimple() 








    {
      throw new Error("Abstract method.");} }, { key: "isComposite", value: function isComposite() 







    {
      return !this.isSimple();} }, { key: "setResult", value: function setResult(














































    state, error, start, end) {
      this._state = state;
      this._time = end - start;
      this._error = error;} }, { key: "level", get: function get() {return this.hasParent() ? this.parent.level + 1 : 1;} }, { key: "time", get: function get() {return this._time;} }, { key: "error", get: function get() {return this._error;} }, { key: "state", get: function get() {return this._state;} }]);return Result;}();exports.default = Result;
