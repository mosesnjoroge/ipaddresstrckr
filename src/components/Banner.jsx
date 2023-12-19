import { useState } from "react";

export default function Banner() {
  const [searchInput, setSearchInput] = useState("");
  // updating dynamic user entry
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  // get the value of the form field to search
  const handleSubmit = (e) => {
    e.preventDefault();
    // pass the ip address to the search_ip_address function
    console.log(searchInput)
  }

  return(
    <div className="banner-search-section">
      <div className='search-box pt-4 container'>
        <h2 className="text-center">
          IP Address Tracker
        </h2>
        <form className="map-form container" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}
