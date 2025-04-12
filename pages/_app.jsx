import { useEffect, useState } from "react";
import "../src/scss/globals.scss";
import { useRouter } from "next/router";
import { Preloader } from "@components/ui";
import {RestaurantDataProvider} from "@providers/restaurant-data-provider";

const App = (props) => {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

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

  return (
    <>
      {loading && <Preloader />}
      <RestaurantDataProvider initialMenuData={pageProps.menuData}>
        {getLayout(<Component {...pageProps} />)}
      </RestaurantDataProvider>
    </>
  );
};

export default App;
