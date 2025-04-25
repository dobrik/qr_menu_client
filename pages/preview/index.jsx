import Head from "next/head";
import { MainLayout } from "@layouts";
import { Home } from "@pages/home";
import { observer } from "mobx-react-lite";
import { menuStore } from "@stores/menu-store";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Page = observer(() => {
  const { getIdTokenClaims, isAuthenticated, isLoading , getAccessTokenSilently} = useAuth0();

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
      } catch (e) {
        console.error("Failed to fetch preview menu data", e);
      }
    };

    if (!isLoading) {
      fetchPreview();
    }
  }, [isLoading, isAuthenticated]);

  if (!menuStore.menuData) return;

  return (
    <>
      <Head>
        <title>{menuStore.menuData?.title || "Loading..."}</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={menuStore.menuData?.image || ""} />
        <meta property="og:url" content="" />
      </Head>
      <Home menuData={menuStore.menuData} />
    </>
  );
});

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;