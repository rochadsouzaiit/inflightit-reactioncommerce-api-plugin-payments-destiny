/**
 * @name capturePayment
 * @method
 * @summary Capture payment for destiny payment
 * @param {Object} context an object containing the per-request state
 * @param {Object} payment object containing authorization ID
 * @returns {Object} result for capturing a payment
 * @private
 */
export default function capturePayment() {
  return { saved: true, response: {} };
}
