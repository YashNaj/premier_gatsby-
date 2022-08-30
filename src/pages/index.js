import React from "react";
import Fullpage from "../containers/fullpage/Fullpage.jsx";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer.jsx";
const App = () => {
  return (
    <div className="App">
      <div className="background"></div>
      <Navbar />
      <Fullpage />
      <Footer/>
    </div>
  );
};

export default App;
