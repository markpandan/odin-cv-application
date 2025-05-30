import { useState } from "react";
import "../styles/SkillsInfo.css";
import WriteInfo from "./parent-components/WriteInfo";
import ReadInfo from "./parent-components/ReadInfo";

function SkillItem({
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
      className="skill-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ border: isActive ? borderStyle : "none" }}
    >
      <input
        type="text"
        placeholder="Insert Skill"
        value={values.value}
        onChange={onChange}
      />
      <button
        className="delete-skill-item"
        style={{ display: isActive ? "block" : "none" }}
        onClick={onDeleteBtnClick}
      >
        X
      </button>
    </div>
  );
}

export default function SkillsInfo() {
  const [skillValues, setSkillValues] = useState([{ id: 0, value: "" }]);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showEditBtnToggle, setShowEditBtnToggle] = useState(false);

  const handleChangeSkillValue = (id, value) => {
    setSkillValues(
      skillValues.map((skill) => {
        if (skill.id === id) {
          return { ...skill, value: value };
        }
        return skill;
      })
    );
  };

  const handleAddSkillValue = () => {
    setSkillValues([...skillValues, { id: crypto.randomUUID(), value: "" }]);
  };

  const handleDeleteSkillValue = (id) => {
    setSkillValues(skillValues.filter((skill) => skill.id !== id));
  };

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
      <div className="skills-section">
        <div className="section-header">
          <h1 className="section-title">Skills</h1>
          <hr />
        </div>
        <div className="skills-value-container">
          {toggleWrite ? (
            <WriteInfo
              handleWriteToggle={() => setToggleWrite(false)}
              appendBtns={
                <button className="add-skill" onClick={handleAddSkillValue}>
                  +
                </button>
              }
            >
              {skillValues.map((skill, index) => (
                <SkillItem
                  key={skill.id}
                  values={skill}
                  isActive={activeIndex === index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onDeleteBtnClick={() => handleDeleteSkillValue(skill.id)}
                  onChange={(e) =>
                    handleChangeSkillValue(skill.id, e.target.value)
                  }
                />
              ))}
            </WriteInfo>
          ) : (
            <ReadInfo
              handleOnClick={() => {
                setToggleWrite(true);
                setShowEditBtnToggle(false);
              }}
              showEditBtnToggle={showEditBtnToggle}
            >
              {skillValues.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <h3>{!skill.value ? "My Skill" : skill.value}</h3>
                </div>
              ))}
            </ReadInfo>
          )}
        </div>
      </div>
    </div>
  );
}
