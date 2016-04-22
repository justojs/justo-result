/**
 * A result.
 *
 * @readonly parent:CompositeResult The parent result.
 * @readonly title:string           The call title.
 * @readonly task:Task              The task.
 * @attr(#) ownState:ResultState      The result state.
 * @attr(#) ownTime:number            The time.
 * @attr(#) ownError:Object           The error if error.
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
    Object.defineProperty(this, "ownState", {value: state, writable: true});
    Object.defineProperty(this, "ownTime", {value: undefined, writable: true});
    Object.defineProperty(this, "ownError", {value: undefined, writable: true});

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
    return this.ownTime;
  }

  /**
   * The error if failed.
   *
   * @type object
   */
  get error() {
    return this.ownError;
  }

  /**
   * Result state.
   *
   * @type ResultState
   */
  get state() {
    return this.ownState;
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
    this.ownState = state;
    this.ownTime = end - start;
    this.ownError = error;
  }
}
