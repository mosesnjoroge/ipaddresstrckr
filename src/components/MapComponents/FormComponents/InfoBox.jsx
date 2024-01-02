
export default function InfoBox({ ipaddress="null", location="null",timezone="null", isp="null",}) {

  return(
    <div className="info-box">
      <div className="card-category">
        <div className="box">
          <span>IP ADDRESS</span>
          <div className="address">{ipaddress}</div>
        </div>
        <div className="box">
          <span>LOCATION</span>
          <div className="location">{location}</div>
        </div>
        <div className="box">
          <span>TIMEZONE</span>
          <div className="utc">{timezone}</div>
        </div>
        <div className="box">
          <span>ISP</span>
          <div className="isp">{isp}</div>
        </div>
      </div>
    </div>
  )
}
