
export default function InfoBox() {
  return(
    <div className="container">
      <div className="card-category">
        <div className="location-box">
          <h2>
            IP ADDRESS
          </h2>
        </div>
        <hr className="box-solid-divider"/>
        <div className="ip-address-box">
          <h2>
            LOCATION
          </h2>
        </div>
        <hr className="box-solid-divider"/>
        <div className="timezone-box">
          <h2>
            TIMEZONE
          </h2>
        </div>
        <hr className="box-solid-divider"/>
        <div className="isp-box">
          <h2>
            ISP
          </h2>
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
