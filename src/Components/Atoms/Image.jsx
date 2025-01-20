import { useEffect, useState } from "react";

const Image = (props) => {
    const {height, width, aspectRatio, themeMode, imageSrc, altText} = props;
    const [currentTheme, setCurrentTheme] = useState(themeMode);

    useEffect(() => {
        console.log(currentTheme, 'current theme mode in Image Macro Component');
    }, [currentTheme])


    return(
        <img src={`${imageSrc}`} alt={`${altText}`} style={{height: `${height}`, width: `${width}`, aspectRatio: `${aspectRatio}`}} />
    )
}

export default Image;