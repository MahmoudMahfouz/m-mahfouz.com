// App.js
import "./colors.css";
import "./App.css";
import React from "react";
import Objective from "./Objective";
import Header from "./Header";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Objective />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
