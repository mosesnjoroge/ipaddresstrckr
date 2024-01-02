import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
import InfoBox from './components/MapComponents/FormComponents/InfoBox';
import SearchForm from './components/MapComponents/searchForm';
import Map from './components/MapComponents/Map';
import { useState, useEffect } from 'react';

function App() {
   //  states
   const [data, setData] = useState([]);
   const [query,setQuery] = useState('8.8.8');

   // axios instance
   // const client = Axios.create({
   //   baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=${query}`
   // })
   // use effect for data retrieval
  //  useEffect(() => {
  //    const fetchQuery = async () => {
  //      try{
  //        handleSubmit();
  //        let response = await api.get(API_URL);
  //        setData(response.data);
  //        // data.map(query => {
  //        //   return(
  //        //     <InfoBox
  //        //       key = {0}
  //        //       ipaddress = {query.ip}
  //        //       location = {`${query.location},${query.location.city}`}
  //        //       timezone = {query.location.timezone}
  //        //       isp = {query.isp}
  //        //     />
  //        //   )
  //        // })

  //      }catch(error){
  //        // console.log(error.response.data)
  //        // console.log(error.response.status)
  //        // console.log(error.response.headers)
  //      }
  //    }

  //    fetchQuery();
  //    // query elements
  //  },[data,query])

   // get input value and store in state
  //  const handleChange = (e) => {
  //    setQuery(e.target.value);
  //  };

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
  return (
    <div className='app'>
      <div className='banner-search-section'>
        {/* banner */}
        <Banner/>
        {/* search box */}
        <div>
          <SearchForm/>
        </div>
        {/* infobox */}
        <div>
          <InfoBox/>
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
