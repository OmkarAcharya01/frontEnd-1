import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const headlines = [
    "AI-Based Title Verification System Launched Nationwide",
    "ISRO Announces New Lunar Research Mission",
    "GDP Growth Reaches 7.3% This Quarter",
    "Supreme Court Reviews Digital Media Policy",
    "Cybersecurity Reforms Strengthened Across India",
    "Smart City Infrastructure Expands to 50 Cities",
    "Global Climate Summit Begins in Geneva",
    "Healthcare AI Integration Speeds Up Diagnosis",
    "Digital Governance Framework Updated",
    "New Data Protection Bill Introduced"
  ];

  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);

    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(newsInterval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="newspaper">

      {/* Top Strip */}
      <div className="top-strip">

        {/* LEFT SIDE RULES CIRCLE */}
        <div className="left-rules">
          <Link to="/rules" className="rules-circle">
            R
          </Link>
        </div>

        {/* CENTER TIME */}
        <div className="center-time">
          {time.toLocaleDateString()} | {time.toLocaleTimeString()}
        </div>

        {/* RIGHT LOGIN */}
        <div>
          <Link to="/login" className="login-btn">Login</Link>
        </div>

      </div>

      {/* Masthead */}
      <div className="masthead">
        <h1>THE VERIFIER</h1>
        <p className="tagline">Truth • Technology • Transparency</p>
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
        <div className="breaking-label">Breaking:</div>
        <div className="ticker-wrapper">
          <div className="ticker-move">
            <span>AI-based Title Verification System launched nationwide</span>
            <span>ISRO announces next moon mission schedule</span>
            <span>RBI keeps repo rate unchanged</span>
            <span>Supreme Court reviews digital media guidelines</span>
            <span>India’s GDP growth steady at 7.3%</span>

            {/* duplicate for smooth loop */}
            <span>AI-based Title Verification System launched nationwide</span>
            <span>ISRO announces next moon mission schedule</span>
            <span>RBI keeps repo rate unchanged</span>
            <span>Supreme Court reviews digital media guidelines</span>
            <span>India’s GDP growth steady at 7.3%</span>
          </div>
        </div>
      </div>

      {/* Auto Changing Headline */}
      <div className="headline-container">
        <h2 key={index} className="fade-headline">
          {headlines[index]}
        </h2>
      </div>

      {/* News Cards */}
      <div className="news-grid">

        <div className="news-card">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c" alt="news"/>
          <h3>AI Governance Reform Approved</h3>
          <p>Government accelerates AI integration to improve transparency and compliance.</p>
        </div>

        <div className="news-card">
          <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa" alt="news"/>
          <h3>ISRO Satellite Launch Success</h3>
          <p>India’s space agency successfully deploys next-generation communication satellite.</p>
        </div>

        <div className="news-card">
          <img src="https://images.unsplash.com/photo-1559526324-593bc073d938" alt="news"/>
          <h3>Healthcare AI Boost</h3>
          <p>AI-driven diagnostic systems reduce hospital waiting time by 30%.</p>
        </div>

        <div className="news-card">
          <img src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe" alt="news"/>
          <h3>Smart City Expansion</h3>
          <p>Urban modernization projects approved for 12 additional cities.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;