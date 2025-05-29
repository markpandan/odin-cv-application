export default function WriteInfo({
  handleWriteToggle,
  appendBtns = null,
  children,
}) {
  return (
    <>
      {children}
      <div className="btn-container">
        {appendBtns}
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
