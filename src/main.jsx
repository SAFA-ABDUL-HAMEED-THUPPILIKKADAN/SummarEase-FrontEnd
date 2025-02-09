import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import UploadPage from "./pages/UploadPage";
import SummaryPage from "./pages/SummaryPage";
import ExportPage from "./pages/ExportPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/export" element={<ExportPage />} />
    </Routes>
  </Router>
);
