import SectionRecurringInfo from "./parent-components/SectionRecurringInfo";

export default function Education() {
  return (
    <SectionRecurringInfo
      header={"Education"}
      inputFormat={{
        id: 0,
        durationDate: "",
        course: "",
        school: "",
      }}
      inputPlaceholders={{
        durationDate: "MM/YYYY",
        course: "Insert Course",
        school: "Insert School or University",
      }}
      excludeInputKeyToProcess={["id"]}
    />
  );
}
