function RiskCard({ pressure, escalation }) {
  return (
    <div className="card">
      <h2>Risk Metrics</h2>

      <p>
        <b>Crisis Pressure:</b> {pressure}
      </p>

      <p>
        <b>Escalation Probability:</b> {escalation}%
      </p>
    </div>
  );
}

export default RiskCard;