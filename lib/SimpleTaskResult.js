//imports
import Result from "./Result";

/**
 * Result of a simple task.
 */
export default class SimpleTaskResult extends Result {
  /**
   * Constructor.
   */
  constructor(parent, title, task, state) {
    super(parent, title, task, state);
  }

  /**
   * @override
   */
  isSimple() {
    return true;
  }
}
