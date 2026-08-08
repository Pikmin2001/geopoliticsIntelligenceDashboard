import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import OilCard from "./components/OilCard";
import StatusCard from "./components/StatusCard";
import RiskCard from "./components/RiskCard";
import TransitCard from "./components/TransitCard";
import InsuranceCard from "./components/InsuranceCard.jsx";
import DataHealthCard from "./components/DataHealthCard.jsx";

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/status");
        setStatus(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStatus();

    const interval = setInterval(fetchStatus, 60000);

    return () => clearInterval(interval);
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

</div>
  


  );
}

export default App;