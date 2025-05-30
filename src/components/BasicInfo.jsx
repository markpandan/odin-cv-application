import SectionInfo from "./parent-components/SectionInfo";

export default function BasicInfo() {
  return (
    <SectionInfo
      splitIndex={2}
      splitIndexClassNames={["personal-info", "contact-info"]}
      inputFormat={{
        name: "John Smith",
        occupation: "Software Engineer",
        phoneNumber: "999-9999",
        email: "johnsmith-not-real@yahoo.com",
        address: "CA, United States",
      }}
      inputPlaceholders={{
        name: "Insert Name",
        occupation: "Insert Occupation",
        phoneNumber: "Insert Phone Number",
        email: "Insert Email",
        address: "Insert Address",
      }}
    />
  );
}
