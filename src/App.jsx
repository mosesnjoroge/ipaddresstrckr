import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import InfoBox from './components/InfoBox';
import GeoDisplay from './components/GeoDiplay';

function App() {

  return (
    <div className='app'>
      <Banner/>
      <div>
        <InfoBox/>
      </div>
      <div>
        <GeoDisplay/>
      </div>
    </div>
  )
}

export default App
