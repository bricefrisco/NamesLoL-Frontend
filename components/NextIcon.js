import styles from "./NextIcon.module.css";

const NextIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
      className={styles.nextIcon}
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  );
};

export default NextIcon;
