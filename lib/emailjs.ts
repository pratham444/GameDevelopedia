import emailjs from "@emailjs/browser"

// Check if EmailJS is properly configured
const isEmailJSConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY !== "your_emailjs_public_key"
  )
}

// Initialize EmailJS only if configured
if (isEmailJSConfigured()) {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")
}

interface EmailData {
  name: string
  email: string
  subject?: string
  message: string
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  if (!isEmailJSConfigured()) {
    console.log("EmailJS not configured. Email would be sent:", data)
    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return
  }

  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject || "New Contact Form Submission",
      message: data.message,
      to_name: "GameDevelopedia Team",
    }

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      templateParams,
    )
  } catch (error) {
    console.error("EmailJS error:", error)
    throw new Error("Failed to send email")
  }
}
