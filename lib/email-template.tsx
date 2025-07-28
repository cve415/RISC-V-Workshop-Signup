interface EmailTemplateProps {
  firstName: string
  lastName: string
}

export function ConfirmationEmailTemplate({ firstName, lastName }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #2563eb, #16a34a)",
            color: "white",
            padding: "30px",
            textAlign: "center",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <h1>🎉 Registration Confirmed!</h1>
          <p>Welcome to the RISC-V Workshop</p>
        </div>

        <div style={{ background: "#f8fafc", padding: "30px", borderRadius: "0 0 8px 8px" }}>
          <h2>Hello {firstName}!</h2>
          <p>
            Thank you for registering for our RISC-V Workshop. We're excited to have you join us for this comprehensive
            learning experience!
          </p>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              margin: "20px 0",
              borderLeft: "4px solid #2563eb",
            }}
          >
            <h3>📅 Workshop Details</h3>
            <p>
              <strong>Date:</strong> [Workshop Date]
            </p>
            <p>
              <strong>Time:</strong> 9:00 AM - 4:30 PM
            </p>
            <p>
              <strong>Location:</strong> [Workshop Location]
            </p>
            <p>
              <strong>Format:</strong> In-person with hands-on labs
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              margin: "20px 0",
              borderLeft: "4px solid #2563eb",
            }}
          >
            <h3>🎯 What to Expect</h3>
            <ul>
              <li>RISC-V Architecture Fundamentals</li>
              <li>Assembly Programming Workshop</li>
              <li>Hardware Implementation Session</li>
              <li>Advanced Topics & Q&A Panel</li>
            </ul>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              margin: "20px 0",
              borderLeft: "4px solid #2563eb",
            }}
          >
            <h3>💻 What to Bring</h3>
            <ul>
              <li>Laptop with development environment</li>
              <li>Notebook for taking notes</li>
              <li>Enthusiasm for learning!</li>
            </ul>
          </div>

          <p>We'll send you additional preparation materials and setup instructions closer to the workshop date.</p>

          <div style={{ textAlign: "center", marginTop: "30px", color: "#666", fontSize: "14px" }}>
            <p>Questions? Reply to this email or contact us at workshop@riscv-event.com</p>
            <p>RISC-V Workshop Team</p>
          </div>
        </div>
      </div>
    </div>
  )
}
