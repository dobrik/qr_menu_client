import { Html, Head, Main, NextScript } from "next/document";

import bg from "bg.json";

const Document = () => {
  const { backgroundColor } = bg;

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body style={{ backgroundColor }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
