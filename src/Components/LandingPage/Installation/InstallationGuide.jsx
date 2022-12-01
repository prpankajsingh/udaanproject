import React from "react";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

import "../LandingBanner/LandingBanner.css";
import "./InstallationGuide.css";

function InstallationGuide() {
    const { t } = useTranslation();
      
    return (
    <>
        <div className="landingbanner landingbanner_div">
            <div className="banner_box">
                <p className="banner_heading">{t("banner_title")}</p>
                <p className="banner_subtitle">"{t("banner_subheading")}"</p>
                <div className="banner_subtitle2">
                <p>{t("banner_subheading2")}</p>
                <a href="https://acr.iitb.ac.in/donation/" target="_blank" rel="noreferrer">
                    <p className="banner_orange">{t("banner_subheading3")}</p>
                </a>
                </div>
            </div>
        </div>
        
        <div className="container">
            <h4>Choose the OS for the Installation Guide.</h4>
            <a href="https://docs.google.com/document/d/12Zbe9OLYOoguGu7HWRnpYkHD0BaW8SOvjYh96DYZ_8Y/edit?usp=sharing" target="_blank">
                <div className="box1_container">
                    <div className="box1"></div>
                    <h4>Windows</h4>
                </div>
            </a>
            <a href="https://docs.google.com/document/d/1b5C9F2f3oMSjUPIfr9qkShpjSkXK7iDQG3C6rdEKw2g/edit?usp=sharing" target="_blank">
                <div className="box1_container">
                    <div className="box2"></div>
                    <h4>Ubuntu</h4>
                </div>
            </a>
        </div>

        <Footer />
    </>
  );
}

export default InstallationGuide;
