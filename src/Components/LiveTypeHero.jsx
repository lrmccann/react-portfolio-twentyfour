import React, { useState, useEffect } from 'react';

function LiveTypeHero({ text, speed }) {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentText + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className='live-text-cont'>
      {currentText}
      <span className="cursor">|</span>
    </div>
  );
}

export default LiveTypeHero;