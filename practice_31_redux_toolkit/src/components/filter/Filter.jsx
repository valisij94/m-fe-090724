import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { applyFilter } from '../../store/actions/filterActions';
const Filter = ( {filters} ) => {

  const dispatch = useDispatch();

  const [filtersData, setFiltersData] = useState( {
    category: ''
  } );

  const onChangeHandler = (e) => {
    setFiltersData( old => ({...old, category: e.target.value}))
  }

  const applyFilters = () => {
    dispatch(applyFilter(filtersData));
  }

  return (
    <div>
        <select className='dropdown' onChange={onChangeHandler} value={filtersData.category}>
          <option value='' defaultValue disabled>Select something</option>
          {filters && filters.map(item =>
              <option key={item.slug} value={item.slug}>{item.name}</option>
          )}
        </select>
        <button onClick={applyFilters}>Apply Filters</button>
    </div>
  )
}
export default Filter;