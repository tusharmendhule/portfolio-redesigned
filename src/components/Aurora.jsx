const Aurora = () => (
  <div className="aurora" aria-hidden="true">
    <div
      className="aurora-blob"
      style={{
        width: "600px", height: "600px",
        background: "#3B82F6",
        top: "10%", left: "15%",
        animationDelay: "0s",
      }}
    />
    <div
      className="aurora-blob"
      style={{
        width: "500px", height: "500px",
        background: "#8B5CF6",
        top: "40%", right: "10%",
        animationDelay: "3s",
      }}
    />
    <div
      className="aurora-blob"
      style={{
        width: "400px", height: "400px",
        background: "#06B6D4",
        bottom: "10%", left: "30%",
        animationDelay: "1.5s",
      }}
    />
  </div>
);

export default Aurora;
