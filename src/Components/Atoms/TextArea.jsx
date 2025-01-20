import {useEffect, useState, useContext} from 'react';
import { GlobalContext } from '../../Assets/utilities';
const TextArea = ({id, className, name, placeholder, value, type, stateUpdater}) => {
    
    const [inputActive, setInputActive] = useState(false);
    const [textContent, setTextContent] = useState("");
    const [numberOfRows, setNumberOfRows] = useState();

    const { userDevice } = useContext(GlobalContext);

const handleChange = (event) => {
    console.log(event, "event")
    event.preventDefault();
    setTextContent(event.target.value);
}

const handleBlur = () => {
    console.log(stateUpdater, "state upodater");
    stateUpdater(textContent);
}

useEffect(() => {
    if(userDevice === "mobile"){
        setNumberOfRows(5);
    }else{
        setNumberOfRows(10);
    }
}, [userDevice])

    return(
        <label
        className='flex flex-col'
        >
            <textarea
            id={id}
            rows={`${numberOfRows}`}
            className={className}
            name={name}
            placeholder={placeholder}
            value={value}
            type={type}
            onClick={() => inputActive ? setInputActive(false) : setInputActive(true)}
            onBlur={handleBlur}
            onChange={(e) => {handleChange(e)}}
            />
        </label>
    )
}

export default TextArea;