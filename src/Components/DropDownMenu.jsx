import { useEffect, useState } from "react";

export const DropDownMenu = (props) => {
  const { items, returnSelection } = props;

  const [open, setOpen] = useState();
  const [selectedOption, setSelectedOption] = useState(0);
  const [buttonLabel, setButtonLabel] = useState();

  useEffect(() => {
    setOpen(false);
    setButtonLabel("Interested in...");
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
  }
  const handleMouseExit = (e) => {
    document.getElementById(e.target.id).classList.remove("active-option");
  }

  return (
    <div className={`contact-select ${open ? "contact-select-open" : "contact-select-closed"}`}>
      <button type="button" className="flx-rw flx-align-center flx-spc-btwn" onClick={handleToggle}>
        {buttonLabel}
        <span>{open ? <h1>&#9650;</h1> : <h1>&#9660;</h1>}</span>
      </button>
      {open && (
        <div
        className={`${open ? "contact-select-div" : ""}`}
        >
          <ul
          >
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  id={`select-option-${index}`}
                  onMouseOver={((e) => {
                    e.preventDefault();
                    handleMouseOver(e);
                  })}
                  onMouseLeave={((e) => {
                    e.preventDefault();
                    handleMouseExit(e)
                  })}
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
