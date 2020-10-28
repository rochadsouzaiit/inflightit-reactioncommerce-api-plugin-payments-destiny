import Random from "@reactioncommerce/random";

const METHOD = "manual";
const PACKAGE_NAME = "destiny-paymentmethod";
const PAYMENT_METHOD_NAME = "destiny_payment";

const PROCESSOR = "Manual";

/**
 * @summary Destiny payment (everything handled by shop seller)
 * @param {Object} context The request context
 * @param {Object} input Input necessary to create a payment
 * @returns {Object} The payment object in schema expected by the orders plugin
 */
export default async function createAuthorizedPayment(context, input) {
  const {
    amount,
    billingAddress,
    shopId,
    paymentData: {
      fullName
    }
  } = input;

  return {
    _id: Random.id(),
    address: billingAddress,
    amount,
    createdAt: new Date(),
    data: {
      fullName,
      gqlType: "DestinyPaymentData" // GraphQL union resolver uses this
    },
    displayName: "DESTINY-PAYMENT",
    method: METHOD,
    mode: "authorize",
    name: PAYMENT_METHOD_NAME,
    paymentPluginName: PACKAGE_NAME,
    processor: PROCESSOR,
    riskLevel: "normal",
    shopId,
    status: "completed",
    transactionId: Random.id(),
    transactions: []
  };
}
