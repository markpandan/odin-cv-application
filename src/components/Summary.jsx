import { useState } from "react";
import "../styles/Summary.css";

export default function Summary() {
  const [value, setValue] = useState("");

  return (
    <div className="card summary-section">
      <h1>Summary</h1>
      <hr />
      <input
        type="text"
        id="input-summary"
        placeholder="Summary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
