
const UserIcon = ({ scaleSize, stroke, strokeWidth, fill, className, height, width }) => {

	return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      //   xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
		transform: `scale(${scaleSize})`
      }}
    //   viewBox="0 0 35 30"
	      viewBox="0 -5 130 130"
    >
  <path 
            style={{
				stroke: stroke,
				strokeWidth: .7,
				fill: fill,
			  }}
  d="M89.064 62.921a34.5 34.5 0 1 0-50.128 0A21.842 21.842 0 0 0 22.44 84v37.5a1.75 1.75 0 0 0 1.75 1.75h79.62a1.75 1.75 0 0 0 1.75-1.75V84a21.842 21.842 0 0 0-16.496-21.079zM64 8.25a31 31 0 1 1-31 31 31.035 31.035 0 0 1 31-31zm38.06 111.5H25.94V84a18.3 18.3 0 0 1 16.172-18.1 34.43 34.43 0 0 0 43.776 0A18.3 18.3 0 0 1 102.06 84z" 
  />
  <path 
            style={{
				stroke: stroke,
				strokeWidth: .7,
				fill: fill,
			  }}
  d="M30.192 90.688a1.75 1.75 0 0 0-1.75 1.75V111.5a1.75 1.75 0 0 0 3.5 0V92.438a1.75 1.75 0 0 0-1.75-1.75z" />

    </svg>
  );
};
export default UserIcon;
