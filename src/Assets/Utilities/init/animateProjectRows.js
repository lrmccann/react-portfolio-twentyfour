const animateProjectRows = () => {
  // if(cond === "start"){
    const scrollers = document.querySelectorAll('.scroller');
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      if (scroller.id === 'scroller-1') {
        scroller.setAttribute('data-direction', 'left');
      } else {
        scroller.setAttribute('data-direction', 'right');
      }
  
      scroller.setAttribute('data-animated', true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it, add aria-hidden, and add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      })
    })
  }
  
  export default animateProjectRows;