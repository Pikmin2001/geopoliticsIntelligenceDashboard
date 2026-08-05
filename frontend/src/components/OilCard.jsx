function OilCard({brent, wti}) {
    return (
        <div className="card">
      <h2>Oil Prices</h2>

      <p>
        <b>Brent:</b> ${brent}
      </p>

      <p>
        <b>WTI:</b> ${wti}
      </p>
    </div>
    )
    }

export default OilCard

