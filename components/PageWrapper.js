import Footer from "./Footer";
import Header from "./Header";
import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <section className={styles.container}>{children}</section>
      <Footer />
    </>
  );
};

export default PageWrapper;
