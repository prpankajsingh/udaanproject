import React from "react";
import { useTranslation } from "react-i18next";
import "./Donation.css";
import gif1 from "../../../Images/donate.gif";
function DonationIndian() {
  const { t } = useTranslation();
  return (
    <div className="donationIndian">
      <p className="donation_title">{t("donation_title")}</p>
      <div className="donation_container">
        <div className="donation_left">
          <p className="donation_subtitle">{t("donation_subtitle")}</p>
          <p className="donation_description">{t("donation_description")}</p>
          <div className="donation_steps">
            <ul>
              <li className="donation_step_content">
                {t("donation_indian_step1")}
              </li>
              <li className="donation_step_content">
                {t("donation_indian_step2")}
              </li>
              <li className="donation_step_content">
                {t("donation_indian_step3")}
              </li>
              <li className="donation_step_content">
                {t("donation_indian_step4")}
              </li>
              <li className="donation_step_content">
                {t("donation_indian_step5")}
              </li>
              <li className="donation_step_content">
                {t("donation_indian_step6")}
              </li>
            </ul>
            <p className="donation_step_footer">{t("donation_step_footer")}</p>
          </div>
          <button
            onClick={() => {
              window.open("https://acr.iitb.ac.in/donation/Donation", "_blank");
            }}
            className="donation_button"
          >
            {t("donation_donate_button")}
          </button>
          <p className="donation_tax"> *{t("donation_indian_tax")}</p>
          <p className="donation_button_footer">
            {t("donation_donate_button_footer")}
          </p>
        </div>
        <div className="donation_right">
          <img src={gif1} alt="indian" />
        </div>
      </div>
    </div>
  );
}

export default DonationIndian;
