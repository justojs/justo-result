/**
 * A result.
 *
 * @readonly parent:CompositeResult The parent result.
 * @readonly title:string           The call title.
 * @readonly task:Task              The task.
 * @attr(#) _state:ResultState      The result state.
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
   * @abstract
   * @type number
   */
  get time() {
    throw new Error("Abstract property.");
  }

  /**
   * The error if failed.
   *
   * @abstract
   * @type object
   */
  get error() {
    throw new Error("Abstract property.");
  }

  /**
   * Result state.
   *
   * @type ResultState
   */
  get state() {
    return this._state;
  }
}
