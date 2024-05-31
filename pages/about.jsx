import Head from "next/head";
import { MainLayuot } from "@layouts";
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

Page.getLayout = (page) => <MainLayuot overflow={false}>{page}</MainLayuot>;

export default Page;
