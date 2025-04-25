import Head from "next/head";
import {MainLayout} from "@layouts";
import {observer} from "mobx-react-lite";
import {Menu} from "@pages";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import {menuStore} from "@stores/menu-store";
import {useParams} from "next/navigation";

const CategoryPage = observer(() => {
  const {getIdTokenClaims, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  const [categoryData, setCategoryData] = useState(false);
  const params = useParams();
  const categorySlug = params?.category;

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
        await menuStore.loadPreviewMenuData(token.__raw);
        if (!categorySlug) return;
        setCategoryData(await menuStore.getCategoryBySlug(categorySlug))
      } catch (e) {
        console.error("Failed to fetch preview menu data", e);
      }
    };

    if (!isLoading) {
      fetchPreview();
    }
  }, [isLoading, isAuthenticated, categorySlug]);

  if (!categoryData) return;


  return (
    <>
      <Head>
        <title>Menu List</title>
        <meta name="description" content="description"/>
      </Head>
      <Menu categoryData={categoryData}/>
    </>
  );
});

CategoryPage.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default CategoryPage;
