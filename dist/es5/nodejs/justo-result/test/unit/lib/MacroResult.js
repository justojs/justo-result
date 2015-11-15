//imports
const MacroResult = require("../../../dist/es5/nodejs/justo-result").MacroResult;
const SimpleTaskResult = require("../../../dist/es5/nodejs/justo-result").SimpleTaskResult;
const ResultState = require("../../../dist/es5/nodejs/justo-result").ResultState;

//suite
describe("MacroResult", function() {
  var macro = {};

  describe("#constructor()", function() {
    it("constructor(parent, title, macro) - Orphan result", function() {
      var res = new MacroResult(undefined, "test", macro);
      res.must.have({
        parent: undefined,
        title: "test",
        task: macro,
        count: 0,
        results: []
      });
    });

    it("constructor(parent, title, macro) - Child result", function() {
      var parent = new MacroResult(undefined, "parent", macro);
      var child = new MacroResult(parent, "child", macro);

      child.must.have({
        parent: parent,
        title: "child",
        task: macro,
        count: 0,
        results: []
      });
    });
  });

  describe("Members", function() {
    var res;

    beforeEach(function() {
      res = new MacroResult(undefined, "test", {});
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

  it("#setAsIgnored()", function() {
    var res = new MacroResult(undefined, "test", {});
    res.setAsIgnored();
    res.state.must.be.same(ResultState.IGNORED);
  });

  describe("#getNumberOf()", function() {
    it("getNumberOf() with macro not ignored", function() {
      var res = new MacroResult(undefined, "test", {});
      new SimpleTaskResult(res, "test", {}).setResult(ResultState.OK, undefined, 5, 11);
      
      res.getNumberOf(ResultState.OK).must.be.eq(1);
      res.getNumberOf(ResultState.FAILED).must.be.eq(0);
      res.getNumberOf(ResultState.IGNORED).must.be.eq(0);
    });

    it("getNumberOf() with macro ignored", function() {
      var res = new MacroResult(undefined, "test", {});
      res.setAsIgnored();
      res.getNumberOf(ResultState.OK).must.be.eq(0);
      res.getNumberOf(ResultState.FAILED).must.be.eq(0);
      res.getNumberOf(ResultState.IGNORED).must.be.eq(1);
    });
  });
});
