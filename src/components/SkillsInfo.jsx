import SectionRecurringInfo from "./parent-components/SectionRecurringInfo";
import "../styles/SkillsInfo.css";

export default function SkillsInfo() {
  return (
    <SectionRecurringInfo
      header={"Skills"}
      infoContainerName="skill-info-recurring-container"
      infoItemName="skill-item"
      inputFormat={{ id: 0, skill: "New Skill" }}
      inputPlaceholders={{ skill: "Insert New Skill" }}
      excludeInputKeyToProcess={["id"]}
    />
  );
}
