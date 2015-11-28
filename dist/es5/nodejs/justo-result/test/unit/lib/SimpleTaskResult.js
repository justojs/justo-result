//imports
const SimpleTaskResult = require("../../../dist/es5/nodejs/justo-result").SimpleTaskResult;
const CompositeTaskResult = require("../../../dist/es5/nodejs/justo-result").CompositeTaskResult;
const ResultState = require("../../../dist/es5/nodejs/justo-result").ResultState;

//suite
describe("SimpleTaskResult", function() {
  const task = {};

  describe("#constructor()", function() {
    it("constructor(parent, title, task) - orphan", function() {
      var res = new SimpleTaskResult(undefined, "test", task);

      res.must.have({
        parent: undefined,
        title: "test",
        task: task,
        state: undefined,
        error: undefined,
        time: undefined
      });

      res.isSimple().must.be.eq(true);
      res.isComposite().must.be.eq(false);
    });

    it("constructor(parent, title, task, state) - orphan", function() {
      var res = new SimpleTaskResult(undefined, "test", task, ResultState.IGNORED);

      res.must.have({
        parent: undefined,
        title: "test",
        task: task,
        state: ResultState.IGNORED,
        error: undefined,
        time: undefined
      });

      res.isSimple().must.be.eq(true);
      res.isComposite().must.be.eq(false);
    });

    it("#constructor(parent, title, task) - child", function() {
      const parent = new CompositeTaskResult(undefined, "parent", {});
      const child = new SimpleTaskResult(parent, "child", task);

      child.must.have({
        parent: parent,
        title: "child",
        task: task,
        state: undefined,
        error: undefined,
        time: undefined
      });

      child.isSimple().must.be.eq(true);
      child.isComposite().must.be.eq(false);
    });

    it("#constructor(parent, title, task, state) - child", function() {
      const parent = new CompositeTaskResult(undefined, "parent", {});
      const child = new SimpleTaskResult(parent, "child", task, ResultState.IGNORED);

      child.must.have({
        parent: parent,
        title: "child",
        task: task,
        state: ResultState.IGNORED,
        error: undefined,
        time: undefined
      });

      child.isSimple().must.be.eq(true);
      child.isComposite().must.be.eq(false);
    });
  });

  describe("#hasParent()", function() {
    it("hasParent() - orphan", function() {
      new SimpleTaskResult(undefined, "orphan", {}).hasParent().must.be.eq(false);
    });

    it("hasParent() - child", function() {
      new SimpleTaskResult(new CompositeTaskResult(undefined, "parent", {}), "child", {}).hasParent().must.be.eq(true);
    });
  });

  describe("#level", function() {
    it("level - orphan", function() {
      new SimpleTaskResult(undefined, "orphan", {}).level.must.be.eq(1);
    });

    it("level - child", function() {
      const parent = new CompositeTaskResult(undefined, "parent", {});
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
