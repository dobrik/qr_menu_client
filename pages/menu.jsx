import Head from "next/head";
import { MainLayuot } from "@layouts";
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

Page.getLayout = (page) => <MainLayuot overflow={false}>{page}</MainLayuot>;

export default Page;
