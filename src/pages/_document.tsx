import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="NamesLoL" />
        <meta
          property="og:description"
          content="Find your next League of Legends name."
        />
        <meta
          property="og:image"
          content="https://www.nameslol.com/meta-image.png"
        />
        <meta property="og:url" content="https://www.nameslol.com/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YH0QPLW8DZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YH0QPLW8DZ');
        `}
        </Script>

        <Script
          id="nitropay-ads"
          data-cfasync="false"
          strategy="afterInteractive"
        >
          {`window.nitroAds=window.nitroAds||{createAd:function(){return new Promise(e=>{window.nitroAds.queue.push(["createAd",arguments,e])})},addUserToken:function(){window.nitroAds.queue.push(["addUserToken",arguments])},queue:[]};`}
        </Script>

        <Script
          data-cfasync="false"
          async
          src="https://s.nitropay.com/ads-1323.js"
          strategy="afterInteractive"
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
