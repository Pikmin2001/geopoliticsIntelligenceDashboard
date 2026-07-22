import { useEffect, useState } from "react";
import axios from "axios";

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
    return <h1>Loading...</h1>;
  }

  let statusColor = "green";
  if (status.status === "restricted") {
    statusColor = "orange";
  }
  if (status.status === "closed") { 
    statusColor = "red"
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Geopolitical Intelligence Tracker</h1>

      <h2 style={{ color: statusColor }}>
      Status: {status.status}
    </h2>

      <p>Brent Oil: ${status.brent}</p>

      <p>WTI: ${status.wti}</p>

      <p>
        Crisis Pressure:
        {" "}
        {status.hormuzIndex.crisisPressure.value}
      </p>

      <p>
        Escalation Probability:
        {" "}
        {status.hormuzIndex.escalationProbability.value}%
      </p>
    </div>
  


  );
}

export default App;