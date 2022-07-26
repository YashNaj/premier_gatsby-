import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from '../../components/navbar/Navbar';
import '../../styles/Styles.scss'
const Fullpage = (fullpageProps) => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state); // eslint-disable-line no-console

      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index);
        }
      }
      return (
        <div id="fullpage">
          
          
          <div className="section page page1 " id = "welcome">
            <div className="welcome-container ">
              <div className="welcome-title gradient__text engrave">
                YOUR BUSINESS DESERVES THE CARE OF A SPECIALIST
              </div>
              <div className="welcome-blurb">
                Marketing solutions for the inland empire and beyond
                
              </div>
              <button
                type="submit"
                className="welcome-button"
                onClick={() => fullpageApi.moveSectionDown()}
              >
                Learn More
              </button>
             
            </div>
          </div>
          
          <div className="section page page2" id = "about">
            <div className="about-container">
              <div classname=" about-heading gradient__text">
                Our Services
              </div>
            </div>
          </div>

          <div className="section page page3" id = "contact">
            <h3>Section 3</h3>
          </div>
        </div>
      );
    }}
  />
);
export default Fullpage;
