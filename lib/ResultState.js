/**
 * Enumerates the result states.
 *
 * @enum
 */
export default class ResultState {
  constructor(name, value) {
    Object.defineProperty(this, "name", {value: name, enumerable: true});
    Object.defineProperty(this, "value", {value: value, enumerable: true});
  }

  /**
   * @override
   */
  toString() {
    return this.name;
  }
}

Object.defineProperty(ResultState, "OK", {value: new ResultState("OK", 1), enumerable: true});
Object.defineProperty(ResultState, "FAILED", {value: new ResultState("FAILED", 2), enumerable: true});
Object.defineProperty(ResultState, "IGNORED", {value: new ResultState("IGNORED", 3), enumerable: true});
