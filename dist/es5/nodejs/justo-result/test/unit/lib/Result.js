//imports
const Result = require("../../../dist/es5/nodejs/justo-result").Result;
const ResultState = require("../../../dist/es5/nodejs/justo-result").ResultState;

//suite
describe("Result", function() {
  const task = {};

  describe("#constructor()", function() {
    it("constructor(parent, title, task) - orphan", function() {
      new Result(undefined, "test", task).must.have({
        parent: undefined,
        title: "test",
        task: task,
        state: undefined,
        error: undefined,
        start: undefined,
        end: undefined
      });
    });

    it("#constructor(parent, title, task) - child", function() {
      const parent = new Result(undefined, "test", {});
      const child = new Result(parent, "child", task);

      child.parent.must.be.same(parent);
      child.must.have({
        title: "child",
        task: task,
        state: undefined,
        error: undefined,
        start: undefined,
        end: undefined
      });
    });
  });

  describe("#hasParent()", function() {
    it("hasParent() - orphan", function() {
      new Result(undefined, "orphan", {}).hasParent().must.be.eq(false);
    });

    it("hasParent() - child", function() {
      new Result(new Result(undefined, "parent", {}), "child", {}).hasParent().must.be.eq(true);
    });
  });

  describe("#level", function() {
    it("level - orphan", function() {
      new Result(undefined, "orphan", {}).level.must.be.eq(1);
    });

    it("level - child", function() {
      const parent = new Result(undefined, "parent", {});
      new Result(parent, "child", {}).level.must.be.eq(2);
    });
  });

  describe("#time", function() {
    it("time", function() {
      const res = new Result(undefined, "test", {});
      res.start = 0;
      res.end = 10;
      res.time.must.be.eq(10);
    });
  });

  describe("#hasResults()", function() {
    it("hasResults() - yep", function() {
      const parent = new Result(undefined, "parent", {});
      const child = new Result(parent, "child", {});
      parent.hasResults().must.be.eq(true);
    });

    it("hasResults() - nope", function() {
      const res = new Result(undefined, "test", {});
      res.hasResults().must.be.eq(false);
    });
  });

  describe("#state", function() {
    it("state - own", function() {
      const res = new Result(undefined, "test", {});
      res._state = ResultState.OK;
      res.state.must.be.same(ResultState.OK);
    });
  });

  describe("#getNumberOf()", function() {
    it("getNumberOf() : 0", function() {
      const res = new Result(undefined, "test", {});
      res._state = ResultState.OK;
      res.getNumberOf(ResultState.FAILED).must.be.eq(0);
    });

    it("getNumberOf() : 1", function() {
      const res = new Result(undefined, "test", {});
      res._state = ResultState.OK;
      res.getNumberOf(ResultState.OK).must.be.eq(1);
    });
  });
});
