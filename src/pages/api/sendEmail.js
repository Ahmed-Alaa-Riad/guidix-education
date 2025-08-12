// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formData } = req.body;

  if (!formData) {
    return res.status(400).json({ message: "No form data provided" });
  }

  try {
    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or use host, port, and auth for custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS,
      },
    });

    const messageBody = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    await transporter.sendMail({
      from: `"GuidixEducation" <${process.env.EMAIL_USER}>`,
      to: "Hello@guidixedu.com",
      subject: "New Application Form Submission",
      text: messageBody,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
