import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
import Map from './components/Map';
// import Leaflet from "leaflet";


function App() {

  return (
    <div className='app'>
      <Banner/>

      <div className='pt-1'>

      </div>
      <div className='map'>
        <Map />
      </div>
    </div>
  )
}

export default App
