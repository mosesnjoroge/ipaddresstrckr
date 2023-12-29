import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
// import { useState } from 'react';
import InfoBox from './components/MapComponents/InfoBox';
import SearchForm from './components/MapComponents/searchForm';
import Map from './components/MapComponents/Map';

function App() {

  // const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setIp("");
  //   // setErr("");
  //   // setIsSearched(true);
  //   // apiReq(value);
  // };
  return (
    <div className='app'>
      <Banner/>
      {/* search box */}
      <SearchForm/>
      {/* infobox */}
      <div>
        <InfoBox/>
      </div>
      {/* map component */}
      <div className='map'>
        <Map/>
      </div>
    </div>
  )
}

export default App
