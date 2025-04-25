import Head from "next/head";
import { MainLayout } from "@layouts";
import { Home } from "@pages/home";
import {observer} from "mobx-react-lite";
import {menuStore} from "@stores/menu-store";

const Page = observer(({menuData}) => {
  return (
    <>
      <Head>
        <title>{menuData?.title}</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={menuData?.image || ''} />
        <meta property="og:url" content="" />
      </Head>
      <Home menuData={menuData}/>
    </>
  );
});

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export async function getServerSideProps(context) {
  const restaurantSlug = context.req?.headers['x-restaurant'];

  try {
    await menuStore.loadMenuData(restaurantSlug, context.req?.headers['x-preview'] === '1');
  } catch (e) {
    return { notFound: true };
  }

  return {
    props: {
      menuData: menuStore.menuData,
    },
  };
}

export default Page;
