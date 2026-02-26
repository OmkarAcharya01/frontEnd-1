import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="newspaper">

      {/* Top Strip */}
      <div className="top-strip">
        <div>{time.toLocaleDateString()} | {time.toLocaleTimeString()}</div>
        <div>National Edition</div>
      </div>

      {/* Masthead */}
      <div className="masthead">
        <h1>THE VERIFIER</h1>
        <p className="tagline">Truth • Technology • Transparency</p>
        <Link to="/login" className="login-btn">Login</Link>
      </div>

      {/* Navigation */}
      <div className="nav">
        <Link to="/section/India">India</Link>
        <Link to="/section/World">World</Link>
        <Link to="/section/Movies">Movies</Link>
        <Link to="/section/Data">Data</Link>
        <Link to="/section/Health">Health</Link>
        <Link to="/section/Opinion">Opinion</Link>
        <Link to="/section/Premium">Premium</Link>
      </div>

      {/* Breaking News */}
      <div className="breaking-bar">
        <span>Breaking:</span>
        <div className="scrolling-text">
          AI-based Title Verification System launched nationwide • ISRO prepares new space mission • Digital governance reforms approved
        </div>
      </div>

      {/* Main Layout */}
      <div className="layout">

        {/* Left Column */}
        <div className="left">
          <h3>Premium</h3>
          <p>Exclusive investigative reports</p>
          <p>Government policy deep analysis</p>
          <p>Editorial insights and interviews</p>
        </div>

        {/* Center Column */}
        <div className="center">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
            alt="headline"
          />
          <h2>India Accelerates AI-Based Governance Systems</h2>
          <p>
            The government integrates AI-driven similarity detection tools
            to ensure regulatory compliance and streamline title approvals
            across media sectors.
          </p>
        </div>

        {/* Right Column */}
        <div className="right">
          <h3>Latest Updates</h3>
          <ul>
            <li>GDP growth steady at 7.3%</li>
            <li>Cybersecurity reforms announced</li>
            <li>Supreme Court constitutional hearing</li>
            <li>Smart city expansion approved</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Home;