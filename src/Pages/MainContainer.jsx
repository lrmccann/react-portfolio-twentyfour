import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import {animateProjectRows} from '../Assets/utilities';


const MainContainer = (props) => {
    // const [animationStarted, setAnimationStarted] = useState(false);
    const {themeMode} = useContext(GlobalContext);

    // useEffect(() => {
    //     if(!animationStarted){
    //         animateProjectRows("start");
    //         setAnimationStarted(true);
    //     }
    // }, [animationStarted]); 


    return(
               <div className={`main-container bg-custom-primary-background ${themeMode === "light" ? "light-page" : "dark-page"}`} id="main-page">
                {props.children}
        </div>
    );
}

export default MainContainer;