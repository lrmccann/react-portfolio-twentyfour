import { useEffect, useState } from "react";
import { addAnimation } from "../Assets/utilities";



const AnimatedRow = (props) => {

    useEffect(() => {
        addAnimation();
        // console.log(props.eachArr, "props heeere")
        // props.eachArr.map((icon, i) => {
        //     console.log(icon, "icon")
        // })
        // runIconReset();
    }, [])

    return(
        <div className="icon-container flx-rw flx-align-center scroller__inner" id="scroller-inner">
            {/* {props.eachArr.map((icon, index) => { 
                return <img id="icon" key={index} src={icon.img} className="icon" alt={icon.Name} />
            })}  */}
        </div>
    )
}

export default AnimatedRow;