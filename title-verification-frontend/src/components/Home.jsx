import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">

      {/* Top Bar */}
      <div className="top-bar">
        <div>{time.toLocaleDateString()} | {time.toLocaleTimeString()}</div>
        <div>Digital Edition</div>
      </div>

      {/* Masthead */}
      <motion.div 
        className="masthead"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>THE VERIFIER</h1>
        <Link to="/login" className="login-btn">LOGIN</Link>
      </motion.div>

      {/* Navigation */}
      <div className="nav-bar">
        <Link to="/section/India">India</Link>
        <Link to="/section/World">World</Link>
        <Link to="/section/Movies">Movies</Link>
        <Link to="/section/Data">Data</Link>
        <Link to="/section/Health">Health</Link>
        <Link to="/section/Opinion">Opinion</Link>
        <Link to="/section/Premium">Premium</Link>
      </div>

      {/* Hero */}
      <motion.div 
        className="hero-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>AI Powered Title Verification</h2>
        <p>Where Artificial Intelligence meets Journalism Integrity.</p>
      </motion.div>

      {/* Floating Cards */}
      <div className="floating-grid">
        <motion.div whileHover={{ scale: 1.05 }} className="float-card">
          🔎 Semantic Similarity Detection
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="float-card">
          ⚖ Regulatory Compliance Validation
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="float-card">
          🤖 AI Based Title Uniqueness Engine
        </motion.div>
      </div>

    </div>
  );
}

export default Home;