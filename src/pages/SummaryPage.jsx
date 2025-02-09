function SummaryPage() {
  const summary = localStorage.getItem("summary");

  return (
    <div>
      <h2>AI Summary</h2>
      <p>{summary}</p>
     
      <button onClick={() => navigator.clipboard.writeText(summary)}>
        Copy to Clipboard
      </button>
    </div>
  );
}

export default SummaryPage;
