import SectionRecurringInfo from "./parent-components/SectionRecurringInfo";

export default function WorkExpInfo() {
  return (
    <SectionRecurringInfo
      header={"Work Experience"}
      inputFormat={{
        id: 0,
        durationDate: "MM/YYYY",
        jobPosition: "Software Engineer",
        company: "Lorem Ipsum Company",
        roleList: "List your roles here",
      }}
      inputPlaceholders={{
        durationDate: "Insert Duration Date",
        jobPosition: "Software Engineer",
        company: "Lorem Ipsum Company",
        roleList: "List your roles here",
      }}
      excludeInputKeyToProcess={["id"]}
    />
  );
}
