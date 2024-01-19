import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
import InfoBox from './components/MapComponents/FormComponents/InfoBox';
import SearchForm from './components/MapComponents/searchForm';
import Map from './components/MapComponents/Map';
import { useState, useEffect } from 'react';
// import IpifyApi from './service';
import axios from 'axios';

function App() {

  //  states
    const [ip, setIp] = useState([]);
    const [query,setQuery] = useState('8.8.8');
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [timezone, setTimezone] = useState("");
    const [isp,setIsp] = useState("");
    const [latitude, setLatitude] = useState(parseInt,10);
    const [longitude, setLongitude] = useState(parseInt,10)

   // axios instance convert this function to async/await

   const apiReq = (req = "") => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_AlbBdwk9jiqFPsluLMY6m0MYMA0oA&ipAddress=${req}`
      )
      .then((res) => {
        setIp(res.data)
        setCity(res.data.location.city)
        setCountry(res.data.location.country)
        setTimezone(res.data.location.timezone)
      // longitude and lat api extraction
        setLatitude(res.data.location.lat)
      // console.log(res.data.location.lat)
        setLongitude(res.data.location.lng)
      // console.log(res.data.location.lng)
        setIsp(res.data.isp)
        // console.log(ip.location.lat)
      })
        .catch((error) => (console.log(error.status)));
   };

   // use effect for data retrieval
   useEffect(() => {
      apiReq()
   },[]);

   // get input value and store in state
   const handleChange = (e) => {
      setQuery(e.target.value);
    };

    // handle submit
    const handleSubmit = (e) => {
      e.preventDefault()
      setIp("");
      apiReq(query)
      setCountry("");
      setCity("");
      setTimezone("");
      setIsp("");
    }


  return (
    <div className='app'>
      <div className='banner-search-section'>
        {/* banner */}
        <Banner/>
        {/* search box */}
        <div>
          <SearchForm
            handleChange={handleChange}
            handleSubmit ={handleSubmit}
          />
        </div>
        {/* infobox */}
        <div>
          <InfoBox
            ipaddress = {ip.ip}
            country={country}
            city={city}
            timezone={timezone}
            isp={isp}
          />
          {/* {ip && (
          } */}
        </div>
      </div>
      {/* map component */}
      <div className='map'>
        <Map
          lat={latitude}
          long = {longitude}
          // coordinates = {{ip.location.lat} {ip.location.long}}
        />
      </div>
    </div>
  )
}

export default App
