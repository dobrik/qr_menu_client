import Head from "next/head";
import {MainLayout} from "@layouts";
import {observer} from "mobx-react-lite";
import {Menu} from "@pages";
import {getSubdomainFromHost} from "@utils/get-subdomain";
import {fetchMenuData} from "@services/menu-data";

const CategoryPage = observer(({restaurantSlug, categorySlug, menuData}) => {
  return (
    <>
      <Head>
        <title>Menu List</title>
        <meta name="description" content="description"/>
      </Head>
      <Menu/>
    </>
  );
});

CategoryPage.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  const restaurantSlug = getSubdomainFromHost(host);
  const categorySlug = context.params.category;

  const menuData = await fetchMenuData(restaurantSlug);
  const category = menuData.categories.find((c) => c.slug === categorySlug);

  if (!category) {
    return {notFound: true};
  }

  return {
    props: {
      categorySlug,
      menuData,
    },
  };
}

export default CategoryPage;
