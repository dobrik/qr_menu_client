import Head from "next/head";
import { MainLayout } from "@layouts";
import { Home } from "@pages/home";
import {fetchMenuData} from "@services/menu-data";
import {observer} from "mobx-react-lite";

const Page = observer(({menuData}) => {
  return (
    <>
      <Head>
        <title>{menuData?.restaurant?.title}</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={menuData?.restaurant?.image || ''} />
        <meta property="og:url" content="" />
      </Head>
      <Home menuData={menuData}/>
    </>
  );
});

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export async function getServerSideProps(context) {
  const restaurantSlug = context.req?.headers['x-restaurant'];
  let menuData;
  try {
    menuData = await fetchMenuData(restaurantSlug, context.req?.headers['x-preview'] === '1');
  } catch (e) {
    return {notFound: true};
  }
  if (!menuData || !menuData?.restaurant?.is_published) {
    return {notFound: true};
  }

  return {
    props: {
      menuData,
    },
  };
}

export default Page;
