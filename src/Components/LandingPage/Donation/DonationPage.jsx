import React, { useState } from "react";
import "./Donation.css";
import { useTranslation } from "react-i18next";
import DonationIndian from "./DonationIndian";
import DonationNri from "./DonationNri";
function DonationPage() {
  const { t } = useTranslation();
  const [buttontoggle, setbuttontoggle] = useState(false);
  return (
    <div className="donation" id="Donate">
      <div className="donation_buttons">
        <div
          className={
            buttontoggle ? "donation_button1" : "donation_button1 active"
          }
          onClick={() => {
            setbuttontoggle(false);
          }}
        >
          {t("donation_button1")}
        </div>
        <div
          className={
            buttontoggle ? "donation_button1 active" : "donation_button1 "
          }
          onClick={() => {
            setbuttontoggle(true);
          }}
        >
          {t("donation_button2")}
        </div>
      </div>
      {buttontoggle ? <DonationNri /> : <DonationIndian />}
    </div>
  );
}

export default DonationPage;
