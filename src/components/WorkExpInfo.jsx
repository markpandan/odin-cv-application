import { useState } from "react";
import "../styles/WorkExpInfo.css";

// TODO: Create two components: SavedWorkItem(), and WriteWorkItem().
// - SavedWorkedItem() displays the saved details of the work experience
// - WriteWorkItem() display the details of the work experience by which you can edit

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
      style={{ border: isActive ? borderStyle : "" }}
    >
      <input
        type="text"
        className="input-work-duration-date"
        placeholder="Duration Date"
        value={values.durationDate}
        onChange={onChange}
      />
      <input
        type="text"
        className="input-position"
        placeholder="Job Position"
        value={values.jobPosition}
        onChange={onChange}
      />
      <input
        type="text"
        className="input-company"
        placeholder="Company"
        value={values.company}
        onChange={onChange}
      />
      <input
        type="text"
        className="input-role-list"
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
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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
          case "input-work-duration-date":
            workExpKey = "durationDate";
            break;
          case "input-position":
            workExpKey = "jobPosition";
            break;
          case "input-company":
            workExpKey = "company";
            break;
          case "input-role-list":
            workExpKey = "roleList";
            break;
        }

        handleChangeWorkExpValue(workExp.id, workExpKey, e.target.value);
      }}
    />
  ));

  return (
    <div
      className="card work-exp-section"
      onMouseEnter={() => setShowAddBtn(true)}
      onMouseLeave={() => setShowAddBtn(false)}
    >
      <div className="work-exp-header">
        <h1 className="work-exp-header-title">Work Experience</h1>
        <hr />
      </div>

      {workItemList}

      <button
        className="add-education"
        style={{ display: showAddBtn ? "block" : "none" }}
        onClick={handleAddWorkExpValue}
      >
        +
      </button>
    </div>
  );
}
