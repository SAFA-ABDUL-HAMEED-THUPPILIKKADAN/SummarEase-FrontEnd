// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Upload() {
//   const [file, setFile] = useState(null);
//   const [text, setText] = useState("");
//   const navigate = useNavigate();

//   const handleFileChange = (e) => setFile(e.target.files[0]);
//   const handleTextChange = (e) => setText(e.target.value);

//   const handleUpload = async () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file);
//       const response = await axios.post(
//         "http://127.0.0.1:8000/upload/",
//         formData
//       );
//       setText(response.data.text);
//     }
//   };

//   const handleSummarize = async () => {
//     const response = await axios.post("http://127.0.0.1:8000/summarize/", {
//       text,
//     });
//     localStorage.setItem("summary", response.data.summary);
//     navigate("/summary");
//   };

//   return (
//     <div>
//       <h2>Upload or Paste Meeting Notes</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <textarea
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Or paste notes here..."
//       ></textarea>
//       <button onClick={handleSummarize}>Summarize</button>
//     </div>
//   );
// }

// export default Upload;
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Upload.css';
import logo from '../assets/images/paperclip.ico';



function Upload() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleTextChange = (e) => setText(e.target.value);

  const handleSummarize = async () => {
    const response = await axios.post("http://127.0.0.1:8000/summarize/", {
      text,
    });
    localStorage.setItem("summary", response.data.summary);
    navigate("/summary");
  };

  return (
    <div>
    <nav className="navbar">
    <div className="logo">
    <img src={logo} alt="icon" height="25px" />
      <h1 className=' hu head'>SummarEase</h1>
    </div>
    <div className="nav-links">
      <Link to="/" className='home-h link'>Home</Link>
      {/* <Link to="/summarize" className='home-h link'>Summarize</Link> */}
      <button className="btn-primary">Get Started</button>
    
    </div>
  </nav>
    <div className="upload-container">
      <h2>File Upload Section</h2>
      <div className="input-section">
        <p className="input-label">Paste your meeting notes below:</p>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Input text"
          className="text-input"
        ></textarea>
      </div>
      <button onClick={handleSummarize} className="submit-button">
        Submit
      </button>
    </div>

    
     <div className="refine-section">
      <div className="refine-content">
        <h2>Refine Your Summary</h2>
        <p>Enhance your content by making personalized edits.</p>
        <div className="fix">
        <button className="edit-btn">Edit</button>
        <button className="edit-btn">Export</button>
        </div>
      </div>
      <img src="/assets/images/sum.jpg" alt="Edit Summary" className="refine-image" />
    </div>
    </div>
  );
}

export default Upload;

{/* <h1 className="hd">AI Summary</h1>
    <div className="refine-section">
        <div className="refine-content">
          <h2>Refine Your Summary</h2>
          <p>Enhance your content by making personalized edits.</p>
          <p>Click 'Edit' to start refining your summary now.</p>
          <button className="edit-btn">Edit your summary</button>
        </div>
        <img src="pic.jpg" alt="Edit Summary" className="refine-image" />
      </div>
    </div> */}