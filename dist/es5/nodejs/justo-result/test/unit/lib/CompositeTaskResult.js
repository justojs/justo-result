//imports
const CompositeTaskResult = require("../../../dist/es5/nodejs/justo-result").CompositeTaskResult;
const SimpleTaskResult = require("../../../dist/es5/nodejs/justo-result").SimpleTaskResult;
const ResultState = require("../../../dist/es5/nodejs/justo-result").ResultState;

//suite
describe("CompositeTaskResult", function() {
  var macro = {};

  describe("#constructor()", function() {
    it("constructor(parent, title, macro) - Orphan result", function() {
      var res = new CompositeTaskResult(undefined, "test", macro);

      res.must.have({
        parent: undefined,
        title: "test",
        task: macro,
        state: ResultState.OK,
        count: 0,
        results: []
      });

      res.isSimple().must.be.eq(false);
      res.isComposite().must.be.eq(true);
    });

    it("constructor(parent, title, macro, state) - Orphan result", function() {
      var res = new CompositeTaskResult(undefined, "test", macro, ResultState.IGNORED);

      res.must.have({
        parent: undefined,
        title: "test",
        task: macro,
        state: ResultState.IGNORED,
        count: 0,
        results: []
      });

      res.isSimple().must.be.eq(false);
      res.isComposite().must.be.eq(true);
    });

    it("constructor(parent, title, macro) - Child result", function() {
      var parent = new CompositeTaskResult(undefined, "parent", macro);
      var child = new CompositeTaskResult(parent, "child", macro);

      child.must.have({
        parent: parent,
        title: "child",
        task: macro,
        state: ResultState.OK,
        count: 0,
        results: []
      });

      child.isSimple().must.be.eq(false);
      child.isComposite().must.be.eq(true);
    });

    it("constructor(parent, title, macro, state) - Child result", function() {
      var parent = new CompositeTaskResult(undefined, "parent", macro);
      var child = new CompositeTaskResult(parent, "child", macro, ResultState.IGNORED);

      child.must.have({
        parent: parent,
        title: "child",
        task: macro,
        state: ResultState.IGNORED,
        count: 0,
        results: []
      });

      child.isSimple().must.be.eq(false);
      child.isComposite().must.be.eq(true);
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
});
