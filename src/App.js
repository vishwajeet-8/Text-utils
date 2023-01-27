import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#242B2E"
      document.body.style.color = "white"
      showAlert("Dark theme applied", "success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#242B2E"
      showAlert("Light theme applied", "success")
    }
  }
  return(
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className= "container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm heading="Enter Text Here to convert" mode={mode} showAlert={showAlert}/>} />
        </Routes>
    </div>
    </Router>
    </>
  ) ;
}

export default App;
