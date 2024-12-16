import { useState } from "react";

function SimpleButton( {btnText, outerClickHandler} ) {

  const [counter, setCounter] = useState(0);

  const clickHandler = (event) => {
    setCounter(counter + 1);
    outerClickHandler && outerClickHandler(event);
  }

  return (
    <div>
      <button onClick={clickHandler}>{btnText}</button>
      <p>Clicked {counter} times!</p>
    </div>
  )
}

export default SimpleButton;
