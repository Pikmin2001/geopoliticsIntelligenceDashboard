function InsuranceCard({ multiple, vlccPremiumLow, vlccPremiumHigh }) {
  return (
    <div className="card">
        
      <h2>Insurance</h2>

      <p><b>Multiple:</b> {multiple}x pre-war baseline</p>

      <p><b>VLCC Premium Low:</b> ${vlccPremiumLow}</p>

      <p><b>VLCC Premium High:</b> ${vlccPremiumHigh}</p>

    </div>
  );
}

export default InsuranceCard;