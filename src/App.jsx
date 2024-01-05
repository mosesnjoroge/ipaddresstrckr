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
   const [location, setLocation] = useState("");
   const [city, setCity] = useState("");
   const [timezone, setTimezone] = useState("");
   const [isp,setIsp] = useState("");

   // get input value and store in state
   const handleChange = (e) => {
     setQuery(e.target.value);
    };

    // use effect for data retrieval
    useEffect(() => {
       apiReq()
    },[]);
    // handle submit
    const handleSubmit = (e) => {
      e.preventDefault()
      apiReq(query)
      // setIp("");
      // setLocation("");
      // setCity("");
      // setTimezone("");
      // setIsp("");
    }
    // axios instance convert this function to async/await

    const apiReq = (req = "") => {
     axios
       .get(
         `https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=${req}`
       )
       .then((res) => {
        setIp(res.data)
        setCity(res.data.location.city)
        setTimezone(res.data.location.timezone)
        setLocation(res.data.country)
        setIsp(res.data.isp)
       })
       .catch((error) => (error.status));
    };


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
          {ip && (
            <InfoBox
              ipaddress = {ip.ip}
              location={location}
              city={city}
              timezone={timezone}
              isp={isp}
            />)
          }
        </div>
      </div>
      {/* map component */}
      <div className='map'>
        <Map/>
      </div>
    </div>
  )
}

export default App
