import { useEffect, useState } from "react";
import InfoBox from "./FormComponents/InfoBox";
// import Axios from "axios";
import api from "../../service";

export default function SearchForm(){
  //  states
  const [data, setData] = useState([]);
  const [query,setQuery] = useState('8.8.8');

  // axios instance
  // const client = Axios.create({
  //   baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=${query}`
  // })
  // use effect for data retrieval
  useEffect(() => {
    const fetchQuery = async () => {
      try{
        handleSubmit();
        let response = await api.get(API_URL);
        setData(response.data);
        // data.map(query => {
        //   return(
        //     <InfoBox
        //       key = {0}
        //       ipaddress = {query.ip}
        //       location = {`${query.location},${query.location.city}`}
        //       timezone = {query.location.timezone}
        //       isp = {query.isp}
        //     />
        //   )
        // })

      }catch(error){
        // console.log(error.response.data)
        // console.log(error.response.status)
        // console.log(error.response.headers)
      }
    }

    fetchQuery();
    // query elements
  },[data,query])

  // get input value and store in state
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // setIp("");
    // setIsSearched(true);
    setQuery(e.target.value);
  }
  // handle click
  // const handleClick = (query) => {
  //   setUrl(`https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=${query}`)
  // }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="map-form">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="input"
            value={query}
            onChange={handleChange}
          />

          <button
            type="button"
            alt=""
            className="button"
            onClick={useEffect(query)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
            </svg>
          </button>
        </div>
        <p>input value:{query}</p>
      </form>
      {/* infobox */}
      <InfoBox/>
    </div>
  )
}
