import { useState } from "react"

export default function AddProduct( {filters} ) {


  const [state, setState] = useState( {
    titleInput: { value: '', error: '' },
    descrInput: { value: '', error: '' },
    priceInput: { value: '', error: '' }
  } );

  const inputChangeHandler = (e) => {
    setState( old => ({
      ...old,
      [e.target.id]: { error: '', value: e.target.value}
    }))
  }

  const clickHandler = () => {
    let isValid = true;
    if (!state.titleInput.value) {
      isValid = false;
      setState( old => ({...old, titleInput: {...old.titleInput, error: 'Fill this field!'}}))
    }
    if ( !state.priceInput.value || Number.isNaN(+state.priceInput.value) ) {
      isValid = false;
      setState( old => ({...old, priceInput: {...old.priceInput, error: 'Please enter correct price!'}}))
    }
    if (!state.descrInput.value) {
      isValid = false;
      setState( old => ({...old, descrInput: {...old.descrInput, error: 'Fill this field!'}}))
    } else {
      if (state.descrInput.value.length < 5) {
        isValid = false;
        setState( old => ({...old, descrInput: {...old.descrInput, error: 'Too short!'}}))
      } else if (state.descrInput.value.length > 20) {
        isValid = false;
        setState( old => ({...old, descrInput: {...old.descrInput, error: 'Too long!'}}))
      }
    }

    if (isValid) {
      const payload = {
        title: state.titleInput.value,
        description: state.descrInput.value,
        price: state.priceInput.value,
        category: state.categorySelect.value
      };
      fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log('Something went wrong', err));
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', maxWidth: '200px', margin: '0 auto', gap: '10px', border: '1px solid black' }}>
      <label htmlFor="titleInput">Product Title</label>
      <input onChange={inputChangeHandler}id="titleInput" placeholder='Title' type='text'/>
      {state.titleInput.error && <p>{state.titleInput.error}</p>}
      <label htmlFor="descrInput">Product Description</label>
      <input onChange={inputChangeHandler} id="descrInput" placeholder='Description' type='text'/>
      {state.descrInput.error && <p>{state.descrInput.error}</p>}
      <label htmlFor="priceInput">Product Price</label>
      <input onChange={inputChangeHandler} id="priceInput" placeholder='Price' type='text'/>
      {state.priceInput.error && <p>{state.priceInput.error}</p>}
      <select id="categorySelect" onChange={inputChangeHandler}>
        <option value='' defaultValue disabled>Category</option>
        {filters && filters.map( el => <option key={el.slug} value={el.slug}>{el.name}</option>)}
      </select>
      <button onClick={clickHandler}>Click me!</button>
     </div>
  )
}