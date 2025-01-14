import React, { useState, useEffect } from 'react';

function LiveTypeHero({ text, speed }) {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [activeOption, setActiveOption] = useState(0);

  useEffect(() => {
    if (index <= text[activeOption].length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentText + text[activeOption].charAt(index));
        setIndex(index => index + 1);
      }, speed);
      return () => clearTimeout(timeout);
      
    }else{
        setActiveOption(activeOption => activeOption + 1);
        const timeout = setTimeout(() => {
          setCurrentText('');
          setIndex(0);
        }, 1100);
        if(activeOption >= 7){
          setActiveOption(0);
        }
        return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);



  return (
    <div className='live-text-cont text-custom-text'>
      {currentText}
      <span className="cursor">|</span>
    </div>
  );
}

export default LiveTypeHero;