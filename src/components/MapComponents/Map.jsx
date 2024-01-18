import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


// eslint-disable-next-line react/prop-types
export default function Map({ lat = 13.54232, long = 0.72934 }) {

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
          Popup placeholder.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
