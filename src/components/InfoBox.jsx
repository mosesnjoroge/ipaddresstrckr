
export default function InfoBox() {
  return(
    <div className="container">
      <div className="card-category hstack gap-5">
        <div className="location-box">
          <h6>
            IP ADDRESS
          </h6>
          <h3>
            testing
          </h3>
        </div>
        <div className="vr"/>
        <div className="ip-address-box">
          <h6>
            LOCATION
          </h6>
          <h3>
            testing
          </h3>
        </div>
        <div className="vr"/>
        <div className="timezone-box">
          <h6>
            TIMEZONE
          </h6>
          <h3>
            testing
          </h3>
        </div>
        <div className="vr"/>
        <div className="isp-box">
          <h6>
            ISP
          </h6>
          <h3>
            testing
          </h3>
        </div>
      </div>
      {/* <div className="cards">
        <div className="card-category">
          Breakfast
        </div>

        <div className="card-category">
          Lunch
        </div>

        <div className="card-category">
          Dinner
        </div>
      </div> */}
    </div>
  )
}
