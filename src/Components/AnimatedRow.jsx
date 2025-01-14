const AnimatedRow = ({ eachArr }) => {
  return (
    <div
      className="icon-container flex flex-row items-center scroller__inner"
      id="scroller-inner"
    >
      {eachArr.map((icon, index) => {
        return (
          <img
            id="icon"
            key={index}
            src={icon.img}
            className="icon"
            alt={icon.Name}
          />
        );
      })}
    </div>
  );
};

export default AnimatedRow;
