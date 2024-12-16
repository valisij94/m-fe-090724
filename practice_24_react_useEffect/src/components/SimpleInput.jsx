import { useState } from "react";

function SimpleInput( {placeholder} ) {

  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SimpleInput;
