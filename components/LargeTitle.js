import styles from "./LargeTitle.module.css";

const LargeTitle = ({ children }) => {
  return <h1 className={styles.largeTitle}>{children}</h1>;
};

export default LargeTitle;
