import React, { useState, useEffect, useRef } from "react";

function LiveTypeHero({ text, speed, pauseDuration }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      if (!isPaused) {
        if (currentIndex < text[currentOption].length) {
          setCurrentText(
            (prevText) => prevText + text[currentOption].charAt(currentIndex)
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          timeoutRef.current = setTimeout(() => {
            setCurrentText("");
            setCurrentIndex(0);
            setCurrentOption((prevOption) => (prevOption + 1) % text.length);
            setIsPaused(false);
          }, pauseDuration);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, currentOption, text, speed, pauseDuration, isPaused]);

  return (
    <div className="live-text-cont text-custom-text">
      {currentText}
      <span className="cursor">|</span>
    </div>
  );
}

export default LiveTypeHero;
