import nodemailer from "nodemailer"

async function testEmail() {
  // Create transporter with your settings
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Test email content
  const testEmail = {
    from: process.env.SMTP_FROM || "RISC-V Workshop <test@example.com>",
    to: "your-test-email@gmail.com", // Replace with your email
    subject: "✅ Email Configuration Test",
    html: `
      <h2>🎉 Email Setup Successful!</h2>
      <p>Your RISC-V workshop email configuration is working correctly.</p>
      <p>Timestamp: ${new Date().toISOString()}</p>
    `,
  }

  try {
    console.log("Testing email configuration...")
    const result = await transporter.sendMail(testEmail)
    console.log("✅ Email sent successfully!")
    console.log("Message ID:", result.messageId)
  } catch (error) {
    console.error("❌ Email test failed:")
    console.error(error.message)
  }
}

// Run the test
testEmail()
