'use strict';

/**
 * Class for checking the number in the set range
 */
class RangeValidator {

  /**
   * Create the validation range, checking if 'from' value less than 'to'
   * @param {number} from - lower limit of check (inclusive).
   * @param {number} to   - upper limit of check (not inclusive).
   */
  constructor(from = -Infinity, to = Infinity) {

    if (typeof from !== 'number' || isNaN(from) ||
        typeof to !== 'number' || isNaN(to)) {

      throw new TypeError('Value should be a number except NaN !');

    }

    if (from > to) {
      throw new RangeError(
          `TO value (${to}) should be more than FROM value (${from})`);
    }

    this._from = from;
    this._to = to;
  }

  /**
   * Set the 'to' value, checking if 'from' value less than 'to'
   * @param {number} v
   */
  set to(v) {

    if (typeof v !== 'number' || isNaN(v)) {
      throw new TypeError('Value should be a number except NaN !');
    }

    if (this._from > v) {
      throw new RangeError(
          `TO value should be more than FROM (from = ${this._from})`);
    }

    this._to = v;
  }

  /**
   * Get the 'to' value
   * @returns {number}
   */
  get to() {
    return this._to;
  }

  /**
   * Set the 'from' value, checking if 'from' value less than 'to'
   * @param {number} v
   */
  set from(v) {

    if (typeof v !== 'number' || isNaN(v)) {
      throw new TypeError('Value should be a number except NaN !');
    }

    if (this._to < v) {
      throw new RangeError(
          `TO value should be more than FROM (to = ${this._to})`);
    }

    this._from = v;
  }

  /**
   * Get the 'from' value
   * @returns {number}
   */
  get from() {
    return this._from;
  }

  /**
   * Returns the lower ('from') and upper ('to') range in the array
   * @returns {number[]}
   */
  get range() {
    return [this._from, this._to];
  }

  /**
   * Checks if number is in range 'from'(inclusive) - 'to'(not inclusive)
   * @param {number} num
   * @returns {boolean|boolean}
   */
  validate(num) {

    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError('Value should be a number except NaN !');
    }

    return num < this._to && num >= this._from;

  }

}

const t = new RangeValidator(0, 10);
t.validate(10);