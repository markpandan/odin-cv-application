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
  infoContainerName = "",
  infoItemName = "",
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

  const classNameInfoItem = infoItemName ? infoItemName : "info-item";

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
      <div
        className={
          !infoContainerName ? "info-recurring-container" : infoContainerName
        }
      >
        {header && (
          <div className="card-header">
            <h1 className="card-title">{header}</h1>
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
                Add
              </button>
            }
          >
            {sectionElements.map((sectionElement, index) => (
              <div
                className={
                  activeIndex === index
                    ? `${classNameInfoItem} info-highlighted`
                    : classNameInfoItem
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
              <div
                className={classNameInfoItem}
                key={inputListValues[index].id}
              >
                {sectionElement}
              </div>
            ))}
          </ReadInfo>
        )}
      </div>
    </div>
  );
}
