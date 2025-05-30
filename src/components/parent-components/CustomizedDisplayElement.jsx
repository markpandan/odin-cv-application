export default function CustomizedDisplayElement({
  inputKey,
  value,
  placeholder,
}) {
  return (
    <h2 className={`display-${inputKey}`}>{!value ? placeholder : value}</h2>
  );
}
