function StatusCard({ status, statusColor }) {
  return (
    <div className="card">
      <h2>Status</h2>

      <h1 className={statusColor}>
        {status}
      </h1>
    </div>
  );
}
export default StatusCard;