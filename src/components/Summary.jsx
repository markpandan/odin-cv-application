import { useState } from "react";

import SaveInfo from "./parent-components/SaveInfo";
import WriteInfo from "./parent-components/WriteInfo";
import "../styles/Summary.css";

export default function Summary() {
  const [value, setValue] = useState("");

  const [toggleWrite, setToggleWrite] = useState(false);
  const [showEditBtnToggle, setShowEditBtnToggle] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => !toggleWrite && setShowEditBtnToggle(true)}
      onMouseLeave={() => !toggleWrite && setShowEditBtnToggle(false)}
    >
      <div className="summary-section">
        <h1>Summary</h1>
        <hr />
        {toggleWrite ? (
          <WriteInfo
            handleWriteToggle={() => {
              setToggleWrite(false);
              setShowEditBtnToggle(false);
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
          <SaveInfo
            handleOnClick={() => {
              setToggleWrite(true);
              setShowEditBtnToggle(false);
            }}
            showEditBtnToggle={showEditBtnToggle}
          >
            <h2>{!value ? "Place your summary here" : value}</h2>
          </SaveInfo>
        )}
      </div>
    </div>
  );
}
