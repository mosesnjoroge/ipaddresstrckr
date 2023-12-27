import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export default function Map() {
  // const position = [51.505, -0.09];
  return(
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}
      style={{
        width:'100vw',
        height: '100vh',
        zIndex: 8
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
