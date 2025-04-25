import { useRouter } from "next/router";
import { Preloader, } from "@components/ui";
import {Store} from "@/stores/menu-store";
import {Product} from "@pages/product";

const MenuItem = ({ categorySlug, sectionSlug, productData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Preloader />;
  }

  return (
    <section className="product stack column center">
      <Product productData={{...productData, categorySlug, sectionSlug}}></Product>
    </section>
  );
};

export async function getServerSideProps(context) {
  const restaurantSlug = context.req?.headers["x-restaurant"];
  const categorySlug = context.params.category;
  const sectionSlug = context.params.section;
  const productSlug = context.params.product;
  const isPreview = context.req?.headers["x-preview"] === "1";

  const menuStore = new Store();
  try {
    await menuStore.loadMenuData(restaurantSlug);
  } catch (e) {
    return { notFound: true };
  }

  const product = menuStore.getProductBySlugs(categorySlug, sectionSlug, productSlug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      isPreview,
      categorySlug,
      sectionSlug,
      productData: product,
    },
  };
}

export default MenuItem;
