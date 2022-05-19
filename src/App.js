import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import TextForm from "./components/TextForm";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-3">
     <Alert alert={alert}/>
          
          {/* <Routes> */}
            {/* <Route
              path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyse below:"
                  mode={mode}
                />
              {/* }
            /> */}

            {/* <Route path="about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
