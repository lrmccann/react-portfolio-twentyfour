import { useEffect, useState } from "react";
import Section from "../Components/Section";
// import chatBotIcon from '../Assets/Images/chatbot-icon.png';


const Page = (props) => {

    const {lowerCaseSectionsArr, scrolledHome, isMobile} = props;



    useEffect(() => {
        
    }, [])


    return(
        <div className="main-container" id="main-page">
            {lowerCaseSectionsArr.map((section, i) => {
                return <Section key={i} sectionName={section} currentI={i} mobileHome={scrolledHome} isMobile={isMobile} />
            })}
        </div>
    )
}

export default Page;