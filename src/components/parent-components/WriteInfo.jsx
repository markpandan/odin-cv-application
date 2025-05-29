export default function WriteInfo({ handleWriteToggle, children }) {
  return (
    <>
      {children}
      <div className="btn-container">
        <button
          onClick={handleWriteToggle}
          style={{ width: "10rem", margin: "auto" }}
        >
          Save
        </button>
      </div>
    </>
  );
}
