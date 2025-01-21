import { memo } from "react";

const Icon = memo(function Icon({id, className, source, altText}) {
    return(
        <img id={id} className={className} src={source} alt={altText} />
    )
});

export default Icon;