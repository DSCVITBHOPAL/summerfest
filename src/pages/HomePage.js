import React from "react";
import { Fab } from "@material-ui/core";
import "./HomePage.css";
import PageHeader from "../components/PageHeader";
import Timer from "../components/Timer";
import { FiDownload } from "react-icons/fi";
import logoSummerfest from "../components/summerfest_logos_edit1.png";

function HomePage(props) {

  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://apply.devfolio.co/v2/sdk.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    <div>
      <PageHeader />
      <div className={"home-page"}>
        <div>
          <h1 className={"home-title"}>
            <img id="summerfest" alt="summerfest logo" src={logoSummerfest}/>
          </h1>
          <div className={"home-circle"}></div>
          <h3 className={"home-dates"}>May 27 - May 29, 2022</h3>
        </div>
        {/* <a style={{textDecoration: "none" }}href="https://tinyurl.com/hd-hacker-guide" target="_blank" rel="noopener noreferrer"> */}
        {/* Make clicking this scroll to register section */}
        <div className="home-buttons-container">
          {/* <Fab variant={"extended"} className={"home-button"}>
            Register Now!
          </Fab> */}
          <Fab variant={"extended"} className={"home-button"}>
            <div 
              className="apply-button" 
              data-hackathon-slug="hackgdsc" 
              data-button-theme="light"
              style={{height: "44px", width: "312px"}}
            ></div>
          </Fab>
          <a href="/brochure_new.pdf" target="_blank" rel="noreferrer">
            <Fab variant={"extended"} className={"home-button home-brochure"}>
              <span>Download Brochure </span>
              <FiDownload />
            </Fab>
          </a>
        </div>
        {/* </a> */}
        <div className="home-timer">
          <h2>Event Starts in </h2>
          <Timer targetTime="2022-05-27T10:00:00+05:30" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
