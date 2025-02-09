import './Summary.css';

const Summary = () => {
  const summaryData = {
    aiSummary: {
      title: 'AI Summary',
      content: 'Key points from the meeting including deadlines and responsibilities.',
      action: 'Team to complete by next week.'
    },
    decisions: {
      title: 'Decision Highlights',
      content: 'Finalized the project scope and timeline.',
      nextReview: 'Next review scheduled in two weeks.'
    },
    actions: {
      title: 'Action Items',
      content: 'Allocate resources for the new project phase.',
      update: 'Team leads to provide updates by the end of the week.'
    }
  };

  return (
    <div className="summary">
      <h1>AI Summary Overview</h1>
      
      <div className="summary-grid">
        {Object.entries(summaryData).map(([key, data]) => (
          <div key={key} className="summary-card">
            <img src="/api/placeholder/400/200" alt={data.title} className="card-image" />
            <div className="card-content">
              <h3>{data.title}</h3>
              <p>{data.content}</p>
              <p className="action-text">{data.action || data.nextReview || data.update}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="refine-section">
        <div className="refine-content">
          <h2>Refine Your Summary</h2>
          <p>Enhance your content by making personalized edits.</p>
          <p>Click 'Edit' to start refining your summary now.</p>
          <button className="edit-btn">Edit your summary</button>
        </div>
        <img src="/api/placeholder/600/400" alt="Edit Summary" className="refine-image" />
      </div>
    </div>
  );
};

export default Summary;