import { useEffect, useState } from "react";
import InfoBox from "./FormComponents/InfoBox";
import axios from "axios";

export default function SearchForm(){
  //  states
  const [query,setQuery] = useState('8.8.8');
  const [data, setData] = useState({hits: [] });

  // use effect for data retrieval
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=${query}`,
      );
      setData(result.data);
          // .then((response) => response.json())
          // .then((data) => {
          //   // console.log(data)
          //   setQuery(data);
          //   query([])
          //   // setIpAddress('')
          // })
          // .catch((err) => {
          //   console.log(err.message);
          // }
          // )
    }
    fetchData();
  },[query])

  // get input value and store in state
  // const handleChange = (e) => {
  //   query(e.target.value);
  // };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    // setIp("");
    // setIsSearched(true);
    setQuery(e.target.value);
  }
  {/* <div className="box">
    {data.hits.map(item => (
        <a href={item.url}>{item.title}</a>
      </li>
      <h6>
        IP ADDRESS
      </h6>
      <h3 className="address" key={item.ip}>

      </h3>
    ))}
  </div> */}

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="map-form">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button type="submit" alt="" className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
            </svg>
          </button>
        </div>
        <p>input value:{query}</p>
      </form>
      {/* infobox */}
      <InfoBox
        // ipAddress = {{}}
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
