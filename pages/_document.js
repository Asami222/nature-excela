import { Html, Head, Main, NextScript } from "next/document";
import { siteMeta } from "lib/constants";
const { siteLang } = siteMeta

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;1,14..32,500&family=Libre+Caslon+Display&family=Noto+Serif+JP:wght@200..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
