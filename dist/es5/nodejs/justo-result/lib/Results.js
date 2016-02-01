"use strict";var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();Object.defineProperty(exports, "__esModule", { value: true });var _SimpleTaskResult = require("./SimpleTaskResult");var _SimpleTaskResult2 = _interopRequireDefault(_SimpleTaskResult);var _ResultState = require("./ResultState");var _ResultState2 = _interopRequireDefault(_ResultState);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var 






Results = function () {



  function Results() {_classCallCheck(this, Results);
    Object.defineProperty(this, "items", { value: [] });}_createClass(Results, [{ key: "add", value: function add(
















    res) {
      this.items.push(res);} }, { key: "getNumberOf", value: function getNumberOf(























































    state) {
      var num;


      num = 0;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

        for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var res = _step.value;
          if (res instanceof _SimpleTaskResult2.default) num += res.state === state ? 1 : 0;else 
          num += res.getNumberOf(state);}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}



      return num;} }, { key: "length", get: function get() {return this.items.length;} }, { key: "time", get: function get() {var time;time = 0;var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _r = _step2.value;time += _r.time;}} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}return time;} }, { key: "state", get: function get() {var res;for (var i = 0; res != _ResultState2.default.FAILED && i < this.length; ++i) {switch (this.items[i].state) {case _ResultState2.default.OK:res = _ResultState2.default.OK;break;case _ResultState2.default.FAILED:res = _ResultState2.default.FAILED;break;case _ResultState2.default.IGNORED:if (!res) res = _ResultState2.default.IGNORED;break;}}if (res === undefined) res = _ResultState2.default.OK;return res;} }, { key: "count", get: function get() 







    {
      var c;


      c = 0;var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {

        for (var _iterator3 = this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var res = _step3.value;
          if (res instanceof _SimpleTaskResult2.default) ++c;else 
          c += r.count;}} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3.return) {_iterator3.return();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}



      return c;} }]);return Results;}();exports.default = Results;
