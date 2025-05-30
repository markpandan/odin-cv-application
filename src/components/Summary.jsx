import SectionInfo from "./parent-components/SectionInfo";

//TODO: Fix the placeholder attribute
export default function Summary() {
  return (
    <SectionInfo
      header={"Summary"}
      inputFormat={{ summary: "I love programming!" }}
      inputPlaceholders={["Insert Summary"]}
    />
  );
}
