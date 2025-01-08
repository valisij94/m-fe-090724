import { useState } from "react"

export default function AddProduct( {filters} ) {


  const [state, setState] = useState( {
    titleInput: { value: '', error: '' },
    descrInput: { value: '', error: '' }
  } );

  const inputChangeHandler = (e) => {
    setState( old => ({
      ...old,
      [e.target.id]: { error: '', value: e.target.value}
    }))
  }

  const clickHandler = () => {
    if (!state.titleInput.value) {
      setState( old => ({...old, titleInput: {...old.titleInput, error: 'Fill this field!'}}))
    }
    if (!state.descrInput.value) {
      setState( old => ({...old, descrInput: {...old.descrInput, error: 'Fill this field!'}}))
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
      <input id="priceInput" placeholder='Price' type='text'/>
      <select id="categorySelect">
        <option value='' defaultValue disabled>Category</option>
        {filters && filters.map( el => <option key={el.slug} value={el.slug}>{el.name}</option>)}
      </select>
      <button onClick={clickHandler}>Click me!</button>
     </div>
  )
}