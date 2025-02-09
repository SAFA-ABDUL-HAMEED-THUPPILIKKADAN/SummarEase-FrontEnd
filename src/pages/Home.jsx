import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/images/paperclip.ico';


const Home = () => {
  return (
    <div className='home-top'>
    <div className="home">
      <nav className="navbar">
        <div className="logo">
        <img src={logo} alt="icon" height="25px" />
          <h1 className='home-h head'>SummarEase</h1>
        </div>
        <div className="nav-links">
          <Link to="/upload" className='home-h link'>Upload</Link>
          {/* <Link to="/summarize" className='home-h link'>Summarize</Link> */}
          <button className="btn-primary">Get Started</button>
        
        </div>
      </nav>

      <section className="hero">
       
        <h1 className='home-h content'>Summarize Your Meeting Notes in Seconds!</h1>
        <p className='home-h content '>Effortlessly transform your meeting notes into concise summaries and actionable insights.</p>
        <Link to="/upload" className="btn-primary link left ">Upload Meeting Notes</Link>
      </section>
      </div>
      <br />
      <section className="features">
        <div className='logo'>
      <img src={logo} alt="icon" height="25px" />
        <h2>Meeting Note Summarizer</h2>
        </div>
        <div className="feature-grid">
          <div className="feature-card c1">
            <div className="feature-icon i1">📄</div>
            <div><h3>AI Summarization</h3>
            <p className="category">Automation</p>
            <p>Automatically generate concise summaries of meeting notes in seconds.</p></div>
            
          </div>
          <div className="feature-card c2">
            <div className="feature-icon i2">🎯</div>
            <div> <h3>Keyword Highlighting</h3>
            <p className="category">Analysis</p>
            <p>Identify and highlight key points and action items from the meeting.</p></div>
           
          </div>
          <div className="feature-card c3">
            <div className="feature-icon i3">🎤</div>
            <div>
            <h3>Voice Transcription</h3>
            <p className="category">Conversion</p>
            <p>Convert spoken words into text to ensure no details are missed.</p>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
