import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
// import { useState } from 'react';


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
      <Banner
        // value={value}
        // handleSubmit={handleSubmit}
        // onChange={handleChange}
      />
    </div>
  )
}

export default App
