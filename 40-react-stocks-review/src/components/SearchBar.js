import React from 'react';

const SearchBar = ( props ) => {

  let sort = props.sort

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="None" checked={sort === 'None'} onChange={ (e)=> props.changeSort(e.target.value)}/>
        None
      </label>
      <label>
        <input type="radio" value="Alphabetically" checked={sort === "Alphabetically"} onChange={ (e)=> props.changeSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sort === 'Price'} onChange={ (e)=> props.changeSort(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={ (e)=> props.changeFilter(e.target.value)}>
          <option value='None'>None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
