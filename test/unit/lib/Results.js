//imports
const stub = require("justo-stub");
const Result = require("../../../dist/es5/nodejs/justo-result").Result;
const Results = require("../../../dist/es5/nodejs/justo-result").Results;
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
    beforeEach(function() {
      var res;

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.OK], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.FAILED], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.IGNORED], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.OK], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.FAILED], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.IGNORED], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.FAILED], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.IGNORED], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});

      results.add(res = stub({}));
      res.stub.respond("getNumberOf()", {args: [ResultState.IGNORED], value: 1});
      res.stub.respond("getNumberOf()", {value: 0});
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
