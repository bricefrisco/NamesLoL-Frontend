import styles from "./Input.module.css";

const Input = ({ title, placeholder, value, onChange, onKeyPress }) => {
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
