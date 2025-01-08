function SimpleParagraph( {textContent, clickHandler} ) {

  return (
    <p className="simpleParagraph" onClick={clickHandler}>{textContent}</p>
  );
}

export {SimpleParagraph};