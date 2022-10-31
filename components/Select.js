import styles from "./Input.module.css";

const Select = ({ title, placeholder, value, onChange, children }) => {
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <select
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
