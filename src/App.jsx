import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
// import InfoBox from './components/MapComponents/FormComponents/InfoBox';
import SearchForm from './components/MapComponents/searchForm';
import Map from './components/MapComponents/Map';

function App() {

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
        {/* <div>
          <InfoBox/>
        </div> */}
      </div>
      {/* map component */}
      <div className='map'>
        <Map/>
      </div>
    </div>
  )
}

export default App
