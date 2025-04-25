import {useRouter} from "next/router";
import {Preloader,} from "@components/ui";
import {menuStore, Store} from "@/stores/menu-store";
import {Product} from "@pages/product";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

const MenuItem = () => {
  const {getIdTokenClaims, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  const [productData, setProductData] = useState(false);
  const params = useParams();

  const categorySlug = params?.category;
  const sectionSlug = params?.section;
  const productSlug = params?.product;

  useEffect(() => {
    const fetchPreview = async () => {
      if (!isAuthenticated) {
        await getAccessTokenSilently();
      }
      try {
        const token = await getIdTokenClaims();
        if (!token) {
          console.warn("No token available");
          return;
        }
        if (!categorySlug || !sectionSlug || !productSlug) {
          return;
        }
        await menuStore.loadPreviewMenuData(token.__raw);
        setProductData(await menuStore.getProductBySlugs(categorySlug, sectionSlug, productSlug))
      } catch (e) {
        console.error("Failed to fetch preview menu data", e);
      }
    };

    if (!isLoading) {
      fetchPreview();
    }
  }, [isLoading, isAuthenticated, categorySlug, sectionSlug, productSlug]);

  const router = useRouter();

  if (router.isFallback) {
    return <Preloader/>;
  }

  if (!productData) return;

  return (
    <section className="product stack column center">
      <Product productData={{...productData, categorySlug, sectionSlug}}></Product>
    </section>
  );
};


export default MenuItem;
