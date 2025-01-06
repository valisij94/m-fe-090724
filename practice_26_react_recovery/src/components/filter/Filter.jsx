import React from 'react'
import { useState, useEffect } from 'react';
const Filter = ( {category, setCategory} ) => {
    const[filters, setFilters] = useState([]);
    useEffect(() => {
        const fetchFilters =  async (url) => {
            try{
                let res = await fetch(url);
                if(!res.ok){
                    throw new Error(`HTTP Error: ${res.status}`);
                }
                let data = await res.json();
                setFilters(data);
            } catch(err){
                console.error(err);
            }
        }

        fetchFilters("https://dummyjson.com/products/categories");
    }, [])

    const onChangeHandler = (event) => {
      setCategory(event.target.value);
    }

  return (
    <div>
        <select className='dropdown' onChange={onChangeHandler} value={category}>
          <option value='' selected disabled>Select something</option>
          {filters && filters.map(item =>
              <option key={item.slug} value={item.slug}>{item.name}</option>
          )}
        </select>
    </div>
  )
}
export default Filter;