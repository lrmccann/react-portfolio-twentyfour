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

  return (
    <div className="contact-select">
      <button type="button" className="flx-rw flx-start" onClick={handleToggle}>
        {buttonLabel}
        <span>{open ? <h1>&#9650;</h1> : <h1>&#9660;</h1>}</span>
      </button>
      {open && (
        <div
        // className=""
        >
          <ul
          //   className=""
          >
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  id={index}
                  // className=""
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