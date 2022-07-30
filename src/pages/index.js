import React from "react";
import Fullpage from "../components/fullpage/Fullpage.jsx";
import Navbar  from "../components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="background"></div>
      <Navbar />
      <Fullpage />
    </div>
  );
};

export default App;
