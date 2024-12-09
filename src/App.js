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


  if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    let screen = window.screen
    let bodyTag = document.getElementsByTagName('body')[0];
    bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
    console.log(bodyTag, "body tag?")
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
