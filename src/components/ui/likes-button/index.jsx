import { useState } from "react";

export const LikesButton = (props) => {
  // **Props
  const { tag, width, height, className } = props;

  // Tag
  const Tag = tag || "div";

  // State to manage active class
  const [isActive, setIsActive] = useState(false);

  // Click handler to toggle active class
  const handleClick = (event) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <Tag
      className={` ${className ? className : "likes-button"} ${
        isActive ? "active likes-button" : "likes-button"
      }`}
      onClick={handleClick}
    >
      <svg
        width={width ? width : 40}
        height={height ? height : 35}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 18C20.3886 9.97159 19.9981 7.13352 19.9981 4.90909C19.9981 2.68466 18.1234 0 14.999 0C11.8746 0 10 3.27273 10 3.27273C10 3.27273 8.12536 0 5.00095 0C1.87655 0 0.00190988 2.68466 0.00190988 4.90909C0.00190988 7.13352 -0.38864 9.97159 10 18Z" />
      </svg>
    </Tag>
  );
};
