import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/MapComponents/Banner';
// import Leaflet from "leaflet";


function App() {

  return (
    <div className='app'>
      <Banner/>
      {/* <MapDisplay/> */}
      <div className='pt-1'>

      </div>
      <div className='map' id='map'>

      </div>
    </div>
  )
}

export default App
