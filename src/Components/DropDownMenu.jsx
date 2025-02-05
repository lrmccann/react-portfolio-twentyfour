import { useEffect, useState } from "react";

export const DropDownMenu = (props) => {
  const { items, returnSelection } = props;

  const [open, setOpen] = useState();
  const [selectedOption, setSelectedOption] = useState(0);
  const [buttonLabel, setButtonLabel] = useState();

  useEffect(() => {
    setOpen(false);
    setButtonLabel("Subject...");
  }, []);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleSelect = (e) => {
    if (selectedOption !== e.target.id) {
      setSelectedOption(e.target.id);
      setButtonLabel(e.target.innerHTML);
      returnSelection(e.target.innerHTML);
      setOpen(false);
    }
  };

  const handleMouseOver = (e) => {
    document.getElementById(e.target.id).classList.add("active-option");
  };
  const handleMouseExit = (e) => {
    document.getElementById(e.target.id).classList.remove("active-option");
  };

  return (
    <div
      className={`contact-select outline outline-custom-primary-outline outline-2 bg-custom-contact-bg `}
    >
      <button
        type="button"
        className="flex flex-row items-center justify-between"
        onClick={handleToggle}
      >
        <p className="text-custom-text">{buttonLabel}</p>
        <span>
          {open ? (
            <h6 className="text-custom-text">&#9650;</h6>
          ) : (
            <p className="text-custom-text">&#9660;</p>
          )}
        </span>
      </button>
      {open && (
        <div
          className={`${
            open
              ? "contact-select-div bg-custom-contact-bg "
              : ""
          }`}
        >
          <ul>
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  id={`select-option-${index}`}
                  className="text-custom-text"
                  onMouseOver={(e) => {
                    e.preventDefault();
                    handleMouseOver(e);
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    handleMouseExit(e);
                  }}
                  onClick={(e) => handleSelect(e)}
                >
                  {item.textValue}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
