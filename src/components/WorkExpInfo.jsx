import { useState } from "react";

import "../styles/WorkExpInfo.css";
import ReadInfo from "./parent-components/ReadInfo";
import WriteInfo from "./parent-components/WriteInfo";

function WorkItem({
  isActive,
  onMouseEnter,
  onMouseLeave,
  onDeleteBtnClick,
  values,
  onChange,
}) {
  const borderStyle = "1px solid black";

  return (
    <div
      className="work-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ border: isActive ? borderStyle : "none" }}
    >
      <input
        type="text"
        className="work-duration-date"
        placeholder="Duration Date"
        value={values.durationDate}
        onChange={onChange}
      />
      <input
        type="text"
        className="position"
        placeholder="Job Position"
        value={values.jobPosition}
        onChange={onChange}
      />
      <input
        type="text"
        className="company"
        placeholder="Company"
        value={values.company}
        onChange={onChange}
      />
      <input
        type="text"
        className="role-list"
        placeholder="Role List"
        value={values.roleList}
        onChange={onChange}
      />
      <button
        className="delete-work-item"
        style={{ display: isActive ? "block" : "none" }}
        onClick={onDeleteBtnClick}
      >
        X
      </button>
    </div>
  );
}

export default function WorkExpInfo() {
  const [workExpValues, setWorkExpValues] = useState([
    { id: 0, jobPosition: "", company: "", roleList: "", durationDate: "" },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [showEditBtnToggle, setShowEditBtnToggle] = useState(false);

  const handleChangeWorkExpValue = (id, key, value) => {
    setWorkExpValues(
      workExpValues.map((workExp) => {
        if (workExp.id === id) {
          return { ...workExp, [key]: value };
        }
        return workExp;
      })
    );
  };

  const handleAddWorkExpValue = () => {
    setWorkExpValues([...workExpValues, { id: crypto.randomUUID() }]);
  };

  const handleDeleteWorkExpValue = (id) => {
    setWorkExpValues(workExpValues.filter((workExp) => workExp.id !== id));
  };

  const workItemList = workExpValues.map((workExp, index) => (
    <WorkItem
      key={workExp.id}
      values={workExp}
      isActive={activeIndex === index}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      onDeleteBtnClick={() => {
        handleDeleteWorkExpValue(workExp.id);
      }}
      onChange={(e) => {
        let workExpKey = "";

        // TODO: Change the conditions here for any details that is considerably unqiue to these inputs.
        switch (e.target.className) {
          case "work-duration-date":
            workExpKey = "durationDate";
            break;
          case "position":
            workExpKey = "jobPosition";
            break;
          case "company":
            workExpKey = "company";
            break;
          case "role-list":
            workExpKey = "roleList";
            break;
          default:
            throw new Error("Invalid class name.");
        }

        handleChangeWorkExpValue(workExp.id, workExpKey, e.target.value);
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
      <div className="work-exp-section">
        <div className="section-header">
          <h1 className="section-title">Work Experience</h1>
          <hr />
        </div>
        {toggleWrite ? (
          <WriteInfo
            handleWriteToggle={() => setToggleWrite(false)}
            appendBtns={
              <button className="add-work-exp" onClick={handleAddWorkExpValue}>
                +
              </button>
            }
          >
            {workItemList}
          </WriteInfo>
        ) : (
          <ReadInfo
            handleOnClick={() => {
              setToggleWrite(true);
              setShowEditBtnToggle(false);
            }}
            showEditBtnToggle={showEditBtnToggle}
          >
            {workExpValues.map((workExp) => (
              <div key={workExp.id} className="work-item">
                <h2 className="work-duration-date">
                  {!workExp.durationDate ? "MM/YYYY" : workExp.durationDate}
                </h2>
                <h2 className="position">
                  {!workExp.jobPosition
                    ? "Software Engineer"
                    : workExp.jobPosition}
                </h2>
                <h2 className="company">
                  {!workExp.company ? "Lorem Ipsum Company" : workExp.company}
                </h2>
                <h2 className="role-list">
                  {!workExp.roleList
                    ? "List your roles here"
                    : workExp.roleList}
                </h2>
              </div>
            ))}
          </ReadInfo>
        )}
      </div>
    </div>
  );
}
