// Utilities
import observer from "./Utilities/init/observer";
import {GlobalContext} from "./Utilities/ThemeContext";
import animateProjectRows from './Utilities/init/animateProjectRows';
import sendFormData from './Utilities/sendFormData';
// Images & Json
import globalIcons from './json/global-icons.json';
import frontEndTechArr from './json/frontend-tech.json';
import backEndTechArr from './json/backend-tech.json';
import toolsArr from './json/tools.json';
import resumeText from './json/resume.json';
import projectArr from './json/projects.json';
import darkIconArr from './json/dark-icons.json';
import navigationIcons from './json/navigation-icons.json';
import industryIcons from './json/industry-icons.json';
// pdfs
import myResumePDF from './PDFs/Logan-McCann-2024-Resume.pdf';


// import {updateDots, startAutoSlide, stopAutoSlide, showSlides, nextSlide, prevSlide} from "./Utilities/carousel";
// import sliderFunc from "./Utilities/carousel";


export {
    observer,
    GlobalContext,
    animateProjectRows,
    globalIcons,
    frontEndTechArr,
    backEndTechArr,
    toolsArr,
    darkIconArr,
    resumeText,
    projectArr,
    myResumePDF,
    sendFormData,
    navigationIcons,
    industryIcons
    // sliderFunc
}