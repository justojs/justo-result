//imports
import Result from "./Result";

/**
 * Result of a simple task.
 */
export default class SimpleTaskResult extends Result {
  constructor(parent, title, task, state) {
    super(parent, title, task, state);

    Object.defineProperty(this, "_time", {value: undefined, writable: true});
    Object.defineProperty(this, "_error", {value: undefined, writable: true});
  }

  /**
   * @override
   */
  get time() {
    return this._time;
  }

  /**
   * @override
   */
  get error() {
    return this._error;
  }

  /**
   * Set the result of task run.
   *
   * @param state:ResultState
   * @param error:object
   * @param start:number
   * @param end:number
   */
  setResult(state, error, start, end) {
    this._state = state;
    this._time = end - start;
    this._error = error;
  }
}
