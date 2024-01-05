
import PropTypes from 'prop-types';

export default function SearchForm({handleSubmit, query, handleChange}){

  return(
    <form>
      <div className="map-form">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="input"
          value={query}
          onChange={handleChange}
        />

        <button
          type="submit"
          alt=""
          className="button"
          onClick={handleSubmit}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
          </svg>
        </button>
      </div>
    </form>
  )
}

SearchForm.propTypes = {
  query: PropTypes.string,
};
SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};
SearchForm.propTypes = {
  handleChange: PropTypes.func,
};
