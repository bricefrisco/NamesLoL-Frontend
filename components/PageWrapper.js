import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children }) => {
  return (
    <>
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
      <Header />
      <section className={styles.container}>{children}</section>
      <Footer />
    </>
  );
};

export default PageWrapper;
