// TODO: Change this function name into WriteInput when the refractor has already been done.
export default function WriteInfo({
  handleWriteToggle,
  appendBtns = null,
  children,
}) {
  return (
    <>
      {children}
      <div className="btn-write-info-container">
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
