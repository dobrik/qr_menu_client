import Head from "next/head";
import { MainLayout } from "@layouts";
import { Menu } from "@pages";
import { About } from "@pages/about";

const Page = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="description" />
      </Head>
      <About />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
