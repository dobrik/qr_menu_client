import Head from "next/head";
import {MainLayout} from "@layouts";
import {observer} from "mobx-react-lite";
import {Menu} from "@pages";
import {menuStore} from "@stores/menu-store";

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
  const restaurantSlug = context.req?.headers['x-restaurant'];
  const categorySlug = context.params.category;

  try {
    // Load data via store
    await menuStore.loadMenuData(restaurantSlug, context.req?.headers['x-preview'] === '1');
  } catch (e) {
    return { notFound: true };
  }

  const category = menuStore.getCategoryBySlug(categorySlug);

  if (!category) {
    return { notFound: true };
  }

  return {
    props: {
      categoryData: category,
      menuData: menuStore.menuData,
    },
  };
}

export default CategoryPage;
