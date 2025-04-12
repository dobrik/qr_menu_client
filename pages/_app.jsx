import { useEffect, useState } from "react";
import "../src/scss/globals.scss";
import { useRouter } from "next/router";
import { Preloader } from "@components/ui";
import { getSubdomainFromHost } from "@/utils/get-subdomain";
import { menuStore } from "@/stores/menu-store";

const App = (props) => {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const host = window.location.host;
    const subdomain = getSubdomainFromHost(host);

    if (subdomain && !menuStore.menuData) {
      menuStore.loadMenuData(subdomain).catch(console.error);
    }
  }, []);

  // Preloader...
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
