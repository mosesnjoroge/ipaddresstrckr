import { useState } from "react";
import Leaflet from "leaflet";

export default function Banner() {
  const [searchInput, setSearchInput] = useState("");
  // const [address,setAddress] = useState("");
  // const [city,setCity] = useState("");
  // const [utc,setUtc] = useState("");
  // const [ispProvider,setIspProvider] = useState("");

  // updating dynamic user entry
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  // get the value of the form field to search
  const handleSubmit = (e) => {
    e.preventDefault();
    // pass the ip address to the search_ip_address function
    searchIpAddress(searchInput);
    // console.log(searchInput)
  }

  // Search for an Ipaddress
  async function searchIpAddress(searchInput){
    const api_key = "at_9zLazwhedqY57YjmEW8ZCBzKBg3MI"
    const request = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${searchInput}`)
    const response = response.json()

    // update the UI on the page
    const [location, ip, isp] = response;
    const cityLocation = location.city
    const timezoneLocation = location.timezone
    updateUI(ip, cityLocation, timezoneLocation, isp)
  }
  // update UI function
  const updateUI = (ip, cityLocation, timezoneLocation, isp)=> {
    /* select all the elements on the page */
    const address = document.querySelector(".address");
    const city = document.querySelector(".location");
    const utc = document.querySelector(".utc");
    const isprovider = document.querySelector(".isp");


    /* Update all the elements on the page */
    if (createMap !== undefined && createMap !== null) {
      createMap.remove()
   }
    createMap(location.lat, location.lng, location.country, location.region)
  }
  // generate map
  const createMap =(lat, lng)=> {
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
    <div className="banner-search-section">
      <div className='search-box pb-4 container'>
        <h2>
          IP Address Tracker
        </h2>
        <form className="map-form container" onSubmit={handleSubmit}>
          <input
            // className="form-control w-70"
            type="text"
            placeholder="Search for any IP address or domain"
            id="search"
            value={searchInput}
            onChange={handleChange}
          />
          <button type="submit" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
