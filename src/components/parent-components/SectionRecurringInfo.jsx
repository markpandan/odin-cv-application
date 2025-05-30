import { useState } from "react";

import CustomizedInputElement from "./CustomizedInputElement";
import CustomizedDisplayElement from "./CustomizedDisplayElement";
import WriteInfo from "./WriteInfo";
import ReadInfo from "./ReadInfo";

function GenerateSectionElements({
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

export default function SectionRecurringInfo({
  header = null,
  inputFormat = {},
  inputPlaceholders = {},
  excludeInputKeyToProcess = [],
}) {
  if (!("id" in inputFormat))
    throw new Error(
      "inputFormat method doesn't have an 'id' key with initial value"
    );

  const inputKeys = Object.keys(inputFormat);

  const [inputListValues, setInputListValues] = useState([inputFormat]);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [showWriteBtnToggle, setShowWriteBtnToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);

  const handleChangeInputListValue = (id, key, value) => {
    setInputListValues(
      inputListValues.map((inputValue) => {
        if (inputValue.id === id) {
          return { ...inputValue, [key]: value };
        }
        return inputValue;
      })
    );
  };

  const handleAddInputListValue = () => {
    setInputListValues([
      ...inputListValues,
      { ...inputFormat, id: crypto.randomUUID() },
    ]);
  };

  const handleDeleteInputListValue = (id) => {
    setInputListValues(
      inputListValues.filter((inputValue) => inputValue.id !== id)
    );
  };

  let sectionElements = inputListValues.map((inputValue) => (
    <GenerateSectionElements
      toggleWrite={toggleWrite}
      inputKeys={inputKeys}
      inputValues={inputValue}
      inputPlaceholders={inputPlaceholders}
      onChange={(e) =>
        handleChangeInputListValue(inputValue.id, e.target.name, e.target.value)
      }
      excludeKeys={excludeInputKeyToProcess}
    />
  ));

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
      <div className="info-recurring-container">
        {header && (
          <div className="card-header">
            <h2 className="card-title">{header}</h2>
            <hr />
          </div>
        )}
        {toggleWrite ? (
          <WriteInfo
            handleWriteToggle={() => {
              setToggleWrite(false);
              setActiveIndex(null);
            }}
            appendBtns={
              <button
                className="add-work-exp"
                onClick={handleAddInputListValue}
              >
                +
              </button>
            }
          >
            {sectionElements.map((sectionElement, index) => (
              <div
                className={
                  activeIndex === index
                    ? "info-item info-highlighted"
                    : "info-item"
                }
                key={inputListValues[index].id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {sectionElement}
                <button
                  className="btn-delete-info-item"
                  style={{ display: activeIndex === index ? "block" : "none" }}
                  onClick={() =>
                    handleDeleteInputListValue(inputListValues[index].id)
                  }
                >
                  X
                </button>
              </div>
            ))}
          </WriteInfo>
        ) : (
          <ReadInfo
            handleOnClick={() => setToggleWrite(true)}
            showEditBtnToggle={showWriteBtnToggle}
          >
            {sectionElements.map((sectionElement, index) => (
              <div className="info-item" key={inputListValues[index].id}>
                {sectionElement}
              </div>
            ))}
          </ReadInfo>
        )}
      </div>
    </div>
  );
}
