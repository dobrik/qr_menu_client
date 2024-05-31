import {
  Burger,
  BurgerMenu,
  Container,
  Language,
  Logo,
  Menu,
} from "@components/ui";
import { useState } from "react";

export const Header = () => {
  //**Menu burger state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  //**Menu burger state

  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <header className="header stack align-center">
        <Container>
          <div className="header__wrapper stack align-center justify-space-between">
            <Logo src="/img/ui/logotype.svg" />
            <div className="header__navigation stack align-center">
              <Menu className="header__menu" />
              <Burger openMenu={openMenu} isMenuOpen={isMenuOpen} />
              <Language />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
