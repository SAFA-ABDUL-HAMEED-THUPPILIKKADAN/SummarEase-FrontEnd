import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleTextChange = (e) => setText(e.target.value);

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://127.0.0.1:8000/upload/",
        formData
      );
      setText(response.data.text);
    }
  };

  const handleSummarize = async () => {
    const response = await axios.post("http://127.0.0.1:8000/summarize/", {
      text,
    });
    localStorage.setItem("summary", response.data.summary);
    navigate("/summary");
  };

  return (
    <div>
      <h2>Upload or Paste Meeting Notes</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Or paste notes here..."
      ></textarea>
      <button onClick={handleSummarize}>Summarize</button>
    </div>
  );
}

export default UploadPage;
