const menuStyle: React.CSSProperties = {
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  bottom: "16px",
  right: "16px",
  color: "white",
  backgroundColor: "orange",
  borderRadius: "50%",
  zIndex: "100",
};

function Menu() {
  return <button style={{ ...menuStyle }}>F</button>;
}

export default Menu;
