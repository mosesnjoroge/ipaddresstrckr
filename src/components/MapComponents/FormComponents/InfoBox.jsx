import PropTypes from 'prop-types';

export default function InfoBox({
  ipaddress,
  location,
  city,
  timezone,
  isp
}) {

  return(
    <div className="info-box">
      <div className="card-category">
        <div className="box">
          <span>IP ADDRESS</span>
          <div className="address">{ipaddress}</div>
        </div>
        <div className="box">
          <span>LOCATION</span>
          <span>
            <div className="location">{city}{location}</div>
          </span>
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

InfoBox.propTypes = {
  ipaddress: PropTypes.string,
};
InfoBox.propTypes = {
  location: PropTypes.string,
};
InfoBox.propTypes = {
  city: PropTypes.string,
};
InfoBox.propTypes = {
  timezone: PropTypes.string,
};
InfoBox.propTypes = {
  isp: PropTypes.string,
};
