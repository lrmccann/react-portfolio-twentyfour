import Page from "./Pages/Page";
import Header from "./Components/Header";
import watchScreenSize from "./Assets/Utilities/width-observer";
import { useEffect, useState } from "react";
import emitter from "./Assets/Utilities/event-bus";
import observer from "./Assets/Utilities/observer";
import { ContextProvider } from "./Assets/utilities";
import axios from 'axios';

export default function App() {
  const [resized, setResized] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [tabLocation, setTabLocation] = useState();
  const [scrolledHome, setScrolledHome] = useState();
  const [mobile, setMobile] = useState(false);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const upperCaseSectionsArr = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];
  const lowerCaseSectionsArr = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

// async function testRoute () {
//   try{
//       const response = await axios.get('http://192.168.1.115:3000/');
//       // const idk = response.data;
//       console.log(response, "response from test route");
//   } catch (error) {
//     console.error(error);
//   }
// }

const watchWidthResize = () => {
  window.addEventListener("resize", watchScreenSize);
  // testRoute();
  emitter.on("screen-width-data", (data) => {
    if (width === data.width) {
      setResized(false);
    } else if (width !== data.width) {
      setResized(true);
    }
    setWidth(data.width);
  });
}

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
//       console.log(response, "response from test route");
//   } catch (error) {
//     console.error(error);
//   }
// }

const watchScroll = () => {
  const elsToWatch = document.querySelectorAll(".section-block");
  elsToWatch.forEach((block) => {
    observer.observe(block);
  });
  emitter.on("current-scroll-index", (data) => {
    // console.log(lowerCaseSectionsArr[data], "data from scroll")
    if (data === 0) {
      setScrolledHome(true);
    } else {
      setScrolledHome(false);
    }
    updateURL(`/${lowerCaseSectionsArr[data]}`);
    // getMetaData(`/${lowerCaseSectionsArr[data]}`);
    getTabLocation(data);
  });

}

useEffect(() => {
// New event listener:
window.addEventListener("load",function() {
  setTimeout(function(){
      // Hide the address bar:
      window.scrollTo(0, 1);
  }, 0);
});
}, [])


  useEffect(() => {
    watchWidthResize();
    // console.log(document.title)
    if (width < 780) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    watchScroll();
  }, [resized, tabLocation, width]);

  const getTabLocation = (data) => {
    setTabLocation((tabLocation) => {
      return (tabLocation = data);
    });
  };

  return (
    <ContextProvider value={{ tabLocation, getTabLocation }}>
      <div className="App">
        <Header
          currentWidth={width}
          currentI={tabLocation}
          lowerCaseSectionsArr={lowerCaseSectionsArr}
          upperCaseSectionsArr={upperCaseSectionsArr}
          scrolledHome={scrolledHome}
          isMobile={mobile}
        />
        <Page
          lowerCaseSectionsArr={lowerCaseSectionsArr}
          scrolledHome={scrolledHome}
          isMobile={mobile}
        />
      </div>
    </ContextProvider>
  );
}
