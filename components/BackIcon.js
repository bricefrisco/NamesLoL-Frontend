import styles from "./BackIcon.module.css";

const BackIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
      className={styles.backIcon}
    >
      <path d="M19 12H5M12 19l-7-7 7-7"></path>
    </svg>
  );
};

export default BackIcon;
