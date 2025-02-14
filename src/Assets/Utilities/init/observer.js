import emitter from "../event-bus";

const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: .75 // Trigger when 50% of the section is visible
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
     // console.log(entry, "entryssss")
        if (entry.isIntersecting) {
            if(entry.target.id === "home"){
               const isScrollingUp = entry.boundingClientRect.top < entry.rootBounds.top; // Key check!
               if (isScrollingUp) {
                   document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" })
                }
                 emitter.emit("current-scroll-index", 0);
            }else if(entry.target.id === "about"){
                 emitter.emit("current-scroll-index", 1);
            }
            else if(entry.target.id === "skills"){
               emitter.emit("current-scroll-index", 2);
          }
            else if(entry.target.id === "experience"){
                 emitter.emit("current-scroll-index", 3);
            }
            else if(entry.target.id === "projects"){
                 emitter.emit("current-scroll-index", 4);
            }
            else if(entry.target.id === "contact"){
                 emitter.emit("current-scroll-index", 5);
            }
        } else {
            return false;
        }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  export default observer;