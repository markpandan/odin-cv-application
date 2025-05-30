export function CustomizedDisplayElement({ inputKey, value, placeholder }) {
  return (
    <h2 className={`display-${inputKey}`}>{!value ? placeholder : value}</h2>
  );
}

export function CustomizedInputElement({
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

export default function GenerateSectionElements({
  toggleWrite,
  inputKeys,
  inputValues,
  inputPlaceholders,
  onChange,
  excludeKeys = [],
}) {
  if (toggleWrite) {
    return inputKeys.map(
      (key, index) =>
        !excludeKeys.includes(key) && (
          <CustomizedInputElement
            key={index}
            inputKey={key}
            inputValue={inputValues[key]}
            placeholder={inputPlaceholders[key]}
            onChange={onChange}
          />
        )
    );
  } else {
    return inputKeys.map(
      (key, index) =>
        !excludeKeys.includes(key) && (
          <CustomizedDisplayElement
            key={index}
            inputKey={key}
            value={inputValues[key]}
            placeholder={inputPlaceholders[key]}
          />
        )
    );
  }
}
