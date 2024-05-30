import { useState } from "react";
import { Typography } from "..";

export const HorizontalItem = (props) => {
  //**props
  const { name } = props;

  // State to manage active class
  const [isActive, setIsActive] = useState(false);

  // Click handler to toggle active class
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`horizontal-item stack center ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <Typography
        className="horizontal-item__text"
        tag="p"
        variant="p"
        weight="900"
      >
        {name}
      </Typography>
    </button>
  );
};
