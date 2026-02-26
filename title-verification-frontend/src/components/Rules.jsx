import { Link } from "react-router-dom";

function Result() {
  return (
    <div className="rules-page">

      <div className="rules-header">
        <h1>Title Verification Rule Framework</h1>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      <div className="rules-container">

        <div className="rule-card">
          <h2>1. Title Uniqueness Verification</h2>
          <ul>
            <li>Title must not exactly match any of the 160,000+ registered titles.</li>
            <li>Case-insensitive duplicate detection applied.</li>
            <li>Whitespace and punctuation normalized before comparison.</li>
          </ul>
        </div>

        <div className="rule-card">
          <h2>2. String Similarity Check</h2>
          <ul>
            <li>Levenshtein distance comparison applied.</li>
            <li>Minor variations or word swaps are flagged.</li>
            <li>Threshold-based rejection for close matches.</li>
          </ul>
        </div>

        <div className="rule-card">
          <h2>3. Semantic Similarity Detection (NLP Based)</h2>
          <ul>
            <li>Transformer-based embeddings used for semantic comparison.</li>
            <li>Titles with similar meaning are detected even if words differ.</li>
            <li>Similarity score threshold applied (e.g., &gt;80% flagged).</li>
          </ul>
        </div>

        <div className="rule-card">
          <h2>4. Phonetic Similarity Validation</h2>
          <ul>
            <li>Soundex / phonetic algorithms applied.</li>
            <li>Titles sounding similar may be rejected.</li>
          </ul>
        </div>

        <div className="rule-card">
          <h2>5. Rule-Based Validation</h2>
          <ul>
            <li>No generic names (e.g., "Daily News", "National Times").</li>
            <li>No misleading or deceptive wording allowed.</li>
            <li>No prohibited or offensive terms permitted.</li>
            <li>No government impersonation titles allowed.</li>
          </ul>
        </div>

        <div className="rule-card">
          <h2>6. Regulatory Compliance Enforcement</h2>
          <ul>
            <li>Must comply with Press Registrar General of India (PRGI) guidelines.</li>
            <li>Language-based duplication not allowed.</li>
            <li>Translation-based similarity detection applied.</li>
            <li>Final approval subject to authority verification.</li>
          </ul>
        </div>

        <div className="rule-card decision">
          <h2>7. Decision Logic</h2>
          <ul>
            <li>If exact match → Automatically Rejected</li>
            <li>If high semantic similarity → Manual Review</li>
            <li>If compliant & unique → Approved</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Result;