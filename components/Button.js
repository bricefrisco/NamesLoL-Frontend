import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ link, children, disabled }) => {
  if (disabled) {
    return <div className={styles.disabledButton}>{children}</div>;
  }

  return (
    <Link href={link} className={styles.link}>
      <div className={styles.button}>{children}</div>
    </Link>
  );
};

export default Button;
