/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
export default function destinyPaymentsStartup(context) {
  context.collections.destinyPaymentRefunds = context.app.db.collection("DestinyPaymentRefunds");
}
