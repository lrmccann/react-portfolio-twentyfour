import { useEffect, useState } from "react";

const MainContainer = (props) => {


    const [mobileClassActive, setMobileClassActive] = useState();

    useEffect(() => {
        if(props.currentScreenWidth <= 1025){
            setMobileClassActive("mobile-page");
        }else{
            setMobileClassActive("");
        }   
    }, [props.currentScreenWidth])

    return(
               <div className={`${mobileClassActive} bg-custom-primary-background`} id="main-page">
                {props.children}
        </div>
    );
}

export default MainContainer;