import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N1ZXFJ8PDG"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-N1ZXFJ8PDG');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
