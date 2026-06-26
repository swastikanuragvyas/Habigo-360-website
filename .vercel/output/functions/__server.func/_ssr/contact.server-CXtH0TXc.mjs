import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-D-smpDVE.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().min(1, "Name is required"),
  company: stringType().optional(),
  email: stringType().email("Valid email required"),
  phone: stringType().optional(),
  industry: stringType().optional(),
  service: stringType().optional(),
  brief: stringType().min(10, "Please share at least a few details about your project").max(2e3)
});
async function deliverNotification(data) {
  try {
    const apiUrl = process.env.VITE_API_URL || "http://localhost:5001/api";
    const response = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to submit contact to backend:", errorText);
      return "Failed to save inquiry.";
    }
    console.log("[HabiGo Contact] Successfully saved to MongoDB:", data.email);
    return null;
  } catch (error) {
    console.error("Error connecting to backend:", error);
    return "Failed to connect to the database.";
  }
}
const submitContact_createServerFn_handler = createServerRpc({
  id: "903e5423f95a9ce2ad984c09fb5bd530215cdf4c61e84904753bd0412f9d50a3",
  name: "submitContact",
  filename: "src/lib/api/contact.server.ts"
}, (opts) => submitContact.__executeServer(opts));
const submitContact = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  const error = await deliverNotification(data);
  if (error) {
    return {
      success: false,
      error: "Failed to send message. Please try again or email us directly."
    };
  }
  return {
    success: true,
    error: null
  };
});
export {
  submitContact_createServerFn_handler
};
