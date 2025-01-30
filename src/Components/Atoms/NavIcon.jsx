import React, { useContext } from 'react';
import { GlobalContext } from "../../Assets/utilities";
import { useState, useEffect } from 'react';

const NavIcon = ({height, width, key ,navAction, containerClass, id, iconClass, IconSource}) => {

    const {themeMode} = useContext(GlobalContext);
    const [currentStroke, setCurrentStroke] = useState();
    const [fill, setFill] = useState("transparent");
    const [scale, setScale] = useState();

    useEffect(() => {
        themeMode === "light" ? setCurrentStroke("black") : setCurrentStroke("oldlace");
        console.log(IconSource)
        console.log(id, "key logan")
        if(id === 0){
            setScale(0.85);
        }else if(id === 1){
            // console.log("second icon");
            setScale(0.82);
            setFill("oldlace");
        }else if(id === 2){
            setScale(0.81);
            setFill("oldlace");
        }
        // currentFill === "black" ? setCurrentFill("oldlace") : setCurrentFill("black");
    }, [IconSource, id, themeMode])


  return (
    <button key={key}  className={`${containerClass}`}>
    <IconSource id={id} onClick={(e) => {navAction(e)} } scaleSize={scale} stroke={currentStroke} fill={fill} strokeWidth="2px" className={`${iconClass}`} height={height} width={width} />
    </button>
  );
};

export default NavIcon;