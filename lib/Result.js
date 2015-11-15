/**
 * A result.
 *
 * @readonly parent:CompositeResult The parent result.
 * @readonly title:string           The call title.
 * @readonly task:Task              The task.
 */
export default class Result {
  /**
   * Constructor.
   *
   * @param(attr) parent
   * @param(attr) title
   * @param(attr) task
   */
  constructor(parent, title, task) {
    Object.defineProperty(this, "parent", {value: parent, enumerable: true});
    Object.defineProperty(this, "title", {value: title, enumerable: true});
    Object.defineProperty(this, "task", {value: task, enumerable: true});

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
   * @abstract
   * @type ResultState
   */
  get state() {
    throw new Error("Abstract property.");
  }
}
