import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-body");
    } else {
      document.body.classList.remove("dark-body");
    }
  }, [darkMode]);

  return (
    <>
      <button className="theme-button" onClick={toggleTheme}>
        {darkMode ? "dark" : "light"}
      </button>
      <div className={`center-div ${darkMode ? "add-bg-color" : ""}`}>
        <h1 style={{ textAlign: "center" }}>HELLO</h1>
        <input type="text" placeholder="Type something..." />
        <button className="add-task-button">add task</button>
      </div>
    </>
  );
}

export default App;
