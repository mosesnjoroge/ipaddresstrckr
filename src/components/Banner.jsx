// import { Form } from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card'

export default function Banner() {
  return(
    <div className="container">
      <div className='search-box pb-4'>
        <h2>
          IP Address Tracker
        </h2>
        <form>
          <div className="mb-3 d-flex">
            <input type="text" className="form-control w-70" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            <button type="submit" className="btn btn-outline-primary">
              search
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
