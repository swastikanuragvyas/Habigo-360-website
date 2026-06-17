import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  industry: z.string().optional(),
  service: z.string().optional(),
  brief: z.string().min(10, "Please share at least a few details about your project").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

// In production, replace this with Resend / SendGrid / nodemailer / Slack webhook
// Current implementation logs to console and returns success for demo purposes.

async function deliverNotification(data: ContactInput) {
  console.log("[HabiGo Contact]", JSON.stringify(data, null, 2));
  return null; // null = no error
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const error = await deliverNotification(data);
    if (error) {
      return {
        success: false,
        error: "Failed to send message. Please try again or email us directly.",
      };
    }
    return { success: true, error: null };
  });