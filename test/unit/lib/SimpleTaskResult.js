//imports
const SimpleTaskResult = require("../../../dist/es5/nodejs/justo-result").SimpleTaskResult;
const MacroResult = require("../../../dist/es5/nodejs/justo-result").MacroResult;
const ResultState = require("../../../dist/es5/nodejs/justo-result").ResultState;

//suite
describe("SimpleTaskResult", function() {
  const task = {};

  describe("#constructor()", function() {
    it("constructor(parent, title, task) - orphan", function() {
      new SimpleTaskResult(undefined, "test", task).must.have({
        parent: undefined,
        title: "test",
        task: task,
        state: undefined,
        error: undefined,
        time: undefined
      });
    });

    it("#constructor(parent, title, task) - child", function() {
      const parent = new MacroResult(undefined, "parent", {});
      const child = new SimpleTaskResult(parent, "child", task);

      child.must.have({
        parent: parent,
        title: "child",
        task: task,
        state: undefined,
        error: undefined,
        time: undefined
      });
    });
  });

  describe("#hasParent()", function() {
    it("hasParent() - orphan", function() {
      new SimpleTaskResult(undefined, "orphan", {}).hasParent().must.be.eq(false);
    });

    it("hasParent() - child", function() {
      new SimpleTaskResult(new MacroResult(undefined, "parent", {}), "child", {}).hasParent().must.be.eq(true);
    });
  });

  describe("#level", function() {
    it("level - orphan", function() {
      new SimpleTaskResult(undefined, "orphan", {}).level.must.be.eq(1);
    });

    it("level - child", function() {
      const parent = new MacroResult(undefined, "parent", {});
      new SimpleTaskResult(parent, "child", {}).level.must.be.eq(2);
    });
  });

  describe("#setResult()", function() {
    it("setResult()", function() {
      var res = new SimpleTaskResult(undefined, "test", task);
      res.setResult(ResultState.FAILED, new Error(), 4, 10);
      res.state.must.be.same(ResultState.FAILED);
      res.error.must.be.eq(new Error());
      res.time.must.be.eq(6);
    });
  });

  describe("#time", function() {
    it("time", function() {
      const res = new SimpleTaskResult(undefined, "test", {});
      res.setResult(ResultState.OK, undefined, 0, 10);
      res.time.must.be.eq(10);
    });
  });

  describe("#state", function() {
    it("state - own", function() {
      const res = new SimpleTaskResult(undefined, "test", {});
      res.setResult(ResultState.OK, undefined, 0, 10);
      res.state.must.be.same(ResultState.OK);
    });
  });
});
