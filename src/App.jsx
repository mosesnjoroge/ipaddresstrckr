import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
import InfoBox from './components/MapComponents/FormComponents/InfoBox';
import SearchForm from './components/MapComponents/searchForm';
import Map from './components/MapComponents/Map';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  //  states
    const [ip, setIp] = useState("");
    const [query,setQuery] = useState('8.8.8');
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [timezone, setTimezone] = useState("");
    const [isp,setIsp] = useState("");
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [isSearched, setIsSearched] = useState(false)
    const [error, setError] = useState(null);

   // axios instance convert this function to async/await

   const apiReq = (req = "") => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_AlbBdwk9jiqFPsluLMY6m0MYMA0oA&ipAddress=${req}`
      )
      .then((res) => {
        setStatus('success');
        setIp(res.data.ip);
        // console.log(res.data.ip)
        setCity(res.data.location.city);
        setCountry(res.data.location.country);
        setTimezone(res.data.location.timezone);
        // longitude and lat api extraction
        setLatitude(res.data.location.lat);
        // console.log(res.data.location.lat)
        setLongitude(res.data.location.lng);
        // console.log(res.data.location.lng)
        // setIsSearched(false)
        setIsp(res.data.isp);
      })
        .catch((error) => {
          this.setStatus('error');
          error.alert('the ip address search is not valid');
          setError(true);
          }
        );

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
      setIsSearched(true);
      try {
        setIp("");
        apiReq(query)
        setCountry("");
        setCity("");
        setTimezone("");
        setIsp("");
      } catch (err) {
        // setError(err)
      }
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
            {error !== null ?
              {error}
            }
          />
        </div>
        {/* infobox */}
        <div>
          <InfoBox
              ipaddress = {ip}
              country={country}
              city={city}
              timezone={timezone}
              isp={isp}
          />

        </div>
      </div>
      {/* map component */}
      <div className='map'>
        <Map
          lat={latitude}
          long = {longitude}
        />
      </div>
    </div>
  )
}

export default App
