import Head from "next/head";
import {MainLayout} from "@layouts";
import {observer} from "mobx-react-lite";
import {Menu} from "@pages";
import {Store} from "@stores/menu-store";

const CategoryPage = observer(({categoryData}) => {
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

  const menuStore = new Store();
  try {
    // Load data via store
    await menuStore.loadMenuData(restaurantSlug);
  } catch (e) {
    return { notFound: true };
  }

  const category = menuStore.getCategoryBySlug(categorySlug);

  if (!category) {
    return { notFound: true };
  }

  return {
    props: {
      categoryData: category
    },
  };
}

export default CategoryPage;
