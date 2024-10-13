export function Reset({ handleOnReset }) {
  return (
    <>
      <div className="button-container">
        <button className="button" onClick={handleOnReset}>
          Reset
        </button>
      </div>
    </>
  );
}
