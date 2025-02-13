import Buttonn from "../../Components/Atoms/Buttonn";
import PdfViewer from "../../Components/PdfViewer";





const ResumeDesktop = ({resumeText, currentScreenWidth, download}) => {



    return(
        <div className="resume-container flex flex-col justify-between">
            <PdfViewer height={100} width={100} />
        </div>
    )
}


export default ResumeDesktop;