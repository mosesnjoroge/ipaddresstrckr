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

   // axios instance

   const apiReq = (req = "") => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&domain=${req}`
      )
      .then((res) => {
        console.log(setIp(res.data));
        // setIsSearched(false);
      })
      .catch((error) => (error.status));
  };
   // const client = Axios.create({
   //   baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=${query}`
   // })
   // use effect for data retrieval
  useEffect(() => {
    apiReq()
  }, []);

  // get input value and store in state
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setIp("");
    console.log(apiReq(query))
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
          {ip && (
            <InfoBox
              ipaddress = {ip.ip}
              location={`${ip.location.city}, ${ip.location.country}`}
              timezone={ip.location.timezone}
              isp={ip.isp}
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
