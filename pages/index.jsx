import Head from "next/head";
import { MainLayuot } from "@layouts";
import { Home } from "@pages/home";

const Page = () => {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
      </Head>
      <Home />
    </>
  );
};

Page.getLayout = (page) => <MainLayuot overflow={false}>{page}</MainLayuot>;

export default Page;
