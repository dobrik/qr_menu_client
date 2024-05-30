import { Menu } from "@components/ui";
import { useOnClickOutside } from "@hooks";
import { useRef } from "react";

export const BurgerMenu = (props) => {
  const { isMenuOpen, onClose } = props;

  const ref = useRef();
  useOnClickOutside(ref, onClose);

  return (
    <div
      ref={ref}
      className={
        isMenuOpen ? "burger__menu burger__menu--active" : "burger__menu"
      }
    >
      <div className="burger__menu-wrapper stack column">
        <button className="burger__menu-close" onClick={onClose}></button>
        <div className="burger__menu-body stack column align-center">
          <Menu onClose={onClose} className="burger__menu-list" />
        </div>
      </div>
    </div>
  );
};
