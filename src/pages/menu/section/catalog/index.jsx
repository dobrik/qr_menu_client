import { MenuCard } from "@components/cards";
import {
  Container,
  HorizontalItem,
  HorizontalMenu,
  Line,
  LineWrapper,
  Typography,
} from "@components/ui";

import { useTranslation } from "@hooks";
import { CATALOG } from "@utils";

export const Catalog = () => {
  const t = useTranslation();

  return (
    <section className="catalog stack column" id="catalog">
      <Container>
        <div className="catalog__wrapper">
          <HorizontalMenu>
            <HorizontalItem name={t.common.onemore} />
            <HorizontalItem name={t.common.onemore} />
            <HorizontalItem name={t.common.onemore} />
            <HorizontalItem name={t.common.onemore} />
            <HorizontalItem name={t.common.onemore} />
          </HorizontalMenu>

          <div className="catalog__content stack column">
            <div className="catalog__block stack column">
              <LineWrapper>
                <Typography tag="h2" variant="h2" weight="700">
                  {t.title.category}
                </Typography>
                <Line />
              </LineWrapper>

              <ul className="catalog__list">
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

            <div className="catalog__block stack column">
              <LineWrapper>
                <Typography tag="h2" variant="h2" weight="700">
                  {t.title.category}
                </Typography>
                <Line />
              </LineWrapper>

              <ul className="catalog__list">
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
