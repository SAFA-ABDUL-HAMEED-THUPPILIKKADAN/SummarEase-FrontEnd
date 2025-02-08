import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Summarize Your Meeting Notes in Seconds!</h1>
      <button onClick={() => navigate("/upload")}>Upload Notes</button>
    </div>
  );
}

export default App;
