import Page from "./Pages/Page";
import Header from "./Components/Header";
import watchScreenSize from "./Assets/Utilities/width-observer";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./Assets/Utilities/ThemeContext";
import { observer} from "./Assets/utilities";
import emitter from "./Assets/Utilities/event-bus";
// import allImages, {getGlobalAssets, getProjectAssets, getTechIcons} from './Assets/Utilities/API';

export default function App() {
  const { screenWidth, setScreenWidth, themeMode, lowerCaseSectionsArr} = useContext(GlobalContext);
  const [tabLocation, setTabLocation] = useState(0);
  const [currentThemeMode, setCurrentThemeMode] = useState(themeMode);

let bodyTag = document.getElementsByTagName('body')[0];
let screen = window.screen;
//---------------------------------------------
function hideAddressBar(bPad) {
	// Big screen. Fixed chrome likely.
	if(screen.width > 980 || screen.height > 980) return;

	// Standalone (full screen webapp) mode
	if(window.navigator.standalone === true) return;

	// Page zoom or vertical scrollbars
	if(window.innerWidth !== document.documentElement.clientWidth) {
		// Sometimes one pixel too much. Compensate.
		if((window.innerWidth - 1) !== document.documentElement.clientWidth) return;

	}
  hideAddressBar();

	setTimeout(function() {
		// Already scrolled?
		if(window.pageYOffset !== 0) return;

		// Perform autoscroll
		window.scrollTo(0, 1);

		// Reset body height and scroll
		if(bodyTag !== undefined) bodyTag.style.height = window.innerHeight + 'px';
		window.scrollTo(0, 0);

	}, 1000);

}

useEffect(() => {
  window.addEventListener("resize", watchScreenSize);
  emitter.on("screen-width-data", (data) => {
        if(screenWidth !== data.width){
          setScreenWidth(data.width);
        }
      });
    const elsToWatch = document.querySelectorAll(".section-block");
    if(elsToWatch){
      elsToWatch.forEach((block) => {
            observer.observe(block);
          });
        emitter.on("current-scroll-index", (data) => {
          updateURL(`/${lowerCaseSectionsArr[data]}`);
          setTabLocation(data);
        })
    }
    return () => {
      window.removeEventListener("resize", watchScreenSize);
    }
}, [lowerCaseSectionsArr, screenWidth, setScreenWidth, tabLocation])

function updateURL(newURL) {
  if (window.history && window.history.pushState) {
    if(newURL === "/home"){
      window.history.pushState({}, '', "/");
    }else {
      window.history.pushState({}, '', newURL);
    }
  }
}

// const getMetaData = async (fetchURL) => {
//   console.log(fetchURL, "endpoint to fetch");
//   let endpoint = fetchURL;
//   if(fetchURL === "/home"){
//     endpoint = "/";
//   }else{
//     endpoint = fetchURL
//   }
//     try{
//       const response = await axios.get(`http://192.168.1.115:3000${endpoint}`);
//       // const idk = response.data;
//       console.log(response.data, "response from test route");
//   } catch (error) {
//     console.error(error);
//   }
// }
// getMetaData();

  return (
      <div className="App">
        <Header
        tabLocation={tabLocation}
        handleMenuNavigation={(activeTab) => {setTabLocation(activeTab)}}
        />
        <Page
          tabLocation={tabLocation}
          handleContactNav={(activeTab) => {setTabLocation(activeTab)}}
        />
      </div>
  );
}
