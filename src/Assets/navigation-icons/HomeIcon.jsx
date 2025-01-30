const HomeIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // width={`${width}`}
      // height={`${height}`}
      className={`${className}`}
      viewBox="0 0 70 60"
      // scale={scale}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
        transform: `scale(${scaleSize})`
      }}
    >
      <path
        d="M55.579,31.579c0.693,0.693 0.781,1.787 0.208,2.583c-0.396,0.549 -0.857,1.189 -1.284,1.781c-0.342,0.476 -0.877,0.777 -1.461,0.824c-0.585,0.048 -1.161,-0.164 -1.575,-0.579c-4.986,-4.985 -19.467,-19.466 -19.467,-19.466c0,0 -14.481,14.481 -19.467,19.466c-0.414,0.415 -0.99,0.627 -1.575,0.579c-0.584,-0.047 -1.119,-0.348 -1.461,-0.824c-0.427,-0.592 -0.888,-1.232 -1.284,-1.781c-0.573,-0.796 -0.485,-1.89 0.208,-2.583c4.962,-4.962 23.579,-23.579 23.579,-23.579c0,0 18.617,18.617 23.579,23.579Z"
        style={{ stroke: stroke, strokeWidth: strokeWidth, fill: fill }}
        id="path3"
      />

      <path
        d="M13.977,34.745l18.023,-18.023l18.023,18.023l0,20.002c0,0.598 -0.237,1.171 -0.66,1.593c-0.422,0.423 -0.995,0.66 -1.593,0.66c-6.472,0 -25.068,0 -31.54,0c-0.598,0 -1.171,-0.237 -1.593,-0.66c-0.423,-0.422 -0.66,-0.995 -0.66,-1.593l0,-20.002Z"
        style={{ stroke: stroke, strokeWidth: strokeWidth, fill: fill }}
        id="path5"
      />

      <path
        d="M20.736,19.264l-7.885,7.885l0,-11.827l7.885,0l0,3.942Z"
        style={{ stroke: stroke, strokeWidth: strokeWidth, fill: fill }}
        id="path7"
      />

      <path
        d="M37,44.5c0,-0.398 -0.158,-0.779 -0.439,-1.061c-0.282,-0.281 -0.663,-0.439 -1.061,-0.439c-1.888,0 -5.112,0 -7,0c-0.398,0 -0.779,0.158 -1.061,0.439c-0.281,0.282 -0.439,0.663 -0.439,1.061c0,3.613 0,12.5 0,12.5l10,0l0,-12.5Z"
        style={{ stroke: stroke, strokeWidth: strokeWidth, fill: fill }}
        id="path9"
      />
    </svg>
  );
};
export default HomeIcon;
