/**
 * A result.
 *
 * @readonly parent:CompositeResult The parent result.
 * @readonly title:string           The call title.
 * @readonly task:Task              The task.
 * @attr(#) _state:ResultState      The result state.
 * @attr(#) _time:number            The time.
 * @attr(#) _error:Object           The error if error.
 */
export default class Result {
  /**
   * Constructor.
   *
   * @param(attr) parent
   * @param(attr) title
   * @param(attr) task
   * @param(attr) state
   */
  constructor(parent, title, task, state) {
    Object.defineProperty(this, "parent", {value: parent, enumerable: true});
    Object.defineProperty(this, "title", {value: title, enumerable: true});
    Object.defineProperty(this, "task", {value: task, enumerable: true});
    Object.defineProperty(this, "_state", {value: state, writable: true});
    Object.defineProperty(this, "_time", {value: undefined, writable: true});
    Object.defineProperty(this, "_error", {value: undefined, writable: true});

    if (parent) parent.add(this);
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
   * Is a simple task result?
   *
   * @abstract
   * @return boolean
   */
  isSimple() {
    throw new Error("Abstract method.");
  }

  /**
   * Is a composite task result?
   *
   * @return boolean
   */
  isComposite() {
    return !this.isSimple();
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
    return this._time;
  }

  /**
   * The error if failed.
   *
   * @type object
   */
  get error() {
    return this._error;
  }

  /**
   * Result state.
   *
   * @type ResultState
   */
  get state() {
    return this._state;
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
