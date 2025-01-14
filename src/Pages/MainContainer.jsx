import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import {animateProjectRows} from '../Assets/utilities';


const MainContainer = (props) => {
    // const {tabLocation, handleContactNav, currentThemeMode} = props;
    // const {lowerCaseSectionsArr} = useContext(GlobalContext);
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        if(!animationStarted){
            animateProjectRows("start");
            setAnimationStarted(true);
        }
        // return () => setAnimationStarted(false)
    }, [animationStarted]); 


    return(
               <div className={`main-container bg-custom-primary-background`} id="main-page">
                {props.children}
                {/* {allPortfolioSections.map((section, index) => {
                    return(
                        <section
                        tabLocation={tabLocation}
                        currentThemeMode={currentThemeMode}
                        key={index} 
                        sectionName={section} 
                        handleContactNav={handleContactNav}
                        />
                    )
                })} */}
            {/* {lowerCaseSectionsArr.map((section, i) => {
                return (
                <Section 
                tabLocation={tabLocation}
                currentThemeMode={currentThemeMode}
                key={i} 
                sectionName={section} 
                handleContactNav={handleContactNav}
                />
                )
             })} */}
        </div>
    )
}

export default MainContainer;