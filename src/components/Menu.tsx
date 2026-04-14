import { useState } from "react";
import OnOff from "./OnOff";

type Feature = "menu" | "register" | "feedback" | "login";

const zIndex = 30002930;

const buttonStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  position: "fixed",
  bottom: 16,
  right: 16,
  borderRadius: "50%",
  border: "2px solid white",
  backgroundColor: "orange",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  zIndex,
};

const panelStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 76,
  right: 16,
  width: 320,
  maxWidth: "calc(100vw - 32px)",
  padding: 16,
  borderRadius: 16,
  backgroundColor: "white",
  color: "#222",
  boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
  zIndex,
  fontFamily: "Arial, sans-serif",
};

const menuItemStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "12px",
  marginBottom: 8,
  borderRadius: 10,
  border: "1px solid #ddd",
  background: "#f7f7f7",
  cursor: "pointer",
  textAlign: "left",
};

function Menu() {
  //track menu open closed state
  const [isOpen, setIsOpen] = useState(false);
  //setup the states for features
  const [feature, setFeature] = useState<Feature>("menu");
  //track login status
  const [loginStatus, setLoginStatus] = useState("");

  async function handleLogin() {
    setFeature("login");
    setLoginStatus("Preparing login link...");

    // Later: replace this with real API endpoint.
    // await fetch("https://your-api/login-link", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email:string||null,mobile:string||null }),
    // });

    setLoginStatus("Login link request placeholder triggered.");
  }

  function closeMenu() {
    //to close the menu set it to closed state and set the feature back to menu.
    setIsOpen(false);
    setFeature("menu");
    setLoginStatus("");
  }

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])


  return (
    <>
      <button
        type="button"
        style={buttonStyle}
        onClick={() => setIsOpen((current) => !current)}
      >
        F
      </button>

      {isOpen && (
        <div style={panelStyle}>
          <button type="button" onClick={closeMenu} style={{ float: "right" }}>
            ×
          </button>

          {feature === "menu" && (
            <>
              <h3>Menu</h3>

              <button style={menuItemStyle} onClick={() => setFeature("register")}>
                Register
              </button>

              <button style={menuItemStyle} onClick={() => setFeature("feedback")}>
                Feedback
              </button>

              <button style={menuItemStyle} onClick={handleLogin}>
                Login
              </button>
              <div style={{display:"flex",flexDirection:"row"}}><OnOff/>Turn Off Feedback</div>
            </>
          )}

          {feature === "register" && (
            <>
              <h3>Register</h3>
              <input placeholder="Name" style={{ width: "100%", marginBottom: 8 }} />
              <input placeholder="Email" style={{ width: "100%", marginBottom: 8 }} />
              <button>Submit registration</button>
              <br />
              <button onClick={() => setFeature("menu")}>Back</button>
            </>
          )}

          {feature === "feedback" && (
            <>
              <h3>Feedback</h3>
              <textarea
                placeholder="Your feedback"
                style={{ width: "100%", minHeight: 100, marginBottom: 8 }}
              />
              <button>Send feedback</button>
              <br />
              <button onClick={() => setFeature("menu")}>Back</button>
            </>
          )}

          {feature === "login" && (
            <>
              <h3>Login</h3>
              <p>{loginStatus}</p>
              <button onClick={() => setFeature("menu")}>Back</button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Menu;