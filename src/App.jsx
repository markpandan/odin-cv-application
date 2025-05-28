import "./styles/App.css";
import BasicInfo from "./components/BasicInfo.jsx";
import Summary from "./components/Summary.jsx";
import WorkExpInfo from "./components/WorkExpInfo.jsx";
import Education from "./components/Education.jsx";
import SkillsInfo from "./components/SkillsInfo.jsx";
import Awards from "./components/Awards.jsx";

export default function App() {
  return (
    <>
      <h1 className="title">Curriculum Vitae</h1>
      <BasicInfo />
      <Summary />
      <WorkExpInfo />
      <Education />
      <SkillsInfo />
      <Awards />
    </>
  );
}
