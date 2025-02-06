import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Assets/utilities";

const MainContainer = ({currentScreenWidth, children}) => {


    const [mobileClassActive, setMobileClassActive] = useState();
    const {userDevice} = useContext(GlobalContext);
    useEffect(() => {
        if(currentScreenWidth <= 1024 && (userDevice === 'tablet' || userDevice === 'mobile')){
            setMobileClassActive("mobile-page");
        }else{
            setMobileClassActive("full-page");
        }   
    }, [currentScreenWidth, userDevice])

    return(
               <div className={`${mobileClassActive} bg-custom-primary-background`} id="main-page">
                {children}
        </div>
    );
}

export default MainContainer;