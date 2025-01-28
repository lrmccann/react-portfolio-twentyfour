import { useState } from "react";
import Icon from "../Atoms/Icon";

const AnimatedRow = ({ iconArr, heading, uniqueKey, callback }) => {

  const [headingClicked, setHeadingClicked] = useState(false);
  const [headingHovered, setHeadingHovered] = useState(false);

  return (
    <div
      className="mobile-icon-container flex flex-col justify-evenly"
      key={`icon-container-${uniqueKey}`}
    >
      <h1
        id={`skill-header-${uniqueKey}`}
        className="mobile-skills-header text-custom-text"
        onMouseDown={(e) => {
          e.preventDefault();
          setHeadingClicked(true);
           callback(iconArr, heading);
          }}
          onMouseUp={(e) => {
            e.preventDefault();
            setHeadingClicked(false);
          }}
        onTouchStart={(e) => {
          e.preventDefault();
          setHeadingClicked(true);
          callback(iconArr, heading)}}
        onTouchEnd={(e) => {e.preventDefault(); 
          setHeadingClicked(false);
        }}
        onMouseOver={(e) => {
          e.preventDefault();
          setHeadingHovered(true);
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          setHeadingHovered(false);
        }}
      >
        {heading}
      </h1>
      <div className="mobile-icon-row scroller" id={`scroller-${uniqueKey}`}>
        <div
          className="icon-container flex flex-row items-center scroller__inner"
          id="scroller-inner"
        >
          {iconArr.map((icon, index) => (
            <Icon
              id="icon"
              key={`icon-${index}`}
              source={icon.img}
              className="icon"
              altText={icon.Name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedRow;
