import Link from "next/link";
import { useTranslation } from "@hooks";
import { MENU } from "@utils";

export const Menu = () => {
  const t = useTranslation();

  return (
    <nav className="menu">
      <ul className="menu__list stack align-center">
        {Object.entries(MENU).map(([key, value]) => (
          <li key={key} className="menu__item">
            <Link className="menu__item-link stack center" href={value}>
              {t.navigation[key]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
