import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import PropTypes from 'prop-types';

export default function Map({lat = 43.70359, long = -79.51513 }) {

  return(
    <MapContainer center={[lat,long]} zoom={13} scrollWheelZoom={false}
      style={{
        width:'100vw',
        height: '100vh',
        zIndex: 8
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={[lat,long]}>
        <Popup>
          <p>
            Your are here!
          </p>
          <p>
            {lat}, {long}
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

Map.PropTypes = {
  lat: PropTypes,
};
Map.PropTypes = {
  long: PropTypes,
};
