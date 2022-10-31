import styles from "./Subtitle.module.css";

const Subtitle = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>;
};

export default Subtitle;
