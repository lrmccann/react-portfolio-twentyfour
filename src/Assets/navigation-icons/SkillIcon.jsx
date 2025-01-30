const SkillIcon = ({
  stroke,
  strokeWidth,
  fill,
  className,
  height,
  width,
  scaleSize,
}) => {
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
          viewBox="0 -5 70 70"
    >
      <g id="File_Coding" data-name="File Coding">
        <path
          d="M53.707,11.293l-11-11A1.122,1.122,0,0,0,42,0H11a1,1,0,0,0-1,1V63a1,1,0,0,0,1,1H53a1,1,0,0,0,1-1V12A1.09,1.09,0,0,0,53.707,11.293ZM50.586,11H43V3.414ZM12,62V2H41V12a1,1,0,0,0,1,1H52V62Z"
          style={{ stroke: stroke, strokeWidth: .2, fill: fill }}
        />
        <path
          d="M26.781,30.375a1,1,0,0,0-1.406-.156l-5,4a1,1,0,0,0,0,1.562l5,4a1,1,0,0,0,1.25-1.562L22.6,35l4.024-3.219A1,1,0,0,0,26.781,30.375Z"
          style={{ stroke: stroke, strokeWidth: .2, fill: fill }}
        />
        <path
          d="M38.625,30.219a1,1,0,0,0-1.25,1.562L41.4,35l-4.024,3.219a1,1,0,0,0,1.25,1.562l5-4a1,1,0,0,0,0-1.562Z"
          style={{ stroke: stroke, strokeWidth: .2, fill: fill }}
        />
        <path
          d="M34.2,24.02a1,1,0,0,0-1.176.784l-4,20a1,1,0,0,0,1.96.392l4-20A1,1,0,0,0,34.2,24.02Z"
          style={{ stroke: stroke, strokeWidth: .2, fill: fill }}
        />
      </g>
    </svg>
  );
};

export default SkillIcon;
