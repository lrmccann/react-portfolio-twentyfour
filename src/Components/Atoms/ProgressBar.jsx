import "./BarColors";
import "../../output.css";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Assets/utilities";

const ProgressBar = (props) => {
  const [progressAnimation, setProgressAnimation] = useState(false);
  const [currentColor, setCurrentColor] = useState();
  const {themeMode} = useContext(GlobalContext);

  // props.score
  // props.progressWidth
  // props.className
  // props.primaryColor
  // props.secondaryColor
  // props.progressColor

  useEffect(() => {
    if(themeMode === "dark"){
      setCurrentColor("purple");
    }else{
      setCurrentColor("red");
    }
  }, [themeMode])

  const {
    score,
    progressWidth,
    className,
    primaryColor,
    secondaryColor,
    progressColor = primaryColor || secondaryColor ? "" : `${currentColor}`,
    label,
    hideText,
    darkTheme,
    disableGlow,
  } = props;

  useEffect(() => {
    setProgressAnimation(true);
  }, [progressAnimation]);

  const renderProgressFiller = (glow) => (
    <>
      <div
        className={`progressFill ${
          !(primaryColor || secondaryColor) && progressColor
        } ${glow && "glowingEffect"}`}
        style={{
          width: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
          background: `linear-gradient( to right, ${primaryColor}, ${secondaryColor})`,
        }}
      />
      <div className={`${!(primaryColor || secondaryColor) && progressColor}`}>
        <div
          className={`particlesContainer`}
          style={{
            left: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
          }}
        >
          <div className={`particles`} />
          <div
            className={`smallParticles smallParticles4`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles3`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`bigParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`particles particles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles5`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles6`}
            style={{ background: secondaryColor }}
          />
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`progressBarFancyContainer ${className}`}
      style={{ width: progressWidth }}
    >
      {!hideText && (
        <div className={`labelScoreContainer ${darkTheme && `labelDarkTheme`}`}>
          <div className={`label`}>{label}</div>
          <div className={`number`}>{score}%</div>
        </div>
      )}
      <div className={`barGaugeContainer`} style={{ flexWrap: "wrap" }}>
        <div
          className={`progressbarWidth`}
          style={{
            width: progressWidth,
            margin: "0px 10px",
          }}
        >
          <div className={`progressBar`}>
            <div className={`progressTrack`} />
            {renderProgressFiller(false)}
            {!disableGlow && renderProgressFiller(true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
