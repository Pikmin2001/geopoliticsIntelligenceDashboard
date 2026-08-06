function DataHealthCard({ships, oil}) {
    return (
        <div className="card">
      

      <p><b>Ship Data:</b> {ships}</p>

      <p><b>Oil Data:</b> {oil}</p>
    </div>
    );
}
export default DataHealthCard;