import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import OilCard from "./components/OilCard";
import StatusCard from "./components/StatusCard";
import RiskCard from "./components/RiskCard";
import TransitCard from "./components/TransitCard";
import InsuranceCard from "./components/InsuranceCard.jsx";
import DataHealthCard from "./components/DataHealthCard.jsx";
import NewsCard from "./components/NewsCard";
import { Analytics } from "frontend/@vercel/analytics/next"

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await axios.get(`${API_URL}/status`);
        setStatus(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStatus();
    const REFRESH_INTERVAL = 60000;
    const interval = setInterval(fetchStatus, REFRESH_INTERVAL); //fetch status every minute (60000 mil secs)

    return () => clearInterval(interval);
  }, []);

  const [news, setNews] = useState(null);

useEffect(() => {
  async function fetchNews() {
    try {
      const response = await axios.get(`${API_URL}/news`);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchNews();
}, []);

  if (!status) {
    return (
  <div className="app">
    <p>Loading...</p>
  </div>
);
  }

  let statusColor = "green";
  if (status.status === "restricted") {
    statusColor = "orange";
  }
  if (status.status === "closed") { 
    statusColor = "red"
  }

  return (

    <div className="app">
      <div className="header">
        <h1 className="title">
    Geopolitical Intelligence Dashboard
        </h1>

      <p className="updated">
        Last Updated: {new Date(status.asOf).toLocaleString()}
      </p>
    </div>
  

    <h2 className="sectionTitle">Operational Status</h2>
  <div className="dashboard singleCard">
    
    <StatusCard
      status={status.status}
      statusColor={statusColor}
    />

    

    <RiskCard
      pressure={status.hormuzIndex.crisisPressure.value}
      escalation={status.hormuzIndex.escalationProbability.value}
    />

    <TransitCard
      count={status.transits.count}
      throughput={status.transits.throughputPct}
    />
  </div>
    <h2 className="sectionTitle" >Energy Markets</h2>
    <div className="dashboard">

      <OilCard
      brent={status.brent}
      wti={status.wti}
    />

    <InsuranceCard
      multiple={status.insurance.multiple}
      vlccPremiumLow={status.insurance.vlccPremiumLow}
      vlccPremiumHigh={status.insurance.vlccPremiumHigh}
    />

    </div>
    
    <h2 className="sectionTitle" >System Health</h2>
    <div className="singleCard">
    <DataHealthCard
      ships={status.dataHealth.ships.source}
      oil={status.dataHealth.oil.source}
    />
    </div>

<h1 className="sectionTitle">News</h1>
{news && news.news.map((article) => (
  <NewsCard
    key={article.id}
    title={article.title}
    author={article.author}
    description={article.description}

  />
))}

</div>
  


  );

}

export default App;