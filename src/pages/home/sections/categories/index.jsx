import {Typography} from "@components/ui";
import Link from "next/link";
import {usePrefixedLink, useTranslation} from "@hooks";

export const Categories = ({categories}) => {
  const t = useTranslation();
  const { prefixedLink } = usePrefixedLink();
  return (
    <section className="categories">
      <div>
        <Typography tag="h1" variant="h1" weight="900" center>
          {t.title.categories}
        </Typography>
        <ul className={'categories__list'}>
          {categories.map((category => (
            <Link key={category.slug} className="category__link" href={prefixedLink(`menu/${category.slug}`)}>
              <li className={'category__list_item'}>
                <Typography variant="h3">{category.title}</Typography>
              </li>
            </Link>
          )))}
        </ul>
      </div>
    </section>
  );
};
