import { useContext, useEffect, useRef, useState } from "react";
import Section from "../Components/Section";
import { GlobalContext } from "../Assets/utilities";
import {animateProjectRows} from '../Assets/utilities';


const Page = (props) => {

    const {tabLocation, handleContactNav, currentThemeMode} = props;
    const {lowerCaseSectionsArr} = useContext(GlobalContext);

    useEffect(() => {
            animateProjectRows("start");
    }, []); 
    
    return(
        <div className={`main-container ${currentThemeMode === "light" ? "light-page" : "dark-page"}`} id="main-page">
            {lowerCaseSectionsArr.map((section, i) => {
                return (
                <Section 
                tabLocation={tabLocation}
                key={i} 
                sectionName={section} 
                handleContactNav={handleContactNav}
                />
                )
             })}
        </div>
    )
}

export default Page;