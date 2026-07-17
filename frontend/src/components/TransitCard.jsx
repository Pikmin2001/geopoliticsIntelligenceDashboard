function TransitCard({ count, throughput }) {
  return (
    <div className="card">
      <h2>Ship Traffic</h2>

      <p>Transit Count: {count}</p>

      <p>Throughput: {throughput}%</p>
    </div>
  );
}

export default TransitCard;