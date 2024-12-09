import { useContext, useEffect } from "react";
import Section from "../Components/Section";
import { GlobalContext } from "../Assets/utilities";
// import chatBotIcon from '../Assets/Images/chatbot-icon.png';


const Page = (props) => {

    const {tabLocation, handleContactNav} = props;
      const {lowerCaseSectionsArr} = useContext(GlobalContext);
      
    useEffect(() => {

    }, [])
    return(
        <div className="main-container" id="main-page">
            {lowerCaseSectionsArr.map((section, i) => {
                return (
                <Section 
                tabLocation={tabLocation}
                key={i} 
                sectionName={section} 
                handleContactNav={handleContactNav}
                // currentI={i} 
                />
                )
             })}
        </div>
    )
}

export default Page;