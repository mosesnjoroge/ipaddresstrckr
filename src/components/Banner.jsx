import { useState } from "react";

export default function Banner() {
  const [searchInput, setSearchInput] = useState("");

  // change handler
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(setSearchInput)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput)
  }
  /* Select form */
  // const search_form = document.querySelectorByClass(".map-form");

  // search_form.addEventListener("submit", (event) => {
  //     /* stop form from auto submiting on click */
  //     event.preventDefault();

  //     /* get the value of the form field */
  //     const value = document.querySelector("#search").value;

  //     /* Pass the Ip address to the search_Ip_Address() function */
  //     // search_Ip_Address(value);
  //     console.log(value)
  // })

  // Search for an Ipaddress
  // async function search_Ip_address(ip_address){
  //   const api_key = "###"
  //   const request = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip_address}`)
  //   const response = response.json()
  // }
  return(
    <div className="container">
      <div className='search-box pb-4'>
        <h2>
          IP Address Tracker
        </h2>
        <form className="map-form" onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <input
              className="form-control w-70"
              type="text"
              placeholder="Search for any IP address or domain"
              id="search"
              value={searchInput}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-outline-primary" alt="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
