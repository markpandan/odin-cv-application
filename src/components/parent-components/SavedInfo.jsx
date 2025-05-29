export default function SavedInfo({
  handleOnClick,
  showEditBtnToggle,
  children,
}) {
  return (
    <>
      {children}
      <button
        class="btn-toggleWriter"
        onClick={handleOnClick}
        style={{ display: showEditBtnToggle ? "block" : "none" }}
      >
        Edit
      </button>
    </>
  );
}
