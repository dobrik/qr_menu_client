import Head from "next/head";
import { MainLayout } from "@layouts";
import { Menu } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>Menu List</title>
        <meta name="description" content="description" />
      </Head>
      <Menu />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
