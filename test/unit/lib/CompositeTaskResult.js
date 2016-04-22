//imports
const CompositeTaskResult = require("../../../dist/es5/nodejs/justo-result").CompositeTaskResult;
const SimpleTaskResult = require("../../../dist/es5/nodejs/justo-result").SimpleTaskResult;
const ResultState = require("../../../dist/es5/nodejs/justo-result").ResultState;

//suite
describe("CompositeTaskResult", function() {
  var macro = {};
  var simple = {};

  describe("#constructor()", function() {
    it("constructor(parent, title, macro) - orphan", function() {
      var res = new CompositeTaskResult(undefined, "test", macro);

      res.must.have({
        parent: undefined,
        title: "test",
        task: macro,
        _time: undefined,
        time: 0,
        _state: undefined,
        state: ResultState.OK,
        _error: undefined,
        error: undefined,
        count: 0,
        results: []
      });

      res.isSimple().must.be.eq(false);
      res.isComposite().must.be.eq(true);
    });

    it("constructor(parent, title, macro, state) - orphan", function() {
      var res = new CompositeTaskResult(undefined, "test", macro, ResultState.IGNORED);

      res.must.have({
        parent: undefined,
        title: "test",
        task: macro,
        _state: ResultState.IGNORED,
        state: ResultState.IGNORED,
        _time: undefined,
        time: 0,
        _error: undefined,
        error: undefined,
        count: 0,
        results: []
      });

      res.isSimple().must.be.eq(false);
      res.isComposite().must.be.eq(true);
    });

    it("constructor(parent, title, macro) - child", function() {
      const parent = new CompositeTaskResult(undefined, "parent", {});
      var res = new CompositeTaskResult(parent, "test", macro);

      res.must.have({
        parent: parent,
        title: "test",
        task: macro,
        _time: undefined,
        time: 0,
        _state: undefined,
        state: ResultState.OK,
        _error: undefined,
        error: undefined,
        count: 0,
        results: []
      });

      res.isSimple().must.be.eq(false);
      res.isComposite().must.be.eq(true);
    });

    it("constructor(parent, title, macro, state) - child", function() {
      const parent = new CompositeTaskResult(undefined, "parent", {});
      var res = new CompositeTaskResult(parent, "test", macro, ResultState.IGNORED);

      res.must.have({
        parent: parent,
        title: "test",
        task: macro,
        _state: ResultState.IGNORED,
        state: ResultState.IGNORED,
        _time: undefined,
        time: 0,
        _error: undefined,
        error: undefined,
        count: 0,
        results: []
      });

      res.isSimple().must.be.eq(false);
      res.isComposite().must.be.eq(true);
    });
  });

  describe("Members", function() {
    var res;

    beforeEach(function() {
      res = new CompositeTaskResult(undefined, "test", {});
      new SimpleTaskResult(res, "test", {}).setResult(ResultState.OK, undefined, 5, 11);
    });

    it("#state", function() {
      res.state.must.be.same(ResultState.OK);
    });

    it("#error", function() {
      res.must.have({
        error: undefined
      });
    });

    it("#time", function() {
      res.time.must.be.eq(6);
    });

    it("#count", function() {
      res.count.must.be.eq(1);
    });

  });

  describe("#getNumberOf()", function() {
    it("getNumberOf() with task not ignored", function() {
      var res = new CompositeTaskResult(undefined, "test", {});
      new SimpleTaskResult(res, "test", {}).setResult(ResultState.OK, undefined, 5, 11);

      res.getNumberOf(ResultState.OK).must.be.eq(1);
      res.getNumberOf(ResultState.FAILED).must.be.eq(0);
      res.getNumberOf(ResultState.IGNORED).must.be.eq(0);
    });

    it("getNumberOf() with task ignored", function() {
      var res = new CompositeTaskResult(undefined, "test", {}, ResultState.IGNORED);
      res.getNumberOf(ResultState.OK).must.be.eq(0);
      res.getNumberOf(ResultState.FAILED).must.be.eq(0);
      res.getNumberOf(ResultState.IGNORED).must.be.eq(1);
    });
  });

  describe("#setResult()", function() {
    it("setResult()", function() {
      var res = new CompositeTaskResult(undefined, "test", {});
      res.setResult(ResultState.FAILED, new Error(), 4, 10);
      res.must.have({
        _state: ResultState.FAILED,
        state: ResultState.FAILED,
        _error: new Error(),
        error: new Error(),
        _time: 6,
        time: 6
      });
    });
  });

  describe("#state", function() {
    it("state - own", function() {
      var parent = new CompositeTaskResult(undefined, "parent", macro, ResultState.FAILED);
      var child = new CompositeTaskResult(parent, "child", simple, ResultState.OK);

      parent.state.must.be.same(ResultState.FAILED);
    });

    it("state - child", function() {
      var parent = new CompositeTaskResult(undefined, "parent", macro);
      var child = new CompositeTaskResult(parent, "child", simple, ResultState.OK);

      parent.state.must.be.same(ResultState.OK);
    });
  });
});
