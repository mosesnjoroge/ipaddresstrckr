
export default function InfoBox() {

  return(
    <div className="info-box">
      <div className="card-category">
        <div className="box">
          <span>IP ADDRESS</span>
          <span className="address">testing</span>
        </div>
        {/* <div className="vr"></div> */}
        <div className="box">
          <span>LOCATION</span>
          <span className="location">testing</span>
        </div>
        {/* <div className="vr"></div> */}
        <div className="box">
          <span className="utc">TIMEZONE</span>
          <span>testing</span>
        </div>
        {/* <div className="vr"></div> */}
        <div className="box">
          <span>ISP</span>
          <span className="isp">testing</span>
        </div>
      </div>
    </div>
  )
}
