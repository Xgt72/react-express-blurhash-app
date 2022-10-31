import "./Spinner.scss";

const Spinner = ({ strokeColor, radius, strokeWidth }) => {
  return (
    <svg
      className="spinner"
      viewBox={`0 0 ${(radius + strokeWidth) * 2} ${
        (radius + strokeWidth) * 2
      }`}
      style={{
        width: `${(radius + strokeWidth) * 2}px`,
        height: `${(radius + strokeWidth) * 2}px`,
      }}
    >
      <circle
        className="path"
        style={{ stroke: strokeColor }}
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Spinner;
