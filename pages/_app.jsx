import "../src/scss/globals.scss";

const App = (props) => {
  // **Props
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
