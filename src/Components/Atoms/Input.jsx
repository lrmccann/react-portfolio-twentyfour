import {useState} from 'react';
const Input = ({id, className, name, placeholder, value, type, stateUpdater}) => {
    
    const [inputActive, setInputActive] = useState(false);
    const [textContent, setTextContent] = useState("");

const handleChange = (event) => {
    event.preventDefault();
    setTextContent(event.target.value);
}

const handleBlur = () => {
    console.log(stateUpdater, "state upodater");
    stateUpdater(textContent);
}

    return(
        <label
        className='flex flex-col'
        >
            <input
            id={id}
            className={className}
            name={name}
            placeholder={placeholder}
            value={value}
            type={type}
            onClick={() => inputActive ? setInputActive(false) : setInputActive(true)}
            onBlur={handleBlur}
            onChange={(e) => {handleChange(e)}}
            ></input>
        </label>
    )
}

export default Input;