import { useEffect, useState } from "react";

const Image = (props) => {
    const {height, width, aspectRatio, borderRadius, themeMode, imageSrc, altText} = props;
    const [currentTheme, setCurrentTheme] = useState(themeMode);

    useEffect(() => {
        console.log(currentTheme, 'current theme mode in Image Macro Component');
    }, [currentTheme])


    return(
        <img className="outline outline-custom-primary-outline outline-2" src={`${imageSrc}`} alt={`${altText}`} style={{height: `${height}`, width: `${width}` , aspectRatio: `${aspectRatio}`, borderRadius: `${borderRadius}`}} />
    )
}

export default Image;