import React from "react";
import { useTranslation } from "react-i18next";
import "./NewsSection.css";
import img1 from "../../../Images/News/1.png";
import img2 from "../../../Images/News/2.png";
import img3 from "../../../Images/News/3.png";
function NewsSection() {
  const { t } = useTranslation();
  return (
    <div className="news_section">
      <p className="news_section_title">{t("news_section_title")}</p>
      <div className="news_section_container">
        <div className="news_section_left">
          <a
            href="https://m.timesofindia.com/home/education/news/a-project-to-translate-engineering-books-into-hindi-vernacular-languages/amp_articleshow/86199294.cms"
            target="_blank"
            rel="noreferrer"
          >
            <img src={img1} alt="img1" />
            <p className="news_section_left_name">{t("news_item1_name")}</p>
            <p className="news_section_left_description">
              {t("news_item1_description")}
            </p>
          </a>
        </div>
        <div className="news_section_right">
          <div className="news_section_right_box">
            <a
              href="https://ianslife.in/culture/project-translate-engineering-books-hindi-vernacular-languages"
              target="_blank"
              rel="noreferrer"
            >
              <div className="news_section_right_box_left">
                <img src={img2} alt="img2" />
              </div>
              <div className="news_section_right_box_right">
                <p className="news_section_right_box_right_news">
                  {t("news_item2_name")}
                </p>
                <p className="news_section_right_box_right_news_description">
                  {t("news_item2_description")}
                </p>
              </div>
            </a>
          </div>
          <div className="news_section_right_box">
            <a
              href="https://pib.gov.in/PressReleasePage.aspx?PRID=1754787"
              target="_blank"
              rel="noreferrer"
            >
              <div className="news_section_right_box_left">
                <img src={img3} alt="img2" />
              </div>
              <div className="news_section_right_box_right">
                <p className="news_section_right_box_right_news">
                  {t("news_item3_name")}
                </p>
                <p className="news_section_right_box_right_news_description">
                  {t("news_item3_description")}
                </p>
              </div>
            </a>
          </div>
          <div className="news_section_right_box">
            <div className="news_section_right_box_left">
              <p
                onClick={() => {
                  window.open("/News", "_blank");
                }}
                className="news_section_read_all"
              >
                {t("news_read_all")} --->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
