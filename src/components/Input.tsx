const Input = ({ label, className, value, setValue, ...rest }: any) => {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        {...rest}
        type="text"
        className="focus:ring-primary-500 focus:order-primary-500 shadow-sm-light block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 shadow-sm"
        placeholder="Example"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
};

export default Input;
