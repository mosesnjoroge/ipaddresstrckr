import Leaflet from "leaflet";

export default function GeoDisplay() {
  const map =(lat, lng)=> {
    const map = Leaflet.map('map').setView([lat, lng, country, region], 14);
    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    Leaflet.marker([lat, lng]).addTo(map)
    	.bindPopup(`${region}, ${country}`)
    	.openPopup();
  }

  return(
    <div className="container">
      <div className="map-display" id="map">
        <map/>
      </div>
    </div>
  )
}
