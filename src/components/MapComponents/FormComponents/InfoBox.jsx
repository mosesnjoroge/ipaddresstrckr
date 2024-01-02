
export default function InfoBox({ ipaddress="null", location="null",timezone="null", isp="null",}) {

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
          <span>TIMEZONE</span>
          <span className="utc">{timezone}</span>
        </div>
        <div className="box">
          <span>ISP</span>
          <span className="isp">{isp}</span>
        </div>
      </div>
    </div>
  )
}
