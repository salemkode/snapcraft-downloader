export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "300px",
      }}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
