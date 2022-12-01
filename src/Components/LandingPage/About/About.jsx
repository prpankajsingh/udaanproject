import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
function About() {
  const { t } = useTranslation();
  return (
    <div className="about" id="About">
      <p className="about_title">{t("about_title")}</p>
      <div className="about_para1">
        <p>{t("about_description1")}</p>
        <span className="about_description2">{t("about_description2")}</span>
        <p>{t("about_description3")}</p>
      </div>
      <p className="about_para2">{t("about_description4")}</p>
      <div className="about_cardsbox">
        <div className="cards">
          <p className="about_card_title">{t("about_card1_title")}</p>
          <p className="about_card_description">
            {t("about_card1_description")}
          </p>
        </div>
        <div className="cards">
          <p className="about_card_title">{t("about_card2_title")}</p>
          <p className="about_card_description">
            {t("about_card2_description")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
