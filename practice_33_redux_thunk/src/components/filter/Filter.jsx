import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { applyFilters } from '../../store/slices/filterSlice';

const Filter = ( {filters} ) => {

  const dispatch = useDispatch();

  const [filtersData, setFiltersData] = useState( {
    category: '',
    name: '',
    priceFrom: null,
    priceTo: null
  } );

  const inputChangeHandler = (e) => {
    const inputName = e.target.name;
    setFiltersData( old => ( {...old, [inputName]: e.target.value } ) )
  }

  const handleApplyFiltersClick = () => {
    dispatch(applyFilters(filtersData));
  }

  return (
    <div>
        <select name='category' className='dropdown' onChange={inputChangeHandler} value={filtersData.category}>
          <option value='' defaultValue disabled>Select something</option>
          {filters && filters.map(item =>
              <option key={item.slug} value={item.slug}>{item.name}</option>
          )}
        </select>
        <input name='name' value={filters.name} onChange={inputChangeHandler} type='text' placeholder='Name'/>
        <input name='priceFrom' value={filters.priceFrom} onChange={inputChangeHandler} type='text' placeholder='Price From'/>
        <input name='priceTo' value={filters.priceTo} onChange={inputChangeHandler} type='text' placeholder='Price To'/>

        <button onClick={handleApplyFiltersClick}>Apply Filters</button>
    </div>
  )
}
export default Filter;

/**
 * 1. Создать слайс для работы с фильтром товаров. Там будет лежать объект  у которого будут свойств category, name, priceFrom, priceTo.
 * 2. Добавить в компонент Filter  3 инпута: для названия, для цены от и для цены до.
 * 3. В компоненте Filter, в локальный стейт, добавить свойства name, priceFrom, priceTo, и заполнять их из соответствующих инпутов
 * 4. При нажатии на кнопку Apply filters, просто складываем объект из локального стейта в редакс-слайс из п.1
 * 5. В компоненте ProductList, извлечь из редакс-стейта данные фильтров, и отрендерить отфильтрованный список товаров.
 */