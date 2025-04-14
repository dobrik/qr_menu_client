import {Container, Line, LineWrapper, Typography} from "@components/ui";
import Link from "next/link";
import {useTranslation} from "@hooks";

export const Categories = ({categories}) => {
  const t = useTranslation();
  return (
    <section className="categories">
      <div>
        <Typography tag="h1" variant="h1" weight="900" center>
          {t.title.categories}
        </Typography>
        <ul>
          {categories.map((category => (
            <li key={category.slug}>
              <Link className="menu-card__link" href={`menu/${category.slug}`}>
                <Typography variant="h3">{category.title}</Typography>
              </Link>
            </li>
          )))}
        </ul>
      </div>
    </section>
  );
};
