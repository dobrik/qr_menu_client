import { useEffect, useState } from "react";

export const HorizontalMenu = (props) => {
  //**props
  const { children } = props;

  //** Sticky
  const [isSticky, setIsSticky] = useState(false);
  const [stickyOffset, setStickyOffset] = useState(0);

  useEffect(() => {
    const horizontal = document.querySelector(".horizontal-menu");
    setStickyOffset(horizontal.offsetTop);

    const handleScroll = () => {
      if (window.pageYOffset > stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stickyOffset]);

  return (
    <>
      {isSticky && <div className="horizontal-menu__fake"></div>}
      <div
        className={`horizontal-menu stack align-center  ${
          isSticky ? "fixed" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};
