import { memo } from "react";


// this can be a Pure Component
// const Icon = ({id, className, source, altText}) => {
const Icon = memo(function Icon({id, className, source, altText}) {
    return(
        <img id={id} className={className} src={source} alt={altText} />
    )
});

// }

export default Icon;