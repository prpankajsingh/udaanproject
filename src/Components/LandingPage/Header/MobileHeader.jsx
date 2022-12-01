// import i18next from "i18next";
// import Select from "react-select";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./MobileHeader.css";
import "react-dropdown/style.css";
import logo from "../../../Images/logo.png";

const options = [
  { code: "en", value: "English", label: "English" },
  { code: "hn", value: "Hindi", label: "Hindi" },
];

function MobileHeader() {
  const { t } = useTranslation();

  // const [selected, setselected] = useState(null);

  // const handlechange = (selected) => {
  //   setselected(selected);
  //   localStorage.setItem("language", selected.value);
  //   i18next.changeLanguage(selected.code);
  // };

  // const customStyles = {
  //   menuList: (provided, state) => ({
  //     color: "#011633",
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = "opacity 300ms";
  //     return { ...provided, opacity, transition };
  //   },
  // };

  useEffect(() => {
    const mobile_menu_btn = document.getElementById("mobile-menu-btn");
    const ul_div = document.getElementsByClassName("ul_div")[0];
    ul_div.style.display = "none";

    mobile_menu_btn.addEventListener("click", () => {
      if (ul_div.style.display === "none") {
        ul_div.style.display = "block";
      } else if (ul_div.style.display === "block") {
        ul_div.style.display = "none";
      }
    })
  }, [])

  return (
    <>
      <div className="mobile_header">
        <img src={logo} alt="logo" className="headerlogo" />
        <div className="Junk2">
          <p 
          className="headerlogomobiletext"
            onClick={() => {
              window.location = "/";
            }}
          >
            {t("logo")}
          </p>
          <p className="Junk"> An initiative of IIT Bombay</p>
        </div>

        <div className="mobile-menu-btn-div">
          <strong id="mobile-menu-btn"><i className="fa fa-bars" aria-hidden="true"></i></strong>
        </div>

        {/* <div className="mobile_header_box">
          <p
            onClick={() => {
              window.open("./SignUp", "_blank");
            }}
          >
            {t("signin/signup")}
          </p>
          <span>|</span>
          <Select
            styles={customStyles}
            value={selected}
            options={options}
            placeholder={localStorage.getItem("language") || "English"}
            onChange={handlechange}
          />
        </div> */}
      </div>

      <div className="ul_div">
        <ul>
          <li>
            <p
              onClick={() => {
                window.open("./AboutUs", "_blank");
              }}
            >
              {t("About Us")}
            </p>
          </li>
          <li>
            <Link to="Users" spy={true} smooth={true} className="navItems">
              {t("Users")}
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <span>Live Translate <i class="fa fa-angle-down" aria-hidden="true"></i></span>
              <div className="dropdown-content">
                <p><a target="_blank" className="nav-link" href="https://udaaniitb2.aicte-india.org/udaan/translate">Sentence Translation(Administrative)</a></p>
                <p><a target="_blank" className="nav-link" href="https://udaaniitb2.aicte-india.org/udaan/">File Translation(Admininstrative)</a></p>
                <p><a target="_blank" className="nav-link" href="https://udaaniitb.aicte-india.org/udaan/translate">Sentence Translation</a></p>
                <p><a target="_blank" className="nav-link" href="https://udaaniitb.aicte-india.org/udaan/">File Translation</a></p>
              </div>
            </div>
          </li>
          <li>
            <p
              onClick={() => {
                window.open("./Publications", "_blank");
              }}
            >
              {t("Publications")}
            </p>
          </li>
          <li>
            <Link to="Contact" spy={true} smooth={true} className="navItems">
              {t("contact")}
            </Link>
          </li>
          <li>
            <p
              onClick={() => {
                window.open("./MediaCoverage", "_blank");
              }}
            >
              {t("Media Coverage")}
            </p>
          </li>
          <li>
            <div className="dropdown">
              <span>Quick Links <i class="fa fa-angle-down" aria-hidden="true"></i></span>
              <div className="dropdown-content">
                <p><a className="nav-link" href="https://docs.google.com/document/d/1HGKTkCWLSzHkgWoWtQGvB0A8PAWyw86xVhVWeWTYxfA/edit?usp=sharing" target="_blank">User Guide</a></p>
                <p><a className="nav-link" href="/InstallationGuide" target="_blank">Installation Guide</a></p>
                <p><a className="nav-link" href="/DownloadTool" target="_blank">Download tool</a></p>
                <p><a className="nav-link" href="https://www.youtube.com/playlist?list=PLfL0bubCSMdzHx117x6c4mdi47ZjkTz7H" target="_blank">Video Tutorials</a></p>
              </div>
            </div>
          </li>
          <li>
            <div className="LandingHeaderRight">
              <button>
                <p
                  onClick={() => {
                    window.open("./AboutUs", "_blank");
                  }}
                >
                  {t("Donate")}
                </p>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </> 
  );
}

export default MobileHeader;
