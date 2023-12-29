
export default function InfoBox() {
  return(
    <div className="info-box">
      <div className="card-category hstack gap-5">
        <div className="box">
          <h6>
            IP ADDRESS
          </h6>
          <h3 className="address">
            testing
          </h3>
        </div>
        {/* <div className="vr"></div> */}
        <div className="box">
          <h6>
            LOCATION
          </h6>
          <h3 className="location">
            testing
          </h3>
        </div>
        {/* <div className="vr"></div> */}
        <div className="box">
          <h6 className="utc">
            TIMEZONE
          </h6>
          <h3>
            testing
          </h3>
        </div>
        {/* <div className="vr"></div> */}
        <div className="box">
          <h6>
            ISP
          </h6>
          <h3 className="isp">
            testing
          </h3>
        </div>
      </div>
    </div>
  )
}
