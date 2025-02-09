import './Export.css';
import logo from '../assets/images/paperclip.ico';
import { Link } from "react-router-dom";
const Export = () => {
  return (
    <div className="export">
      
      <nav className="navbar">
    <div className="logo">
    <img src={logo} alt="icon" height="25px" />
      <h1 className=' hu head'>SummarEase</h1>
    </div>
    <div className="nav-links">
      <Link to="/" className='home-h link'>Home</Link>
      {/* <Link to="/summarize" className='home-h link'>Summarize</Link> */}
      <Link to="/" className='home-h link'>Get Started</Link>
    
    </div>
  </nav>
      <div className="export-content">
        <img src="/assets/images/last.jpg"  className="export-image"/>
        <div>

        </div>
        
        <div className="export-buttons">
          <button className="export-btn pdf">
            <span className="icon">📄</span>
            Download as PDF
          </button>
          
          <button className="export-btn clipboard">
            <span className="icon">📋</span>
            Copy to Clipboard
          </button>
          
          <button className="export-btn email">
            <span className="icon">📧</span>
            Share via Email
          </button>
        </div>
      </div>
    </div>
   
  );
};

export default Export;