//imports
const stub = require("justo-stub");
const Result = require("../../../dist/es5/nodejs/justo-result").Result;
const Results = require("../../../dist/es5/nodejs/justo-result").Results;
const SimpleTaskResult = require("../../../dist/es5/nodejs/justo-result").SimpleTaskResult;
const MacroResult = require("../../../dist/es5/nodejs/justo-result").MacroResult;
const ResultState = require("../../../dist/es5/nodejs/justo-result").ResultState;

//suite
describe("Results", function() {
  var results;

  beforeEach(function() {
    results = new Results();
  });

  describe("#add()", function() {
    it("add(res)", function() {
      results.add({});
      results.length.must.be.eq(1);
    });
  });

  describe("#state", function() {
    it("state : OK", function() {
      results.add(stub({}, {"@state": ResultState.OK}));
      results.add(stub({}, {"@state": ResultState.OK}));
      results.add(stub({}, {"@state": ResultState.IGNORED}));
      results.state.must.be.same(ResultState.OK);
    });

    it("state : FAILED", function() {
      results.add(stub({}, {"@state": ResultState.OK}));
      results.add(stub({}, {"@state": ResultState.FAILED}));
      results.add(stub({}, {"@state": ResultState.IGNORED}));
      results.state.must.be.same(ResultState.FAILED);
    });

    it("state : IGNORED", function() {
      results.add(stub({}, {"@state": ResultState.IGNORED}));
      results.add(stub({}, {"@state": ResultState.IGNORED}));
      results.add(stub({}, {"@state": ResultState.IGNORED}));
      results.state.must.be.same(ResultState.IGNORED);
    });
  });

  describe("#getNumberOf()", function() {
    describe("Only simple tasks", function() {
      beforeEach(function() {
        var res;

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.OK, undefined, 0, 10);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.FAILED, undefined, 0, 5);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.IGNORED, undefined, 0, 5);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.OK, undefined, 0, 5);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.FAILED, undefined, 0, 5);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.IGNORED, undefined, 0, 5);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.FAILED, undefined, 0, 5);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.IGNORED, undefined, 0, 5);

        results.add(res = new SimpleTaskResult(undefined, "test", {}));
        res.setResult(ResultState.IGNORED, undefined, 0, 5);
      });

      it("getNumberOf(OK)", function() {
        results.getNumberOf(ResultState.OK).must.be.eq(2);
      });

      it("getNumberOf(FAILED)", function() {
        results.getNumberOf(ResultState.FAILED).must.be.eq(3);
      });

      it("getNumberOf(IGNORED)", function() {
        results.getNumberOf(ResultState.IGNORED).must.be.eq(4);
      });
    });

    describe("Different types of results", function() {
      beforeEach(function() {
        var parent, child;

        results.add(parent = new SimpleTaskResult(undefined, "test", {}));
        parent.setResult(ResultState.OK, undefined, 0, 10);

        results.add(parent = new SimpleTaskResult(undefined, "test", {}));
        parent.setResult(ResultState.FAILED, undefined, 0, 5);

        results.add(parent = new MacroResult(undefined, "test", {}));
        child = new SimpleTaskResult(parent, "test", {});
        child.setResult(ResultState.IGNORED, undefined, 0, 5);

        results.add(parent = new MacroResult(undefined, "test", {}));
        child = new SimpleTaskResult(parent, "test", {});
        child.setResult(ResultState.OK, undefined, 0, 5);
        child = new SimpleTaskResult(parent, "test", {});
        child.setResult(ResultState.FAILED, undefined, 0, 5);
        child = new SimpleTaskResult(parent, "test", {});
        child.setResult(ResultState.IGNORED, undefined, 0, 5);

        results.add(parent = new SimpleTaskResult(undefined, "test", {}));
        parent.setResult(ResultState.FAILED, undefined, 0, 5);

        results.add(parent = new SimpleTaskResult(undefined, "test", {}));
        parent.setResult(ResultState.IGNORED, undefined, 0, 5);

        results.add(parent = new SimpleTaskResult(undefined, "test", {}));
        parent.setResult(ResultState.IGNORED, undefined, 0, 5);
      });

      it("getNumberOf(OK)", function() {
        results.getNumberOf(ResultState.OK).must.be.eq(2);
      });

      it("getNumberOf(FAILED)", function() {
        results.getNumberOf(ResultState.FAILED).must.be.eq(3);
      });

      it("getNumberOf(IGNORED)", function() {
        results.getNumberOf(ResultState.IGNORED).must.be.eq(4);
      });
    });
  });
});
