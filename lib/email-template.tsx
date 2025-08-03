export function ConfirmationEmailTemplate({ firstName, lastName }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", padding: "0", margin: "0" }}>
      <table
        role="presentation"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        width="100%"
        style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#f8fafc", width: "100%" }}
      >
        <tbody>
          {/* Header */}
          <tr>
            <td style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "30px 20px", textAlign: "center" }}>
              <h1 style={{ margin: 0, fontSize: "24px", lineHeight: "1.4" }}>🎉 Registration Confirmed!</h1>
              <p style={{ margin: "10px 0 0", fontSize: "16px" }}>Welcome to the RISC-V Workshop</p>
            </td>
          </tr>

          {/* Body */}
          <tr>
            <td style={{ padding: "30px 20px" }}>
              <h2 style={{ margin: "0 0 10px" }}>Hello {firstName}!</h2>

              <p style={{ fontSize: "16px", lineHeight: "1.5", margin: "0 0 20px" }}>
                Thank you for your interest in our RISC-V Workshop! We're excited to have you join us for this introductory
                learning experience focused on RISC-V. More details will be shared with you soon.
              </p>

              {/* What to Expect */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: "4px solid #2563eb",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <h3 style={{ marginTop: 0 }}>🎯 What to Expect</h3>
                <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
                  <li>RISC-V Architecture Fundamentals</li>
                  <li>Assembly Programming Workshop</li>
                  <li>Hardware Implementation Session</li>
                  <li>Advanced Topics & Q&A Panel</li>
                </ul>
              </div>

              {/* What to Bring */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: "4px solid #2563eb",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <h3 style={{ marginTop: 0 }}>💻 What to Bring</h3>
                <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
                  <li>Laptop with development environment</li>
                  <li>Notebook for taking notes</li>
                  <li>Enthusiasm for learning!</li>
                </ul>
              </div>

              <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                We'll send you additional preparation materials and setup instructions closer to the workshop date.
              </p>

              {/* Footer */}
              <div style={{ textAlign: "center", marginTop: "30px", color: "#666", fontSize: "14px" }}>
                <p style={{ margin: "10px 0" }}>
                  Questions? Reply to this email or contact us at{" "}
                  <a href="mailto:workshop@riscv-event.com" style={{ color: "#2563eb", textDecoration: "none" }}>
                    workshop@riscv-event.com
                  </a>
                </p>
                <p style={{ margin: "10px 0" }}>— RISC-V Workshop Team</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
