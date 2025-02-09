import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

function ExportPage() {
  const summary = localStorage.getItem("summary") || "";
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("AI-Generated Summary", 10, 10);
    doc.text(summary, 10, 20, { maxWidth: 180 });
    doc.save("summary.pdf");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    alert("Summary copied to clipboard!");
  };

  const handleShareEmail = () => {
    window.location.href = `mailto:${email}?subject=AI Summary&body=${encodeURIComponent(
      summary
    )}`;
  };

  return (
    <div>
      <h2>Export Summary</h2>

      <button onClick={handleExportPDF}>Export as PDF</button>
      <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleShareEmail} disabled={!email}>
          Share via Email
        </button>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <button
        onClick={() => navigate("/summary")}
        style={{ marginLeft: "10px" }}
      >
        Go to Summary
      </button>
    </div>
  );
}

export default ExportPage;
