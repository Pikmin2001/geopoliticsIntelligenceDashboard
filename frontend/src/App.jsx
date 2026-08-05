import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import OilCard from "./components/OilCard";
import StatusCard from "./components/StatusCard";
import RiskCard from "./components/RiskCard";

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
    <div className="dashboard">
      <h1 className="title"> Geopolitical Intelligence Dashboard </h1>

      <StatusCard
        status={status.status}
        />

      <OilCard
        brent={status.brent}
        wti={status.wti} 
      />

      <RiskCard
        pressure={status.hormuzIndex.crisisPressure.value}
        escalation={status.hormuzIndex.escalationProbability.value}
/>

    </div>
  


  );
}

export default App;