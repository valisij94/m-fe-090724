import React from 'react'
const Filter = ( {category, setCategory, filters} ) => {
    const onChangeHandler = (event) => {
      setCategory(event.target.value);
    }

  return (
    <div>
        <select className='dropdown' onChange={onChangeHandler} value={category}>
          <option value='' defaultValue disabled>Select something</option>
          {filters && filters.map(item =>
              <option key={item.slug} value={item.slug}>{item.name}</option>
          )}
        </select>
    </div>
  )
}
export default Filter;