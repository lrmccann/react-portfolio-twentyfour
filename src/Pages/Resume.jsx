import {useContext, useState, useEffect} from 'react';
import { resumeText } from "../Assets/utilities";
import { GlobalContext } from "../Assets/utilities";
import Button from '../Components/Atoms/Button';



const Resume = ({currentScreenWidth}) => {

// const {userDevice} = props;    
    const {userDevice} = useContext(GlobalContext);  

    const [mobileHomeActive, setMobileHomeActive] = useState();


// pass to button comp to download resume without HTML attr
    function download(url) {
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }

      useEffect(() => {
        if(currentScreenWidth <= 1025){
          setMobileHomeActive("mobile-section");
        }else{
          setMobileHomeActive("");
        }
      }, [currentScreenWidth])
    
    return(
        <div
        id="experience"
        className={`section-block ${mobileHomeActive}`}
      >
        {resumeText.map((resumeSection, i) => {
          return (
            <div
              id={
                userDevice !== "mobile"
                  ? "resume-container"
                  : "mobile-resume-container"
              }
              className='flex flex-col justify-middle'
              key={i}
            >
              <h1 className="text-custom-text">{resumeSection.title}</h1>
              <h2 className="text-custom-text"><i>{resumeSection.organization}</i></h2>
              <ul className="text-custom-text">
                <li>{resumeSection.responsibilities[0]}</li>
                <li>{resumeSection.responsibilities[1]}</li>
                {userDevice !== "mobile" && (
                  <li>{resumeSection.responsibilities[2]}</li>
                )}
                {userDevice !== "mobile" && (
                  <li>{resumeSection.responsibilities[3]}</li>
                )}
              </ul>
            </div>
          );
        })}
            <Button height={100} width={100} containerPadding={"0 2.5% 0 2.5%"} bottom={5} containerSize={10} alignment={"flex-end"} type="--download" action={download} id="resume-download" textContent="Download Full Resume" />
      </div>
    )
}


export default Resume;