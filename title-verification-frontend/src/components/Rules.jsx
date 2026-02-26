import { Link } from "react-router-dom";

function Rules() {
  return (
    <div className="rules-page">

      <div className="rules-header">
        <h1>Title Verification Rules</h1>
        <Link to="/" className="back-btn">Back</Link>
      </div>

      <div className="rules-container">

        <div className="rule-card">✔ Title must be unique among 160,000+ registered records.</div>
        <div className="rule-card">✔ Semantic similarity detection will reject similar titles.</div>
        <div className="rule-card">✔ Phonetically similar names are not allowed.</div>
        <div className="rule-card">✔ Generic names like "Daily News" alone are prohibited.</div>
        <div className="rule-card">✔ Must comply with PRGI regulatory guidelines.</div>
        <div className="rule-card">✔ Offensive, sensitive or misleading words are banned.</div>
        <div className="rule-card">✔ Language-based duplication not permitted.</div>
        <div className="rule-card">✔ NLP similarity threshold applied before approval.</div>
        <div className="rule-card">✔ Rule-based validation mandatory.</div>
        <div className="rule-card">✔ Final approval subject to authority review.</div>

      </div>

    </div>
  );
}

export default Rules;