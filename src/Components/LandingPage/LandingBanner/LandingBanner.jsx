import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { db } from "../../Store Features/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LandingBanner.css";

function LandingBanner() {
  const emailsubscribe = (data) => {
    let email = window.prompt("Enter Your Email");
    senddata(email);
  };
  const senddata = (data) => {
    console.log(data);
    db.collection("SubscribedData")
      .add({
        email: data,
      })
      .then(
        toast.success("🦄 Subscribed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
      )
      .then(console.log("success"));
  };
  const { t } = useTranslation();
  return (
    <div className="landingbanner">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <div className="banner_box">
        <p className="banner_heading">{t("banner_title")}</p>
        <p className="banner_subtitle">"{t("banner_subheading")}"</p>
        <div className="banner_subtitle2">
          <p>{t("banner_subheading2")}</p>
          <a href="https://acr.iitb.ac.in/donation/" target="_blank" rel="noreferrer">
            <p className="banner_orange">{t("banner_subheading3")}</p>
          </a>
        </div>
        <p className="banner_description">{t("banner_description")}</p>
      </div>
      {/* <div className="buttoncontainer">
        <button className="banner_button1">
          <Link to="Donate" spy={true} smooth={true} className="navItems">
            {t("banner_button1")}
          </Link>
        </button>
        <button onClick={emailsubscribe} className="banner_button2">
          {t("banner_button2")}
        </button>
      </div> */}
      <svg
        width="63"
        height="87"
        viewBox="0 0 63 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 26.5537L31.5534 53.1071L58.1067 26.5537"
          stroke="#FB5517"
          strokeWidth="8.9274"
          strokeLinecap="round"
        />
        <path
          d="M5 53.3359L31.5534 79.8893L58.1067 53.3359"
          stroke="#FB5517"
          strokeWidth="8.9274"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default LandingBanner;
