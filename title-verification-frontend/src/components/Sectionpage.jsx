import { useParams, Link } from "react-router-dom";

function SectionPage() {
  const { name } = useParams();

  const newsData = {

    India: [
      {
        title: "Parliament Approves New Infrastructure Development Bill",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
        desc: "The government passed a large-scale infrastructure bill focusing on highways, railways, and digital connectivity. Experts believe it will accelerate economic growth."
      },
      {
        title: "ISRO Conducts Successful Cryogenic Engine Test",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
        desc: "The Indian Space Research Organisation tested its next-generation cryogenic engine, strengthening India’s future deep space missions."
      },
      {
        title: "India’s Renewable Energy Capacity Surpasses 180 GW",
        image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
        desc: "With major solar and wind installations, India continues to push toward clean energy targets set under global climate agreements."
      }
    ],

    World: [
      {
        title: "Global Leaders Meet to Address Rising Inflation",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        desc: "Finance ministers from G20 nations gathered to discuss coordinated economic strategies amid global inflation concerns."
      },
      {
        title: "UN Climate Panel Releases Urgent Warning Report",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        desc: "Scientists warned that immediate carbon reduction efforts are necessary to prevent irreversible climate damage."
      },
      {
        title: "European Union Announces Digital Privacy Reform",
        image: "https://images.unsplash.com/photo-1520975922284-75b2a7b2cdb7",
        desc: "The new regulation strengthens user data protection laws across member states."
      }
    ],

    Movies: [
      {
        title: "Big-Budget Action Film Sets Opening Day Record",
        image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
        desc: "The film grossed ₹75 crore on its first day, marking one of the strongest openings in recent cinema history."
      },
      {
        title: "National Film Awards Honor Emerging Directors",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        desc: "Young filmmakers were recognized for their creative storytelling and socially impactful narratives."
      },
      {
        title: "Streaming Platforms See 40% Rise in Subscribers",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        desc: "Online entertainment platforms report record growth due to increased regional content production."
      }
    ],

    Health: [
      {
        title: "Breakthrough in Cancer Immunotherapy Announced",
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
        desc: "Researchers revealed promising trial results showing improved survival rates among patients."
      },
      {
        title: "WHO Issues Advisory on Seasonal Flu Strains",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982",
        desc: "Health experts recommend updated vaccinations ahead of the winter season."
      },
      {
        title: "Mental Health Awareness Campaign Launched",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        desc: "Authorities emphasize the importance of counseling services and stress management programs."
      }
    ],

    Data: [
      {
        title: "AI Adoption in Financial Sector Accelerates",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        desc: "Banks are implementing machine learning systems to improve fraud detection and customer analytics."
      },
      {
        title: "Cybersecurity Breaches Increase Globally",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        desc: "Security experts warn organizations to upgrade protection systems against advanced threats."
      },
      {
        title: "Cloud Computing Usage Hits Record High",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        desc: "Businesses continue migrating infrastructure to cloud platforms for scalability and cost efficiency."
      }
    ],

    Opinion: [
      {
        title: "Is Artificial Intelligence Reshaping Democracy?",
        image: "https://images.unsplash.com/photo-1507149833265-60c372daea22",
        desc: "Experts debate how AI-driven misinformation campaigns could influence public opinion and elections."
      },
      {
        title: "The Future of Remote Work in Urban India",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        desc: "Hybrid models are transforming city economies and corporate culture across sectors."
      },
      {
        title: "Climate Policy Needs Grassroots Action",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        desc: "Policy experts argue that local implementation is key to achieving national environmental targets."
      }
    ],

    Premium: [
      {
        title: "Inside India’s Defence Modernization Strategy",
        image: "https://images.unsplash.com/photo-1581092919535-7146ff1b6f0b",
        desc: "Exclusive sources reveal strategic upgrades planned across air and naval forces."
      },
      {
        title: "Special Investigation: The Future of Digital Currency",
        image: "https://images.unsplash.com/photo-1518544887872-2b6cfeebce37",
        desc: "Central banks worldwide are exploring CBDCs to modernize financial systems."
      },
      {
        title: "Exclusive Interview With Leading AI Researcher",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        desc: "The scientist discusses ethical AI deployment and global regulatory challenges."
      }
    ]

  };

  const newsList = newsData[name] || [];

  return (
    <div className="premium-page">
      <div className="section-header">
        <Link to="/" className="back-btn">← Back</Link>
        <h1>{name}</h1>
      </div>

      <div className="news-grid">
        {newsList.map((news, index) => (
          <div className="news-card" key={index}>
            <img src={news.image} alt="news"/>
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

export default SectionPage;