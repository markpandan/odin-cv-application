import { useState } from "react";

import SavedInfo from "./parent-components/SavedInfo";
import WriteInfo from "./parent-components/WriteInfo";
import "../styles/BasicInfo.css";

export default function BasicInfo() {
  const [values, setValues] = useState({
    name: "",
    occupation: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  const [toggleWrite, setToggleWrite] = useState(false);
  const [showWriteBtnToggle, setShowWriteBtnToggle] = useState(false);
  const handleChange = (e) => {
    switch (e.target.id) {
      case "input-name":
        setValues({ ...values, name: e.target.value });
        break;
      case "input-occupation":
        setValues({ ...values, occupation: e.target.value });
        break;
      case "input-phone-number":
        setValues({ ...values, phoneNumber: e.target.value });
        break;
      case "input-email":
        setValues({ ...values, email: e.target.value });
        break;
      case "input-address":
        setValues({ ...values, address: e.target.value });
        break;
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setShowWriteBtnToggle(true)}
      onMouseLeave={() => setShowWriteBtnToggle(null)}
    >
      <div className="basic-info-section">
        {toggleWrite ? (
          <WriteInfo handleWriteToggle={() => setToggleWrite(false)}>
            <div className="personal-info">
              <input
                type="text"
                id="input-name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
              />
              <input
                type="text"
                id="input-occupation"
                placeholder="Occupation"
                value={values.occupation}
                onChange={handleChange}
              />
            </div>

            <div className="contact-info">
              <input
                type="text"
                id="input-phone-number"
                placeholder="Phone Number"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <input
                type="text"
                id="input-email"
                Selecti
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <input
                type="text"
                id="input-address"
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
              />
            </div>
          </WriteInfo>
        ) : (
          <SavedInfo
            handleOnClick={() => setToggleWrite(true)}
            showEditBtnToggle={showWriteBtnToggle}
          >
            <div className="personal-info">
              <h1>{!values.name ? "John Doe" : values.name}</h1>
              <h2>
                {!values.occupation
                  ? "Software Engineering"
                  : values.occupation}
              </h2>
            </div>
            <div className="contact-info">
              <h2>{!values.phoneNumber ? "999-9999" : values.phoneNumber}</h2>
              <h2>
                {!values.email ? "johndoe-not-real@yahoo.com" : values.email}
              </h2>
              <h2>{!values.address ? "CA, United States" : values.address}</h2>
            </div>
          </SavedInfo>
        )}
      </div>
    </div>
  );
}
