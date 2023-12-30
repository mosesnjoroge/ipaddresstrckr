import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
import { useState } from 'react';
import InfoBox from './components/MapComponents/InfoBox';
import SearchForm from './components/MapComponents/searchForm';
import Map from './components/MapComponents/Map';

function App() {
  // // states
  // const [inputValue, setInputValue] = useState([]);

  // // get input value and store in state
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // value(e.target.value)
  //   // setIp("");
  //   // setErr("");
  //   // setIsSearched(true);
  //   // apiReq(value);
  // };
  return (
    <div className='app'>
      <div className='banner-search-section'>
        {/* banner */}
        <Banner/>
        {/* search box */}
        <div>
          <SearchForm
            // value={inputValue}
            // handleChange={handleChange}
            // onSubmit={handleSubmit}
          />
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
