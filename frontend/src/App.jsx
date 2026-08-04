import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
    <div className="app">
      <h1 className="title"> Geopolitical Intelligence Tracker</h1>

      <h2 style={{ color: statusColor, marginBottom: "1rem" }}>
      Status: {status.status}
    </h2>

      <p className="metric"><b>Brent Oil:</b>${status.brent}</p>

      <p className="metric"><b>WTI: </b> ${status.wti}</p>

      <p className="metric">
        <b>Crisis Pressure: </b>
        {" "}
        {status.hormuzIndex.crisisPressure.value}
      </p>

      <p className="metric">
        <b>Escalation Probability:</b>
        {" "}
        {status.hormuzIndex.escalationProbability.value}%
      </p>
    </div>
  


  );
}

export default App;