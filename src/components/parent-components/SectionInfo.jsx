import { useState } from "react";

import CustomizedInputElement from "./CustomizedInputElement";
import CustomizedDisplayElement from "./CustomizedDisplayElement";
import WriteInfo from "./WriteInfo";
import ReadInfo from "./ReadInfo";

function splitSection(splitIndex, inputKeys, callback) {
  const left = inputKeys.slice(0, splitIndex);
  const right = inputKeys.slice(splitIndex, inputKeys.length);

  return callback(left, right);
}

function GenerateSectionElements({
  toggleWrite,
  inputKeys,
  inputValues,
  inputPlaceholders,
  onChange,
}) {
  if (toggleWrite) {
    return inputKeys.map((key, index) => (
      <CustomizedInputElement
        key={index}
        inputKey={key}
        inputValue={inputValues[key]}
        placeholder={inputPlaceholders[key]}
        onChange={onChange}
      />
    ));
  } else {
    return inputKeys.map((key, index) => (
      <CustomizedDisplayElement
        key={index}
        inputKey={key}
        value={inputValues[key]}
        placeholder={inputPlaceholders[key]}
      />
    ));
  }
}

export default function SectionInfo({
  header = null,
  splitIndex = null,
  splitIndexClassNames = ["", ""],
  inputFormat = {},
  inputPlaceholders = {},
}) {
  const inputKeys = Object.keys(inputFormat);
  const [inputValues, setInputValues] = useState(inputFormat);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [showWriteBtnToggle, setShowWriteBtnToggle] = useState(false);

  const handleChange = (e) => {
    for (let key of inputKeys) {
      if (key == e.target.name) {
        setInputValues({ ...inputValues, [key]: e.target.value });
        break;
      }
    }
  };

  let sectionElements;
  if (!splitIndex)
    sectionElements = (
      <GenerateSectionElements
        toggleWrite={toggleWrite}
        inputKeys={inputKeys}
        inputValues={inputValues}
        inputPlaceholders={inputPlaceholders}
        onChange={handleChange}
      />
    );
  else {
    sectionElements = splitSection(splitIndex, inputKeys, (left, right) => {
      const [leftElement, rightElement] = [left, right].map((keys) => (
        <GenerateSectionElements
          toggleWrite={toggleWrite}
          inputKeys={keys}
          inputValues={inputValues}
          inputPlaceholders={inputPlaceholders}
          onChange={handleChange}
        />
      ));

      const wrapper = [];
      wrapper.push(
        <div key={0} className={splitIndexClassNames[0]}>
          {leftElement}
        </div>,
        <div key={1} className={splitIndexClassNames[1]}>
          {rightElement}
        </div>
      );
      return wrapper;
    });
  }

  return (
    <div
      className="card"
      onMouseEnter={() => {
        !toggleWrite && setShowWriteBtnToggle(true);
      }}
      onMouseLeave={() => {
        !toggleWrite && setShowWriteBtnToggle(false);
      }}
    >
      <div className="info-container">
        {header && (
          <div className="card-header">
            <h2 className="card-title">{header}</h2>
            <hr />
          </div>
        )}
        {toggleWrite ? (
          <WriteInfo handleWriteToggle={() => setToggleWrite(false)}>
            {sectionElements}
          </WriteInfo>
        ) : (
          <ReadInfo
            handleOnClick={() => setToggleWrite(true)}
            showEditBtnToggle={showWriteBtnToggle}
          >
            {sectionElements}
          </ReadInfo>
        )}
      </div>
    </div>
  );
}
