export default function CustomizedDisplayElement({ value, placeholder }) {
  return <h2>{!value ? placeholder : value}</h2>;
}
