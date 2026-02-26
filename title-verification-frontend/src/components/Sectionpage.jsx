import { useParams, Link } from "react-router-dom";

function Section() {

  const { name } = useParams();

  // ================= INDIA =================
  const indiaNews = [
    {
      title: "Parliament Passes Digital Infrastructure Reform Bill",
      desc: "The government approved a nationwide digital infrastructure expansion plan aimed at improving rural connectivity and public data transparency.",
      img: "https://images.unsplash.com/photo-1587135941948-670b381f08ce"
    },
    {
      title: "ISRO Successfully Tests Reusable Launch Vehicle",
      desc: "India moves closer to affordable space missions as ISRO completes a critical landing experiment.",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    },
    {
      title: "India’s Solar Energy Output Hits Record High",
      desc: "India crosses 200 GW renewable capacity milestone with major solar projects.",
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
    }
  ];

  // ================= WORLD =================
  const worldNews = [
    {
      title: "Global Climate Pact Extended Till 2045",
      desc: "World leaders agree to accelerate carbon neutrality targets under renewed treaty.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      title: "US–EU Trade Talks Resume",
      desc: "Economic policymakers attempt to stabilize global markets.",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
    }
  ];

  // ================= MOVIES =================
  const moviesNews = [
    {
      title: "Pan-India Blockbuster Crosses ₹1000 Crore",
      desc: "The action epic becomes one of the highest-grossing films.",
      img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66"
    }
  ];

  // ================= DATA =================
  const dataNews = [
    {
      title: "AI Models Power 40% of Government Services",
      desc: "Rapid AI adoption reshapes governance platforms.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    }
  ];

  // ================= HEALTH =================
  const healthNews = [
    {
      title: "New mRNA Vaccine Shows 95% Effectiveness",
      desc: "Clinical trials reveal promising results.",
      img: "https://images.unsplash.com/photo-1580281657521-1b97b69a9d9f"
    }
  ];

  // ================= OPINION =================
  const opinionNews = [
    {
      title: "Is AI Replacing Traditional Journalism?",
      desc: "Experts debate automation in reporting.",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    }
  ];

  // ================= PREMIUM =================
  const premiumNews = [
    {
      title: "Inside India’s Secret Cyber Defense Program",
      desc: "Exclusive report on digital border security.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
    }
  ];

  // Select News Based On Route
  let newsList = [];

  if (name === "India") newsList = indiaNews;
  if (name === "World") newsList = worldNews;
  if (name === "Movies") newsList = moviesNews;
  if (name === "Data") newsList = dataNews;
  if (name === "Health") newsList = healthNews;
  if (name === "Opinion") newsList = opinionNews;
  if (name === "Premium") newsList = premiumNews;

  return (
    <div className="section-page">

      <div className="section-top">
        <h1>{name} News</h1>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      <div className="news-grid">
        {newsList.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.img} alt={news.title} />
            <div className="card-content">
              <h3>{news.title}</h3>
              <p>{news.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Section;