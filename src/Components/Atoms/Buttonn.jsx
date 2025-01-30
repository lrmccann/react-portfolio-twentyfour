import { useState, useEffect } from "react";
import { GlobalContext } from "../../Assets/utilities";


  // props = id, key, className, height, width, textContent, borderRadius, action, type, backgroundColor, ariaLabel, fontSize
const Buttonn = ({
  id,
  key, 
  className,
  height,
  width,
  textContent,
  borderRadius,
  action,
  type,
  backgroundColor,
  ariaLabel
}) => {
    

const [buttonActive, setButtonActive] = useState(false);
const [buttonFocused, setButtonFocused] = useState(false);

  useEffect(() => {
    console.log(buttonFocused, "hovered button");
    console.log(buttonActive, "clicked button");
}, [buttonFocused, buttonActive])

  return (
    <button
    
    id={`${id}`}
    key={`${key}`}
    type={`${type}`}
    aria-label={`${ariaLabel}`}
    className={`${className}`}
    onMouseEnter={(e) => {e.preventDefault(); setButtonFocused(true);}}
    onMouseOut={(e) => {e.preventDefault(); setButtonFocused(false);}}
    onClick={(e) => {e.preventDefault(); !buttonActive ? setButtonActive(true) : setButtonActive(false); action();}}
    onTouchStart={(e)=> {e.preventDefault(); setButtonActive(true);}}
    onTouchEnd={(e) => {e.preventDefault(); setButtonActive(false); action();}}
      style={{
        height: `${height}%`,
        width: `${width}%`,
        backgroundColor: `${backgroundColor}`,
        borderRadius: `${borderRadius}`
      }}
    >
      {textContent}
    </button>
  );
};

export default Buttonn;