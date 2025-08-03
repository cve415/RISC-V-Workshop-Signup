export function ConfirmationEmailTemplate({ firstName, lastName }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "100%", padding: "0", margin: "0" }}>
      <table
        role="presentation"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        width="100%"
        style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#f8fafc" }}
      >
        <tbody>
          <tr>
            <td style={{ background: "#2563eb", color: "#ffffff", padding: "30px", textAlign: "center" }}>
              <h1 style={{ margin: 0, fontSize: "24px" }}>🎉 Registration Confirmed!</h1>
              <p style={{ margin: "10px 0 0" }}>Welcome to the RISC-V Workshop</p>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "30px" }}>
              <h2 style={{ marginTop: 0 }}>Hello {firstName}!</h2>
              <p>
                Thank you for your interest in our RISC-V Workshop!
We're excited to have you join us for this introductory learning experience focused on RISC-V. More details will be shared with you soon.
              </p>

              <table
                width="100%"
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: "4px solid #2563eb",
                  padding: "20px",
                  marginTop: "20px",
                }}
              >
                <tbody>
                
                </tbody>
              </table>

              <table
                width="100%"
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: "4px solid #2563eb",
                  padding: "20px",
                  marginTop: "20px",
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <h3>🎯 What to Expect</h3>
                      <ul>
                        <li>RISC-V Architecture Fundamentals</li>
                        <li>Assembly Programming Workshop</li>
                        <li>Hardware Implementation Session</li>
                        <li>Advanced Topics & Q&A Panel</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                width="100%"
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: "4px solid #2563eb",
                  padding: "20px",
                  marginTop: "20px",
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <h3>💻 What to Bring</h3>
                      <ul>
                        <li>Laptop with development environment</li>
                        <li>Notebook for taking notes</li>
                        <li>Enthusiasm for learning!</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>We'll send you additional preparation materials and setup instructions closer to the workshop date.</p>

              <div style={{ textAlign: "center", marginTop: "30px", color: "#666", fontSize: "14px" }}>
                <p>Questions? Reply to this email or contact us at <a href="mailto:workshop@riscv-event.com">workshop@riscv-event.com</a></p>
                <p>— RISC-V Workshop Team</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
