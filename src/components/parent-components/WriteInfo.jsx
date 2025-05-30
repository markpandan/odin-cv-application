// TODO: Change this function name into WriteInput when the refractor has already been done.
export default function WriteInfo({
  handleWriteToggle,
  appendBtns = null,
  children,
}) {
  return (
    <>
      {children}
      <div className="write-info-container-btns">
        {appendBtns}
        <button onClick={handleWriteToggle}>Save</button>
      </div>
    </>
  );
}
