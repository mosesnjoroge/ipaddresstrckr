import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner';
import InfoBox from './components/InfoBox';
// import GeoDisplay from './components/GeoDiplay';
// import Leaflet from "leaflet";
// import { useState } from "react";

function App(props) {
  // const [searchInput, setSearchInput] = useState("");

  // // Select form
  // const search_form = document.querySelector(".header_form");

  // search_form.addEventListener("submit", (event) => {
  //     /* stop form from auto submiting on click */
  //     event.preventDefault();

  //     /* get the value of the form field */
  //     const value = document.querySelector("#search").value;

  //     /* Pass the Ip address to the search_Ip_Address() function */
  //     searchIpAddress(value);
  // })

  // Search for an IpAddress
  // async function searchIpAddress(searchInput) {
  //   const api_key = "xxxxxxxxxxxxxxxxxxxxxxx";
  //   const request = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${searchInput}`);
  //   const response = await request.json();

  //   // Update the UI on the page
  //   const { location, ip, isp } = response;
  //   update_ui(ip, location.city, location.timezone, isp)
  // }

  // update UI function
  // function update_ui(ip_address, location, timezone, isp) {
  //   /* select all the elements on the page */
  //   const address = document.querySelector(".address");
  //   const city = document.querySelector(".location");
  //   const utc = document.querySelector(".utc");
  //   const isprovider = document.querySelector(".isp");

  //   /* Update all the elements on the page */
  //   address.textContent = ip_address;
  //   city.textContent = location;
  //   utc.textContent = 'UTC' + timezone;
  //   isprovider.textContent = isp;
  // }

  return (
    <div className='app'>
      <Banner
        {...props}
      />
      <div className='pt-1'>
        <InfoBox/>
      </div>
      <div className='map' id='map'>

      </div>
    </div>
  )
}

export default App
