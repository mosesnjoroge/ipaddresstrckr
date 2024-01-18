import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import PropTypes from 'prop-types';

export default function Map({latitude,longitude}) {

  return(
    <MapContainer center={[latitude,longitude]} zoom={13} scrollWheelZoom={false}
      style={{
        width:'100vw',
        height: '100vh',
        zIndex: 8
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={[latitude,longitude]}>
        <Popup>
          Popup placeholder.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

Map.PropTypes = {
  latitude: PropTypes,
};
Map.PropTypes = {
  longitude: PropTypes,
};
