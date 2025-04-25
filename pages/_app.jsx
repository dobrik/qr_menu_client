import {useEffect, useState} from "react";
import "../src/scss/globals.scss";
import {useRouter} from "next/router";
import {Preloader} from "@components/ui";
import {Auth0Provider} from "@auth0/auth0-react";

const App = (props) => {
  const {Component, pageProps} = props;
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
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: typeof window !== "undefined" ? window.location.origin : ""
        }}
        cacheLocation="localstorage"
      >
        {loading && <Preloader/>}
        {getLayout(<Component {...pageProps} />)}

      </Auth0Provider>
    </>
  );
};

export default App;
