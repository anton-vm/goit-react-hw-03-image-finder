import React, { createRef } from "react";
import PropTypes from "prop-types"

const Searchbar = ({ searchData, addPictureToPage }) => {



  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={addPictureToPage} id="request_field">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input" 
          
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
          onChange={searchData}
        />
      </form>
    </header>
  );
  Searchbar.propTypes = {
    searchData: PropTypes.func,
    addPictureToPage: PropTypes.func,
  }
};

export default Searchbar;
