import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Assets/utilities";

const Button = (props) => {

    const {userDevice} = useContext(GlobalContext);
    const {height, width, id, type, textColor, textContent, outline, action, alignment} = props;
    // state for testing
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    // state for conditionally rendering module
    const [Module, setModule] = useState();

    // use effect for testing
    useEffect(() => {
        console.log(hovered, "hovered button");
        console.log(clicked, "clicked button");
    }, [hovered, clicked])

    // use effect to conditionally import my resume pdf to href attribute if id is "resume-download"
    useEffect(() => {
        if (id === "resume-download") {
          import('../../Assets/PDFs/Logan-McCann-2024-Resume.pdf')
            .then(module => setModule(module.default))
            .catch(error => console.error('Error importing module:', error));
        }
      }, [id]);

    return(
        <div 
        className={`${userDevice === "mobile" ? "small-button-container flex flex-col items-center" : "large-button-container"}`} 
        id={`${id}`}
        style={{justifyContent: `${alignment}`}}
        >
            <button 
            className="bg-custom-button-bg-primary"
            type={type}
            onMouseDown={() => {setClicked(true);}}
            onMouseUp={() => {setClicked(false);}}
            onMouseEnter={() => {setHovered(true);}}
            onMouseOut={() => {setHovered(false);}}
            onTouchStart={() => {setClicked(true);}}
            onTouchEnd={() => {setClicked(false);}}
            onClick={(e) => {e.preventDefault(); 
                if(id === "resume-download"){
                    action(Module);
                }else{
                    action();
                }
            }}
            style={{height: `${height}%`, width: `${width}%`, color: `${textColor}`, outline: `${outline}`}} >
                    <p className="text-custom-text">{textContent}</p>
            </button>
        </div>
    )
}

export default Button;