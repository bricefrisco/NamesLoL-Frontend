import Image from "next/image";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = ({ question, children }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.faqContainer}>
      <div
        className={styles.faqQuestionContainer}
        onClick={(e) => setSelected(!selected)}
      >
        <h2 className={styles.faqQuestion}>{question}</h2>
        {selected ? (
          <Image
            src="/minus.png"
            alt="Drop Down FAQ"
            width={32}
            height={32}
            draggable={false}
            className={styles.icon}
          />
        ) : (
          <Image
            src="/plus.png"
            alt="Drop Down FAQ"
            width={32}
            height={32}
            draggable={false}
            className={styles.icon}
          />
        )}
      </div>

      <p
        className={
          selected
            ? `${styles.faqAnswer} ${styles.shown}`
            : `${styles.faqAnswer}`
        }
      >
        {children}
      </p>
    </div>
  );
};

export default FAQ;
