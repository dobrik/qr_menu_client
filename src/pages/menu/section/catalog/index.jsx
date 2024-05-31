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
import { CATALOG } from "@utils";
import { useState } from "react";

export const Catalog = () => {
  const t = useTranslation();

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
            <HorizontalItem href="#block1" name={t.common.onemore} />
            <HorizontalItem href="#block2" name={t.common.onemore} />
          </HorizontalMenu>

          <button className="catalog__direction" onClick={toggleDirection}>
            {grid ? (
              <Image
                src="/img/ui/grid.svg"
                width="30"
                height="30"
                alt="grid icon"
              />
            ) : (
              <Image
                src="/img/ui/row.svg"
                width="30"
                height="30"
                alt="row icon"
              />
            )}
          </button>

          <div className="catalog__content stack column">
            <div className="catalog__block stack column" id="block1">
              <LineWrapper>
                <Typography tag="h2" variant="h2" weight="700">
                  {t.title.category}
                </Typography>
                <Line />
              </LineWrapper>

              <ul className={`catalog__list ${grid ? "grid" : "row"}`}>
                {CATALOG.map(
                  ({ id, src, name, price, rating, weight, description }) => (
                    <li key={id}>
                      <MenuCard
                        newFood
                        id={id}
                        src={src}
                        name={name}
                        description={description}
                        price={price}
                        weight={weight}
                        rating={rating}
                      />
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="catalog__block stack column" id="block2">
              <LineWrapper>
                <Typography tag="h2" variant="h2" weight="700">
                  {t.title.category}
                </Typography>
                <Line />
              </LineWrapper>

              <ul className={`catalog__list ${grid ? "grid" : "row"}`}>
                {CATALOG.map(
                  ({ id, src, name, price, rating, description }) => (
                    <li key={id}>
                      <MenuCard
                        newFood
                        id={id}
                        src={src}
                        name={name}
                        description={description}
                        price={price}
                        rating={rating}
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
