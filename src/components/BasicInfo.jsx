import { useState } from "react";
import "../styles/BasicInfo.css";

export default function BasicInfo() {
  const [values, setValues] = useState({
    name: "",
    occupation: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  return (
    <div className="card basic-info-section">
      <div className="personal-info">
        <input
          type="text"
          id="input-name"
          placeholder="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <input
          type="text"
          id="input-occupation"
          placeholder="Occupation"
          value={values.occupation}
          onChange={(e) => setValues({ ...values, occupation: e.target.value })}
        />
      </div>

      <div className="contact-info">
        <input
          type="text"
          id="input-phone-number"
          placeholder="Phone Number"
          value={values.phoneNumber}
          onChange={(e) =>
            setValues({ ...values, phoneNumber: e.target.value })
          }
        />
        <input
          type="text"
          id="input-email"
          placeholder="Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type="text"
          id="input-address"
          placeholder="Address"
          value={values.address}
          onChange={(e) => setValues({ ...values, address: e.target.value })}
        />
      </div>
    </div>
  );
}
