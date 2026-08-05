function TransitCard({ count, throughput }) {
  return (
    <div className="card">
      <h2>Ship Traffic</h2>

      <p><b>Transit Count:</b> {count}</p>

      <p><b>Throughput:</b> {throughput}%</p>
    </div>
  );
}

export default TransitCard;