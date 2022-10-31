import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from "./DatePicker.module.css";

const CustomDatePicker = ({ title, selected, onChange, showTimeSelect }) => {
  return (
    <div className={styles.datePicker}>
      <span className={styles.title}>{title}</span>
      <DatePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
      />
    </div>
  );
};

export default CustomDatePicker;
