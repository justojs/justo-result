//imports
import Results from "./Results";

/**
 * A result.
 *
 * @readonly parent:Result  The parent result.
 * @readonly title:string   The call title.
 * @readonly task:Task      The task.
 * @readonly result:string  The result: ok, failed, ignored.
 * @readonly error:object   The error if failed.
 * @readonly start:Date     The start date.
 */
export default class Result {
  /**
   * Constructor.
   *
   * @param(attr) title
   * @param(attr) task
   * @param(attr) state
   * @param(attr) error
   * @param(attr) start
   * @param(attr) end
   * @param(attr) results
   */
  constructor(parent, title, task) {
    Object.defineProperty(this, "parent", {value: parent, enumerable: true});
    Object.defineProperty(this, "title", {value: title, enumerable: true});
    Object.defineProperty(this, "task", {value: task, enumerable: true});
    Object.defineProperty(this, "_state", {value: undefined, writable: true});
    Object.defineProperty(this, "error", {value: undefined, enumerable: true, writable: true});
    Object.defineProperty(this, "start", {value: undefined, enumerable: true, writable: true});
    Object.defineProperty(this, "end", {value: undefined, enumerable: true, writable: true});
    Object.defineProperty(this, "results", {value: new Results(), enumerable: true});

    if (parent) parent.results.add(this);
  }

  /**
   * Return if the result has parent.
   *
   * @return boolean
   */
  hasParent() {
    return !!this.parent;
  }

  /**
   * Hierarchy level.
   *
   * @type number
   */
  get level() {
    return (this.hasParent() ? this.parent.level + 1 : 1);
  }

  /**
   * Time.
   *
   * @type number
   */
  get time() {
    return this.end - this.start;
  }

  /**
   * Return if the result has subresults.
   *
   * @return boolean
   */
  hasResults() {
    return this.results.length > 0;
  }

  /**
   * Result state.
   *
   * @type ResultState
   */
  get state() {
    return (this.hasResults() ? this.results.state : this._state);
  }

  /**
   * Returns the number of results with the state given.
   *
   * @param state:ResultState The state to check.
   * @return number
   */
  getNumberOf(state) {
    var res;

    //(1) check
    if (this.hasResults()) res = this.results.getNumberOf(state);
    else res = (this.state === state ? 1 : 0);

    //(2) return
    return res;
  }
}
