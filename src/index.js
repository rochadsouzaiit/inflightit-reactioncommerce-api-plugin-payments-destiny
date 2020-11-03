import pkg from "../package.json";
import i18n from "./i18n/index.js";
import schemas from "./schemas/index.js";
import capturePayment from "./util/capturePayment.js";
import createAuthorizedPayment from "./util/createAuthorizedPayment.js";
import createRefund from "./util/createRefund.js";
import listRefunds from "./util/listRefunds.js";
import startup from "./startup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "DESTINY-PAYMENT",
    name: "destiny_payment",
    version: pkg.version,
    i18n,
    graphQL: {
      schemas
    },
    functionsByType: {
      startup: [startup]
    },
    paymentMethods: [{
      name: "destiny_payment",
      canRefund: true,
      displayName: "DESTINY-PAYMENT",
      functions: {
        capturePayment,
        createAuthorizedPayment,
        createRefund,
        listRefunds
      }
    }]
  });
}
