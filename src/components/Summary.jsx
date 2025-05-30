import ReadInfo from "./parent-components/ReadInfo";
import WriteInfo from "./parent-components/WriteInfo";
import "../styles/Summary.css";
import SectionInfo from "./parent-components/SectionInfo";

// export default function Summary() {
//   const [value, setValue] = useState("");

//   const [toggleWrite, setToggleWrite] = useState(false);
//   const [showEditBtnToggle, setShowEditBtnToggle] = useState(false);

//   return (
//     <div
//       className="card"
//       onMouseEnter={() => !toggleWrite && setShowEditBtnToggle(true)}
//       onMouseLeave={() => !toggleWrite && setShowEditBtnToggle(false)}
//     >
//       <div className="summary-section">
//         <h1>Summary</h1>
//         <hr />
//         {toggleWrite ? (
//           <WriteInfo
//             handleWriteToggle={() => {
//               setToggleWrite(false);
//               setShowEditBtnToggle(false);
//             }}
//           >
//             <input
//               type="text"
//               id="input-summary"
//               placeholder="Summary"
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//             />
//           </WriteInfo>
//         ) : (
//           <ReadInfo
//             handleOnClick={() => {
//               setToggleWrite(true);
//               setShowEditBtnToggle(false);
//             }}
//             showEditBtnToggle={showEditBtnToggle}
//           >
//             <h2>{!value ? "Place your summary here" : value}</h2>
//           </ReadInfo>
//         )}
//       </div>
//     </div>
//   );
// }

export default function Summary() {
  return (
    <SectionInfo
      header={"Summary"}
      inputFormat={{ summary: "I love programming!" }}
      inputPlaceholders={["Insert Summary"]}
    />
  );
}
