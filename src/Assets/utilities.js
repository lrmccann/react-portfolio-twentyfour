// import watchScreenSize from "./utilities/width-observer";
import observer from "./Utilities/observer";
import PortContext, {ContextConsumer, ContextProvider} from "./Utilities/PortContext";
import getTabLocation from "./Utilities/API";
import isFirstSectionInViewport from "./Utilities/element-in-viewport";
import addAnimation from './Utilities/scroller';


export {
    // watchScreenSize,
    observer,
    ContextConsumer,
    ContextProvider,
    PortContext,
    getTabLocation,
    isFirstSectionInViewport,
    addAnimation
}