import { useState } from "react";

function OnOff() {
  const [isOn, setIsOn] = useState(() => {
    return localStorage.getItem("overlay") === "show";
  });

  function handleClick() {
    setIsOn((current) => {
      const next = !current;
      localStorage.setItem("overlay", next ? "show" : "hide");
      window.location.reload();
      return next;
    });
  }

  const trackStyle: React.CSSProperties = {
    width: 54,
    height: 30,
    padding: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: isOn ? "flex-end" : "flex-start",
    borderRadius: 999,
    border: "2px solid white",
    backgroundColor: isOn ? "orange" : "#666",
    cursor: "pointer",
    zIndex: 30002930,
    boxSizing: "border-box",
    transition: "background-color 180ms ease",
  };

  const thumbStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    borderRadius: "50%",
    border: "2px solid white",
    backgroundColor: isOn ? "white" : "orange",
    boxSizing: "border-box",
    transition: "all 180ms ease",
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isOn}
      aria-label={isOn ? "Turn overlay off" : "Turn overlay on"}
      style={trackStyle}
    >
      <span style={thumbStyle} />
    </button>
  );
}

export default OnOff;