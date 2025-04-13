import { MenuCard } from "@components/cards";
import {
  Container,
  HorizontalItem,
  HorizontalMenu,
  Image,
  Line,
  LineWrapper,
  Typography,
} from "@components/ui";

import { useTranslation } from "@hooks";
import { useState } from "react";

export const Catalog = ({category}) => {
  const t = useTranslation();
  const sections = category.sections

  //toggle direction
  const [grid, setGrid] = useState(true);

  const toggleDirection = () => {
    setGrid(!grid);
  };
  //toggle direction

  return (
    <section className="catalog stack column" id="catalog">
      <Container>
        <div className="catalog__wrapper stack column">
          <HorizontalMenu>
            { sections.map((section) => (
              <HorizontalItem key={section.slug} href={`#${section.slug}`} name={section.title} />
            ))}
          </HorizontalMenu>

          <button className="catalog__direction" onClick={toggleDirection}>
            {grid ? (
              <Image
                src="/img/ui/row.svg"
                width="30"
                height="30"
                alt="row icon"
              />
            ) : (
              <Image
                src="/img/ui/grid.svg"
                width="30"
                height="30"
                alt="grid icon"
              />
            )}
          </button>

          <div className="catalog__content stack column">
            { sections.map((section) => (
              <div className="catalog__block stack column" key={section.slug}>
                <LineWrapper>
                  <Typography tag="h2" variant="h2" weight="700">
                    {section.title}
                  </Typography>
                  <Line/>
                </LineWrapper>

                <ul className={`catalog__list ${grid ? "grid" : "row"}`}>
                  {section.products.map(
                    (product) => (
                      <li key={product.slug}>
                        <MenuCard categorySlug={category.slug} sectionSlug={section.slug} {...product}/>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
