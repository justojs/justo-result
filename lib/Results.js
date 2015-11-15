//imports
import SimpleTaskResult from "./SimpleTaskResult";
import ResultState from "./ResultState";

/**
 * An array of results.
 */
export default class Results extends Array {
  /**
   * Adds a result or the results of another result.
   *
   * @param res:Result  The result to add.
   */
  add(res) {
    this.push(res);
  }

  /**
   * Time.
   *
   * @type number
   */
  get time() {
    var time;

    //(1) compute
    time = 0;
    for (let r of this) time += r.time;

    //(2) return
    return time;
  }

  /**
   * General result.
   *
   * @type ResultType
   */
  get state() {
    var res;

    //(1) compute
    for (let i = 0; res != ResultState.FAILED && i < this.length; ++i) {
      switch (this[i].state) {
        case ResultState.OK:
          res = ResultState.OK;
          break;

        case ResultState.FAILED:
          res = ResultState.FAILED;
          break;

        case ResultState.IGNORED:
          if (!res) res = ResultState.IGNORED;
          break;
      }
    }

    if (res === undefined) res = ResultState.OK;

    //(2) return
    return res;
  }

  /**
   * Returns the number of results with the state given.
   *
   * @param state:ResultState The state to check.
   * @return number
   */
  getNumberOf(state) {
    var num;

    //(1) count
    num = 0;

    for (let res of this) {
      if (res instanceof SimpleTaskResult) num += (res.state === state ? 1 : 0);
      else num += res.getNumberOf(state);
    }

    //(2) return
    return num;
  }

  /**
   * Number of results.
   *
   * @type number
   */
  get count() {
    var c;

    //(1) compute
    c = 0;

    for (let res of this) {
      if (res instanceof SimpleTaskResult) ++c;
      else c += r.count;
    }

    //(2) return
    return c;
  }
}
