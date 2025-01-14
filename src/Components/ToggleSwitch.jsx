import { globalIcons } from "../Assets/utilities";

const ToggleSwitch = ({ isOn, handleToggle, onColor, currentThemeMode }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && onColor }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} >
            <img src={`${currentThemeMode === "light" ? globalIcons.lightModeMoonIcon : globalIcons.darkModeMoonIcon }`} alt="" />
          </span>
        </label>
      </>
    );
  };




export default ToggleSwitch;