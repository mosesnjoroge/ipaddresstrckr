import { useEffect, useState } from "react";
import InfoBox from "./FormComponents/InfoBox";

export default function SearchForm(){
  //  states
  const [inputValue, setInputValue] = useState("");
  // const [ip, setIp] = useState("");
  // const [isSearched, setIsSearched] = useState(false);
  const [mapData, setMapData] = useState([])

  // get input value and store in state
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    // setIp("");
    // setIsSearched(true);
  }

  // use effect for data retrieval
  useEffect(() => {
    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      console.log(data.ip)
      // setMapData(data.ip.value)
    })
    .catch((err) => {
      console.log(err.message);
    });
  },[])
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="map-form">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="input"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit" alt="" className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
            </svg>
          </button>
        </div>
        <p>input value:{inputValue}</p>
      </form>
      {/* infobox */}
      <InfoBox
        // value={inputValue}
      />
      {
        // mapData.map((value) => {
        //   return(
        //     // value.data.location.lat
        //   )
        // })
      }
    </div>
  )
}
