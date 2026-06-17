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
  try {
    const apiUrl = process.env.VITE_API_URL || "http://localhost:5000/api";
    const response = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to submit contact to backend:", errorText);
      return "Failed to save inquiry.";
    }

    console.log("[HabiGo Contact] Successfully saved to MongoDB:", data.email);
    return null; // null = no error
  } catch (error) {
    console.error("Error connecting to backend:", error);
    return "Failed to connect to the database.";
  }
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
