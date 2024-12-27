import { useEffect, useRef, useState } from "react";
import { animateProjectRows } from "../Assets/utilities";



const AnimatedRow = (props) => {
    // const [startAnimation, setStartAnimation] = useState(true);


    return(
        <div className="icon-container flx-rw flx-align-center scroller__inner" id="scroller-inner">
            {props.eachArr.map((icon, index) => { 
                return <img id="icon" key={index} src={icon.img} className="icon" alt={icon.Name} />
            })} 
        </div>
    )
}

export default AnimatedRow;