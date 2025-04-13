import { useRouter } from "next/router";
import { Image, LikesButton, Preloader, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import Link from "next/link";
import {getSubdomainFromHost} from "@utils/get-subdomain";
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
        {/*<ul className="product__categories stack wrap">*/}
        {/*  <li className="product__category stack align-center">*/}
        {/*    <Image src="/img/ui/spicy.svg" width="22" height="30" alt="Spicy" />*/}
        {/*    <Typography tag="p" variant="p">*/}
        {/*      {t.common.spicy}*/}
        {/*    </Typography>*/}
        {/*  </li>*/}
        {/*  <li className="product__category stack align-center">*/}
        {/*    <Image src="/img/ui/nuts.svg" width="30" height="30" alt="Spicy" />*/}
        {/*    <Typography tag="p" variant="p">*/}
        {/*      {t.common.nuts}*/}
        {/*    </Typography>*/}
        {/*  </li>*/}
        {/*  <li className="product__category stack align-center">*/}
        {/*    <Image src="/img/ui/eggs.svg" width="23" height="30" alt="Spicy" />*/}
        {/*    <Typography tag="p" variant="p">*/}
        {/*      {t.common.eggs}*/}
        {/*    </Typography>*/}
        {/*  </li>*/}
        {/*  <li className="product__category stack align-center">*/}
        {/*    <Image src="/img/ui/fish.svg" width="36" height="28" alt="Spicy" />*/}
        {/*    <Typography tag="p" variant="p">*/}
        {/*      {t.common.fish}*/}
        {/*    </Typography>*/}
        {/*  </li>*/}
        {/*  <li className="product__category stack align-center">*/}
        {/*    <Image src="/img/ui/wheat.svg" width="22" height="30" alt="Spicy" />*/}
        {/*    <Typography tag="p" variant="p">*/}
        {/*      {t.common.wheat}*/}
        {/*    </Typography>*/}
        {/*  </li>*/}
        {/*  <li className="product__category stack align-center">*/}
        {/*    <Image src="/img/ui/milk.svg" width="22" height="30" alt="Spicy" />*/}
        {/*    <Typography tag="p" variant="p">*/}
        {/*      {t.common.milk}*/}
        {/*    </Typography>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  const restaurantSlug = getSubdomainFromHost(host);
  const categorySlug = context.params.category;
  const sectionSlug = context.params.section;
  const productSlug = context.params.product;

  const menuData = await fetchMenuData(restaurantSlug);
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
