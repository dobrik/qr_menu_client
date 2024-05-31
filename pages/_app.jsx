import { useEffect, useState } from "react";
import "../src/scss/globals.scss";
import { useRouter } from "next/router";
import { Preloader } from "@components/ui";

const App = (props) => {
  // **Props
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  // Preloader
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //body lock
  useEffect(() => {
    if (loading) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [loading]);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  // Preloader

  return (
    <>
      {loading && <Preloader />}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
