import Link from "next/link";
import BackIcon from "./BackIcon";
import styles from "./Button.module.css";
import NextIcon from "./NextIcon";

const Button = ({ link, children, disabled, showBackIcon, showNextIcon }) => {
  if (disabled) {
    return (
      <div className={`${styles.button} ${styles.disabled}`}>
        {showBackIcon && <BackIcon />}
        {children}
        {showNextIcon && <NextIcon />}
      </div>
    );
  }

  return (
    <Link href={link} className={styles.link}>
      <div className={styles.button}>
        {showBackIcon && <BackIcon />}
        {children}
        {showNextIcon && <NextIcon />}
      </div>
    </Link>
  );
};

export default Button;
