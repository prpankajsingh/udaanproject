import React from "react";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

import "../LandingBanner/LandingBanner.css";
import "./InstallationGuide.css";

function DownloadTool() {
    const { t } = useTranslation();
      
    return (
    <>
        <div className="landingbanner">
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
            <a href="https://drive.google.com/drive/folders/1z9hP8efpmTpabtp9KoWbkki8R8PRCl0I" target="_blank">
                <div className="box1_container">
                    <div className="box1"></div>
                    <h4>Windows</h4>
                </div>
            </a>
            <a href="https://drive.google.com/drive/folders/1wgJgJgdPdbUEyFI_z9izXw1tq80p7gKR?usp=share_link" target="_blank">
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

export default DownloadTool;
