import { useState} from "react";
// import CreateMap from "./CreateMap";
import InfoBox from "../InfoBox";

export default function MapDisplay() {

  // states
  const [searchInput, setSearchInput] = useState("");
  // const []

  // updating dynamic user entry
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  // get the value of the form field to search
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput)
    const value = searchInput
    // pass the ip address to the search_ip_address function
    search_Ip_Address(value)
  }
  async function search_Ip_Address(value){
    const api_key = "at_HhKzCe09UZIYJC9pY7YTg7kMMUzZd";
    const request = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${value}`)
    const response = await request.json();
    const [location, ip, isp] = response;
    location.response = location
    isp.response = isp
    ip.response = ip
    update_box()
  }
  const update_box = document.querySelector(".address");
  document.getElementsByClassName("address").innerhtml = location

  return(
    <div>
      {/* <form className="form-group" onSubmit={handleSubmit}>
        <div className="map-form">
          <input
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
        </div>
      </form> */}
      <InfoBox
      />

    </div>

  )
}
