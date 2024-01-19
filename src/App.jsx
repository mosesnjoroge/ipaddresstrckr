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
    const [ip, setIp] = useState([]);
    const [query,setQuery] = useState('8.8.8');
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [timezone, setTimezone] = useState("");
    const [isp,setIsp] = useState("");
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [errrorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);


   // axios instance convert this function to async/await

   const apiReq = (req = "") => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_AlbBdwk9jiqFPsluLMY6m0MYMA0oA&domain=${req}`
      )
      .then((res) => {
        let success = res.ok;

        res.json().then(res => {
          if(!success){
            // handle (403)errors here
            console.log(res.messages)
            return;
          }
          // handle successful requests here
          console.log(res.message);
          setIp(res.data.ip);
          setCity(res.data.location.city);
          setCountry(res.data.location.country);
          setTimezone(res.data.location.timezone);
          setLatitude(res.data.location.lat);
          setLongitude(res.data.location.lng);
          setIsp(res.data.isp);
        })
      })
        .catch((err) => {
          setErrorMessage(err.message);
          setError(false)
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
      if (error === false){
        setIp("");
        apiReq(query);
        setCountry("");
        setCity("");
        setTimezone("");
        setIsp("");
      }else{
        alert(errrorMessage);
      }
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
