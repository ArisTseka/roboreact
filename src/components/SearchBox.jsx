import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input className="pa3 b--green bg-lightest-blue"
        type="search"
        onChange={searchChange} 
        placeholder="search robots"/>
    </div>
  );
}

export default SearchBox;
