import Head from "next/head";
import { MainLayout } from "@layouts";
import { Home } from "@pages/home";
import {getSubdomainFromHost} from "@utils/get-subdomain";
import {fetchMenuData} from "@services/menu-data";
import {observer} from "mobx-react-lite";

const Page = observer(({menuData}) => {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
      </Head>
      <Home categories={menuData.categories}/>
    </>
  );
});

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  const restaurantSlug = getSubdomainFromHost(host);

  const menuData = await fetchMenuData(restaurantSlug);
  const isPublished = menuData?.restaurant?.is_published;
  if (!isPublished) {
    return {notFound: true};
  }

  return {
    props: {
      menuData,
    },
  };
}

export default Page;
