import { useState } from "react";
import "../styles/WorkExpInfo.css";

function WorkItem({ isActive, onMouseEnter, onMouseLeave, onDeleteBtnClick }) {
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
      />
      <input
        type="text"
        className="input-position"
        placeholder="Job Position"
      />
      <input type="text" className="input-company" placeholder="Company" />
      <input type="text" className="input-role-list" placeholder="Role List" />
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
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [workItemLength, setWorkItemLength] = useState(1);

  const workItemList = [];
  for (let i = 0; i < workItemLength; i++)
    workItemList.push(
      <WorkItem
        key={crypto.randomUUID()}
        isActive={activeIndex === i}
        onMouseEnter={() => setActiveIndex(i)}
        onMouseLeave={() => setActiveIndex(null)}
        onDeleteBtnClick={() => {
          workItemList.splice(i, 1);
          setWorkItemLength(workItemLength - 1);
        }}
      />
    );

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
        onClick={() => setWorkItemLength(workItemLength + 1)}
      >
        +
      </button>
    </div>
  );
}
