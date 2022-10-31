import styles from "./SmallTitle.module.css";

const SmallTitle = ({ children }) => {
  return <h2 className={styles.smallTitle}>{children}</h2>;
};

export default SmallTitle;
