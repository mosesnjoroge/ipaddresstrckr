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
            <input type="text" className="form-control w-70" id="formGroupExampleInput" placeholder="Search for any IP address or domain"/>
            <button type="submit" className="btn btn-outline-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
