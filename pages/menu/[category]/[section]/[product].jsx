import { useRouter } from "next/router";
import { Image, LikesButton, Preloader, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import Link from "next/link";
import {fetchMenuData} from "@services/menu-data";

const MenuItem = ({ categorySlug, sectionSlug, productData }) => {
  const router = useRouter();

  const t = useTranslation();

  if (router.isFallback) {
    return <Preloader />;
  }

  const { image, title, description, price, weight, weight_unit, rating, slug } = productData

  return (
    <section className="product stack column center">
      <div className="product__wrapper stack column align-center">
        <Link href={`/menu/${categorySlug}#${sectionSlug}/`} className="product__back"></Link>
        {image && (
          <div className="product__image">
            <Image src={image} width="400" height="400" alt={title}/>
          </div>
        )}
        <div className="product__content stack column">
          <div className="product__text stack column">
          <div className="product__row product__name-wrapper stack justify-space-between">
              <Typography tag="h1" variant="h1" weight="900">
                {title}
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
              <Typography className="menu-card__price" weight="500" tag="span" color="dark">
                {weight} {weight_unit}
              </Typography>
              <div className="product__rating stack align-center">
                <Image
                  src="/img/ui/star.svg"
                  width="15"
                  height="15"
                  alt="Rating Star"
                />
                <Typography tag="span" variant="p" weight="500">
                  {5} {/*rating*/}
                </Typography>
              </div>
            </div>
          </div>

          <Typography tag="p" variant="p" color="dark">
            {description}
          </Typography>
        </div>
        { productData.allergens && (
          <ul className="product__categories stack wrap">
            {productData.allergens.map((allergen) => (
              <li key={allergen} className="product__category stack align-center">
                <Image src={`/img/ui/${allergen}.svg`} width="22" height="30" alt={t.common[allergen]}/>
                <Typography tag="p" variant="p">
                  {t.common[allergen]}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const restaurantSlug = context.req?.headers['x-restaurant'];
  const categorySlug = context.params.category;
  const sectionSlug = context.params.section;
  const productSlug = context.params.product;

  let menuData;
  try {
    menuData = await fetchMenuData(restaurantSlug, context.req?.headers['x-preview'] === '1');
  } catch (e) {
    return {notFound: true};
  }

  const category = menuData.categories.find((c) => c.slug === categorySlug);
  const section = category.sections.find((c) => c.slug === sectionSlug);
  const product = section.products.find((c) => c.slug === productSlug);

  if (!product) {
    return {notFound: true};
  }

  return {
    props: {
      categorySlug,
      sectionSlug,
      productData: product
    },
  };
}

export default MenuItem;
