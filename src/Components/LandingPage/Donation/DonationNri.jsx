import React from "react";
import { useTranslation } from "react-i18next";
import "./Donation.css";
import nri from "../../../Images/nri.gif";
function DonationNri() {
  const { t } = useTranslation();
  return (
    <div className="donationNri">
      <p className="donation_title">{t("donation_title")}</p>
      <div className="donation_container">
        <div className="donation_left">
          <p className="donation_subtitle">{t("donation_subtitle")}</p>
          <p className="donation_description">{t("donation_description")}</p>
          <div className="donation_steps">
            <ul>
              <li className="donation_step_content">
                {t("donation_nri_step1")}
              </li>
              <li className="donation_step_content">
                {t("donation_nri_step2")}
              </li>
              <li className="donation_step_content">
                {t("donation_nri_step3")}
              </li>
              <li className="donation_step_content">
                {t("donation_nri_step4")}
              </li>
              <li className="donation_step_content">
                {t("donation_nri_step5")}
              </li>
              <li className="donation_step_content">
                {t("donation_nri_step6")}
              </li>
            </ul>
          </div>
          <a
            href="https://www.iitbombay.org/g/faculty-programs/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="donation_button">
              {t("donation_donate_button")}
            </button>
          </a>

          <p className="donation_button_footer">
            {t("donation_donate_button_footer")}
          </p>
        </div>
        <div className="donation_right">
          <img src={nri} alt="nri" />
        </div>
      </div>
    </div>
  );
}

export default DonationNri;
