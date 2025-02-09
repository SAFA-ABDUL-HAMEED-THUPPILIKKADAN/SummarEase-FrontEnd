import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleTextChange = (e) => setText(e.target.value);

  const handleSummarize = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/summarize/", {
        text,
      });

      let cleanSummary = response.data.summary
        .replace(/\n+/g, "\n") // Remove extra new lines
        .replace(/[*•-]/g, "") // Remove bullet points
        .trim(); // Trim extra spaces

      setSummary(cleanSummary);
      localStorage.setItem("summary", cleanSummary);
    } catch (error) {
      console.error("Error summarizing text:", error);
    }
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("summary", summary);
  };

  return (
    <div>
      <h2>Paste Meeting Notes</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Paste notes here..."
        rows="5"
      />
      <button onClick={handleSummarize}>Summarize</button>

      {summary && (
        <div>
          <h3>Summary</h3>
          {isEditing ? (
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows="5"
            />
          ) : (
            <p style={{ whiteSpace: "pre-line" }}>{summary}</p>
          )}

          <button onClick={isEditing ? handleSave : toggleEdit}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => navigate("/export")}
            style={{ marginLeft: "10px" }}
          >
            export
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadPage;
