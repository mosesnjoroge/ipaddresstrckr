
export default function InfoBox({ipaddress, location, timezone,isp}) {

  return(
    <div className="info-box">
      <div className="card-category">
        <div className="box">
          <span>IP ADDRESS</span>
          <span className="address">{ipaddress}</span>
        </div>
        <div className="box">
          <span>LOCATION</span>
          <span className="location">{location}</span>
        </div>
        <div className="box">
          <span className="utc">{timezone}</span>
          <span>testing</span>
        </div>
        <div className="box">
          <span>ISP</span>
          <span className="isp">{isp}</span>
        </div>
      </div>
    </div>
  )
}
