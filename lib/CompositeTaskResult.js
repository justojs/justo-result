//imports
import Result from "./Result";
import Results from "./Results";
import ResultState from "./ResultState";

/**
 * Base for the results of composite tasks.
 *
 * @readonly results:Results  The subresults.
 */
export default class CompositeTaskResult extends Result {
  /**
   * Constructor.
   */
  constructor(parent, title, task, state) {
    super(parent, title, task, state);

    Object.defineProperty(this, "results", {value: new Results()});
  }

  /**
   * Adds a subresult.
   *
   * @param res:Result  The result to add.
   */
  add(res) {
    this.results.add(res);
  }

  /**
   * @override
   */
  get state() {
    if (this._state) return this._state;
    else return this.results.state;
  }

  /**
   * @override
   */
  get error() {
    return this.results.error;
  }

  /**
   * @override
   */
  get time() {
    return this.results.time;
  }

  /**
   * Returns the number of tasks ended with the state given.
   *
   * @param state:ResultState The state to check.
   * @return number
   */
  getNumberOf(state) {
    if (state === ResultState.IGNORED && this._state === ResultState.IGNORED) return 1;
    else return this.results.getNumberOf(state);
  }

  /**
   * Number of results.
   *
   * @type number
   */
  get count() {
    return this.results.count;
  }
}
