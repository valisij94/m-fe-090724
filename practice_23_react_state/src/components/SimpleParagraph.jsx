function SimpleParagraph( {textContent, clickHandler} ) {

  return (
    <p onClick={clickHandler}>{textContent}</p>
  );
}

export {SimpleParagraph};