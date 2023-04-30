type SelectProps = {
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: any;
  className?: string;
};

const Select = ({
  label,
  options,
  value,
  onChange,
  className,
}: SelectProps) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <select
        className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <Option
            value={option.value}
            label={option.label}
            key={option.value}
          />
        ))}
      </select>
    </div>
  );
};

type OptionProps = {
  value: string;
  label: string;
};

const Option = ({ value, label }: OptionProps) => {
  return <option value={value}>{label}</option>;
};

export default Select;
