import SectionRecurringInfo from "./parent-components/SectionRecurringInfo";
import "../styles/Awards.css";

export default function Awards() {
  return (
    <SectionRecurringInfo
      header={"Awards"}
      inputFormat={{ id: 0, awards: "New Award" }}
      inputPlaceholders={{ skill: "Insert New Award" }}
      excludeInputKeyToProcess={["id"]}
      infoItemName={"award-item"}
    />
  );
}
