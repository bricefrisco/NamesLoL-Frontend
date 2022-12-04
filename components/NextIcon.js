import styles from "./NextIcon.module.css";

const NextIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      preserveAspectRatio="xMidYMid meet"
      className={styles.nextIcon}
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  );
};

export default NextIcon;
