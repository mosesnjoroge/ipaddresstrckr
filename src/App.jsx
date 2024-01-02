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
   const [data, setData] = useState([]);
   const [query,setQuery] = useState('8.8.8');

   // axios instance

   const apiReq = (req = "") => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=${req}`
      )
      .then((res) => {
        setData(res.data);
        // setIsSearched(false);
      })
      .catch((error) => (error.message));
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
    setData("");
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
          <InfoBox
            ipaddress = {data.ip}
            location={`${data.location.city}, ${data.location.country}`}
            timezone={data.location.timezone}
            isp={data.isp}
          />
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
