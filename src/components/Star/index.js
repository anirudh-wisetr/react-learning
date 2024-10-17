import "./style.scss";
import { useRef, useState } from "react";

const Star = ({ number = 5 }) => {
  const [hoveredValue, setHoveredValue] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <div className="star-wrapper">
      {[...new Array(number)].map((_, index) => {
        return (
          <span
            key={index}
            className={`${
              hoveredValue > index || (hoveredValue === 0 && value > index)
                ? "gold"
                : ""
            }`}
            onMouseEnter={() => setHoveredValue(index + 1)}
            onMouseLeave={() => setHoveredValue(0)}
            onClick={() => setValue(index + 1)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Star;
