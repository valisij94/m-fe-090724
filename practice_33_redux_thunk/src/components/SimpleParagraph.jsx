import { useContext } from "react";
import { ThemeContext } from "../context/themeContext/ThemeContext";

function SimpleParagraph( {textContent, clickHandler} ) {

  const theme = useContext(ThemeContext);

  return (
    <p className={`simpleParagraph ${theme}`} onClick={clickHandler}>{textContent}</p>
  );
}

export {SimpleParagraph};