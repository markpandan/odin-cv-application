export default function CustomizedInputElement({
  inputKey,
  inputValue,
  placeholder,
  onChange,
}) {
  return (
    <input
      type="text"
      className={`input-${inputKey}`}
      name={inputKey}
      value={inputValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
