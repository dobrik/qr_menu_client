import { useRouter } from "next/router";
import { Image, LikesButton, Preloader, Typography } from "@components/ui";
import { CATALOG } from "@utils";
import { useTranslation } from "@hooks";
import Link from "next/link";

const MenuItem = ({ menuItem }) => {
  const router = useRouter();

  const t = useTranslation();

  if (router.isFallback) {
    return <Preloader />;
  }

  const { name, src, description, price, rating } = menuItem;

  return (
    <section className="product stack column center">
      <div className="product__wrapper stack column align-center">
        <Link href="/menu/#catalog" className="product__back"></Link>
        <div className="product__image">
          <Image src={src} width="400" height="400" alt={name} />
        </div>
        <div className="product__content stack column">
          <div className="product__text stack column">
            <div className="product__row product__name-wrapper stack justify-space-between">
              <Typography tag="h1" variant="h1" weight="900">
                {name}
              </Typography>
              <LikesButton tag="button" width="36" height="32" />
            </div>

            <div className="product__row stack justify-space-between">
              <Typography
                className="product__price"
                weight="500"
                tag="span"
                color="dark"
              >
                {price} ₴
              </Typography>
              <div className="product__rating stack align-center">
                <Image
                  src="/img/ui/star.svg"
                  width="15"
                  height="15"
                  alt="Rating Star"
                />
                <Typography tag="span" variant="p" weight="500">
                  {rating}
                </Typography>
              </div>
            </div>
          </div>

          <Typography tag="p" variant="p" color="dark">
            {description}
          </Typography>
        </div>
        <ul className="product__categories stack wrap">
          <li className="product__category stack align-center">
            <Image src="img/ui/spicy.svg" width="22" height="30" alt="Spicy" />
            <Typography tag="p" variant="p">
              {t.common.spicy}
            </Typography>
          </li>
          <li className="product__category stack align-center">
            <Image src="img/ui/nuts.svg" width="30" height="30" alt="Spicy" />
            <Typography tag="p" variant="p">
              {t.common.nuts}
            </Typography>
          </li>
          <li className="product__category stack align-center">
            <Image src="img/ui/eggs.svg" width="23" height="30" alt="Spicy" />
            <Typography tag="p" variant="p">
              {t.common.eggs}
            </Typography>
          </li>
          <li className="product__category stack align-center">
            <Image src="img/ui/fish.svg" width="36" height="28" alt="Spicy" />
            <Typography tag="p" variant="p">
              {t.common.fish}
            </Typography>
          </li>
          <li className="product__category stack align-center">
            <Image src="img/ui/wheat.svg" width="22" height="30" alt="Spicy" />
            <Typography tag="p" variant="p">
              {t.common.wheat}
            </Typography>
          </li>
          <li className="product__category stack align-center">
            <Image src="img/ui/milk.svg" width="22" height="30" alt="Spicy" />
            <Typography tag="p" variant="p">
              {t.common.milk}
            </Typography>
          </li>
        </ul>
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  const paths = CATALOG.map((item) => ({
    params: { product: item.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const menuItem = CATALOG.find(
    (item) => item.id.toString() === params["product"]
  );

  return { props: { menuItem } };
}

export default MenuItem;
