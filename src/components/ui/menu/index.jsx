import Link from "next/link";
import { useTranslation } from "@hooks";
import { MENU } from "@utils";
import { useRouter } from "next/router";

export const Menu = (props) => {
  const { className, onClose } = props;

  const t = useTranslation();

  const router = useRouter();

  return (
    <nav className={className}>
      <ul className="menu__list stack align-center">
        {Object.entries(MENU).map(([key, value]) => (
          <li
            key={key}
            className={`menu__item ${
              router.pathname === value ? "active" : ""
            }`}
          >
            <Link
              className={`menu__item-link stack center`}
              href={value}
              onClick={onClose}
            >
              {t.navigation[key]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
