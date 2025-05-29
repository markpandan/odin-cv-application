// TODO: Change this function name to ReadInfo when all of the refractors is already done.
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
