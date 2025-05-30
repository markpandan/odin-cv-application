import { useState } from "react";

import "../styles/Education.css";
import ReadInfo from "./parent-components/ReadInfo";
import WriteInfo from "./parent-components/WriteInfo";

const educationValueFormat = {
  id: 0,
  course: "",
  school: "",
  durationDate: "",
};

// TODO: Refractor this code along with the WorkExpInfo.jsx component
function EducationItem({
  isActive,
  values,
  onMouseEnter,
  onMouseLeave,
  onDeleteBtnClick,
  onChange,
}) {
  const borderStyle = "1px solid black";

  return (
    <div
      className="education-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ border: isActive ? borderStyle : "none" }}
    >
      <input
        type="text"
        className="input-education-duration-date"
        placeholder="Duration Date"
        value={values.durationDate}
        onChange={onChange}
      />
      <input
        className="input-course"
        type="text"
        placeholder="Course"
        value={values.course}
        onChange={onChange}
      />
      <input
        className="input-school"
        type="text"
        placeholder="School / University"
        value={values.school}
        onChange={onChange}
      />
      <button
        className="delete-education-item"
        style={{ display: isActive ? "block" : "none" }}
        onClick={onDeleteBtnClick}
      >
        X
      </button>
    </div>
  );
}

export default function Education() {
  const [educationValues, setEducationValues] = useState([
    educationValueFormat,
  ]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [showEditBtnToggle, setShowEditBtnToggle] = useState(false);

  const handleChangeEducationValue = (id, key, value) => {
    setEducationValues(
      educationValues.map((education) => {
        if (education.id === id) {
          return { ...education, [key]: value };
        }
        return education;
      })
    );
  };

  const handleAddEducationValue = () => {
    setEducationValues([
      ...educationValues,
      { ...educationValueFormat, id: crypto.randomUUID() },
    ]);
  };

  const handleDeleteEducationValue = (id) => {
    setEducationValues(
      educationValues.filter((education) => education.id !== id)
    );
  };

  const educationItemList = educationValues.map((education, index) => (
    <EducationItem
      key={education.id}
      values={education}
      isActive={activeIndex === index}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      onDeleteBtnClick={() => {
        handleDeleteEducationValue(education.id);
      }}
      onChange={(e) => {
        let educationKey = "";

        switch (e.target.className) {
          case "input-education-duration-date":
            educationKey = "durationDate";
            break;
          case "input-course":
            educationKey = "course";
            break;
          case "input-school":
            educationKey = "school";
            break;
          default:
            throw new Error("Invalid class name.");
        }

        handleChangeEducationValue(education.id, educationKey, e.target.value);
      }}
    />
  ));

  return (
    <div
      className="card"
      onMouseEnter={() => {
        !toggleWrite && setShowEditBtnToggle(true);
      }}
      onMouseLeave={() => {
        !toggleWrite && setShowEditBtnToggle(false);
      }}
    >
      <div className="education-section">
        <div className="section-header">
          <h1 className="section-title">Education</h1>
          <hr />
        </div>
        {toggleWrite ? (
          <WriteInfo
            handleWriteToggle={() => setToggleWrite(false)}
            appendBtns={
              <button
                className="add-education"
                onClick={handleAddEducationValue}
              >
                +
              </button>
            }
          >
            {educationItemList}
          </WriteInfo>
        ) : (
          <ReadInfo
            handleOnClick={() => {
              setToggleWrite(true);
              setShowEditBtnToggle(false);
            }}
            showEditBtnToggle={showEditBtnToggle}
          >
            {educationValues.map((education) => (
              <div key={education.id} className="education-item">
                {/* TODO: Change this. Note: just a placeholder class name */}
                <h2 className="input-education-duration-date ">
                  {!education.durationDate ? "MM/YYYY" : education.durationDate}
                </h2>
                <h2>
                  {!education.course
                    ? "BS Information Technology"
                    : education.course}
                </h2>
                <h2>
                  {" "}
                  {!education.school
                    ? "Lorem Ipsum University"
                    : education.school}
                </h2>
              </div>
            ))}
          </ReadInfo>
        )}
      </div>
    </div>
  );
}
