import Head from "next/head";
import {MainLayout} from "@layouts";
import {observer} from "mobx-react-lite";
import {Menu} from "@pages";
import {getSubdomainFromHost} from "@utils/get-subdomain";
import {fetchMenuData} from "@services/menu-data";

const CategoryPage = observer(({categoryData, menuData}) => {
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
      categoryData: category,
      menuData,
    },
  };
}

export default CategoryPage;
