export default function SaveInfo({
  handleOnClick,
  showEditBtnToggle,
  children,
}) {
  return (
    <>
      {children}
      <button
        className="btn-toggleWriter"
        onClick={handleOnClick}
        style={{ display: showEditBtnToggle ? "block" : "none" }}
      >
        Edit
      </button>
    </>
  );
}
