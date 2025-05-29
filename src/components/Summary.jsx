import { useState } from "react";

import SavedInfo from "./parent-components/SavedInfo";
import WriteInfo from "./parent-components/WriteInfo";
import "../styles/Summary.css";

export default function Summary() {
  const [value, setValue] = useState("");

  const [toggleWrite, setToggleWrite] = useState(false);
  const [showEditBtnToggle, setShowEditBtnToggle] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setShowEditBtnToggle(true)}
      onMouseLeave={() => setShowEditBtnToggle(false)}
    >
      <div className="summary-section">
        <h1>Summary</h1>
        <hr />
        {toggleWrite ? (
          <WriteInfo
            handleWriteToggle={() => {
              setToggleWrite(false);
              setShowEditBtnToggle(null);
            }}
          >
            <input
              type="text"
              id="input-summary"
              placeholder="Summary"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </WriteInfo>
        ) : (
          <SavedInfo
            handleOnClick={() => {
              setToggleWrite(true);
              setShowEditBtnToggle(null);
            }}
            showEditBtnToggle={showEditBtnToggle}
          >
            <h2>{!value ? "Place your summary here" : value}</h2>
          </SavedInfo>
        )}
      </div>
    </div>
  );
}
